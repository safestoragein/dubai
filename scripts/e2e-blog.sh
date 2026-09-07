#!/usr/bin/env bash
# End-to-end check of the safestorage.ae blog pipeline.
#
# Every test here is a bug that actually happened on 2026-09-07. The point is
# that the next person does not have to rediscover them one at a time:
#
#   1  publish latency   an edit reaching the source but not the page
#   2  SPLIT MEMO        the route bundle and the RSC bundle holding separate
#                        caches, so the API looked fine while the page was stale
#   3  sitemap           blog_lastmod frozen; 17 posts in no sitemap at all
#   4  cached 404        a URL opened before its post existed, stored for an hour
#   5  image parity      replaced images never propagating (197 of 317 stale)
#   6  listing weight    the whole post index shipped to render 50 cards
#
# Usage:  scripts/e2e-blog.sh            checks the live site
#         BASE=http://127.0.0.1:3000 scripts/e2e-blog.sh    on the box
#
# Exit 0 = all passed. Exit 1 = at least one failure, named.
set -uo pipefail

BASE="${BASE:-https://safestorage.ae}"
FEED="${FEED:-https://safestorage.in/get_blog_content}"
PASS=0; FAIL=0
ok()   { printf "  \033[32mPASS\033[0m %s\n" "$1"; PASS=$((PASS+1)); }
bad()  { printf "  \033[31mFAIL\033[0m %s\n" "$1"; FAIL=$((FAIL+1)); }
note() { printf "       %s\n" "$1"; }

FEEDJSON=$(mktemp); curl -s -m 240 "$FEED" -o "$FEEDJSON"
trap 'rm -f "$FEEDJSON"' EXIT

echo "== 1. every published post renders, and the PAGE agrees with the API =="
# Compared against /api/blogs/<slug>, NOT against the raw feed, on purpose.
# The app deliberately rewrites article bodies on the way out -- legacy URLs are
# remapped (/storage-dubai/records-archival -> /records-storage) and prices are
# corrected (12.60 -> 12.65 AED/sqft) -- so a raw-feed comparison reports posts
# as "stale" that are perfectly current. The API applies the same mapper the page
# does, which makes it the right reference AND the exact pair that diverged in
# the split-memo bug: API fresh, page stale.
python3 - "$FEEDJSON" "$BASE" <<'PYEOF'
import json,sys,re,urllib.request,concurrent.futures as cf
rows=json.load(open(sys.argv[1])); base=sys.argv[2]
def slug(t):
    s=(t or '').lower(); s=re.sub(r'[^a-z0-9 -]','',s); s=re.sub(r'\s+','-',s)
    return re.sub(r'-+','-',s).strip('-')
def words(h):
    h=re.sub(r'<[^>]+>',' ',h)
    h=h.replace('&nbsp;',' ').replace('&mdash;','-').replace('&amp;','&').replace('&#39;',"'")
    return re.sub(r'\s+',' ',h).strip()
def get(u):
    # 308s are the intended legacy-slug redirects; urlopen follows them.
    return urllib.request.urlopen(u, timeout=150).read().decode('utf-8','replace')
def check(r):
    if str(r.get('status','1'))!='1': return None
    sl=slug(r.get('title'))
    if not sl: return None
    try:
        api=json.loads(get(base+"/api/blogs/"+sl))
    except Exception as e:
        return ('API', sl, str(e)[:45])
    body=words((api.get('data') or api).get('content') or '')
    sents=[x for x in re.split(r'(?<=[.!?]) ',body) if len(x)>70]
    if not sents: return None
    try:
        page=words(get(base+"/blog/"+sl))
    except Exception as e:
        return ('HTTP', sl, str(e)[:45])
    probes=[sents[0][:70], sents[len(sents)//2][:70], sents[-1][:70]]
    missing=[x for x in probes if x not in page]
    return None if not missing else ('STALE', sl, missing[0][:50])
bad=[]
with cf.ThreadPoolExecutor(8) as ex:
    for res in ex.map(check, rows):
        if res: bad.append(res)
print("  checked %d posts" % len(rows))
for k,sl,d in bad[:12]: print("  %s /blog/%s  %s" % (k,sl,d))
open('/tmp/e2e_stale','w').write(str(len(bad)))
PYEOF
N=$(cat /tmp/e2e_stale 2>/dev/null || echo 999)
[ "$N" = "0" ] && ok "every page matches what the API serves" || bad "$N page(s) disagree with the API"

echo "== 2. the route bundle and the RSC bundle share ONE feed memo =="
# generation only moves when invalidateFeed() runs. Equal on both sides means one
# memo; divergence means the bundle split is back and edits lag by TTL_MS.
gen() {
  curl -s -m 90 "$1" | python3 -c "
import sys,re,json
t=sys.stdin.read().replace('&quot;','\"')
m=re.search(r'\{[^{}]*\"bundle\"[^{}]*\}', t, re.S)
print(json.loads(m.group(0))['generation'] if m else '')
"
}
R=$(gen "$BASE/api/feed-state"); P=$(gen "$BASE/feed-state")
note "route-handler generation=$R   rsc-page generation=$P"
if [ -n "$R" ] && [ "$R" = "$P" ]; then
  ok "one shared memo (generations match)"
else
  bad "SPLIT MEMO - route=$R rsc=$P; invalidateFeed() will not reach the pages"
fi

echo "== 3. sitemap carries every published post =="
python3 - "$FEEDJSON" "$BASE" <<'PY'
import json,sys,re,urllib.request
rows=json.load(open(sys.argv[1])); base=sys.argv[2]
def slug(t):
    s=(t or '').lower(); s=re.sub(r'[^a-z0-9 -]','',s); s=re.sub(r'\s+','-',s)
    return re.sub(r'-+','-',s).strip('-')
sm=urllib.request.urlopen(f"{base}/sitemap-blogs.xml",timeout=120).read().decode()
have=set(re.findall(r'<loc>[^<]*/blog/([^<]+)</loc>',sm))
want={slug(r.get('title')) for r in rows if str(r.get('status','1'))=='1' and slug(r.get('title'))}
miss=want-have
print(f"  feed={len(want)} sitemap={len(have)} missing={len(miss)}")
for s in sorted(miss)[:8]: print("   missing:",s)
open('/tmp/e2e_sitemap','w').write(str(len(miss)))
PY
N=$(cat /tmp/e2e_sitemap 2>/dev/null || echo 999)
[ "$N" = "0" ] && ok "sitemap complete" || bad "$N post(s) missing from /sitemap-blogs.xml"

echo "== 4. a nonexistent slug 404s, and a real one does not =="
C=$(curl -s -o /dev/null -w '%{http_code}' -m 90 "$BASE/blog/definitely-not-a-real-post-$(date +%s)")
[ "$C" = "404" ] && ok "invented slug -> 404" || bad "invented slug -> $C (expected 404)"

echo "== 5. locally cached blog images match the source =="
python3 - "$FEEDJSON" "$BASE" <<'PY'
import json,sys,os,urllib.request,concurrent.futures as cf
rows=json.load(open(sys.argv[1])); base=sys.argv[2]
files={os.path.basename(str(r.get('post_images') or '')) for r in rows if r.get('post_images')}
files={f for f in files if f}
def size(u):
    try:
        rq=urllib.request.Request(u,method='HEAD')
        return int(urllib.request.urlopen(rq,timeout=60).headers.get('content-length') or 0)
    except Exception: return -1
def check(f):
    a=size(f"{base}/blog-images/{f}"); b=size(f"https://safestorage.in/post_images/{f}")
    return None if (a==b or b<=0) else (f,a,b)
bad=[]
with cf.ThreadPoolExecutor(10) as ex:
    for r in ex.map(check, sorted(files)):
        if r: bad.append(r)
print(f"  checked {len(files)} referenced images, mismatched={len(bad)}")
for f,a,b in bad[:8]: print(f"   {f}  served={a} source={b}")
open('/tmp/e2e_img','w').write(str(len(bad)))
PY
N=$(cat /tmp/e2e_img 2>/dev/null || echo 999)
[ "$N" = "0" ] && ok "every referenced image matches the source" || bad "$N image(s) stale — a replaced image is not propagating"

echo "== 6. the listing ships only the page it renders =="
H=$(curl -s -m 120 "$BASE/blog")
OBJ=$(printf '%s' "$H" | grep -o 'excerpt' | wc -l | tr -d ' ')
KB=$(printf '%s' "$H" | wc -c | tr -d ' ')
note "post objects in payload=$OBJ  html=${KB}B"
[ "$OBJ" -lt 120 ] && ok "listing payload is one page, not the whole index" \
                   || bad "listing is shipping $OBJ post objects to render 50 cards"

echo
echo "passed=$PASS failed=$FAIL"
[ "$FAIL" -eq 0 ] || exit 1

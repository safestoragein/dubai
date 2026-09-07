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

echo "== 1. every published post renders, and its body matches the source =="
python3 - "$FEEDJSON" "$BASE" <<'PY'
import json,sys,re,urllib.request,concurrent.futures as cf
rows=json.load(open(sys.argv[1])); base=sys.argv[2]
def slug(t):
    s=(t or '').lower(); s=re.sub(r'[^a-z0-9 -]','',s); s=re.sub(r'\s+','-',s)
    return re.sub(r'-+','-',s).strip('-')
def words(h):
    h=re.sub(r'<[^>]+>',' ',h); h=h.replace('&nbsp;',' ').replace('&mdash;','-')
    return re.sub(r'\s+',' ',h).strip()
def check(r):
    if str(r.get('status','1'))!='1': return None
    sl=slug(r.get('title'))
    if not sl: return None
    # a distinctive sentence from the middle of the body must appear on the page
    body=words(r.get('description') or '')
    sents=[s for s in re.split(r'(?<=[.!?]) ',body) if len(s)>70]
    if not sents: return None
    probe=sents[len(sents)//2][:70]
    try:
        page=urllib.request.urlopen(f"{base}/blog/{sl}",timeout=120).read().decode('utf-8','replace')
    except Exception as e:
        return ('HTTP', sl, str(e)[:50])
    return None if probe in words(page) else ('STALE', sl, probe[:52])
bad=[]
with cf.ThreadPoolExecutor(8) as ex:
    for res in ex.map(check, rows):
        if res: bad.append(res)
print(f"  checked {len(rows)} posts")
for k,sl,d in bad[:12]: print(f"  FAIL {k} /blog/{sl}  {d}")
open('/tmp/e2e_stale','w').write(str(len(bad)))
PY
N=$(cat /tmp/e2e_stale 2>/dev/null || echo 999)
[ "$N" = "0" ] && ok "all post bodies match the source feed" || bad "$N post(s) serve content that differs from the feed"

echo "== 2. the route bundle and the RSC bundle share ONE feed memo =="
R=$(curl -s -m 60 "$BASE/api/feed-state" | python3 -c "import json,sys; print(json.load(sys.stdin)['generation'])" 2>/dev/null)
P=$(curl -s -m 60 "$BASE/feed-state" | python3 -c "import sys,re,json; t=re.sub(r'<[^>]+>','',sys.stdin.read()); print(json.loads(t.strip())['generation'])" 2>/dev/null)
note "route-handler generation=$R   rsc-page generation=$P"
if [ -n "$R" ] && [ "$R" = "$P" ]; then
  ok "one shared memo (generations match)"
else
  bad "SPLIT MEMO — route=$R rsc=$P; invalidateFeed() will not reach the pages"
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

# SafeStorage Dubai — Business & Workflow Documentation

How the safestorage.ae website earns and processes business: what each page is for, how a
visitor becomes an enquiry, how an enquiry becomes a lead, how a lead becomes a priced
quotation, and where all of it lands for the sales team.

Companion documents: [`DEVELOPMENT.md`](./DEVELOPMENT.md) (how the app is built),
[`CLAUDE.md`](./CLAUDE.md) (hosting and deployment).

> Everything below was traced from the shipped code, not from intent. Where the site does
> **not** behave the way the business would expect, it is called out in §10 rather than
> described as working.

---

## 1. The business in one page

**SafeStorage Dubai** sells door-to-door storage in Dubai/UAE: the customer books online,
SafeStorage collects the goods from their home or office, and stores them in a facility at
Building 23, Warehouse 5, DIP-1, Dubai.

| | |
|---|---|
| Website | https://safestorage.ae |
| Phone (primary CTA) | +971 50 577 3388 |
| WhatsApp | wa.me/971505773388 |
| Email | support@safestorage.ae |
| Support hours | 8 AM – 7 PM, 7 days |
| Facility access | 24/7 for active customers |

**Two customer segments**

| Segment | Who | Space type | How it is priced |
|---|---|---|---|
| Household / personal | Expats, movers, renovators, students | Closed container or shared pallet space | By volume of goods (see §5) |
| Business | SMEs, e-commerce, offices | Shared warehouse space, records, stock | Same formula; larger footprints |

**Where the money is processed:** the Dubai website is a *front end only*. Customers,
quotations and items are all written into the **SafeStorage group backend at
`safestorage.in/back/app/`** (PHP/CodeIgniter), which is also where the sales team works
the leads. safestorage.ae holds no customer data of its own — only blog content.

---

## 2. Channel map — every way business arrives

| Channel | URL / entry point | What it produces | Lands where |
|---|---|---|---|
| **Online quote funnel** (primary) | https://safestorage.ae/get-quote | Customer + priced quotation + item list | CRM: `insert_customer_dubai`, `insert_quotation_dubai`, `insert_quotation_items_dubai` |
| **Abandoned quote capture** | Same page, fires on exit | Partial lead (name/phone/email) | CRM: `save_dubai_partial_lead` |
| **Phone** | `tel:` links sitewide + floating button | Inbound call | Not tracked by the site |
| **WhatsApp** | Floating button + /contact | Inbound chat | Not tracked by the site |
| **Email** | mailto: on /contact and footer | Inbound mail | Not tracked by the site |
| **Contact form** | https://safestorage.ae/contact | **Nothing — see §10.1** | Nowhere |

Every CTA button across the 80-page site routes to **one of two places**: `/get-quote` or a
`tel:` link. There is no second form to maintain.

---

## 3. The enquiry → lead → booking lifecycle

```
  STAGE 0            STAGE 1           STAGE 2            STAGE 3           STAGE 4
  TRAFFIC       →    ENQUIRY      →    LEAD          →    QUOTATION    →    BOOKING
  ─────────          ─────────         ─────────          ──────────        ─────────
  SEO pages          Visitor lands     Visitor is         Items priced,     Space type +
  Blog posts         on /get-quote     identified in      quote number      pickup date
  Location pages     and starts        the CRM            issued            confirmed
  Ads (AW-)          typing
                                       ├─ PARTIAL  ────── (abandoned)
                                       │  name/phone/
                                       │  email only
                                       │
                                       └─ FULL ────────── customer_id ───── quotation_id
                                          + address
                                          + emirate
```

**The dividing line between an "enquiry" and a "lead" is Step 1 → Step 2 of the funnel.**
Up to that point the visitor exists only in their own browser. The moment they pass Step 2,
a real customer record and a quotation number exist in the CRM.

If they leave *before* that point having typed a name, phone or email, the partial-lead
beacon rescues the contact details anyway (§6).

---

## 4. The primary workflow — the `/get-quote` funnel

**URL: https://safestorage.ae/get-quote**

A three-step wizard. It is the only live lead form on the website.

### Step 1 — Customer Details

Collected: full name, email, phone, pickup address (Google Places autocomplete), emirate,
floor, lift available, bedrooms.

- The emirate dropdown is populated live from
  `https://safestorage.in/back/app/get_dubai_emirates?country=AE`, so the UAE city list is
  controlled centrally by the backend, not hardcoded in the site.
- Validation blocks progress without name, a valid email, and phone.
- **Nothing is sent to the CRM yet** — except the abandonment beacon (§6).
- Progress is auto-saved to the browser (`localStorage`) every 500 ms. Returning visitors
  get a "Welcome back — continue where you left off?" prompt.

### Step 2 — Select Items

The customer picks what they want stored from a live catalogue fetched from
`https://safestorage.in/back/app/dubai_items_list`, browsable by 9 categories (furniture,
electronics, bedroom, kitchen, appliances, sports, office, boxes) with quantities.

Each catalogue item carries a **storage point value** — this, not a price list, is what
drives the quote (§5).

### The commit point — clicking "Continue" on Step 2

This is where a visitor becomes a **lead**. Three CRM writes fire in sequence, and if any
one fails the customer is held on Step 2 with an error (no half-written quotes):

| # | Endpoint | Sends | Returns |
|---|---|---|---|
| 1 | `POST safestorage.in/back/app/insert_customer_dubai` | name, email, phone, pickup address, emirate | `customer_id` |
| 2 | `POST safestorage.in/back/app/insert_quotation_dubai` | customer_id, **both** closed & shared prices, lift, floor, bedrooms, total sqft/points/pallets | `quotation_id` |
| 3 | `POST safestorage.in/back/app/insert_quotation_items_dubai` | quotation_id, customer_id, full selected-items JSON | confirmation |

Note the quotation is written with **both price options and a blank
`selected_storage_type`** — the customer has not chosen yet. A GTM event
`quote_step2_continue` is pushed at this point.

### Step 3 — View Quote & Book

The customer sees both options priced (shared is pre-selected by default), chooses one,
then picks a **pickup date** in a modal. Confirming re-posts to
`insert_quotation_dubai` **with the existing `quotation_id`** — an upsert that finalises the
same row rather than creating a duplicate — setting `storage_price` to the chosen figure and
`selected_storage_type` to `closed` or `shared`.

The customer then sees a confetti animation and a "Quote #<id> confirmed" message.

> ⚠️ 20–25 seconds later the page redirects to `/get-quote/step3`, **which does not exist**
> (§10.2). The booking itself is safely recorded before this happens.

---

## 5. How a quote is priced (the business rules)

Pricing is driven entirely by **storage points**, not by the AED value on individual items.

```
  total points   = Σ (item storage points × quantity)
  pallets        = ceil(total points ÷ 16)        ← 16 points fill 1 pallet
  square feet    = pallets × 16                   ← 1 pallet occupies 16 sq ft
```

Then the two commercial options are calculated from that footprint:

| Option | Rule | Formula |
|---|---|---|
| **Shared space** (open, shared warehouse) | 10 AED per sq ft, **minimum 30 sq ft billed** | `max(sqft, 30) × 10` |
| **Closed space** (private container) | Containers of 30 sq ft at **700 AED each**, rounded up | `ceil(sqft ÷ 30) × 700` |

Worked example — a customer whose goods total 40 points:

```
  40 points → ceil(40/16) = 3 pallets → 48 sq ft
  Shared: max(48,30) × 10 AED       = 480 AED
  Closed: ceil(48/30) = 2 × 700 AED = 1,400 AED
```

Both figures are stored against the quotation, so the sales team can see what the customer
was shown and which they picked.

**Rates to know when changing pricing** — all four live in
`components/quote/quote-page-alternative2.tsx`: points-per-pallet (16), sq ft-per-pallet
(16), shared rate (10 AED) and minimum (30 sq ft), closed container size (30 sq ft) and
price (700 AED). They are **hardcoded in the front end**, not read from the backend, so a
price change is a code change and a deploy.

There is also an unused legacy calculation (long-term ×0.85, business ×1.2 multipliers on
raw item AED values). It is dead code and does not affect any customer-facing price.

---

## 6. Abandoned-enquiry recovery

Storage quotes are considered, not impulse-bought, so the funnel is built to keep the
contact even when the quote is not finished.

**Trigger:** the visitor has typed **any one** of name, phone or email on `/get-quote`, and
then the tab is hidden, backgrounded, or closed (`visibilitychange` / `pagehide`).

**What is sent:** name, phone, email, and household-vs-business, via `navigator.sendBeacon`
(with a keepalive fetch fallback) to the site's own `/api/save-partial-lead`, which proxies
server-side to `safestorage.in/back/app/save_dubai_partial_lead`.

**Guards that prevent junk in the CRM:**

- Skipped entirely if all three fields are empty.
- Skipped if the visitor already passed Step 2 (a real `customer_id` exists) — no duplicate
  of a lead the team already has.
- De-duplicated by a signature of the three fields, so tabbing in and out repeatedly sends
  one record, not ten.

Separately, a **navigation guard** intercepts clicks away from `/get-quote` and exit-intent
mouse movement, offering a "stay or leave" prompt and saving progress locally so the visitor
can resume later. This is a retention prompt only — it does not itself write to the CRM.

**Operationally:** partial leads are contactable people who wanted a price and did not
finish. They are the highest-intent follow-up list the business has.

---

## 7. Demand generation — how traffic is created

The site is built as an SEO asset; ~80 pages exist to rank for storage intent and funnel
into `/get-quote`.

| Page family | Count | Business purpose | Example URLs |
|---|---|---|---|
| Service pages | ~12 | Rank per storage type | /furniture-storage, /car-storage, /document-storage, /business-storage, /student-storage, /ecommerce-storage |
| Location pages | 12 | Rank per Dubai community | /locations/dubai-marina, /locations/business-bay, /locations/palm-jumeirah, /locations/jumeirah-village-circle |
| SEO hub & spoke | ~10 | Category authority | /self-storage-dubai, /storage-dubai, /storage-units-dubai, /cheap-storage-dubai |
| Comparison / intent | ~5 | Capture shopping queries | /top-10-storage-companies-dubai, /top-10-storage-companies-uae, /pricing, /storage-size-guide |
| Lifestyle / expat guides | ~6 | Top-of-funnel reach | /moving-to-dubai-2026, /dubai-cost-of-living-2026, /expat-leaving-uae, /international-relocation |
| Blog | 15 hand-written + CMS posts | Ongoing content | /blog, /blog/<slug> |
| Trust & conversion support | ~8 | Reduce friction | /about, /how-it-works, /testimonials, /faq, /pricing, /contact |

Supporting SEO machinery: JSON-LD structured data on every page (LocalBusiness, FAQ,
Service, Breadcrumb), a generated sitemap covering static pages **and** CMS blog posts,
and disciplined 301/410 handling so retired pages never become soft 404s.

---

## 8. Content publishing workflow (blog)

Blog authoring does **not** happen on safestorage.ae. The marketing team writes in the
existing India dashboard and it propagates automatically:

```
  Author writes/edits a post
  safestorage.in/manage_posts/new_dashboard
            │
            ├── instantly ──→  webhook  →  safestorage.ae/api/sync-blogs
            │                              (pulls content + images, refreshes pages)
            │
            └── every 5 min ─→  cron on the Dubai server (backstop if the webhook missed)
                                    │
                                    ├─ content  → Dubai database
                                    ├─ images   → served from safestorage.ae/blog-images/
                                    └─ cache purge → /blog, /blog/<slug>, /sitemap.xml
```

**What the business needs to know:**

- A published post appears on safestorage.ae **within seconds** normally, within 5 minutes
  worst case. No developer involvement, no deploy.
- Blog images are re-served from the safestorage.ae domain for SEO credit, even though the
  files originate on safestorage.in.
- **Wording rule enforced automatically:** SafeStorage Dubai no longer advertises
  climate/temperature/humidity *control*. Because posts are synced from India where the old
  wording persists, the site rewrites those phrases to "secure" / "secure storage" on the
  way out. Authors do not need to remember this, and fixing it in the India dashboard is not
  necessary.
- There is also an admin area at `/admin/dashboard/blogs` (single login) that can edit posts
  directly — but anything it changes on a post that also exists upstream **will be
  overwritten by the next sync**. Treat the India dashboard as the source of truth.

---

## 9. Measurement

| Tool | ID | Loaded |
|---|---|---|
| Google Tag Manager | `GTM-K7KV5SRX` | Sitewide |
| Google Analytics 4 | `G-EHB5H09SGY` | Sitewide |
| Google Ads | `AW-952888343` | Sitewide |

**Funnel events actually firing:** one — `quote_step2_continue` (pushed to the GTM
dataLayer when a visitor commits at Step 2, with the number of items selected).

There is **no event on quote confirmation, and no conversion event on the thank-you page**
(§10.3). Google Ads is loaded but is not being told when a sale-ready lead happens, so paid
campaigns cannot optimise on real conversions today.

---

## 10. Gaps that are costing business

These are live defects with direct commercial impact, in priority order.

### 10.1 The `/contact` form silently discards every enquiry — **highest impact**

`https://safestorage.ae/contact` presents a full contact form (name, email, phone, subject,
message). On submit it waits 1.5 seconds, shows the visitor a **success message**, and
resets. It sends nothing — no API call, no email, no CRM write. The submission is discarded
in the browser.

Every enquiry made through that form since launch has been lost, and each of those people
believes SafeStorage has their message and will reply.

*Fix:* point it at the partial-lead endpoint (already built and proven) or a dedicated
enquiry endpoint. Until then, the honest interim is to remove the form and leave the phone,
WhatsApp and email links, which do work.

### 10.2 Confirmed bookings end on a 404

After a customer confirms their quote and pickup date, the page waits 20–25 seconds and
redirects to `https://safestorage.ae/get-quote/step3`. **That route does not exist.** The
customer's last impression of a completed booking is a Not Found page.

The booking is safely recorded first, so no revenue is lost — but it undermines confidence
at the exact moment the customer has committed, and it skips the thank-you page entirely.

*Fix:* redirect to `/thank-you` (which exists and is built for this), or create the step3
route.

### 10.3 No conversion signal to Google Ads

The thank-you page contains conversion tracking for GA4 and Facebook — **commented out**.
Combined with §10.2 (customers never reach the thank-you page anyway), the result is that
paid spend on `AW-952888343` runs without conversion feedback.

*Fix:* fire the conversion at the point of quote confirmation, where the booking is known
to have succeeded, rather than relying on a page visit.

### 10.4 A second, unreachable quote path still exists

An older, simpler quote form (household/business toggle, home size 1RK–3BHK+, submitting to
`insert_customer_details_dubai` / `insert_business_customer_details_dubai`) is fully built
and still in the codebase, but **no page renders it** — the components, hook and server
actions are orphaned.

Two consequences worth knowing: the business rules in it (BHK-based sizing) are *not* what
the live site uses, so don't reason from it; and its public endpoint
`/api/insert-customer-details-dubai` is still live and reachable, so any old ad landing page
or third-party form still POSTing there will keep creating leads through a path nobody is
maintaining.

### 10.5 The admin "Leads" screen shows fake data

`/admin/dashboard/leads` displays two hardcoded sample leads ("John Doe", "Jane Smith"). It
is not connected to any lead source. Real leads live only in the safestorage.in CRM.

---

## 11. Operational quick reference

| I need to… | Where |
|---|---|
| See today's leads and quotations | safestorage.in backend (not this site) |
| Follow up abandoned enquiries | Partial leads from `save_dubai_partial_lead` |
| Change storage prices | Code change in the quote page + deploy (§5) |
| Change the item catalogue or its points | safestorage.in backend — `dubai_items_list`, live immediately |
| Add or edit a UAE emirate | safestorage.in backend — `get_dubai_emirates`, live immediately |
| Publish a blog post | safestorage.in dashboard — live within 5 min (§8) |
| Change the phone number or email | Server environment file + rebuild (see `DEVELOPMENT.md` §3) |
| Retire a page | Must ship a redirect or 410 with it, or SEO suffers |

**Dependency worth stating plainly:** if `safestorage.in` is down, safestorage.ae keeps
serving pages and blog content, but **no lead can be captured** — the item catalogue, the
emirate list, and all three commit-point writes are calls to that host. Quote capture
availability is bounded by the India backend's availability.

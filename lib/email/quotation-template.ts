// Quotation email template.
//
// Styles are inline rather than in a <style> block: Gmail strips <style> for
// non-Gmail accounts in its mobile apps, and Outlook.com rewrites it. The only
// <style> block is the media query, which degrades harmlessly where stripped.
// Layout is table-based — Outlook still has no flexbox or grid.

export interface QuotationEmailItem {
  name: string
  quantity: number
}

export interface QuotationEmailData {
  firstName: string
  quotationId: string | number
  items: QuotationEmailItem[]
  itemCount: number
  totalSqft: number
  totalPallets: number
  monthlyStorageAed: number
  transportAed: number
  selfDropTokenAed: number
  pickupAddress?: string | null
  /** Out-of-area: no tier price applies, so transport is quoted by hand. */
  transportCustomQuote?: boolean
  bookingUrl: string
  supportPhone: string
  supportEmail: string
}

const NAVY = "#0a2440"
const NAVY_LINE = "#1c3a5c"
const ORANGE = "#f68b1f"
const ORANGE_LINE = "#ffab54"
const ORANGE_DARK = "#3a2405"
const ORANGE_TINT = "#fff2e0"
const MUTED_BLUE = "#9fb0cc"
const CARD_MUTED = "#c3cfe0"
const INK = "#1d2939"
const BODY = "#475467"
const GREY = "#667085"
const FAINT = "#8a97ab"
const HAIR = "#f0f1f4"
const PANEL = "#f5f7fa"
const PAGE = "#eef1f6"

// Absolute URL — email clients cannot resolve relative paths. Served straight
// from /images rather than through /_next/image: the optimiser URL carries
// query params that some clients mangle, and it can 404 after a redeploy
// changes the build. The logo is dark navy on transparent, so it sits on a
// white band; on the navy header it would be all but invisible.
const LOGO_URL = "https://safestorage.ae/images/design-mode/logo.png"

const F = "Arial,Helvetica,sans-serif"
const PX = "padding-left:40px;padding-right:40px;"

function money(n: number): string {
  return n.toLocaleString("en-AE")
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/** Small uppercase section label. */
function label(text: string): string {
  return `<div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${FAINT};font-weight:700;">${text}</div>`
}

export function renderQuotationEmail(d: QuotationEmailData): string {
  const itemRows = d.items
    .map((it, i) => {
      const last = i === d.items.length - 1
      const border = last ? "" : `border-bottom:1px solid ${HAIR};`
      return `<tr><td style="padding:11px 0;font-size:14px;color:${INK};${border}">${esc(it.name)}</td><td align="right" style="padding:11px 0;font-size:14px;color:${FAINT};${border}">&times;${it.quantity}</td></tr>`
    })
    .join("")

  const transportCard = d.transportCustomQuote
    ? `<div style="padding-top:10px;"><span style="font-size:20px;color:#ffffff;font-weight:800;line-height:1.25;">Custom quote</span></div>
       <div style="padding-top:4px;font-size:13px;color:${ORANGE_TINT};">our team will confirm</div>
       <div style="font-size:12px;line-height:1.5;color:${ORANGE_TINT};border-top:1px solid ${ORANGE_LINE};margin-top:12px;padding-top:12px;">Your address is outside our standard pickup area, so we'll price the collection and get in touch.</div>`
    : `<div style="padding-top:10px;"><span style="font-size:16px;color:#ffffff;font-weight:700;vertical-align:top;line-height:1;">AED </span><span class="price" style="font-size:46px;color:#ffffff;font-weight:800;line-height:1;">${money(d.transportAed)}</span></div>
       <div style="padding-top:4px;font-size:13px;color:${ORANGE_TINT};">one-time</div>
       <div style="font-size:12px;line-height:1.5;color:${ORANGE_TINT};border-top:1px solid ${ORANGE_LINE};margin-top:12px;padding-top:12px;">We collect, load and transport everything to our warehouse. Includes labour and packing.</div>`

  const detailRow = (k: string, v: string) =>
    `<tr><td style="padding:6px 0;font-size:13px;color:${GREY};vertical-align:top;">${k}</td><td align="right" style="padding:6px 0;font-size:13px;font-weight:700;color:${NAVY};">${esc(v)}</td></tr>`

  return `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<title>Your SafeStorage Quotation</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<style>
  body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
  table,td{mso-table-lspace:0pt;mso-table-rspace:0pt;}
  img{-ms-interpolation-mode:bicubic;border:0;height:auto;line-height:100%;outline:none;text-decoration:none;}
  body{margin:0;padding:0;width:100%!important;background:${PAGE};}
  a{color:${ORANGE};}
  .btn:hover{background:#e07c12!important;}
  @media only screen and (max-width:620px){
    .container{width:100%!important;}
    .px{padding-left:22px!important;padding-right:22px!important;}
    .price{font-size:44px!important;}
    .stack{display:block!important;width:100%!important;padding:0 0 14px 0!important;}
  }
</style>
</head>
<body style="margin:0;padding:0;background:${PAGE};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:${PAGE};">
  Your storage quotation is ready — AED ${money(d.monthlyStorageAed)}/month${d.transportCustomQuote ? "" : ` + AED ${money(d.transportAed)} pickup`}.
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PAGE};">
<tr><td align="center" style="padding:28px 14px;">

<table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(16,24,40,0.08);">

  <tr><td style="background:#ffffff;padding:22px 40px 18px;font-family:${F};" class="px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="vertical-align:middle;">
        <img src="${LOGO_URL}" width="150" height="56" alt="SafeStorage"
             style="display:block;border:0;outline:none;text-decoration:none;width:150px;height:auto;max-width:150px;">
      </td>
      <td align="right" style="vertical-align:middle;"><span style="font-size:12px;color:${FAINT};">Dubai &middot; Since 2015 globally</span></td>
    </tr></table>
  </td></tr>
  <tr><td style="height:3px;background:${ORANGE};font-size:0;line-height:0;">&nbsp;</td></tr>

  <tr><td class="px" style="padding:32px 40px 6px;font-family:${F};">
    <div style="font-size:22px;font-weight:700;color:${NAVY};">${esc(d.firstName)}, your storage quotation is ready.</div>
    <div style="padding-top:10px;font-size:15px;line-height:1.55;color:${BODY};">
      Greetings from SafeStorage. Please find your quotation below &mdash; we store anything you care about.
      Nothing is booked yet, and no payment is needed to hold this price.
    </div>
  </td></tr>

  <tr><td class="px" style="padding:24px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td class="stack" width="50%" valign="top" style="padding-right:8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${NAVY};border-radius:12px;font-family:${F};"><tr><td style="padding:22px 22px 20px;">
          <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${ORANGE};font-weight:700;">Monthly storage</div>
          <div style="padding-top:10px;"><span style="font-size:16px;color:#ffffff;font-weight:700;vertical-align:top;line-height:1;">AED </span><span class="price" style="font-size:46px;color:#ffffff;font-weight:800;line-height:1;">${money(d.monthlyStorageAed)}</span></div>
          <div style="padding-top:4px;font-size:13px;color:${MUTED_BLUE};">per month</div>
          <div style="font-size:12px;line-height:1.5;color:${CARD_MUTED};border-top:1px solid ${NAVY_LINE};margin-top:12px;padding-top:12px;">Estimated ${d.totalSqft} sq ft at AED 12.60 / sq ft &middot; VAT included. Billed monthly, cancel anytime.</div>
        </td></tr></table>
      </td>
      <td class="stack" width="50%" valign="top" style="padding-left:8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${ORANGE};border-radius:12px;font-family:${F};"><tr><td style="padding:22px 22px 20px;">
          <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${ORANGE_DARK};font-weight:700;">Door-to-door pickup</div>
          ${transportCard}
        </td></tr></table>
      </td>
    </tr></table>
  </td></tr>

  <tr><td class="px" style="padding:14px 40px 0;font-family:${F};">
    <div style="font-size:13px;color:${GREY};line-height:1.5;">Prefer to drop off yourself? Bring your items to our warehouse for a <strong style="color:${NAVY};">AED ${money(d.selfDropTokenAed)}</strong> token that comes off your storage bill.</div>
  </td></tr>

  <tr><td class="px" style="padding:24px 40px 6px;" align="center">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
      <td align="center" bgcolor="${ORANGE}" class="btn" style="border-radius:10px;background:${ORANGE};">
        <a href="${d.bookingUrl}" class="btn" style="display:block;padding:16px 24px;font-family:${F};font-size:16px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:10px;">Choose a pickup date</a>
      </td>
    </tr></table>
  </td></tr>
  <tr><td class="px" style="padding:10px 40px 0;font-family:${F};" align="center">
    <div style="font-size:12px;color:${FAINT};">Your slot is confirmed once transport is paid.</div>
  </td></tr>

  <tr><td class="px" style="padding:28px 40px 4px;font-family:${F};">${label("What you&rsquo;re storing")}</td></tr>
  <tr><td class="px" style="padding:12px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-family:${F};">${itemRows}</table>
  </td></tr>

  <tr><td class="px" style="padding:26px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border-radius:12px;font-family:${F};">
      <tr><td style="padding:20px 24px 8px;">${label("Quote details")}</td></tr>
      <tr><td style="padding:0 24px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          ${detailRow("Quote reference", "SS-" + String(d.quotationId))}
          ${detailRow("Estimated space", `${d.totalSqft} sq ft \u00b7 ${d.totalPallets} pallet${d.totalPallets === 1 ? "" : "s"}`)}
          ${detailRow("Storage type", "Shared warehouse")}
          ${d.pickupAddress ? detailRow("Pickup address", d.pickupAddress) : ""}
        </table>
      </td></tr>
    </table>
  </td></tr>

  <tr><td class="px" style="padding:28px 40px 4px;font-family:${F};">${label("How it works")}</td></tr>
  <tr><td class="px" style="padding:10px 40px 0;font-family:${F};">
    <div style="font-size:13px;line-height:1.7;color:${BODY};">
      1. Our relationship manager calls to explain the process after booking.<br>
      2. On pickup day, our transport team packs everything listed in the quotation.<br>
      3. Inventory is prepared from the actual packed items and moved to the warehouse safely.<br>
      4. Our warehouse manager acknowledges receipt; any damages are notified.<br>
      5. Your dashboard is updated with inventory, stacking images and final charges.<br>
      6. You receive a welcome note with complete details.<br>
      7. If you arrange your own transport, handing-over charges apply based on volume and item list.<br>
      8. KYC is mandatory and must be uploaded at the time of pickup.
    </div>
  </td></tr>

  <tr><td class="px" style="padding:24px 40px 4px;font-family:${F};">${label("State-of-the-art facilities")}</td></tr>
  <tr><td class="px" style="padding:10px 40px 0;font-family:${F};">
    <div style="font-size:13px;line-height:1.7;color:${BODY};">
      &bull; TV and laptops stored in dedicated racking systems<br>
      &bull; Barcode tracking for every item stored<br>
      &bull; Periodical pest control services<br>
      &bull; 24&times;7 security and CCTV coverage<br>
      &bull; Modular fire extinguishers, fire alarm and shutter alarm systems<br>
      &bull; Items stored on wooden pallets
    </div>
  </td></tr>

  <tr><td class="px" style="padding:24px 40px 4px;font-family:${F};">${label("Dismantle &amp; reassemble")}</td></tr>
  <tr><td class="px" style="padding:10px 40px 0;font-family:${F};">
    <div style="font-size:13px;line-height:1.7;color:${BODY};">
      We dismantle and reassemble cots with normal nuts and bolts. Hydraulic items, chipboard items and crockery
      units will not be dismantled or reassembled. AC, electronics, chipboard, hydraulic and crockery items &mdash;
      and any work requiring a special technician (electrician, plumber or carpenter) &mdash; must be handled by
      the customer.
    </div>
  </td></tr>

  <tr><td class="px" style="padding:24px 40px 4px;font-family:${F};">${label("Payment terms")}</td></tr>
  <tr><td class="px" style="padding:10px 40px 0;font-family:${F};">
    <div style="font-size:13px;line-height:1.7;color:${BODY};">
      1. <strong style="color:${NAVY};">Cost adjustment:</strong> any increase or decrease in the number of items affects both storage and transport charges.<br>
      2. <strong style="color:${NAVY};">Transport:</strong> the full transport charge is paid online at booking, which confirms your pickup slot.<br>
      3. <strong style="color:${NAVY};">Storage:</strong> billed monthly and settled separately, starting from the pickup date.<br>
      4. <strong style="color:${NAVY};">Cost verification:</strong> you can regenerate the quotation through our portal to verify updated costs at any time.
    </div>
  </td></tr>

  <tr><td class="px" style="padding:24px 40px 4px;font-family:${F};">${label("Terms &amp; conditions")}</td></tr>
  <tr><td class="px" style="padding:10px 40px 0;font-family:${F};">
    <div style="font-size:12px;line-height:1.7;color:${GREY};">
      1. This quotation is based on the items mentioned; the price may change based on the actual number and volume of items received.<br>
      2. We do not store liquids, packed or any food items, edibles, ornaments, cosmetics, medicines or flammable items. Empty LPG cylinders are allowed; any gas will be diffused before storage.<br>
      3. Transport charges cover pickup from your location to the SafeStorage warehouse only. Delivery charges are estimated at retrieval based on location, floor and lift availability.<br>
      4. A valid VAT / TRN number must be provided in advance before a tax invoice is generated.<br>
      5. Zero cancellation fees before 48 hours of pickup.<br>
      6. Lift-to-loading area distance cannot exceed 100 metres; beyond that, charges apply based on storage charges.<br>
      7. If payment is not made within 7 days of billing, late charges apply on the unpaid amount.<br>
      8. Please disconnect the water connection for washing machines and purifiers to avoid leakage, and keep them ready for pickup.<br>
      9. This quotation is valid for 7 days only.<br>
      10. For day-wise or weekly storage in the first month, a minimum of one full month&rsquo;s storage charge is mandatory.<br>
      11. If you opt for self-transport at retrieval, mandatory handing-over charges apply based on the volume of goods.<br>
      12. For partial retrieval above 50% of items, handover charges are updated accordingly.<br>
      13. Please book your retrieval slot at least one week in advance, subject to availability.
    </div>
  </td></tr>

  <tr><td class="px" style="padding:28px 40px 32px;font-family:${F};border-top:1px solid #eef0f3;">
    <div style="font-size:13px;line-height:1.6;color:${GREY};">
      Questions about your quote? Just reply to this email, call
      <a href="tel:${d.supportPhone.replace(/\s/g, "")}" style="color:${ORANGE};text-decoration:none;font-weight:700;">${d.supportPhone}</a>,
      or reach us at <a href="mailto:${d.supportEmail}" style="color:${ORANGE};text-decoration:none;font-weight:700;">${d.supportEmail}</a>.
    </div>
    <div style="padding-top:14px;font-size:12px;line-height:1.6;color:#98a2b3;">
      SafeStorage Dubai &middot; This quotation is valid for 7 days.<br>
      &copy; 2015&ndash;2026 SafeStorage &middot; All rights reserved.
    </div>
  </td></tr>

</table>

<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;"><tr>
  <td style="padding:18px 40px;text-align:center;font-family:${F};font-size:11px;color:#a7afbd;">
    You&rsquo;re receiving this because you requested a storage quotation from SafeStorage.
  </td>
</tr></table>

</td></tr>
</table>
</body>
</html>`
}

/** Plain-text alternative. HTML-only mail is penalised by spam filters. */
export function renderQuotationText(d: QuotationEmailData): string {
  const items = d.items.map((i) => `  - ${i.name} x${i.quantity}`).join("\n")
  const transport = d.transportCustomQuote
    ? "Door-to-door pickup: our team will price this and get in touch (your address is outside our standard pickup area)."
    : `Door-to-door pickup: AED ${money(d.transportAed)} one-time`

  return `${d.firstName}, your storage quotation is ready.

Quote SS-${d.quotationId}
${d.itemCount} item${d.itemCount === 1 ? "" : "s"} · an estimated ${d.totalSqft} sq ft of secure shared warehouse.
Nothing is booked yet, and no payment is needed to hold this price.

MONTHLY STORAGE
AED ${money(d.monthlyStorageAed)} / month
Estimated ${d.totalSqft} sq ft at AED 12.60 per sq ft, VAT included. Billed monthly, cancel anytime.

${transport}
Or drop off yourself: AED ${money(d.selfDropTokenAed)} token, which comes off your storage bill.

Choose a pickup date:
${d.bookingUrl}

WHAT YOU'RE STORING
${items}

QUOTE DETAILS
  Quote reference: SS-${d.quotationId}
  Estimated space: ${d.totalSqft} sq ft, ${d.totalPallets} pallet${d.totalPallets === 1 ? "" : "s"}
  Storage type   : Shared warehouse${d.pickupAddress ? `\n  Pickup address : ${d.pickupAddress}` : ""}

PAYMENT TERMS
  1. Any change in the number of items affects both storage and transport charges.
  2. The full transport charge is paid online at booking, which confirms your pickup slot.
  3. Storage is billed monthly and settled separately, starting from the pickup date.
  4. You can regenerate the quotation through our portal to verify updated costs.

This quotation is valid for 7 days.

Questions? ${d.supportPhone} or ${d.supportEmail}
You received this because you requested a quote at safestorage.ae.
`
}

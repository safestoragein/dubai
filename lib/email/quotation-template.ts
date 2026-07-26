// Quotation email template.
//
// Styles are inline rather than in a <style> block: Gmail strips <style> for
// non-Gmail accounts in its mobile apps, and Outlook.com rewrites it. Inline
// is verbose but it is what actually renders. Layout is table-based for the
// same reason — Outlook still does not do flexbox or grid.
//
// Spacing comes from spacer rows with a height attribute, not CSS padding
// between blocks, because clients collapse margins unpredictably.

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
  /** Omitted for out-of-area addresses, where transport has no price yet. */
  transportCustomQuote?: boolean
  bookingUrl: string
  supportPhone: string
  supportEmail: string
}

const NAVY = "#0A2463"
const NAVY_INK = "#071634"
const CRIMSON = "#D8315B"
const SKY = "#3E92CC"
const INK = "#141A2E"
const MUTED = "#6B7490"
const FAINT = "#A2AABE"
const HAIR = "#E7EAF2"
const PANEL = "#F7F8FC"

const SANS = "Helvetica, Arial, sans-serif"
const SERIF = "Georgia, 'Times New Roman', serif"

const PAD = "padding-left:40px;padding-right:40px;"

/** A spacer row. Height as an attribute so Outlook honours it. */
function gap(px: number): string {
  return `<tr><td height="${px}" style="font-size:0;line-height:0;height:${px}px;">&nbsp;</td></tr>`
}

function hairline(): string {
  return `<tr><td style="${PAD}"><div style="height:1px;background:${HAIR};font-size:0;line-height:0;"></div></td></tr>`
}

function money(n: number): string {
  return n.toLocaleString("en-AE")
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/** One "Door-to-door pickup ... 960 one-time" block. */
function optionBlock(name: string, amount: string, unit: string, desc: string): string {
  return `
  <tr><td style="${PAD}">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
      <tr>
        <td style="font-family:${SANS};font-size:15px;font-weight:bold;color:${INK};vertical-align:baseline;">${name}</td>
        <td align="right" style="white-space:nowrap;font-family:${SERIF};font-size:22px;color:${NAVY};vertical-align:baseline;">${amount}<span style="font-family:${SANS};font-size:10.5px;color:${FAINT};letter-spacing:0.1em;text-transform:uppercase;margin-left:7px;">${unit}</span></td>
      </tr>
    </table>
  </td></tr>
  ${gap(9)}
  <tr><td style="${PAD}">
    <p style="margin:0;font-family:${SANS};font-size:13px;color:${MUTED};line-height:1.65;">${desc}</p>
  </td></tr>`
}

export function renderQuotationEmail(d: QuotationEmailData): string {
  const itemRows = d.items
    .map(
      (it, i) => `
      <tr>
        <td style="padding:12px 0;${i === d.items.length - 1 ? "" : `border-bottom:1px solid ${HAIR};`}font-family:${SANS};font-size:14px;color:${INK};">${escapeHtml(it.name)}</td>
        <td align="right" width="48" style="padding:12px 0;${i === d.items.length - 1 ? "" : `border-bottom:1px solid ${HAIR};`}font-family:${SANS};font-size:14px;color:${FAINT};">${it.quantity}</td>
      </tr>`
    )
    .join("")

  const transportRow = d.transportCustomQuote
    ? optionBlock(
        "Door-to-door pickup",
        "—",
        "custom",
        "Your address is outside our standard pickup area, so our team will price the collection and get in touch."
      )
    : optionBlock(
        "Door-to-door pickup",
        money(d.transportAed),
        "one-time",
        "We collect from your address, load, and transport everything to our warehouse."
      )

  const factRow = (k: string, v: string) => `
    <tr>
      <td style="padding:10px 0;font-family:${SANS};font-size:13.5px;color:${MUTED};width:46%;vertical-align:top;">${k}</td>
      <td style="padding:10px 0;font-family:${SANS};font-size:13.5px;color:${INK};font-weight:bold;vertical-align:top;">${escapeHtml(v)}</td>
    </tr>`

  const inclCell = (t: string) => `
    <td width="50%" style="padding:8px 16px 8px 0;font-family:${SANS};font-size:13px;color:${INK};line-height:1.55;vertical-align:top;">
      <span style="color:${SKY};font-weight:bold;">&#10003;</span>&nbsp;${t}
    </td>`

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Your storage quote</title>
<style>
  @media (max-width:620px) {
    .pad { padding-left:24px !important; padding-right:24px !important; }
    .display { font-size:26px !important; }
    .amount { font-size:44px !important; }
    .incl-cell { display:block !important; width:100% !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#E9ECF4;">
<!-- Preheader: shown in the inbox list after the subject, hidden in the body -->
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">
  ${d.itemCount} items, ${d.totalSqft} sq ft. Nothing is booked yet.
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#E9ECF4;">
<tr><td align="center" style="padding:28px 12px 40px;">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#FFFFFF;border-collapse:collapse;">

  <tr><td style="background:${NAVY};padding:32px 40px 28px;" class="pad">
    <p style="margin:0;color:#FFFFFF;font-family:${SANS};font-size:13px;font-weight:bold;letter-spacing:0.22em;text-transform:uppercase;">
      SafeStorage <span style="color:rgba(255,255,255,0.52);font-weight:normal;">Dubai</span>
    </p>
  </td></tr>
  <tr><td style="height:3px;background:${CRIMSON};font-size:0;line-height:0;">&nbsp;</td></tr>

  ${gap(52)}
  <tr><td style="${PAD}" class="pad">
    <p style="margin:0;font-family:${SANS};font-size:10.5px;letter-spacing:0.15em;text-transform:uppercase;color:${FAINT};font-weight:bold;">Quote SS-${escapeHtml(String(d.quotationId))}</p>
  </td></tr>
  ${gap(18)}
  <tr><td style="${PAD}" class="pad">
    <h1 class="display" style="margin:0;font-family:${SERIF};font-size:32px;line-height:1.24;font-weight:normal;color:${NAVY_INK};letter-spacing:-0.015em;">
      ${escapeHtml(d.firstName)}, your storage<br>quote is ready.
    </h1>
  </td></tr>
  ${gap(22)}
  <tr><td style="${PAD}" class="pad">
    <p style="margin:0;font-family:${SANS};font-size:15px;line-height:1.72;color:${MUTED};">
      ${d.itemCount} item${d.itemCount === 1 ? "" : "s"}, ${d.totalSqft} square feet of secure shared warehouse.
    </p>
  </td></tr>

  ${gap(52)}
  <tr><td style="${PAD}" class="pad">
    <p style="margin:0;font-family:${SANS};font-size:10.5px;letter-spacing:0.15em;text-transform:uppercase;color:${FAINT};font-weight:bold;">Monthly storage</p>
  </td></tr>
  ${gap(14)}
  <tr><td style="${PAD}" class="pad">
    <p class="amount" style="margin:0;font-family:${SERIF};font-size:54px;line-height:1;color:${NAVY};letter-spacing:-0.03em;">
      <span style="font-size:21px;letter-spacing:0.03em;color:${SKY};">AED</span> ${money(d.monthlyStorageAed)}
      <span style="font-family:${SANS};font-size:15px;color:${MUTED};letter-spacing:0;">/ month</span>
    </p>
  </td></tr>
  ${gap(16)}
  <tr><td style="${PAD}" class="pad">
    <p style="margin:0;font-family:${SANS};font-size:12.5px;color:${MUTED};line-height:1.65;">
      ${d.totalSqft} sq ft at AED 12.60 per sq ft, VAT included.<br>Billed monthly, cancel anytime.
    </p>
  </td></tr>

  ${gap(46)}${hairline()}${gap(34)}
  ${transportRow}
  ${gap(26)}${hairline()}${gap(26)}
  ${optionBlock("Or drop off yourself", money(d.selfDropTokenAed), "token", "Bring your items to our warehouse. The token comes off your storage bill.")}

  ${gap(46)}
  <tr><td style="${PAD}" class="pad">
    <a href="${d.bookingUrl}" style="display:block;background:${CRIMSON};color:#FFFFFF;text-decoration:none;font-family:${SANS};font-size:15px;font-weight:bold;padding:18px 24px;border-radius:4px;letter-spacing:0.03em;text-align:center;">Choose a pickup date</a>
  </td></tr>
  ${gap(16)}
  <tr><td style="${PAD}" class="pad">
    <p style="margin:0;font-family:${SANS};font-size:12.5px;color:${MUTED};line-height:1.65;text-align:center;">Your slot is confirmed once transport is paid.</p>
  </td></tr>

  ${gap(54)}
  <tr><td style="${PAD}" class="pad">
    <p style="margin:0;font-family:${SANS};font-size:10.5px;letter-spacing:0.15em;text-transform:uppercase;color:${FAINT};font-weight:bold;">What you&#39;re storing</p>
  </td></tr>
  ${gap(14)}
  <tr><td style="${PAD}" class="pad">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">${itemRows}</table>
  </td></tr>

  ${gap(44)}
  <tr><td style="${PAD}" class="pad">
    <p style="margin:0;font-family:${SANS};font-size:10.5px;letter-spacing:0.15em;text-transform:uppercase;color:${FAINT};font-weight:bold;">Quote details</p>
  </td></tr>
  ${gap(12)}
  <tr><td style="${PAD}" class="pad">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
      ${factRow("Space required", `${d.totalSqft} sq ft · ${d.totalPallets} pallet${d.totalPallets === 1 ? "" : "s"}`)}
      ${factRow("Storage type", "Shared warehouse")}
      ${d.pickupAddress ? factRow("Pickup address", d.pickupAddress) : ""}
    </table>
  </td></tr>

  ${gap(52)}
  <tr><td style="background:${PANEL};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${gap(30)}
      <tr><td style="${PAD}" class="pad">
        <p style="margin:0;font-family:${SANS};font-size:10.5px;letter-spacing:0.15em;text-transform:uppercase;color:${FAINT};font-weight:bold;">Included at no extra cost</p>
      </td></tr>
      ${gap(14)}
      <tr><td style="${PAD}" class="pad">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr>${inclCell("Secure, dust-protected indoor storage")}${inclCell("24/7 HD CCTV monitoring")}</tr>
          <tr>${inclCell("Doorstep delivery when you want items back")}${inclCell("A dedicated consultant for your account")}</tr>
        </table>
      </td></tr>
      ${gap(32)}
    </table>
  </td></tr>

  <tr><td style="background:${NAVY_INK};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      ${gap(34)}
      <tr><td style="${PAD}" class="pad">
        <p style="margin:0;font-family:${SANS};font-size:13px;line-height:1.7;color:rgba(255,255,255,0.66);">Questions about this quote?</p>
      </td></tr>
      ${gap(10)}
      <tr><td style="${PAD}" class="pad">
        <p style="margin:0;font-family:${SANS};font-size:13px;line-height:1.7;color:rgba(255,255,255,0.66);">
          <a href="tel:${d.supportPhone.replace(/\s/g, "")}" style="color:#FFFFFF;text-decoration:none;font-weight:bold;">${d.supportPhone}</a>
          &nbsp;·&nbsp;
          <a href="mailto:${d.supportEmail}" style="color:#FFFFFF;text-decoration:none;font-weight:bold;">${d.supportEmail}</a>
        </p>
      </td></tr>
      ${gap(22)}
      <tr><td style="${PAD}" class="pad">
        <p style="margin:0;font-family:${SANS};font-size:11.5px;color:rgba(255,255,255,0.40);line-height:1.7;">
          Nothing is booked and no payment is needed to keep this price. Prices are
          VAT-inclusive. Storage is billed monthly with no long-term contract.
          You received this because you requested a quote at safestorage.ae.
        </p>
      </td></tr>
      ${gap(34)}
    </table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

/** Plain-text alternative. Sending HTML alone hurts deliverability. */
export function renderQuotationText(d: QuotationEmailData): string {
  const items = d.items.map((i) => `  - ${i.name} x${i.quantity}`).join("\n")
  const transport = d.transportCustomQuote
    ? "Door-to-door pickup: our team will price this and get in touch (your address is outside our standard pickup area)."
    : `Door-to-door pickup: AED ${money(d.transportAed)} one-time`

  return `${d.firstName}, your storage quote is ready.

Quote SS-${d.quotationId}
${d.itemCount} item${d.itemCount === 1 ? "" : "s"}, ${d.totalSqft} square feet of secure shared warehouse.

MONTHLY STORAGE
AED ${money(d.monthlyStorageAed)} / month
${d.totalSqft} sq ft at AED 12.60 per sq ft, VAT included. Billed monthly, cancel anytime.

${transport}
Or drop off yourself: AED ${money(d.selfDropTokenAed)} token, which comes off your storage bill.

Choose a pickup date:
${d.bookingUrl}

WHAT YOU'RE STORING
${items}

QUOTE DETAILS
  Space required: ${d.totalSqft} sq ft, ${d.totalPallets} pallet${d.totalPallets === 1 ? "" : "s"}
  Storage type:   Shared warehouse${d.pickupAddress ? `\n  Pickup address: ${d.pickupAddress}` : ""}

INCLUDED AT NO EXTRA COST
  - Secure, dust-protected indoor storage
  - 24/7 HD CCTV monitoring
  - Doorstep delivery when you want items back
  - A dedicated consultant for your account

Questions? ${d.supportPhone} or ${d.supportEmail}

Nothing is booked and no payment is needed to keep this price.
You received this because you requested a quote at safestorage.ae.
`
}

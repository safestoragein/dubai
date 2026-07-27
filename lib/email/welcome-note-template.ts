// Welcome note email — sent when the team presses "Send Welcome Note" on
// /back/dubai/manage_inventory, i.e. once the goods are checked in and the dues
// have been raised. See app/api/emails/welcome-note/route.ts.
//
// Dubai version of India's welcome note. Same opening wording; everything that
// does not exist here is gone — the 3/6/12-month advance discount table, the
// coupon line, GST (Dubai is VAT-inclusive at 5%).
//
// Deliberately shows PRICES ONLY. No sqft, rate or pallet counts: billing can
// follow the footprint the warehouse measured rather than the item estimate, and
// publishing the derivation invites an argument the customer cannot win or lose
// on the facts. The CRM and the activity log keep the full derivation.

export interface WelcomeNoteData {
  firstName: string

  /** One-time transport, priced on the pallets actually collected. */
  transportTotalAed: number
  /** Token/advance already collected at booking. */
  transportPaidAed: number
  /** transportTotalAed - transportPaidAed, floored at 0. */
  transportDueAed: number

  /** VAT-inclusive monthly storage. */
  storageTotalAed: number
  /** VAT rate as a percentage, e.g. 5. */
  vatRate: number

  /** Absent when no payment page is configured — the email then tells the
   *  customer their consultant will send a link, rather than showing a dead button. */
  paymentUrl?: string | null

  rmName?: string | null
  supportPhone: string
  supportEmail: string
}

const NAVY = "#0a2440"
const ORANGE = "#f68b1f"
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

const LOGO_URL = "https://safestorage.ae/images/design-mode/logo.png"
const F = "Arial,Helvetica,sans-serif"

function money(n: number): string {
  return n.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

function label(text: string): string {
  return `<div style="font-size:10px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:${FAINT};">${text}</div>`
}

function row(k: string, v: string, bold = false, last = false): string {
  const pad = last ? "5px 0 14px" : "5px 0"
  return `<tr><td style="padding:${pad};color:${GREY};">${k}</td><td align="right" style="padding:${pad};color:${INK};font-weight:${bold ? 700 : 600};">${v}</td></tr>`
}

export function renderWelcomeNoteEmail(d: WelcomeNoteData): string {
  // Storage is quoted VAT-inclusive, so the tax is backed out of the total
  // rather than added to it.
  const storageEx = d.vatRate > 0 ? d.storageTotalAed / (1 + d.vatRate / 100) : d.storageTotalAed
  const vatAmount = d.storageTotalAed - storageEx
  const payableNow = d.transportDueAed + d.storageTotalAed

  const payBlock = d.paymentUrl
    ? `
  <tr><td style="padding:24px 40px 0;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${ORANGE};border-radius:10px;"><tr>
      <td align="center" style="padding:0;"><a href="${esc(d.paymentUrl)}" style="display:block;padding:15px 24px;font-family:${F};font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">Pay AED ${money(payableNow)} now</a></td>
    </tr></table>
    <div style="font-size:12px;color:${FAINT};padding-top:8px;" align="center">Transport AED ${money(d.transportDueAed)} + first month AED ${money(d.storageTotalAed)}</div>
  </td></tr>`
    : `
  <tr><td style="padding:24px 40px 0;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border-radius:10px;"><tr><td style="padding:16px 18px;font-family:${F};font-size:13.5px;color:${BODY};">
      <strong style="color:${INK};">Payable now: AED ${money(payableNow)}</strong><br>
      Transport AED ${money(d.transportDueAed)} + first month AED ${money(d.storageTotalAed)}.
      Your consultant will send you a payment link.
    </td></tr></table>
  </td></tr>`

  const transportRows = d.transportPaidAed > 0
    ? row("Total transport charges", `AED ${money(d.transportTotalAed)}`) +
      row("Less paid at booking", `&minus; AED ${money(d.transportPaidAed)}`) +
      row("Due now", `AED ${money(d.transportDueAed)}`, true, true)
    : row("Total transport charges", `AED ${money(d.transportTotalAed)}`) +
      row("Due now", `AED ${money(d.transportDueAed)}`, true, true)

  const transportBlock = d.transportTotalAed > 0
    ? `
  <tr><td style="padding:26px 40px 0;font-family:${F};">
    ${label("Transport")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border-radius:12px;margin-top:11px;">
      <tr><td style="padding:16px 18px 6px;font-family:${F};">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:13.5px;">${transportRows}</table>
      </td></tr>
    </table>
    <div style="font-size:12px;color:${FAINT};padding-top:7px;">One-time charge for collection from your address.</div>
  </td></tr>`
    : ""

  const rmLine = d.rmName
    ? `Questions about your bill? Your consultant <strong>${esc(d.rmName)}</strong> is on <a href="tel:${esc(d.supportPhone.replace(/\s/g, ""))}" style="color:${NAVY};font-weight:700;text-decoration:none;">${esc(d.supportPhone)}</a>, Mon&ndash;Sat 9am&ndash;6pm.`
    : `Questions about your bill? Call <a href="tel:${esc(d.supportPhone.replace(/\s/g, ""))}" style="color:${NAVY};font-weight:700;text-decoration:none;">${esc(d.supportPhone)}</a>, Mon&ndash;Sat 9am&ndash;6pm.`

  return `<!-- welcome note -->
<div style="background:#eef1f6;padding:24px 0;font-family:${F};">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="width:600px;max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">

  <tr><td style="background:#ffffff;padding:22px 40px 18px;font-family:${F};">
    <img src="${LOGO_URL}" width="150" alt="SAFE STORAGE" style="display:block;border:0;outline:none;text-decoration:none;width:150px;height:auto;max-width:150px;">
    <div style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${FAINT};padding-top:8px;">United Arab Emirates</div>
  </td></tr>

  <tr><td style="padding:20px 40px 4px;font-family:${F};">
    <div style="font-size:15px;line-height:1.6;color:${BODY};">Dear ${esc(d.firstName)}</div>
    <div style="font-size:22px;line-height:1.3;font-weight:800;color:${INK};letter-spacing:-.01em;padding-top:12px;">
      Welcome to SAFE STORAGE &mdash; We store anything you care!
    </div>
    <div style="font-size:15px;line-height:1.65;color:${BODY};padding-top:12px;">
      Thank you for choosing SAFE STORAGE. Your pickup is completed and we have updated
      inventory in dashboard.
    </div>
    <div style="font-size:15px;line-height:1.65;color:${BODY};padding-top:12px;">
      Storage charges are prepaid charges, so customers are requested to pay at the
      beginning of the tenure.
    </div>
  </td></tr>

  <tr><td style="padding:22px 40px 0;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
      <td width="50%" valign="top" style="padding-right:7px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${ORANGE};border-radius:12px;"><tr><td style="padding:20px 20px 18px;font-family:${F};">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${ORANGE_DARK};">Transport due now</div>
          <div style="padding-top:9px;"><span style="font-size:13px;color:#ffffff;font-weight:700;vertical-align:top;">AED </span><span style="font-size:30px;color:#ffffff;font-weight:800;line-height:1;">${money(d.transportDueAed)}</span></div>
          <div style="font-size:13px;color:${ORANGE_TINT};padding-top:5px;">One-time charge</div>
        </td></tr></table>
      </td>
      <td width="50%" valign="top" style="padding-left:7px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${NAVY};border-radius:12px;"><tr><td style="padding:20px 20px 18px;font-family:${F};">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${MUTED_BLUE};">Storage per month</div>
          <div style="padding-top:9px;"><span style="font-size:13px;color:#ffffff;font-weight:700;vertical-align:top;">AED </span><span style="font-size:30px;color:#ffffff;font-weight:800;line-height:1;">${money(d.storageTotalAed)}</span></div>
          <div style="font-size:13px;color:${CARD_MUTED};padding-top:5px;">Payable in advance</div>
        </td></tr></table>
      </td>
    </tr></table>
  </td></tr>
${transportBlock}
  <tr><td style="padding:26px 40px 0;font-family:${F};">
    ${label("Monthly storage")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border-radius:12px;margin-top:11px;">
      <tr><td style="padding:16px 18px 6px;font-family:${F};">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:13.5px;">
          ${row("Subtotal", `AED ${money(storageEx)}`)}
          ${row(`VAT (${d.vatRate}%)`, `AED ${money(vatAmount)}`)}
          ${row("Monthly total", `AED ${money(d.storageTotalAed)}`, true, true)}
        </table>
      </td></tr>
    </table>
    <div style="font-size:12px;color:${FAINT};padding-top:7px;">Storage is prepaid &mdash; due at the start of each month.</div>
  </td></tr>
${payBlock}
  <tr><td style="padding:28px 40px 0;font-family:${F};">
    ${label("Good to know")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:12.5px;line-height:1.62;color:${GREY};margin-top:10px;">
      <tr><td style="padding:5px 0;">Storage is prepaid. Please settle each month at the start of the period.</td></tr>
      <tr><td style="padding:5px 0;">Book retrieval or delivery well in advance &mdash; charges depend on your location and the items involved.</td></tr>
      <tr><td style="padding:5px 0;">One month is the minimum storage charge, even for day-wise or weekly storage in the first month.</td></tr>
      <tr><td style="padding:5px 0;">Collecting items yourself attracts a handover charge based on the volume released. The same applies to partial retrieval above 50% of your items.</td></tr>
      <tr><td style="padding:5px 0;">A late payment fee applies to storage charges not settled on time.</td></tr>
      <tr><td style="padding:5px 0;">KYC is mandatory. If you have not uploaded yours yet, please do so now.</td></tr>
      <tr><td style="padding:5px 0;">Send your TRN if you need a VAT invoice.</td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:24px 40px 0;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border-radius:10px;"><tr><td style="padding:14px 18px;font-family:${F};font-size:13px;color:${BODY};">
      ${rmLine}
    </td></tr></table>
  </td></tr>

  <tr><td style="padding:28px 40px 30px;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid ${HAIR};padding-top:18px;">
      <div style="font-size:13px;font-weight:700;color:${INK};">SAFE STORAGE UAE</div>
      <div style="font-size:12.5px;color:${FAINT};padding-top:5px;line-height:1.65;">
        We store anything you care!<br>
        <a href="tel:${esc(d.supportPhone.replace(/\s/g, ""))}" style="color:${GREY};text-decoration:none;">${esc(d.supportPhone)}</a> &nbsp;&middot;&nbsp;
        <a href="mailto:${esc(d.supportEmail)}" style="color:${GREY};text-decoration:none;">${esc(d.supportEmail)}</a> &nbsp;&middot;&nbsp;
        <a href="https://safestorage.ae" style="color:${GREY};text-decoration:none;">safestorage.ae</a>
      </div>
    </td></tr></table>
  </td></tr>

</table>
</div>`
}

/** Plain-text fallback carrying the same figures. */
export function renderWelcomeNoteText(d: WelcomeNoteData): string {
  const storageEx = d.vatRate > 0 ? d.storageTotalAed / (1 + d.vatRate / 100) : d.storageTotalAed
  const vatAmount = d.storageTotalAed - storageEx
  const payableNow = d.transportDueAed + d.storageTotalAed

  const lines: string[] = [
    `Dear ${d.firstName}`,
    ``,
    `Welcome to SAFE STORAGE - We store anything you care!`,
    ``,
    `Thank you for choosing SAFE STORAGE. Your pickup is completed and we have updated inventory in dashboard.`,
    ``,
    `Storage charges are prepaid charges, so customers are requested to pay at the beginning of the tenure.`,
    ``,
  ]

  if (d.transportTotalAed > 0) {
    lines.push(`TRANSPORT`, `Total transport charges: AED ${money(d.transportTotalAed)}`)
    if (d.transportPaidAed > 0) lines.push(`Less paid at booking: AED ${money(d.transportPaidAed)}`)
    lines.push(`Due now: AED ${money(d.transportDueAed)}`, ``)
  }

  lines.push(
    `MONTHLY STORAGE`,
    `Subtotal: AED ${money(storageEx)}`,
    `VAT (${d.vatRate}%): AED ${money(vatAmount)}`,
    `Monthly total: AED ${money(d.storageTotalAed)}`,
    `Storage is prepaid - due at the start of each month.`,
    ``,
    `PAYABLE NOW: AED ${money(payableNow)}`,
    d.paymentUrl ? `Pay here: ${d.paymentUrl}` : `Your consultant will send you a payment link.`,
    ``,
    `GOOD TO KNOW`,
    `- Storage is prepaid. Please settle each month at the start of the period.`,
    `- Book retrieval or delivery well in advance - charges depend on your location and the items involved.`,
    `- One month is the minimum storage charge, even for day-wise or weekly storage in the first month.`,
    `- Collecting items yourself attracts a handover charge based on the volume released. The same applies to partial retrieval above 50% of your items.`,
    `- A late payment fee applies to storage charges not settled on time.`,
    `- KYC is mandatory. If you have not uploaded yours yet, please do so now.`,
    `- Send your TRN if you need a VAT invoice.`,
    ``,
    d.rmName
      ? `Questions about your bill? Your consultant ${d.rmName} is on ${d.supportPhone}, Mon-Sat 9am-6pm.`
      : `Questions about your bill? Call ${d.supportPhone}, Mon-Sat 9am-6pm.`,
    ``,
    `SAFE STORAGE UAE - We store anything you care!`,
    `${d.supportPhone} - ${d.supportEmail} - safestorage.ae`
  )

  return lines.join("\n")
}

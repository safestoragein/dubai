// Pickup confirmation email template.
//
// Sent once the token payment has been confirmed by Stripe and the order exists
// in ss_order — never before. See app/api/emails/pickup-confirmation/route.ts.
//
// Same conventions as quotation-template.ts: inline styles (Gmail strips <style>
// for non-Gmail accounts in its mobile apps, Outlook.com rewrites it), table
// layout (Outlook has no flexbox or grid), and the same palette so a customer
// who quotes and then books gets two emails that plainly come from one company.

export interface PickupConfirmationData {
  firstName: string
  /** Permanent customer code, e.g. DUB07. Falls back to the order code. */
  bookingRef: string
  /** ISO yyyy-mm-dd. Rendered as "30 July" + weekday. */
  pickupDate: string
  /** Free text, e.g. "9:00 AM - 12:00 PM". Website bookings have none — the
   *  team sets it when they call — so an empty value is expected, not an error. */
  pickupSlot?: string | null
  /** 'pickup' = we collect; 'warehouse_arrival' = customer drops off. */
  pickupType?: string | null
  pickupAddress?: string | null

  totalSqft: number
  totalPallets: number
  monthlyStorageAed: number

  /** Whether to show any payment content at all.
   *  Website bookings settle a token through Stripe before this email exists, so
   *  the email doubles as a receipt. Backend bookings taken by the team are not
   *  necessarily paid at booking time, so they show nothing about money — a
   *  "Token paid AED 0" card would be worse than no card. */
  showPayment?: boolean
  tokenPaidAed?: number
  /** Omitted when there is nothing left to collect on the day. */
  balanceAed?: number | null

  /** ss_user.user_fname of the assigned relationship manager. */
  rmName?: string | null

  /** Only present on a first booking — a repeat booking must not resend a
   *  password the customer is already using. */
  username?: string | null
  password?: string | null

  loginUrl: string
  kycUrl: string
  warehouseMapUrl: string
  prohibitedUrl: string
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
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function label(text: string): string {
  return `<div style="font-size:10px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:${FAINT};">${text}</div>`
}

/** "2026-07-30" -> { day: "30 July", weekday: "Thursday" }. Falls back to the
 *  raw string when the date cannot be parsed, so a bad value never blanks the
 *  most important line in the email. */
function splitDate(iso: string): { day: string; weekday: string } {
  const d = new Date(`${iso}T00:00:00`)
  if (isNaN(d.getTime())) return { day: iso, weekday: "" }
  return {
    day: d.toLocaleDateString("en-GB", { day: "numeric", month: "long" }),
    weekday: d.toLocaleDateString("en-GB", { weekday: "long" }),
  }
}

/** Row in the details panel. */
function row(k: string, v: string, last = false): string {
  const pad = last ? "5px 0 14px" : "5px 0"
  return `<tr><td style="padding:${pad};color:${GREY};">${k}</td><td align="right" style="padding:${pad};color:${INK};font-weight:600;">${v}</td></tr>`
}

export function renderPickupConfirmationEmail(d: PickupConfirmationData): string {
  const { day, weekday } = splitDate(d.pickupDate)
  const isSelfDrop = d.pickupType === "warehouse_arrival"

  // The website never collects a slot. Saying "we will call" is honest; an
  // invented window would put our team at the door at the wrong hour.
  const slotLine = d.pickupSlot
    ? `${weekday ? esc(weekday) + " &middot; " : ""}${esc(d.pickupSlot)}`
    : `${weekday ? esc(weekday) : ""}${weekday ? " &middot; " : ""}We&rsquo;ll call to confirm your time`

  const showPayment = d.showPayment !== false && typeof d.tokenPaidAed === "number" && d.tokenPaidAed > 0

  const balanceLine =
    typeof d.balanceAed === "number" && d.balanceAed > 0
      ? `Balance AED ${money(d.balanceAed)} on ${isSelfDrop ? "arrival" : "pickup"}`
      : "Nothing further to pay today"

  // The date card is the whole width when there is no payment card beside it,
  // rather than a half-width card floating next to dead space.
  const dateCard = (width: string) => `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${NAVY};border-radius:12px;"><tr><td style="padding:20px 20px 18px;font-family:${F};">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${MUTED_BLUE};">${isSelfDrop ? "Drop-off date" : "Pickup date"}</div>
          <div style="font-size:${width === "100%" ? "32px" : "27px"};font-weight:800;color:#ffffff;line-height:1.1;padding-top:9px;">${esc(day)}</div>
          <div style="font-size:13px;color:${CARD_MUTED};padding-top:5px;">${slotLine}</div>
        </td></tr></table>`

  const cardsRow = showPayment
    ? `<tr>
      <td width="50%" valign="top" style="padding-right:7px;">${dateCard("50%")}</td>
      <td width="50%" valign="top" style="padding-left:7px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${ORANGE};border-radius:12px;"><tr><td style="padding:20px 20px 18px;font-family:${F};">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${ORANGE_DARK};">Token paid</div>
          <div style="padding-top:9px;"><span style="font-size:13px;color:#ffffff;font-weight:700;vertical-align:top;">AED </span><span style="font-size:27px;color:#ffffff;font-weight:800;line-height:1;">${money(d.tokenPaidAed ?? 0)}</span></div>
          <div style="font-size:13px;color:${ORANGE_TINT};padding-top:5px;">${balanceLine}</div>
        </td></tr></table>
      </td>
    </tr>`
    : `<tr><td valign="top">${dateCard("100%")}</td></tr>`

  const intro = showPayment
    ? `Thank you for choosing SafeStorage, ${esc(d.firstName)}. We&rsquo;ve received your token payment and your slot is locked in.`
    : `Thank you for choosing SafeStorage, ${esc(d.firstName)}. Your ${isSelfDrop ? "drop-off" : "pickup"} is booked and our team is expecting you.`

  const detailRows = [
    row("Reference", esc(d.bookingRef)),
    d.pickupAddress ? row(isSelfDrop ? "Dropping off from" : "Pickup from", esc(d.pickupAddress)) : "",
    row("Estimated space", `${d.totalSqft} sqft &middot; ${d.totalPallets} pallets`),
    row("Monthly storage", `AED ${money(d.monthlyStorageAed)}`, true),
  ].join("")

  const rmBlock = d.rmName
    ? `
  <tr><td style="padding:26px 40px 0;font-family:${F};">
    ${label("Your storage consultant")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${HAIR};border-radius:12px;margin-top:11px;">
      <tr>
        <td width="46" valign="top" style="padding:16px 0 16px 18px;">
          <table role="presentation" width="46" cellpadding="0" cellspacing="0" border="0" style="background:${NAVY};border-radius:23px;"><tr><td align="center" style="height:46px;font-family:${F};font-size:19px;font-weight:800;color:#ffffff;">${esc(d.rmName.trim().charAt(0).toUpperCase())}</td></tr></table>
        </td>
        <td valign="middle" style="padding:16px 18px;font-family:${F};">
          <div style="font-size:15px;font-weight:700;color:${INK};">${esc(d.rmName)}</div>
          <div style="font-size:13.5px;color:${BODY};padding-top:2px;">
            <a href="tel:${esc(d.supportPhone.replace(/\s/g, ""))}" style="color:${NAVY};text-decoration:none;font-weight:600;">${esc(d.supportPhone)}</a>
            &nbsp;&middot;&nbsp; Mon&ndash;Sat, 9am&ndash;6pm
          </div>
        </td>
      </tr>
    </table>
  </td></tr>`
    : ""

  // The customer portal section is switched OFF for now — no sign-in link, and
  // therefore no credentials either, since a username and password with nowhere
  // to use them is worse than showing nothing. The caller still sends username
  // and password and PickupConfirmationData still carries them, so restoring
  // this is a matter of putting the block back below and in the text part.

  return `<!-- pickup confirmation -->
<div style="background:#eef1f6;padding:24px 0;font-family:${F};">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="width:600px;max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">

  <tr><td style="background:#ffffff;padding:22px 40px 18px;font-family:${F};">
    <img src="${LOGO_URL}" width="150" alt="SafeStorage" style="display:block;border:0;outline:none;text-decoration:none;width:150px;height:auto;max-width:150px;">
    <div style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${FAINT};padding-top:8px;">United Arab Emirates</div>
  </td></tr>

  <tr><td style="padding:20px 40px 4px;font-family:${F};">
    <div style="font-size:26px;line-height:1.22;font-weight:800;color:${INK};letter-spacing:-.02em;">Your pickup is confirmed</div>
    <div style="font-size:15px;line-height:1.6;color:${BODY};padding-top:9px;">
      ${intro}
    </div>
  </td></tr>

  <tr><td style="padding:22px 40px 0;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${cardsRow}</table>
  </td></tr>

  <tr><td style="padding:26px 40px 0;font-family:${F};">
    ${label("Booking details")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border-radius:12px;margin-top:11px;">
      <tr><td style="padding:16px 18px 6px;font-family:${F};">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:13.5px;">${detailRows}</table>
      </td></tr>
    </table>
  </td></tr>
${rmBlock}
  <tr><td style="padding:28px 40px 0;font-family:${F};">
    ${label("Before we arrive")}
    <div style="font-size:14px;line-height:1.65;color:${BODY};padding:6px 0 12px;">Please complete your KYC so our team can enter your building without delay.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:13.5px;color:${BODY};">
      <tr><td style="padding:4px 0;">&mdash;&nbsp; Emirates ID, or passport with residence visa</td></tr>
      <tr><td style="padding:4px 0;">&mdash;&nbsp; Building access rules and any timing restrictions</td></tr>
      <tr><td style="padding:4px 0;">&mdash;&nbsp; Permanent address</td></tr>
      <tr><td style="padding:4px 0;">&mdash;&nbsp; Alternative contact number</td></tr>
      <tr><td style="padding:4px 0 0;">&mdash;&nbsp; Location pin for the pickup address</td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:20px 40px 0;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${ORANGE};border-radius:10px;"><tr>
      <td align="center" style="padding:0;"><a href="${esc(d.kycUrl)}" style="display:block;padding:15px 24px;font-family:${F};font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">Complete your KYC</a></td>
    </tr></table>
  </td></tr>

  <tr><td style="padding:28px 40px 0;font-family:${F};">
    ${label("Where your items will be stored")}
    <div style="font-size:14px;color:${INK};font-weight:600;padding-top:8px;">SafeStorage Dubai warehouse</div>
    <div style="font-size:13.5px;padding-top:4px;"><a href="${esc(d.warehouseMapUrl)}" style="color:${NAVY};text-decoration:underline;">Open in Google Maps &rsaquo;</a></div>
  </td></tr>

  <tr><td style="padding:26px 40px 0;font-family:${F};">
    ${label("Good to know")}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:12.5px;line-height:1.62;color:${GREY};margin-top:10px;">
      <tr><td style="padding:5px 0;">Your quote is based on the items you listed. The final price may change with the actual volume we receive.</td></tr>
      <tr><td style="padding:5px 0;">Food, cosmetics, liquids, liquor, aerosols and flammables cannot be stored. <a href="${esc(d.prohibitedUrl)}" style="color:${NAVY};">See the full list</a>.</td></tr>
      <tr><td style="padding:5px 0;">Transport covers your address to our warehouse. Return delivery is quoted separately based on floor and lift access.</td></tr>
      <tr><td style="padding:5px 0;">Cancel free of charge up to 48 hours before pickup.${showPayment ? " Within 48 hours the token advance is retained." : ""}</td></tr>
      <tr><td style="padding:5px 0;">A lift-to-loading distance over 100 metres attracts an additional handling charge.</td></tr>
      <tr><td style="padding:5px 0;">One month is the minimum storage charge. Send your TRN in advance if you need a VAT invoice.</td></tr>
      <tr><td style="padding:5px 0;">Your goods are covered by our bulk insurance against fire, theft and natural calamity.</td></tr>
    </table>
  </td></tr>

  <tr><td style="padding:24px 40px 0;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PANEL};border-radius:10px;"><tr><td style="padding:14px 18px;font-family:${F};font-size:13px;color:${BODY};">
      Not getting the help you need? Escalate to <a href="mailto:${esc(d.supportEmail)}" style="color:${NAVY};font-weight:700;text-decoration:none;">${esc(d.supportEmail)}</a>
    </td></tr></table>
  </td></tr>

  <tr><td style="padding:28px 40px 30px;font-family:${F};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid ${HAIR};padding-top:18px;">
      <div style="font-size:13px;font-weight:700;color:${INK};">SAFE STORAGE&trade; UAE</div>
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

/** Plain-text fallback. Some clients show only this, so it carries the same facts. */
export function renderPickupConfirmationText(d: PickupConfirmationData): string {
  const { day, weekday } = splitDate(d.pickupDate)
  const isSelfDrop = d.pickupType === "warehouse_arrival"
  const when = d.pickupSlot
    ? `${weekday} ${day}, ${d.pickupSlot}`
    : `${weekday} ${day} — we'll call to confirm your time`

  const showPayment = d.showPayment !== false && typeof d.tokenPaidAed === "number" && d.tokenPaidAed > 0

  const lines: string[] = [
    `Your ${isSelfDrop ? "drop-off" : "pickup"} is confirmed`,
    ``,
    showPayment
      ? `Thank you for choosing SafeStorage, ${d.firstName}. We've received your token payment and your slot is locked in.`
      : `Thank you for choosing SafeStorage, ${d.firstName}. Your ${isSelfDrop ? "drop-off" : "pickup"} is booked and our team is expecting you.`,
    ``,
    `${isSelfDrop ? "DROP-OFF" : "PICKUP"}: ${when}`,
  ]

  if (showPayment) {
    lines.push(`TOKEN PAID: AED ${money(d.tokenPaidAed ?? 0)}`)
    if (typeof d.balanceAed === "number" && d.balanceAed > 0) {
      lines.push(`BALANCE: AED ${money(d.balanceAed)} on ${isSelfDrop ? "arrival" : "pickup"}`)
    }
  }

  lines.push(
    ``,
    `Reference: ${d.bookingRef}`,
    ...(d.pickupAddress ? [`${isSelfDrop ? "Dropping off from" : "Pickup from"}: ${d.pickupAddress}`] : []),
    `Estimated space: ${d.totalSqft} sqft / ${d.totalPallets} pallets`,
    `Monthly storage: AED ${money(d.monthlyStorageAed)}`,
    ``
  )

  if (d.rmName) {
    lines.push(
      `YOUR STORAGE CONSULTANT`,
      `${d.rmName} — ${d.supportPhone} — Mon-Sat, 9am-6pm`,
      ``
    )
  }

  lines.push(
    `BEFORE WE ARRIVE`,
    `Please complete your KYC so our team can enter your building without delay:`,
    `- Emirates ID, or passport with residence visa`,
    `- Building access rules and any timing restrictions`,
    `- Permanent address`,
    `- Alternative contact number`,
    `- Location pin for the pickup address`,
    `Complete your KYC: ${d.kycUrl}`,
    ``
  )

  // Customer portal section switched off — see the note in the HTML renderer.

  lines.push(
    `WAREHOUSE`,
    `SafeStorage Dubai warehouse — ${d.warehouseMapUrl}`,
    ``,
    `GOOD TO KNOW`,
    `- Your quote is based on the items you listed. The final price may change with the actual volume we receive.`,
    `- Food, cosmetics, liquids, liquor, aerosols and flammables cannot be stored: ${d.prohibitedUrl}`,
    `- Transport covers your address to our warehouse. Return delivery is quoted separately based on floor and lift access.`,
    `- Cancel free of charge up to 48 hours before pickup.${showPayment ? " Within 48 hours the token advance is retained." : ""}`,
    `- A lift-to-loading distance over 100 metres attracts an additional handling charge.`,
    `- One month is the minimum storage charge. Send your TRN in advance if you need a VAT invoice.`,
    `- Your goods are covered by our bulk insurance against fire, theft and natural calamity.`,
    ``,
    `Not getting the help you need? Escalate to ${d.supportEmail}`,
    ``,
    `SAFE STORAGE(TM) UAE — We store anything you care!`,
    `${d.supportPhone} — ${d.supportEmail} — safestorage.ae`
  )

  return lines.join("\n")
}

// Packers & movers quote — shared by the wizard (client) and /api/movers-quote (server).
// Deliberately separate from the storage quote (/get-quote): no storage points, no pallets.
// No prices anywhere (owner rule, CLAUDE.md): the team replies with a free, itemised quote.

export const EMIRATES = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"] as const

export const MOVE_TYPES = [
  { id: "home", label: "Home / apartment" },
  { id: "villa", label: "Villa" },
  { id: "office", label: "Office / business" },
] as const

export const HOME_SIZES = ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4 bedrooms", "5+ bedrooms", "Office / other"] as const

export const PACKING_LEVELS = [
  { id: "full", label: "Full packing", note: "We pack everything" },
  { id: "fragile", label: "Fragile only", note: "Glass, electronics, crockery" },
  { id: "none", label: "I will pack myself", note: "Crew loads and moves" },
] as const

export const EXTRAS = [
  { id: "cleaning", label: "Cleaning after the move" },
  { id: "insurance", label: "Goods-in-transit cover" },
  { id: "disposal", label: "Furniture disposal" },
  { id: "piano", label: "Piano / heavy item" },
  { id: "pets_plants", label: "Plants or delicate items" },
] as const

export const ITEM_GROUPS: { group: string; items: { id: string; label: string }[] }[] = [
  { group: "Bedroom", items: [
    { id: "bed_double", label: "Double / queen bed" }, { id: "bed_king", label: "King bed" }, { id: "bed_single", label: "Single bed" },
    { id: "wardrobe", label: "Wardrobe" }, { id: "chest", label: "Chest of drawers" }, { id: "bedside", label: "Bedside table" },
  ] },
  { group: "Living room", items: [
    { id: "sofa", label: "Sofa (per seat group)" }, { id: "tv_unit", label: "TV unit" }, { id: "tv", label: "TV" },
    { id: "coffee_table", label: "Coffee / side table" }, { id: "bookshelf", label: "Bookshelf" }, { id: "rug", label: "Rug" },
  ] },
  { group: "Kitchen & dining", items: [
    { id: "fridge", label: "Fridge" }, { id: "washer", label: "Washing machine" }, { id: "dishwasher", label: "Dishwasher" },
    { id: "oven", label: "Oven / cooker" }, { id: "dining_table", label: "Dining table" }, { id: "dining_chair", label: "Dining chair" },
  ] },
  { group: "Office & other", items: [
    { id: "desk", label: "Desk" }, { id: "office_chair", label: "Office chair" }, { id: "cabinet", label: "Filing cabinet" },
    { id: "bicycle", label: "Bicycle" }, { id: "treadmill", label: "Treadmill / gym equipment" }, { id: "boxes", label: "Boxes already packed" },
  ] },
]

export type MoversQuote = {
  name: string
  phone: string
  email: string
  moveType: string
  homeSize: string
  moveDate: string // YYYY-MM-DD
  flexibleDate: boolean
  fromAddress: string
  fromEmirate: string
  fromFloor: string
  fromLift: "yes" | "no" | ""
  toAddress: string
  toEmirate: string
  toFloor: string
  toLift: "yes" | "no" | ""
  services: string[]
  packing: string
  items: Record<string, number>
  itemsUnsure: boolean
  extras: string[]
  notes: string
}

export const EMPTY_QUOTE: MoversQuote = {
  name: "", phone: "", email: "", moveType: "", homeSize: "", moveDate: "", flexibleDate: false,
  fromAddress: "", fromEmirate: "Dubai", fromFloor: "", fromLift: "",
  toAddress: "", toEmirate: "Dubai", toFloor: "", toLift: "",
  services: [], packing: "full", items: {}, itemsUnsure: false, extras: [], notes: "",
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const digits = (v: string) => v.replace(/\D/g, "")

/** Per-step validation. Returns field → message; empty object means the step is valid. */
export function validateStep(step: number, q: MoversQuote): Record<string, string> {
  const e: Record<string, string> = {}
  if (step === 0) {
    if (q.name.trim().length < 2) e.name = "Please enter your full name"
    if (digits(q.phone).length < 8 || digits(q.phone).length > 15) e.phone = "Enter a valid phone number"
    if (!EMAIL_RE.test(q.email.trim())) e.email = "Enter a valid email address"
    if (!q.moveType) e.moveType = "Choose what you are moving"
    if (!q.homeSize) e.homeSize = "Choose the size"
    if (!/^\d{4}-\d{2}-\d{2}$/.test(q.moveDate)) e.moveDate = "Pick your moving date"
  }
  if (step === 1) {
    if (q.fromAddress.trim().length < 5) e.fromAddress = "Enter the pickup address"
    if (q.toAddress.trim().length < 5) e.toAddress = "Enter the drop-off address"
    if (!q.fromLift) e.fromLift = "Is there a lift at pickup?"
    if (!q.toLift) e.toLift = "Is there a lift at drop-off?"
  }
  if (step === 2) {
    const n = Object.values(q.items).reduce((a, b) => a + b, 0)
    if (n === 0 && !q.itemsUnsure) e.items = "Add your main items, or tick “I’m not sure — the team will survey”"
  }
  return e
}

export const validateAll = (q: MoversQuote) =>
  [0, 1, 2].reduce<Record<string, string>>((acc, s) => ({ ...acc, ...validateStep(s, q) }), {})

import type { CatalogueItem } from "../api/items";

/**
 * Shelf headings for the item picker.
 *
 * PRESENTATION ONLY. Nothing here reaches the quote: grouping changes which
 * shelf a row is displayed on, never what is submitted. These nine are the
 * shelves a person actually pictures when asked what they are putting into
 * storage; the rows are sorted onto them by name (see NAME_HINTS).
 */
export interface ItemGroup {
  key: string;
  label: string;
  icon: string;
}

export const ITEM_GROUPS: ItemGroup[] = [
  { key: "furniture", label: "Furniture", icon: "🛋️" },
  { key: "appliances", label: "Appliances", icon: "🔌" },
  { key: "electronics", label: "Electronics", icon: "💻" },
  { key: "kitchen", label: "Kitchen", icon: "🍳" },
  { key: "boxes", label: "Boxes & Bags", icon: "📦" },
  { key: "fitness", label: "Fitness & Music", icon: "🎸" },
  { key: "kids", label: "Kids", icon: "🧸" },
  { key: "decor", label: "Decor", icon: "🖼️" },
  { key: "other", label: "Other", icon: "📁" },
];

/**
 * The UAE item list (dubai_items_list) carries only a name and a points figure
 * — no category column — so every row is shelved by what its name says. Order
 * matters: narrower hints go first ("Kids bath tub" is a kids item, not
 * kitchen; "Iron box" is an appliance, not a box; "Mattress" is furniture).
 */
const NAME_HINTS: [RegExp, string][] = [
  [/\b(kids?|baby|crib|cradle|feeding|pregnancy|baricade|barricade|stroller|pram|toy|teddy|jhula|jula|trampoline|tricycle|try cycle|play pen|slider?|walker|feeding)\b/i, "kids"],
  [/(iron box|iron bucket|ironing)/i, "appliances"],
  [/(suitcase|luggage|trolley bag|\bbag\b|\bbags\b|backpack|\bbox\b|\bboxes\b|carton|crate|trunk|container|jumbo|\bfile box\b|gunny|\btub\b|basket|cycle suitcase|archery equipment cases)/i, "boxes"],
  [/(water drum|steel drum|barbeque drum|bean bag)/i, "kitchen"],
  [/(dumbbell|weight|gym|treadmill|exercise|cross\s?trainer|crossfit|elliptical|rowing|squat|punching|boxing|trainer|cricket|badminton|tennis|archery|target|bicycle|\bcycle\b|bike|scooty|helmet|massager|massage|vibration|piano|guitar|keyboard|violin|veena|harmonium|drum|cymbal|cajon|mridangam|tabala|instrument|speaker stand|foose|carrom|football|\bcar\b|car-)/i, "fitness"],
  [/(\btv\b|television|crt|home theat|music system|soundbar|speakers?|amplifier|computer|\bcpu\b|laptop|laptap|monitor|printer|plotter|3d printer|projector|\bups\b|inverter|invertor|stabilizer|dth|dvd|camera|dslr|flycam|tripot|tristand|telescope|play\s?station|gaming|keyboard \( computer|shredder|sound panel|acoustic panel|light board|robotic|lamination|heat press|heat pressure)/i, "electronics"],
  [/(fridge|freezer|refrigerator|washing machine|washer|dryer|dish\s?washer|\bac\b|split ac|window ac|cooler|heater|geyser|water purifier|water dispenser|water softner|water motor|vaccuum|vaccum|vacuum|air purifier|humidifier|\bfan\b|chimney|microwave|microwoven|\botg\b|oven|toaster|sewing|weighing|oxygen|autoclave|compressor|extinguisher|solar|chakki|grinder|mixer|juicer|food processor|air fryer|machine)/i, "appliances"],
  [/(kitchen|stove|cooking|cooker|steamer|idly|biryani|sandwich|coffee machine|ice cream|rice|dinner set|crockery|utensil|plate|pot\b|steel sink|sink|cylinder|dustbin|bucket|water can|water drum|steel drum|bar counter|barbeq|stool)/i, "kitchen"],
  [/(painting|photo frame|frames?|statue|show\s?piece|showpiece|mirror|clock|curtain|blind|pooja|mandir|temple|golu|shangler|vase|flower|lamp|carved|art\b|whiteboard|white board|glass board|blackboard|mannequin|christmas|fireplace|deer head|tent|umbrella|plant|aquarium|antique)/i, "decor"],
  [/(sofa|couch|chair|table|tepoy|cot\b|bed\b|beds\b|mattress|matress|pillow|cushion|quilt|blanket|almirah|almarah|cupboard|wardrobe|cabinet|shelf|showcase|rack|stand|unit|bench|ottoman|recliner|deewan|diwan|swing|partition|divider|door|plank|ply wood|pallet|wood|mat\b|carpet|trolley|cart|locker|desk|drawers|counter|work station|bar cart|hanger|ramp|ladder|step)/i, "furniture"],
];

/** Which shelf an item belongs on. Never fails — everything lands somewhere. */
export function groupFor(item: CatalogueItem): string {
  for (const [re, group] of NAME_HINTS) {
    if (re.test(item.name)) return group;
  }
  return "other";
}

export function groupLabel(key: string): string {
  return ITEM_GROUPS.find((g) => g.key === key)?.label ?? "Other";
}

/**
 * Split a list onto its shelves, in ITEM_GROUPS order and skipping empty ones.
 * Used for both browsing the catalogue and for the customer's own basket.
 */
export function byGroup<T extends CatalogueItem>(items: T[]): { group: ItemGroup; items: T[] }[] {
  const buckets = new Map<string, T[]>();
  for (const it of items) {
    const k = groupFor(it);
    const list = buckets.get(k);
    if (list) list.push(it);
    else buckets.set(k, [it]);
  }
  return ITEM_GROUPS.filter((g) => buckets.get(g.key)?.length).map((g) => ({
    group: g,
    items: buckets.get(g.key)!,
  }));
}

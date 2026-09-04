import { FACILITY_BY_KEY } from "@/lib/facilities"

/**
 * Arabic emirate + area registry for /ar.
 *
 * SLUGS ARE SHARED WITH ENGLISH ON PURPOSE
 * ----------------------------------------
 * /ar/locations/sharjah/al-nahda mirrors /locations/sharjah/al-nahda, so the two
 * can be declared as hreflang alternates of each other. Do not "translate" a
 * slug — an Arabic-script URL would break that pairing and gains nothing.
 *
 * FACILITY CLAIMS
 * ---------------
 * `hasFacility` is read from lib/facilities.ts, never hard-coded here. Dubai,
 * Sharjah and Ajman have warehouses; Abu Dhabi is a COLLECTION-ONLY service area
 * and its pages must not imply otherwise.
 *
 * LANGUAGE
 * --------
 * Modern Standard Arabic, which is what UAE web copy uses. Numerals are Western
 * (12.65, 24-48) because that is how prices and phone numbers are written in
 * Gulf commercial Arabic — do not convert them to Eastern Arabic-Indic digits.
 */

export type ArArea = {
  slug: string
  /** Arabic display name. */
  name: string
  /** English name, kept for the language toggle and for internal QA. */
  nameEn: string
  /** One-line hero blurb. */
  blurb: string
  /** One distinct paragraph about this district. Not a translated template. */
  body: string
  faqs: { q: string; a: string }[]
}

export type ArEmirate = {
  slug: "dubai" | "sharjah" | "ajman" | "abu-dhabi"
  name: string
  nameEn: string
  /** Facility key in lib/facilities.ts, or null when collection-only. */
  facilityKey: "dubai" | "sharjah" | "ajman" | null
  title: string
  description: string
  keywords: string
  heroBlurb: string
  intro: [string, string]
  faqs: { q: string; a: string }[]
  areas: ArArea[]
}

/** Shared UI strings, so wording cannot drift between the Arabic pages. */
export const AR = {
  brand: "سيف ستوريج",
  home: "الرئيسية",
  locations: "المواقع",
  getQuote: "احصل على عرض سعر مجاني",
  call: "اتصل بنا",
  whatsapp: "واتساب",
  perSqft: "درهم / قدم مربع شهرياً",
  vatIncl: "شامل ضريبة القيمة المضافة",
  reviewsWorldwide: "تقييم حول العالم",
  howItWorks: "كيف تعمل الخدمة",
  pricing: "الأسعار",
  faqTitle: "أسئلة شائعة",
  serviceAreas: "المناطق التي نخدمها",
  nearbyAreas: "مناطق قريبة",
  allAreasIn: "جميع مناطق",
  backTo: "العودة إلى",
  steps: [
    { n: "الخطوة 01", t: "أخبرنا بما لديك", d: "اتصال أو رسالة واتساب أو نموذج العرض. قائمة تقريبية تكفي لتحديد المساحة." },
    { n: "الخطوة 02", t: "نأتي إليك", d: "يصل فريقنا في الموعد المتفق عليه، يغلّف كل شيء ويحمّله." },
    { n: "الخطوة 03", t: "التخزين والجرد", d: "تُخزَّن الأغراض في مستودع مغطى تحت المراقبة، ومسجّلة حتى يسهل إيجادها." },
    { n: "الخطوة 04", t: "التوصيل عند الطلب", d: "كل الأغراض أو جزء منها، إلى العنوان الذي تختاره، عادة خلال 24-48 ساعة." },
  ],
  included: [
    { t: "الاستلام من باب منزلك", d: "يأتي فريقنا إلى عنوانك، يغلّف ما سيُخزَّن ويحمّله." },
    { t: "قياس المساحة لا التخمين", d: "تُحتسب الفاتورة على المساحة التي تشغلها أغراضك فعلياً، لا على حجم وحدة ثابت." },
    { t: "مستودع مغطى ومراقَب", d: "كاميرات مراقبة متعددة الزوايا تغطي كل ممر ومدخل ومنطقة تحميل وتخزين." },
    { t: "استرجاع جزئي", d: "استرجع صندوقاً واحداً أو كل شيء، عادة خلال 24-48 ساعة." },
  ],
  priceBullets: [
    "لا حد أدنى لمدة التخزين",
    "لا رسوم على عرض السعر أو المعاينة",
    "التغليف والتحميل مشمولان في الاستلام",
    "استرجاع جزئي دون إغلاق الحساب",
  ],
} as const

/** Sentence stating where goods are kept, driven by lib/facilities.ts. */
export function arStorageLocation(key: ArEmirate["facilityKey"], emirateAr: string): string {
  if (!key) {
    return `تُنقل أغراضك إلى أقرب مستودع لدينا وتُخزَّن فيه. خدمتنا في ${emirateAr} هي الاستلام والتوصيل من باب منزلك.`
  }
  const f = FACILITY_BY_KEY[key]
  if (f?.address) {
    return `تُخزَّن أغراضك في مستودعنا في ${emirateAr}، ${f.address}.`
  }
  return `تُخزَّن أغراضك في مستودعنا في ${emirateAr}.`
}

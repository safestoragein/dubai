// Fails the build if lib/blog-meta.ts's FEED_RULES rewrite punctuation.
//
// Why this exists
// ---------------
// Blog copy is authored in the safestorage.in dashboard. Whatever the editor
// types there — brackets, braces, pipes, percent signs, quotes — is content, and
// has to reach the page unchanged.
//
// Two rules once stripped the square brackets around CTA link labels, so a post
// written as "[Get Free Quotation]" published as "Get Free Quotation". The
// intention was to tidy what looked like an unfilled placeholder; the effect was
// to silently edit the author's words. It took a screenshot from the client to
// notice, because nothing in the build objected.
//
// FEED_RULES exists to reconcile FACTS the site publishes differently from the
// feed — price, address, email, Indian numbering, opening hours — and to repoint
// legacy URLs that now 301. That is all. This check enforces the distinction by
// running the real normaliseFeedContent over a string containing every character
// on a keyboard and asserting it comes back byte-identical.
//
// Usage: node scripts/check-feed-punctuation.mjs   (exit 1 = punctuation altered)

import { readFileSync } from "node:fs"

const SRC = "lib/blog-meta.ts"

// Every printable ASCII punctuation/symbol key, plus the shapes the editor
// actually produces around links and inside prose.
const KEYBOARD = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
const SAMPLES = [
  KEYBOARD,
  "[Get Free Quotation]",
  "[Here More Information]",
  "[Click Here For Quotation]",
  "Sizes {small|medium|large} — 50% off (today only) #storage @dubai ~approx $100 *terms apply!",
  "A case that would sit contentedly in a Bordeaux cellar — [Get Free Quotation] — is fine.",
]

// Pull the rules out of the TypeScript source without a build step: strip the
// imports and the type annotation, then evaluate the array literal.
const src = readFileSync(SRC, "utf8")
const start = src.indexOf("const FEED_RULES")
// Skip the type annotation — `const FEED_RULES: Array<[RegExp, string]> = [`
// contains a `[` of its own, so anchor on the assignment instead.
const assign = src.indexOf("= [", start)
const open = assign === -1 ? -1 : assign + 2
if (start === -1 || open === -1) {
  console.error(`check-feed-punctuation: could not find FEED_RULES in ${SRC}`)
  process.exit(1)
}
// Walk to the matching close bracket, ignoring brackets inside regex/strings is
// unnecessary here because the array is one rule per line and ends at "\n]".
const close = src.indexOf("\n]", open)
const literal = src.slice(open, close + 2)

// The rules reference constants imported from company-facts; their values do not
// matter for a punctuation test, so any non-empty stand-in works.
const stub = "X"
const body = `
  const PRICE_PER_SQFT_AED = ${JSON.stringify(stub)}
  const EMAIL = ${JSON.stringify(stub)}
  const ADDRESS_FULL = ${JSON.stringify(stub)}
  const HOURS_DISPLAY = ${JSON.stringify(stub)}
  return ${literal}
`
let rules
try {
  rules = new Function(body)()
} catch (err) {
  console.error("check-feed-punctuation: could not evaluate FEED_RULES —", err.message)
  process.exit(1)
}

const apply = (s) => rules.reduce((acc, [re, rep]) => acc.replace(re, rep), s)

let failed = false
for (const sample of SAMPLES) {
  const out = apply(sample)
  if (out !== sample) {
    failed = true
    console.error("\ncheck-feed-punctuation: a FEED_RULE rewrote punctuation.")
    console.error("  in : " + JSON.stringify(sample))
    console.error("  out: " + JSON.stringify(out))
  }
}

if (failed) {
  console.error(
    "\nFEED_RULES may only reconcile facts (price, address, email, numbering,\n" +
      "hours) or repoint legacy URLs. Characters the author typed are content and\n" +
      "must reach the page unchanged. See the note in " + SRC + ".\n"
  )
  process.exit(1)
}

console.log("check-feed-punctuation: OK — FEED_RULES leave every keyboard character intact.")

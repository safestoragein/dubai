// Fails the build-time check when an HTML entity (&amp; &apos; &nbsp; &#39; …)
// is written inside a plain JavaScript string, where nothing will ever decode it.
//
// Why this exists
// ---------------
// JSX decodes entities in two places and two places only — element text and
// attribute values:
//
//   <p title="A &amp; B">C &amp; D</p>   ->  title: "A & B", children: "C & D"
//   const s = "E &amp; F"                ->  "E &amp; F"      <-- shipped verbatim
//
// The third line is the trap. Page copy that lives in an array or object —
// FAQ questions and answers, `benefits` lists, section titles — is a plain
// string, so `&amp;` reaches the browser as the literal text "&amp;". /faq
// shipped six section headings reading "Billing &amp; Cancellation" and nine
// possessives reading "Dubai&apos;s" this way; /storage-units-dubai,
// /storage-size-guide, /self-storage-dubai, /privacy-policy, /document-storage
// and /locations/deira had the same bug in smaller doses.
//
// The fix is always the same: write the character itself. An apostrophe and an
// ampersand are legal in every one of these positions.
//
// Usage: node scripts/check-html-entities.mjs   (exit 1 = offences found)

import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative, sep } from "node:path"
import ts from "typescript"

const ROOTS = ["app", "components", "lib", "data", "hooks"]

// Paths that assemble markup as strings, where an entity is the correct way to
// write the character and not the bug this script hunts for — the exact
// opposite of the rule everywhere else.
//
//   lib/email/*            raw HTML email bodies; no JSX anywhere in the path
//   app/sitemap-*.xml/*    XML serialisation, whose escaper must name the five
//                          predefined entities in order to emit them
const EXEMPT = [/^lib\/email\//, /^app\/sitemap-[^/]*\.xml\//]

const ENTITY = /&(?:[a-zA-Z][a-zA-Z0-9]{1,9}|#\d{1,6}|#x[0-9a-fA-F]{1,5});/g

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry.startsWith(".")) continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) yield* walk(full)
    else if (/\.(tsx?|jsx?|mts|mjs)$/.test(full)) yield full
  }
}

// A string literal is safe only when it *is* a JSX attribute's value —
// `<Foo bar="a &amp; b" />`. Anywhere else (object property, array element,
// variable, call argument, JSX expression container) the entity survives.
function isJsxAttributeValue(node) {
  return node.parent && ts.isJsxAttribute(node.parent) && node.parent.initializer === node
}

// Pattern source, not display text. `String.raw` templates and `new RegExp(…)`
// arguments describe the HTML being matched — lib/blog-meta.ts has to name
// `&nbsp;` to strip it from feed content — so an entity there is the point.
function isPatternSource(node) {
  for (let n = node; n; n = n.parent) {
    if (ts.isTaggedTemplateExpression(n)) return true
    if (ts.isNewExpression(n) && ts.isIdentifier(n.expression) && n.expression.text === "RegExp") return true
    if (ts.isRegularExpressionLiteral(n)) return true
    // Stop climbing at a statement boundary — an entity in unrelated text on the
    // same statement as a RegExp must still be reported.
    if (ts.isStatement(n)) return false
  }
  return false
}

const offences = []

for (const root of ROOTS) {
  let dir
  try {
    dir = statSync(root).isDirectory() ? root : null
  } catch {
    continue
  }
  if (!dir) continue

  for (const file of walk(dir)) {
    const rel = relative(process.cwd(), file).split(sep).join("/")
    if (EXEMPT.some((re) => re.test(rel))) continue

    const text = readFileSync(file, "utf8")
    if (!ENTITY.test(text)) {
      ENTITY.lastIndex = 0
      continue
    }
    ENTITY.lastIndex = 0

    const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)

    const visit = (node) => {
      const isPlainString =
        ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(node) ||
        ts.isTemplateHead(node) ||
        ts.isTemplateMiddle(node) ||
        ts.isTemplateTail(node)

      if (isPlainString && !isJsxAttributeValue(node) && !isPatternSource(node)) {
        const found = node.text.match(ENTITY)
        if (found) {
          const { line } = source.getLineAndCharacterOfPosition(node.getStart(source))
          offences.push({
            file: rel,
            line: line + 1,
            entities: [...new Set(found)].join(" "),
            snippet: node.text.trim().slice(0, 90),
          })
        }
      }
      ts.forEachChild(node, visit)
    }
    visit(source)
  }
}

if (offences.length === 0) {
  console.log("check-html-entities: OK — no HTML entities inside plain JS strings.")
  process.exit(0)
}

console.error(`check-html-entities: ${offences.length} string(s) will ship an undecoded entity.\n`)
for (const o of offences) {
  console.error(`  ${o.file}:${o.line}  [${o.entities}]`)
  console.error(`    ${o.snippet}${o.snippet.length === 90 ? "…" : ""}`)
}
console.error("\nWrite the character itself (& ' \" – —) instead of the entity.")
process.exit(1)

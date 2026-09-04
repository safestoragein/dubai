import { redirect } from "next/navigation"

/**
 * /ar has no Arabic homepage yet — only the location tree is translated. Rather
 * than render a stub that Google would index as thin content, send visitors to
 * the Arabic hub. Revisit when the rest of the site is translated.
 */
export default function ArIndex() {
  redirect("/ar/locations")
}

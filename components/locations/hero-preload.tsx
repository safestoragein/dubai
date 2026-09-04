/**
 * Preloads the hero image used by emirate-theme.module.css.
 *
 * The hero is a CSS background, which the browser's preload scanner cannot see:
 * it is not requested until the stylesheet has downloaded and parsed, so it
 * starts late and lands squarely in the LCP. This hoists the request to the top
 * of the document.
 *
 * imageSrcSet/imageSizes mirror the CSS breakpoint (860px) so the preload
 * fetches the SAME file the stylesheet will use — a mismatch would download
 * both, which is worse than no preload at all.
 */
export default function HeroPreload() {
  return (
    <link
      rel="preload"
      as="image"
      fetchPriority="high"
      // eslint-disable-next-line @next/next/no-img-element
      imageSrcSet="/expansive-storage-768.webp 768w, /expansive-storage.webp 1024w"
      imageSizes="(max-width: 860px) 768px, 1024px"
      href="/expansive-storage.webp"
      type="image/webp"
    />
  )
}

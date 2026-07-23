// Build blog image URLs that live on the safestorage.ae domain (good for SEO)
// instead of hotlinking safestorage.in. The bytes are still served from the
// safestorage.in image store, transparently proxied by the /blog-images/*
// rewrite configured in next.config.mjs.
//
// Accepts whatever the backend stores in `post_images`:
//   - "photo.jpg"                                  -> bare filename
//   - "post_images/photo.jpg"                      -> path prefix
//   - "https://safestorage.in/post_images/photo.jpg" -> full legacy URL
//   - "https://some-other-host/x.jpg"              -> external URL (kept as-is)
export function blogImageUrl(postImages?: string | null): string | null {
  if (!postImages) return null

  const value = postImages.trim()
  if (!value) return null

  // Non-safestorage.in absolute URLs are left untouched.
  if (/^https?:\/\//i.test(value) && !/safestorage\.in/i.test(value)) {
    return value
  }

  const file = value
    .replace(/^https?:\/\/safestorage\.in\/post_images\//i, '')
    .replace(/^https?:\/\/safestorage\.in\//i, '')
    .replace(/^post_images\//i, '')
    .replace(/^\/+/, '')

  return `https://safestorage.ae/blog-images/${file}`
}

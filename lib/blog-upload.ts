// Saves admin-uploaded blog images to the nginx-served image directory
// (/var/www/blog-images by default). Returns the stored filename, which goes
// into blog_content.post_images and is later resolved by blogImageUrl() to a
// safestorage.ae/blog-images/<file> URL. Server-only.
import "server-only"
import { writeFile, mkdir } from "fs/promises"
import path from "path"
import { randomUUID } from "crypto"

const DIR = process.env.BLOG_IMAGES_DIR || "/var/www/blog-images"

export async function saveBlogImage(file: File): Promise<string> {
  const buf = Buffer.from(await file.arrayBuffer())
  const rawExt = (file.name.split(".").pop() || "").toLowerCase().replace(/[^a-z0-9]/g, "")
  const ext = rawExt || (file.type.includes("jpeg") ? "jpg" : file.type.split("/")[1] || "png")
  const filename = `${randomUUID()}.${ext}`
  await mkdir(DIR, { recursive: true })
  await writeFile(path.join(DIR, filename), buf)
  return filename
}

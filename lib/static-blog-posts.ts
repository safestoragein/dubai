// The 15 hand-written blog posts that live as static routes under app/blog/<slug>/.
//
// They were in the sitemap but nothing on the site linked to them: the /blog listing
// is built entirely from the safestorage.in feed, which does not contain these posts.
// A crawler could only reach them via the sitemap — i.e. they were orphan URLs.
//
// This module is the single source of truth for their listing metadata. It feeds:
//   - lib/blog-listing.ts  -> they appear in /blog cards + the "All Storage Articles" index
//   - components/blog/related-guides.tsx -> lateral links between the posts themselves
//
// When a new static post route is added, add it here too or it will be orphaned again.
// app/sitemap.ts keeps its own hardcoded list of these slugs — update both.

import { getRandomBlogImage } from "@/lib/blog-images"
import type { ListingPost } from "@/lib/blog-listing"

export interface StaticPost {
  slug: string
  title: string
  excerpt: string
  category: string
  /** datePublished from the page's BlogPosting schema — keeps listing order honest. */
  date: string
  readTime: string
  /** Slugs of topically-close posts, rendered as "Related guides" on the post page. */
  related: string[]
}

// These posts have no row in blog_content, so they have no real post_id — but /blog
// sorts strictly by post_id descending, so they still need one. They get NEGATIVE ids:
// a negative id can never collide with, or outrank, a real feed post_id however far the
// feed grows, so the static guides always sit after every API post in the listing.
// The newest static post gets -1, keeping them newest-first among themselves.
const staticListingId = (index: number) => index - STATIC_POSTS.length

// Separate positive seed for the deterministic like/view counts — keeps those numbers
// non-negative and unchanged now that the listing ids have moved.
const COUNTER_SEED = 900000

export const STATIC_POSTS: StaticPost[] = [
  {
    slug: "self-storage-guide-dubai",
    title: "Complete Self Storage Guide Dubai 2025 — Everything You Need to Know",
    excerpt:
      "Definitive beginner's guide to self storage in Dubai. Process, costs, tips, and what to look for. Updated 2025.",
    category: "Storage Tips",
    date: "2025-01-05",
    readTime: "10 min read",
    related: ["self-storage-cost-dubai", "what-can-you-store", "mobile-storage-dubai"],
  },
  {
    slug: "self-storage-cost-dubai",
    title: "How Much Does Self Storage Cost in Dubai? 2025 Price Guide",
    excerpt:
      "Detailed breakdown of self storage costs in Dubai by unit size. SafeStorage Dubai pricing from 12.65 AED / sqft. What's included and what to avoid.",
    category: "Storage Tips",
    date: "2025-01-15",
    readTime: "8 min read",
    related: ["self-storage-guide-dubai", "storage-vs-bigger-home", "long-term-storage-expats"],
  },
  {
    slug: "what-can-you-store",
    title: "What Can You Store in a Storage Unit in Dubai? Complete Guide",
    excerpt: "Full guide to what's permitted and prohibited in Dubai storage units. Know before you book.",
    category: "Storage Tips",
    date: "2025-01-20",
    readTime: "7 min read",
    related: ["self-storage-guide-dubai", "packing-tips-dubai", "self-storage-cost-dubai"],
  },
  {
    slug: "villa-moving-guide-dubai",
    title: "Villa Moving Guide Dubai — Complete 8-Week Checklist",
    excerpt:
      "Everything you need to know about moving a Dubai villa. Step-by-step checklist, storage options, and logistics guide.",
    category: "Moving Guide",
    date: "2025-01-30",
    readTime: "9 min read",
    related: ["best-movers-dubai", "packing-tips-dubai", "renovation-storage-tips"],
  },
  {
    slug: "packing-tips-dubai",
    title: "Packing Tips for Storage in Dubai — Pack Right the First Time",
    excerpt:
      "Expert packing guide for Dubai storage. How to protect your belongings, use space efficiently, and avoid the most common packing mistakes.",
    category: "Storage Tips",
    date: "2025-02-01",
    readTime: "7 min read",
    related: ["what-can-you-store", "villa-moving-guide-dubai", "declutter-dubai-apartment"],
  },
  {
    slug: "best-movers-dubai",
    title: "Best Movers Dubai 2025 — Complete Hiring Guide",
    excerpt:
      "How to find and vet the best movers in Dubai. What to check, red flags, and protecting your belongings during the move.",
    category: "Moving Guide",
    date: "2025-02-05",
    readTime: "8 min read",
    related: ["villa-moving-guide-dubai", "packing-tips-dubai", "mobile-storage-dubai"],
  },
  {
    slug: "small-business-storage",
    title: "Small Business Storage Dubai — Flexible Alternative to Warehouses",
    excerpt:
      "How smart Dubai small businesses use storage units to avoid warehouse leases. Flexible, affordable, scale up or down.",
    category: "Business Storage",
    date: "2025-02-10",
    readTime: "7 min read",
    related: ["self-storage-cost-dubai", "storage-vs-bigger-home", "self-storage-guide-dubai"],
  },
  {
    slug: "long-term-storage-expats",
    title: "Long-Term Storage Dubai for Expats — Complete Guide & Pricing",
    excerpt:
      "Everything Dubai expats need to know about long-term storage. Cost breakdown, remote management, and when it's the right choice.",
    category: "Personal Storage",
    date: "2025-02-15",
    readTime: "9 min read",
    related: ["summer-storage-dubai", "self-storage-cost-dubai", "declutter-guide-dubai"],
  },
  {
    slug: "storage-vs-bigger-home",
    title: "Storage Unit vs Renting Bigger Apartment in Dubai — Which Saves More?",
    excerpt:
      "Full cost analysis: storage unit vs upgrading apartment in Dubai. The numbers strongly favour storage in most scenarios.",
    category: "Personal Storage",
    date: "2025-02-20",
    readTime: "7 min read",
    related: ["self-storage-cost-dubai", "declutter-dubai-apartment", "small-business-storage"],
  },
  {
    slug: "mobile-storage-dubai",
    title: "Mobile Storage Dubai — We Pick Up, Store & Deliver Back",
    excerpt:
      "Mobile storage with door-to-door pickup across Dubai. We come to you, collect your items, store them safely, and deliver back. No hassle, no transport needed.",
    category: "Storage Tips",
    date: "2025-02-25",
    readTime: "6 min read",
    related: ["self-storage-guide-dubai", "best-movers-dubai", "small-business-storage"],
  },
  {
    slug: "renovation-storage-tips",
    title: "Renovation Storage Tips Dubai — Make Your Reno Stress-Free",
    excerpt:
      "Complete guide to storing belongings during Dubai apartment and villa renovation. What to store, how to plan, and the cost breakdown.",
    category: "Storage Tips",
    date: "2025-03-01",
    readTime: "7 min read",
    related: ["villa-moving-guide-dubai", "packing-tips-dubai", "seasonal-ramadan-storage"],
  },
  {
    slug: "seasonal-ramadan-storage",
    title: "Seasonal & Ramadan Storage Dubai — Managing Seasonal Items",
    excerpt:
      "How Dubai residents use seasonal storage for Ramadan, Eid, summer and school year transitions. What to store and when.",
    category: "Storage Tips",
    date: "2025-03-01",
    readTime: "6 min read",
    related: ["summer-storage-dubai", "declutter-dubai-apartment", "renovation-storage-tips"],
  },
  {
    slug: "summer-storage-dubai",
    title: "Summer Storage Dubai — Complete Guide for Expats Leaving for Summer",
    excerpt:
      "Everything Dubai expats need to know about storing belongings when leaving for summer. Save money, free up your apartment, and travel with peace of mind.",
    category: "Personal Storage",
    date: "2025-03-01",
    readTime: "7 min read",
    related: ["long-term-storage-expats", "seasonal-ramadan-storage", "mobile-storage-dubai"],
  },
  {
    slug: "declutter-dubai-apartment",
    title: "How to Declutter Your Dubai Apartment — Complete Step-by-Step Guide",
    excerpt: "The Dubai declutter method for expat apartments. What to keep, store, sell and donate without regret.",
    category: "Organization",
    date: "2025-03-10",
    readTime: "8 min read",
    related: ["declutter-guide-dubai", "packing-tips-dubai", "storage-vs-bigger-home"],
  },
  {
    slug: "declutter-guide-dubai",
    title: "Declutter Guide Dubai 2025 — Complete Step-by-Step Process",
    excerpt:
      "Where to sell, donate, store and dispose of items when decluttering in Dubai. Updated 2025 guide with current platforms and charities.",
    category: "Organization",
    date: "2025-03-15",
    readTime: "8 min read",
    related: ["declutter-dubai-apartment", "long-term-storage-expats", "seasonal-ramadan-storage"],
  },
]

export function getStaticPost(slug: string): StaticPost | undefined {
  return STATIC_POSTS.find((p) => p.slug === slug)
}

/** The `related` posts of `slug`, resolved and de-referenced. Unknown slugs are dropped. */
export function getRelatedStaticPosts(slug: string): StaticPost[] {
  const post = getStaticPost(slug)
  if (!post) return []
  return post.related.map((s) => getStaticPost(s)).filter((p): p is StaticPost => Boolean(p))
}

/** Shaped like a feed post so the listing can render both from one array. */
export function getStaticListingPosts(): ListingPost[] {
  return STATIC_POSTS.map((post, index) => ({
    id: staticListingId(index),
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    author: { name: "SafeStorage Dubai Editorial Team" },
    categories: [post.category],
    date: post.date,
    image: getRandomBlogImage(post.category, index),
    readTime: post.readTime,
    likes: ((COUNTER_SEED + index) % 100) + 50,
    views: ((COUNTER_SEED + index) % 400) + 100,
    comments: [],
  }))
}

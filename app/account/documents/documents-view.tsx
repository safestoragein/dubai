"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Download, FileText, ImageOff, X } from "lucide-react"
import c from "../account.module.css"

export type Img = { id: number; file: string; doc: boolean; url: string; fallback: string; quotation: number; quotation_label: string; created: string }
export type Group = { title: string; images: Img[] }
export type Quote = { id: number; label: string }

const day = (v: string) => {
  const d = new Date(String(v).replace(" ", "T"))
  return !v || Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

function Thumb({ img, onOpen }: { img: Img; onOpen: (id: number) => void }) {
  const [src, setSrc] = useState(img.url)
  const [bad, setBad] = useState(false)
  if (img.doc) {
    return (
      <a className={c.docCard} href={img.url} target="_blank" rel="noopener noreferrer">
        <span className={c.docIcon}><FileText aria-hidden="true" /></span>
        <span className={c.docName}>{img.file.replace(/_\d{8,}.*$/, "") || "Document"}</span>
        <small>{img.quotation_label}{img.created ? ` · ${day(img.created)}` : ""}</small>
      </a>
    )
  }
  return (
    <figure className={c.imgCard}>
      <button type="button" className={c.imgBtn} onClick={() => !bad && onOpen(img.id)} aria-label="View image">
        {bad ? <span className={c.imgMissing}><ImageOff aria-hidden="true" /></span> : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={img.file} loading="lazy" decoding="async"
            onError={() => { if (img.fallback && src !== img.fallback) setSrc(img.fallback); else setBad(true) }} />
        )}
      </button>
      <figcaption>
        <span>{img.quotation_label || "—"}{img.created ? ` · ${day(img.created)}` : ""}</span>
        <a href={src} download target="_blank" rel="noopener noreferrer" aria-label="Download"><Download aria-hidden="true" /></a>
      </figcaption>
    </figure>
  )
}

export default function DocumentsView({ groups, quotations }: { groups: Group[]; quotations: Quote[] }) {
  const [qt, setQt] = useState<number | "all">("all")
  const [openId, setOpenId] = useState<number | null>(null)
  const [lbSrc, setLbSrc] = useState("")

  const shown = groups
    .map((g) => ({ title: g.title, images: g.images.filter((i) => qt === "all" || i.quotation === qt || i.quotation === 0) }))
    .filter((g) => g.images.length > 0)
  const total = shown.reduce((a, g) => a + g.images.length, 0)
  // every photo currently on the page, in the order they appear — the viewer steps through these
  const flat = shown.flatMap((g) => g.images.filter((i) => !i.doc))
  const idx = openId === null ? -1 : flat.findIndex((i) => i.id === openId)
  const cur = idx >= 0 ? flat[idx] : null
  const go = (d: number) => { if (flat.length > 1) setOpenId(flat[(idx + d + flat.length) % flat.length].id) }

  useEffect(() => { setLbSrc(cur ? cur.url : "") }, [cur?.id]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (openId === null) return
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null)
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }) // re-bound each render so go() always sees the current list

  return (
    <>
      {quotations.length > 0 && (
        <div className={c.subTabs} role="tablist" aria-label="Quotation" style={{ margin: "0 0 22px" }}>
          {[{ id: "all" as const, label: "All" }, ...quotations.map((q) => ({ id: q.id, label: q.label }))].map((q) => (
            <button key={String(q.id)} type="button" role="tab" aria-selected={qt === q.id} className={`${c.uTab} ${qt === q.id ? c.uTabOn : ""}`} onClick={() => setQt(q.id)}>
              {q.label}
            </button>
          ))}
        </div>
      )}

      {total === 0 ? (
        <section className={c.panel}>
          <div className={c.emptyOk}>
            <span className={c.emptyOkIcon}><ImageOff aria-hidden="true" /></span>
            <b style={{ color: "#19212e" }}>No documents yet</b>
            <span>Photos of your items, stacking pictures and documents will appear here as soon as our team adds them.</span>
          </div>
        </section>
      ) : (
        shown.map((g) => (
          <section key={g.title} className={`${c.panel} ${c.docSection}`}>
            <div className={c.panelHead}>
              <h2 className={c.panelTitle}>{g.title} <span className={c.count}>{g.images.length}</span></h2>
            </div>
            <div className={c.imgGrid}>
              {g.images.map((i) => <Thumb key={`${i.id}-${i.url}`} img={i} onOpen={setOpenId} />)}
            </div>
          </section>
        ))
      )}

      {cur && (
        <div className={c.lightbox} role="dialog" aria-modal="true" onClick={() => setOpenId(null)}>
          <button type="button" className={c.lightboxClose} onClick={() => setOpenId(null)} aria-label="Close"><X aria-hidden="true" /></button>
          {flat.length > 1 && (
            <>
              <button type="button" className={`${c.lightboxNav} ${c.lightboxPrev}`} onClick={(e) => { e.stopPropagation(); go(-1) }} aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button>
              <button type="button" className={`${c.lightboxNav} ${c.lightboxNext}`} onClick={(e) => { e.stopPropagation(); go(1) }} aria-label="Next image"><ChevronRight aria-hidden="true" /></button>
            </>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lbSrc || cur.url} alt={cur.file} onClick={(e) => e.stopPropagation()}
            onError={() => { if (cur.fallback && lbSrc !== cur.fallback) setLbSrc(cur.fallback) }} />
          <div className={c.lightboxBar} onClick={(e) => e.stopPropagation()}>
            <span>{idx + 1} / {flat.length}{cur.quotation_label ? ` · ${cur.quotation_label}` : ""}</span>
            <a className={c.lightboxDl} href={lbSrc || cur.url} download target="_blank" rel="noopener noreferrer"><Download aria-hidden="true" /> Download</a>
          </div>
        </div>
      )}
    </>
  )
}

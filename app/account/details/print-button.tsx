"use client"

import { Printer } from "lucide-react"
import c from "../account.module.css"

export default function PrintButton() {
  return (
    <button type="button" className={c.button} onClick={() => window.print()}>
      <Printer aria-hidden="true" /> Print details
    </button>
  )
}

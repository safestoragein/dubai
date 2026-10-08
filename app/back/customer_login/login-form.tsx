"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react"
import c from "./login.module.css"

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setBusy(true)
    try {
      const res = await fetch("/api/customer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) {
        router.push("/account")
        router.refresh()
        return
      }
      setError(data.error || "Could not sign in. Please try again.")
    } catch {
      setError("Could not reach the server. Please check your connection.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className={c.form} noValidate>
      <label className={c.field}>
        <Mail aria-hidden="true" />
        <input type="email" autoComplete="email" required value={email} placeholder="Email address"
          aria-label="Email address" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className={c.field}>
        <Lock aria-hidden="true" />
        <input type={show ? "text" : "password"} autoComplete="current-password" required value={password}
          placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="button" className={c.eye} onClick={() => setShow((v) => !v)}
          aria-label={show ? "Hide password" : "Show password"}>
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </label>
      <div className={c.row}>
        <label className={c.remember}>
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /> Remember me
        </label>
        <a className={c.forgot} href="/contact">Forgot Password?</a>
      </div>
      {error && <p className={c.error} role="alert">{error}</p>}
      <button type="submit" className={c.submit} disabled={busy}>
        {busy ? "Signing in…" : <>Login <ArrowRight size={20} /></>}
      </button>
    </form>
  )
}

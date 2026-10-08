import type { ReactNode } from "react"
import { CreditCard, HelpCircle, LayoutDashboard, Package, UserRound, CalendarDays } from "lucide-react"
import { EMAIL } from "@/lib/company-facts"
import c from "./account.module.css"
import LogoutButton from "./logout-button"

// Shared frame for every signed-in page: sidebar + top bar. `active` highlights the menu item.
export default function AccountShell({ active, name, orderCount, dueCount, crumb, children }: {
  active: "dashboard" | "orders"
  name: string
  orderCount: number
  dueCount: number
  crumb: string
  children: ReactNode
}) {
  const first = name.split(" ")[0] || "There"
  const orders = { length: orderCount }
  const hasDue = dueCount > 0
  const dues = { count: dueCount }
  return (
    <div className={c.page}>
      <div className={c.shell}>
        {/* ---------------- sidebar ---------------- */}
        <aside className={c.side}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={c.logo} src="/images/design-mode/logo.png" alt="SafeStorage Dubai" />
          <nav className={c.nav} aria-label="Account">
            <a className={`${c.navItem} ${active === "dashboard" ? c.navActive : ""}`} href="/account"><LayoutDashboard aria-hidden="true" /> Dashboard</a>
            <a className={`${c.navItem} ${active === "orders" ? c.navActive : ""}`} href="/account/orders"><Package aria-hidden="true" /> Orders{orders.length > 0 && <span className={c.badge}>{orders.length}</span>}</a>
            <a className={c.navItem} href="/account#payments"><CreditCard aria-hidden="true" /> Payments{hasDue && <span className={c.badge}>{dues.count}</span>}</a>
            <a className={c.navItem} href="/account#details"><UserRound aria-hidden="true" /> My details</a>
            <div className={c.navSep} />
            <a className={c.navItem} href={`mailto:${EMAIL}`}><HelpCircle aria-hidden="true" /> Help &amp; Support</a>
          </nav>
          <div className={c.sideBottom}>
            <LogoutButton />
          </div>
        </aside>


        <div className={c.main} id="top">
          <div className={c.top}>
            <div className={c.crumb}><LayoutDashboard aria-hidden="true" /> {crumb}</div>
            <div className={c.topRight}>
              <span className={c.chip}><CalendarDays aria-hidden="true" /> {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
              <span className={c.avatar} title={name}>{first.charAt(0).toUpperCase()}</span>
            </div>
          </div>
          <div className={c.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}

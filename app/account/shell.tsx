import type { ReactNode } from "react"
import { Bell, CalendarDays, CreditCard, LayoutGrid, Package, UserRound } from "lucide-react"
import c from "./account.module.css"
import LogoutButton from "./logout-button"

// Shared frame for every signed-in page: sidebar + top bar. `active` highlights the menu item.
export default function AccountShell({ active, name, customerId, orderCount, dueCount, crumb, children }: {
  active: "overview" | "orders" | "payments"
  name: string
  customerId?: string
  orderCount: number
  dueCount: number
  crumb: string
  children: ReactNode
}) {
  const initial = (name.split(" ")[0] || "T").charAt(0).toUpperCase()
  return (
    <div className={c.page}>
      <div className={c.shell}>
        <aside className={c.side}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={c.logo} src="/images/design-mode/logo.png" alt="SafeStorage Dubai" />
          <div className={c.caption}>MY ACCOUNT</div>
          <nav className={c.nav} aria-label="Account">
            <a className={`${c.navItem} ${active === "overview" ? c.navActive : ""}`} href="/account"><LayoutGrid aria-hidden="true" /> Overview</a>
            <a className={`${c.navItem} ${active === "orders" ? c.navActive : ""}`} href="/account/orders"><Package aria-hidden="true" /> Orders{orderCount > 0 && <span className={c.badge}>{orderCount}</span>}</a>
            <a className={`${c.navItem} ${active === "payments" ? c.navActive : ""}`} href="/account/payments"><CreditCard aria-hidden="true" /> Payments{dueCount > 0 && <span className={c.badge}>{dueCount}</span>}</a>
            <a className={c.navItem} href="/account#details"><UserRound aria-hidden="true" /> My details</a>
          </nav>
          <div className={c.sideBottom}>
            <div className={c.user}>
              <div className={c.userAvatar}>{initial}</div>
              <div>
                <div className={c.userName}>{name}</div>
                {customerId && <div className={c.userSub}>ID {customerId}</div>}
              </div>
            </div>
            <LogoutButton />
          </div>
        </aside>

        <div className={c.main} id="top">
          <header className={c.top}>
            <div className={c.crumb}>Account &nbsp; / &nbsp; <b>{crumb}</b></div>
            <div className={c.topRight}>
              <span className={c.chip}><CalendarDays aria-hidden="true" /> {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
              <Bell className={c.bell} aria-hidden="true" />
              <div className={c.avatar} title={name}>{initial}</div>
            </div>
          </header>
          <div className={c.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}

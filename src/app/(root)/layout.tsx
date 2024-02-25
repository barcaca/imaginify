import { MobileNav } from '@/components/shared/mobile-nav'
import { SideBar } from '@/components/shared/sidebar'

export default function LayoutRoot({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="root">
      <SideBar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  )
}

import Header from '@/components/layout/header/Header'
import '@/app/globals.css'
import SidebarFavorites from '@/components/layout/sidebar/favorites/SidebarFavorites'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="main bg-cultiva-main w-full">{children}</main>
      <div className="sticky top-20">
        <SidebarFavorites />
      </div>
    </>
  )
}

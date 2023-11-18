import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarCategory from "@/components/layout/sidebar/Category/SidebarCategory"
import SidebarFavorites from "@/components/layout/sidebar/favorites/SidebarFavorites"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main className="main bg-cultiva-main w-full h-[5000px]">{children}</main>
			<div className='sticky top-28'>
				<SidebarFavorites />
			</div>
		</>
	)
}
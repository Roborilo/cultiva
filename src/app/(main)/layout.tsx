import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Category/SidebarCategory"
import '@/app/globals.css'
import SidebarCategory from "@/components/layout/sidebar/Category/SidebarCategory"

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
				<SidebarCategory />
			</div>
		</>
	)
}
import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarProduct from "@/components/layout/sidebar/product/SidebarProduct"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<div className="w-screen h-screen reverse-layout overflow-hidden">
			<Header />
			<main className="main bg-cultiva-main w-full flex justify-center items-start">{children}</main>
			<div className='sticky top-28 overflow-y-auto sidebar w-[400px]'>
				<SidebarProduct />
			</div>
		</div>
	)
}
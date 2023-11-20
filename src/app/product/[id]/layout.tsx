import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarProduct from "@/components/layout/sidebar/product/SidebarProduct"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<div className="w-screen reverse-layout">
			<Header />
			<main className="main bg-cultiva-main w-full h-full flex justify-center items-start pb-4">{children}</main>
			<div className='sticky top-20 sidebar w-[400px]'>
				<SidebarProduct />
			</div>
		</div>
	)
}
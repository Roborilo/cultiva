import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarPurchase from "@/components/layout/sidebar/purchase/SidebarPurchase"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<div className="w-screen h-screen reverse-layout overflow-hidden">
			<Header />
			<main className="main bg-cultiva-main w-full flex justify-center items-start">{children}</main>
			<div className='sticky top-20 sidebar min-w-[400px]'>
				<SidebarPurchase />
			</div>
		</div>
	)
}
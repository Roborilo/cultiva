import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarUser from "@/components/layout/sidebar/user/SidebarUser"

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
				<SidebarUser />
			</div>
		</>
	)
}

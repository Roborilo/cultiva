import Header from "@/components/layout/header/Header"
import '@/app/globals.css'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main className="main bg-cultiva-main w-full h-full">{children}</main>
		</>
	)
}
import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarRoot from "@/components/layout/sidebar/Root"
import Input from "@/components/layout/sidebar/Form/Input"
import SidebarTopics from "@/components/layout/sidebar/Topics/SidebarTopics"
import Topic from "@/components/layout/sidebar/Topics/Topic"

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main className="main bg-cultiva-main w-full">{children}</main>
			<div className='sticky top-28'>
				<SidebarRoot>
					<h1 className="text-2xl font-bold pl-5 py-2">Guia</h1>
					<div className="flex items-center px-5 py-2">
						<Input placeholder="Pesquisar Informações" />
					</div>
					<SidebarTopics>
						<Topic name="Começo" />
						<Topic name="Cultura" />
						<Topic name="Frutas" />
						<Topic name="Vegetais" />
						<Topic name="Horta" />
						<Topic name="Sobre Nós" />
					</SidebarTopics>
				</SidebarRoot>
			</div>
		</>
	)
}
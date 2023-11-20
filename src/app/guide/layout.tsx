'use client'

import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarRoot from "@/components/layout/sidebar/Root"
import Input from "@/components/layout/sidebar/Form/Input"
import SidebarTopics from "@/components/layout/sidebar/Topics/SidebarTopics"
import Topic from "@/components/layout/sidebar/Topics/Topic"
import { createContext, useState } from "react"

const Pages = {
	Introducao: 'introducao',
	Comeco: 'comeco',
	Cultura: 'cultura',
	Frutas: 'frutas',
	Vegetais: 'vegetais',
	Horta: 'horta',
	Moda: 'moda',
	Casa: 'casa',
	Beleza: 'beleza',
	Viagem: 'viagem',
	Educacao: 'educacao',
	Comunidade: 'comunidade',
	Sobre: 'sobre',
}

export const pageContext = createContext(Pages.Introducao)


export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
	const [page, setPage] = useState(Pages.Introducao)

	return (
		<>
			<pageContext.Provider value={page}>
				<Header />
				<main className="main bg-cultiva-main w-full">{children}</main>
				<div className='sticky top-28'>
					<SidebarRoot>
						<h1 className="text-2xl font-bold pl-5 py-2">Guia</h1>
						<div className="flex items-center px-5 py-2">
							<Input placeholder="Pesquisar Informações" />
						</div>
						<SidebarTopics>
							<Topic name="Introdução" handleClick={() => setPage(Pages.Introducao)} />
							<Topic name="Começo" handleClick={() => setPage(Pages.Comeco)} />
							<Topic name="Cultura" handleClick={() => setPage(Pages.Cultura)} />
							<Topic name="Frutas" handleClick={() => setPage(Pages.Frutas)} />
							<Topic name="Vegetais" handleClick={() => setPage(Pages.Vegetais)} />
							<Topic name="Horta" handleClick={() => setPage(Pages.Horta)} />
							<Topic name="Moda Sustentável" handleClick={() => setPage(Pages.Moda)} />
							<Topic name="Casa Sustentável" handleClick={() => setPage(Pages.Casa)} />
							<Topic name="Beleza Consciente" handleClick={() => setPage(Pages.Beleza)} />
							<Topic name="Viagem Sustentável" handleClick={() => setPage(Pages.Viagem)} />
							<Topic name="Educação Ambiental" handleClick={() => setPage(Pages.Educacao)} />
							<Topic name="Comunidade" handleClick={() => setPage(Pages.Comunidade)} />
							<Topic name="Sobre Nós" handleClick={() => setPage(Pages.Sobre)} />
						</SidebarTopics>
					</SidebarRoot>
				</div>	
			</pageContext.Provider>
		</>
	)
}
'use client'

import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarUser from "@/components/layout/sidebar/user/SidebarUser"
import { createContext, useEffect, useState } from "react"
import useGetProfile from "@/components/customHooks/useGetProfile"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const PageContext = createContext('buys')
export const UserContext = createContext<IUser>({
	id: '',
	name: '',
	email: '',
	icon: '',
	telephone: '',
	addressId: '',
	address: null,
	producer: null,
	rating: [],
	comments: [],
	createdAt: '',
})

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	const [page, setPage] = useState('buys')
	const [user, setUser] = useState<IUser>({
		id: '',
		name: '',
		email: '',
		icon: '',
		telephone: '',
		addressId: '',
		address: null,
		producer: null,
		rating: [],
		comments: [],
		createdAt: '',
	})
	const pathnameId = usePathname().split('/').pop()

	useEffect(() => {
		if (pathnameId) {
			useGetProfile(pathnameId).then((data) => {
				setUser(data)
			})
		}
	}, [])

	return (
		<>
			<Header />
			<PageContext.Provider value={page}>
				<UserContext.Provider value={user}>
					{user ? (
						<>
							<main className="main bg-cultiva-main w-full">
								{children}
							</main>
							<div className='sticky top-20'>
								<SidebarUser setPage={setPage} />
							</div>
						</>	
					) : (
						<main className="bg-cultiva-main h-screen w-screen flex justify-center items-center flex-col gap-10">
							<h1 className="text-5xl font-bold">Usuário não encontrado</h1>
							<Link href={'/'} className="text-3xl font-bold rounded-lg bg-blue-800 px-6 py-2.5">Voltar para página inicial</Link>
						</main>
					)}
				</UserContext.Provider>
			</PageContext.Provider>
		</>
	)
}

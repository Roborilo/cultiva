'use client'

import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarProduct from "@/components/layout/sidebar/product/SidebarProduct"
import { createContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import useGetProduct from "@/components/customHooks/useGetProduct"

type Product = {
	id: string,
	name: string,
	description: string,
	manufacturingDate: string,
	expirationDate: string,
	soldOut: boolean,
	quantity: number,
	price: string,
	rating: number[],
	images: string[],
	createdAt: string,
	producerId: string,
	user: {
		id: string,
		name: string,
		email: string,
		icon: string,
		rating: number[],
	}
	comments: {
		id: string,
		clientId: string,
		comment: string,
		rating: number,
		createdAt: string
	}
}

export const productContext = createContext<Product | null>(null)

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	const [product, setProduct] = useState<Product | null>(null)
	const id = usePathname().split('/').pop()

	useEffect(() => {
		const fetchData = async () => {
			if (!id) {
				return
			}
			const data = await useGetProduct(id)
			console.log(data)
			setProduct(data)
		}

		fetchData()
	}, [])

	return (
		<div className="w-screen reverse-layout">
			<Header />
			<productContext.Provider value={product}>
				<main className="main bg-cultiva-main w-full h-full flex justify-center items-start pb-4">
					{children}
				</main>
				<div className='sticky top-20 sidebar w-[400px]'>
					<SidebarProduct />
				</div>
			</productContext.Provider>
		</div>
	)
}
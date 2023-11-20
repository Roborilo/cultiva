'use client'

import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarPurchase from "@/components/layout/sidebar/purchase/SidebarPurchase"
import { Dispatch, SetStateAction, createContext, useState } from "react"

type ReadyContextType = {
	ready: boolean | null;
	setReady: Dispatch<SetStateAction<boolean | null>>;
}

export const readyContext = createContext<ReadyContextType | null>(null) 

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	const [ready, setReady] = useState<boolean | null>(null)

	const readyContextValue: ReadyContextType = {
		ready,
		setReady,
	}

	return (
		<div className="w-screen h-screen reverse-layout overflow-hidden">
			<Header />
			<readyContext.Provider value={readyContextValue}>
				<main className="main bg-cultiva-main w-full flex justify-center items-start">{children}</main>
				<div className='sticky top-20 sidebar min-w-[400px]'>
					<SidebarPurchase />
				</div>
			</readyContext.Provider>
		</div>
	)
}
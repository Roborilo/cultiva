'use client'

import Header from "@/components/layout/header/Header"
import '@/app/globals.css'
import SidebarCategory from "@/components/layout/sidebar/Category/SidebarCategory"
import { Dispatch, SetStateAction, createContext, useState } from "react"

type CategoryContextType = {
  category: null | string;
  setCategory: Dispatch<SetStateAction<null | string>>;
};

export const categoryContext = createContext<CategoryContextType | null>(null)

type SearchContextType = {
	search: null | string;
	setSearch: Dispatch<SetStateAction<null | string>>;
}

export const searchContext = createContext<SearchContextType | null>(null)

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
	const [category, setCategory] = useState<null | string>(null)
	const [search, setSearch] = useState<null | string>(null)
	
	const categoryContextValue: CategoryContextType = {
    category,
    setCategory,
  };

	const searchContextValue: SearchContextType = {
		search,
		setSearch,
	}

	return (
		<>
			<searchContext.Provider value={searchContextValue}>
				<Header />
				<categoryContext.Provider value={categoryContextValue}>
					<main className="main bg-cultiva-main w-full">{children}</main>
					<div className='sticky top-20'>
						<SidebarCategory />
					</div>
				</categoryContext.Provider>
			</searchContext.Provider>
		</>
	)
}

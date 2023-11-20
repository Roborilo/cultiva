'use client'

import { searchContext } from "@/app/(main)/layout"
import { usePathname, useRouter } from "next/navigation"
import { useRef, useState, useContext } from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchInput() {
	const [searchQuery, setSearchQuery] = useState('')
	const inputRef = useRef(null)
	const router = useRouter()
	const context = useContext(searchContext)
	const pathname = usePathname()

	if (!context) {
		return (
			<div className="flex justify-center">
				<div className="inline-flex w-9 rounded-tl-3xl rounded-bl-3xl justify-center items-center bg-black">
					<FaSearch className="text-2xl text-white cursor-pointer" />
				</div>
				<input 
					type="search" 
					id="search" 
					className="w-64 rounded-tr-3xl rounded-br-3xl text-white bg-black text-xl font-semibold px-2" 
					placeholder="Pesquisar"
					ref={inputRef}
				/>
			</div>
		)
	}

	const { search, setSearch } = context

	const handleSubmit = () => {
		setSearch(searchQuery)
		
		if (pathname === '/') {
			return
		}
    router.push(`/`)
	}

	return (
		<div className="flex justify-center">
			<div className="inline-flex w-9 rounded-tl-3xl rounded-bl-3xl justify-center items-center bg-black">
				<FaSearch className="text-2xl text-white cursor-pointer" onClick={handleSubmit} />
			</div>
			<input 
				type="search" 
				id="search" 
				className="w-64 rounded-tr-3xl rounded-br-3xl text-white bg-black text-xl font-semibold px-2" 
				placeholder="Pesquisar"
				ref={inputRef}
				onChange={(e) => setSearchQuery(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSubmit()
					}
				}}
			/>
		</div>
	)	
}
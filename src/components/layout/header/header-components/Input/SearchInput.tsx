'use client'

import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchInput() {
	const [search, setSearch] = useState('')
	const inputRef = useRef(null)
	const router = useRouter()

	const handleSubmit = () => {
		if (!search) {
			return
		}

		const queryString = encodeURIComponent(search)
    router.push(`?q=${queryString}`)
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
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSubmit()
					}
				}}
			/>
		</div>
	)	
}
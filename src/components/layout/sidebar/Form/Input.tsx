'use client'

import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Input({ placeholder }: { placeholder: string }) {
	const [search, setSearch] = useState('')
	const inputRef = useRef(null)
	const router = useRouter()

	const handleSubmit = () => {
		if (!search) {
			return
		}

		console.log(search)
		const queryString = encodeURIComponent(search)
    router.push(`/guide?q=${queryString}`)
	}
	
	return (
		<TextField.Root radius='full' className='bg-opaque bg-black rounded-full'>
			<TextField.Slot className='cursor-pointer'>
				<MagnifyingGlassIcon height="20" width="20" className="text-white font-semibold cursor-pointer" onClick={handleSubmit}/>
			</TextField.Slot>
			<TextField.Input 
				ref={inputRef}
				placeholder={placeholder} 
				size={'3'} 
				className="text-white font-medium text-lg" 
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleSubmit()
					}
				}}
			/>
		</TextField.Root>
	)
}
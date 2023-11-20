'use client'

import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'

export default function Input({ 
	placeholder, 
	handleChange 
}: { 
	placeholder: string; 
	handleChange?: React.Dispatch<React.SetStateAction<string>> 
}) {
	return (
		<TextField.Root radius='full' className='bg-opaque bg-black rounded-full'>
			<TextField.Slot className='cursor-pointer'>
				<MagnifyingGlassIcon height="20" width="20" className="text-white font-semibold cursor-pointer" />
			</TextField.Slot>
			<TextField.Input
				placeholder={placeholder} 
				size={'3'} 
				className="text-white font-medium text-base" 
				onChange={(e) => {
					if (!handleChange) return
					handleChange(e.target.value)
				}}
			/>
		</TextField.Root>
	)
}
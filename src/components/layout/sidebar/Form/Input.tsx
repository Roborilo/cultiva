'use client'

import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function Input({ placeholder }: { placeholder: string }) {
	return (
		<TextField.Root radius='full' className='bg-opaque bg-black rounded-full'>
			<TextField.Slot>
				<MagnifyingGlassIcon height="20" width="20" className="text-white font-semibold" />
			</TextField.Slot>
			<TextField.Input placeholder={placeholder} size={'3'} className="text-white font-medium text-lg" />
		</TextField.Root>
	)
}
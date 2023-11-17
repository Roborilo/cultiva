'use client'

import { TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function Input({ placeholder }: { placeholder: string }) {
	return (
		<TextField.Root>
			<TextField.Slot>
				<MagnifyingGlassIcon height="16" width="16" />
			</TextField.Slot>
			<TextField.Input placeholder={placeholder} />
		</TextField.Root>
	)
}
'use client'

import UserAvatar from '@/components/user/Avatar'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Select, TextField } from '@radix-ui/themes'

export default function CreateComment({ image }: { image?: string }) {
	return (
		<div className='flex justify-start items-center w-full mt-4 gap-4 bg-cultiva-main px-5 py-4 rounded-sm'>
			<UserAvatar wh='w-16 h-12' image={image} />
			<TextField.Root size={'3'} className='w-full'>
				<TextField.Input placeholder="Escreva seu comentário" size={'3'} />
				<TextField.Slot className='cursor-pointer'>
					<PaperPlaneIcon height="16" width="16" />
				</TextField.Slot>
			</TextField.Root>
			<div className='flex items-center justify-center gap-2'>
				<p className='font-medium text-lg'>Nota:</p>
				<Select.Root size={'3'}>
						<Select.Trigger placeholder="Dê uma avaliação" />
						<Select.Content>
							<Select.Group>
								<Select.Label>Notas</Select.Label>
							<Select.Separator />
								<Select.Item value="one">1</Select.Item>
								<Select.Item value="two">2</Select.Item>
								<Select.Item value="three">3</Select.Item>
								<Select.Item value="four">4</Select.Item>
								<Select.Item value="five">5</Select.Item>
							</Select.Group>
						</Select.Content>
				</Select.Root>
			</div>
		</div>
	)
}
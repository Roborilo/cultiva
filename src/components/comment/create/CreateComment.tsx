'use client'

import useCreateComment from '@/components/customHooks/useCreateComment'
import BasicModal from '@/components/modal/Modal'
import UserAvatar from '@/components/user/Avatar'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { Select, TextField } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function CreateComment({ image }: { image?: string }) {
	const [content, setContent] = useState('')
	const [rating, setRating] = useState<number>()
	const [alertText, setAlertText] = useState('')
	const [modal, setModal] = useState(false)
	const { data: session } = useSession()
	const id = usePathname().split('/').pop()

	const handleSubmit = async () => {
		const token = session?.user?.accessToken
		if (!token) {
			setAlertText('Sessão expirada, por favor faça login novamente')
			setModal(true)
			return
		}
		if (!id) {
			setAlertText('Produto não identificado')
			setModal(true)
			return
		}
		if (!content && content === '') {
			setAlertText('Escreva seu comentário')
			setModal(true)
			return
		}
		if (!rating) {
			setAlertText('Escolha uma avaliação')
			setModal(true)
			return
		}
		const response = await useCreateComment(id, content, rating, token)
		if (response) {
			setAlertText('Comentário criado com sucesso')
			setModal(true)
			setContent('')
		} else {
			setAlertText('Erro ao criar o comentário')
			setModal(true)
		}
	}

	return (
		<div className='flex justify-start items-center w-full mt-4 gap-4 bg-cultiva-main px-5 py-4 rounded-sm'>
			{modal && (
				<BasicModal title='Aviso' text={alertText} open={modal} handleClose={() => setModal(false)} />
			)}
			<UserAvatar wh='w-16 h-12' image={image} />
			<TextField.Root size={'3'} className='w-full'>
				<TextField.Input placeholder="Escreva seu comentário" size={'3'} onChange={(e) => setContent(e.target.value)} />
				<TextField.Slot className='cursor-pointer' onClick={handleSubmit}>
					<PaperPlaneIcon height="16" width="16" />
				</TextField.Slot>
			</TextField.Root>
			<div className='flex items-center justify-center gap-2'>
				<p className='font-medium text-lg'>Nota:</p>
				<Select.Root size={'3'} onValueChange={(value) => setRating(Number(value))}>
						<Select.Trigger placeholder="Dê uma avaliação" />
						<Select.Content>
							<Select.Group>
								<Select.Label>Notas</Select.Label>
							<Select.Separator />
								<Select.Item value="1">1</Select.Item>
								<Select.Item value="2">2</Select.Item>
								<Select.Item value="3">3</Select.Item>
								<Select.Item value="4">4</Select.Item>
								<Select.Item value="5">5</Select.Item>
							</Select.Group>
						</Select.Content>
				</Select.Root>
			</div>
		</div>
	)
}
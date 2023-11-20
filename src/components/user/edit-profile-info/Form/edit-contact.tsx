'use client'

import useEditContactInfo from "@/components/customHooks/useEditContactInfo";
import BasicModal from "@/components/modal/Modal";
import { TextField } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Payload = {
	telephone?: string
	street?: string
	number?: number
	district?: string
	cep?: string
	city?: string
	state?: string
}

export default function EditContact() {
	const [payload, setPayload] = useState<Payload>()
	const [textAlert, setTextAlert] = useState('');
	const [modal, setModal] = useState(false);
	const { data:	session, status } = useSession()
	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const token = session?.user.accessToken
		if (token === '' || !token) {
			setTextAlert('Sua sessão expirou, por favor, faça login novamente')
			setModal(true)
			return
		}

		const hasAddress = session?.user.addressId ? true : false

		if (!payload) {
			setTextAlert('Preencha todos os campos')
			setModal(true)
			return
		}
		if (!payload.telephone && typeof payload.number !== 'number') {
			setTextAlert('Número inválido')
			setModal(true)
			return
		}

		if (!payload.telephone && payload.street || payload.number || payload.district || payload.cep || payload.city || payload.state) {
			for (const key in payload) {
				if (key === 'telephone') continue
				// @ts-ignore
				if (typeof payload[key] === 'string' && payload[key].length === 0) {
					setTextAlert('Preencha todos os campos de endereço para salvar')
					setModal(true)
					return
				}
			}
		}

		const address = {
			street: payload.street,
			number: payload.number,
			complement: '',
			district: payload.district,
			cep: payload.cep,
			city: payload.city,
			state: payload.state
		}

		if (!address && !payload.telephone) {
			setTextAlert('Preencha todos os campos da área de endereço ou telefone para salvar')
			setModal(true)
			return
		}

		const response = await useEditContactInfo(token, payload.telephone, address, hasAddress)
		if (response) {
			setTextAlert('Informações alteradas com sucesso, recomendamos que faça login novamente para uma melhor experiência')
			setModal(true)
		} else {
			setTextAlert('Erro ao alterar as informações, tente novamente, por favor verifique se os dados foram inseridos corretamente')
			setModal(true)
		}
	}

	return (
		<form className="flex flex-col gap-4 w-2/5" onSubmit={handleSubmit}>
			{modal && (
        <BasicModal title="Aviso" text={textAlert} open={modal} handleClose={() => setModal(false)} />
      )}
			<TextField.Input placeholder="Telefone de Contato" size={'3'} radius="small" className="py-4 text-lg" onChange={(e) => setPayload({ ...payload, telephone: e.target.value })} />
			<div className="flex gap-4 w-full">
				<TextField.Input placeholder="Rua" size={'3'} radius="small" className="py-4 text-lg" onChange={(e) => setPayload({ ...payload, street: e.target.value })} />
				<TextField.Input placeholder="Número" size={'3'} radius="small" className="py-4 text-lg" onChange={(e) => setPayload({ ...payload, number: Number(e.target.value) })} type="number" />
			</div>
			<div className="flex gap-4 w-full">
				<TextField.Input placeholder="Bairro" size={'3'} radius="small" className="py-4 text-lg" onChange={(e) => setPayload({ ...payload, district: e.target.value })} />
				<TextField.Input placeholder="Cidade" size={'3'} radius="small" className="py-4 text-lg" onChange={(e) => setPayload({ ...payload, city: e.target.value })} />
			</div>
			<div className="flex gap-4 w-full">
				<TextField.Input placeholder="CEP" size={'3'} radius="small" className="py-4 text-lg" onChange={(e) => setPayload({ ...payload, cep: e.target.value })} />
				<TextField.Input placeholder="Estado" size={'3'} radius="small" className="py-4 text-lg" onChange={(e) => setPayload({ ...payload, state: e.target.value })} />
			</div>
			<button className="text-xl font-medium py-2 px-3.5 bg-green-600 hover:bg-green-700 rounded-xl w-4/12" type="submit">Salvar</button>
		</form>
	)
}
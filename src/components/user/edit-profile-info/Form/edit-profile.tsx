'use client'

import Input from "@/components/create-account/Input";
import useUpdateUser from "@/components/customHooks/useUpdateUser";
import BasicModal from "@/components/modal/Modal";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";

export default function EditProfile() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [icon, setIcon] = useState<File[]>([])
	const [textAlert, setTextAlert] = useState('');
	const [modal, setModal] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null)
	const { data:	session, status } = useSession()

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const file = Array.from(event.target.files)
			setIcon(file)
		}
	}

	const handleSubmit = async () => {
		const token = session?.user.accessToken
		if (!token) {
			setTextAlert('Sua sessão expirou, por favor, faça login novamente')
			setModal(true)
			return
		}
		if ((!name && !email && !icon) || (name === '' && email === '' && !icon)) {
			setTextAlert('Preencha pelo menos um dos campos')
			setModal(true)
			return
		}

		const response = await useUpdateUser(token, name, email, icon)
		if (response) {
			setTextAlert('Informações alteradas com sucesso, recomendamos que faça login novamente para uma melhor experiência')
			setModal(true)
		} else {
			setTextAlert('Erro ao alterar as informações, por favor tente novamente e verifique se os dados são válidos')
			setModal(true)
		}
	}
	
	return (
		<div className="flex flex-col gap-4 w-2/5">
			{modal && (
        <BasicModal title="Aviso" text={textAlert} open={modal} handleClose={() => setModal(false)} />
      )}
			<div className="flex gap-4 w-full">
				<Input placeholder="Nome" handleChange={setName} />
				<input
						type="file"
						accept=".png, .jpg"
						className="hidden"
						onChange={handleFileChange}
						ref={inputRef}
				/>
				<button className="text-xl font-medium py-2.5 px-6 bg-gray-500 rounded-xl" onClick={() => inputRef.current?.click()}>Alterar Foto de Perfil</button>
			</div>
			<Input placeholder="Email" type="email" handleChange={setEmail} />
			<button className="text-2xl font-medium py-2.5 px-6 bg-green-500 rounded-xl w-4/12" onClick={handleSubmit}>Salvar</button>
		</div>
	)
}
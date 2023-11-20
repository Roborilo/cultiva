'use client'

import Input from "@/components/create-account/Input";
import useCreateProducer from "@/components/customHooks/useCreateProducer";
import BasicModal from "@/components/modal/Modal";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function CreateProducer() {
	const [cpf, setCpf] = useState('');
	const [cnpj, setCnpj] = useState('');
	const [textAlert, setTextAlert] = useState('');
	const [modal, setModal] = useState(false);
	const { data: session, status } = useSession();

	const handleSubmit = async () => {
		const token = session?.user.accessToken;
		if (!token) {
			setTextAlert('Você não possui uma sessão ativa, por favor logue novamente');
			setModal(true);
			return;
		}
		if (cpf === '' && cnpj === '') {
			setTextAlert('Preencha pelo menos um dos campos');
			setModal(true);
			return;
		}
		if (cpf === cnpj) {
			setTextAlert('CPF e CNPJ devem ser diferentes');
			setModal(true);
			return;
		}
		
		const response = await useCreateProducer(token, cpf, cnpj);
		if (response) {
			setTextAlert('Produtor criado com sucesso');
			setModal(true);
		} else {
			setTextAlert('Erro ao criar o produtor, por favor tente novamente e verifique se os dados são válidos');
			setModal(true);
		}
	}

	return (
		<>
			{modal && (
        <BasicModal title="Aviso" text={textAlert} open={modal} handleClose={() => setModal(false)} />
      )}
			<div className="flex justify-between items-start w-full mt-2">
				<Input placeholder="CPF" handleChange={setCpf} required />
				<Input placeholder="CNPJ" handleChange={setCnpj} required />
				<button className="text-xl font-medium py-2.5 px-6 bg-green-500 rounded-xl w-4/12" onClick={handleSubmit}>Salvar</button>
			</div>
		</>
	)
}
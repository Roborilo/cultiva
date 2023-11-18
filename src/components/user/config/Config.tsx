'use client'

import Input from "@/components/create-account/Input";
import SwitchDemo from "./components/Switch";
import { useState } from "react";

export default function Config() {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');

	return (
		<section className="flex flex-col gap-7 w-full px-20 py-8">
			<h1 className="text-5xl font-bold">Configurações</h1>
			<section className="flex flex-col gap-4 w-full">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Preferências</h2>
				<div className="flex justify-between items-start w-full mt-2">
					<p className="text-2xl font-medium w-1/3">Tema</p>
					<SwitchDemo />
				</div>
			</section>
			<section className="flex flex-col gap-4 w-full mt-12">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Mudar sua senha</h2>
				<div className="flex justify-between items-start w-full mt-2">
					<Input placeholder="Senha atual" type="password" handleChange={setPassword} required />
					<Input placeholder="Nova senha" type="password" handleChange={setNewPassword} required />
					<button className="text-2xl font-medium py-2.5 px-6 bg-green-500 rounded-xl w-4/12">Salvar</button>
				</div>
			</section>
		</section>
	)
}
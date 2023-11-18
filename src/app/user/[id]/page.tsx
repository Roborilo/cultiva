'use client'

import Input from "@/components/create-account/Input";
import { useState } from "react";

export default function UserPage() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [icon, setIcon] = useState<File>()
	const [telephone, setTelephone] = useState('')

	return (
		<section className="flex flex-col gap-7 w-full px-20 py-8">
			<h1 className="text-5xl font-bold">Detalhes da sua conta</h1>
			<section className="flex flex-col gap-4 w-full">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Informações</h2>
				<div className="flex justify-between items-start w-full">
					<p className="text-2xl font-medium w-1/3">Aqui estão as informações que serão mostradas em seu perfil público.</p>
					<div className="flex flex-col gap-4 w-2/5">
						<div className="flex gap-4 w-full">
							<Input placeholder="Nome" handleChange={setName} />
							<input
                  type="file"
                  accept=".png, .jpg"
                  className="hidden"
									onChange={(e) => setIcon(e.target.files?.[0])}
              />
							<button className="text-xl font-medium py-2.5 px-6 bg-gray-500 rounded-xl">Alterar Foto de Perfil</button>
						</div>
						<Input placeholder="Email" handleChange={setEmail} />
						<button className="text-2xl font-medium py-2.5 px-6 bg-green-500 rounded-xl w-4/12">Salvar</button>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-4 w-full">
				<h2 className="text-3xl font-semibold w-full border-b pb-2">Informações de contato</h2>
				<div className="flex justify-between items-start w-full">
					<p className="text-2xl font-medium w-1/3">Aqui estarão os contatos utilizados no site para te conectar aos seus compradores ou vendedores.</p>
					<div className="flex flex-col gap-4 w-2/5">
						<Input placeholder="Telefone de Contato" handleChange={setTelephone} />
						<div className="flex gap-4 w-full">
							<Input placeholder="Rua" handleChange={setName} />
							<Input placeholder="Número" handleChange={setEmail} />
						</div>
						<Input placeholder="Cidade" handleChange={setEmail} />
						<div className="flex gap-4 w-full">
							<Input placeholder="CEP" handleChange={setName} />
							<Input placeholder="Estado" handleChange={setEmail} />
						</div>
						<button className="text-2xl font-medium py-2.5 px-6 bg-green-500 rounded-xl w-4/12">Salvar</button>
					</div>
				</div>
			</section>
		</section>
	)
}
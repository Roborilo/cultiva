'use client'

import Input from "@/components/create-account/Input";
import { useState } from "react";

export default function UserPage() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [icon, setIcon] = useState<File>()

	return (
		<>
			<h1>Detalhes da sua conta</h1>
			<section>
				<h2>Informações</h2>
				<div>
					<p>Aqui estão as informações que serão mostradas em seu perfil público.</p>
					<div>
						<div>
							<Input placeholder="Nome" handleChange={setName} />
							<input
                  type="file"
                  accept=".png, .jpg"
                  className="hidden"
									onChange={(e) => setIcon(e.target.files?.[0])}
                />
						</div>
						<Input placeholder="Email" handleChange={setEmail} />
						<button>Salvar</button>
					</div>
				</div>
			</section>
		</>
	)
}
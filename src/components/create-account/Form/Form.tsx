'use client'

import { Checkbox, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm, Resolver } from 'react-hook-form'
import { useState } from "react";
import Input from "@/components/create-account/Input";
import useCreateAccount from "@/components/customHooks/useCreateAccount";
import { useRouter } from "next/navigation";
import Link from 'next/link';

type FormValues = {
  name: string
	email: string
	password: string
}

type Errors = {
  name?: {
    type: string
    message: string
  }
	email?: {
		type: string
		message: string
	}
  password?: {
    type: string
    message: string
  }
}

const resolver: Resolver<FormValues> = async (values) => {
  const errors: Partial<Errors> = {}

  if (!values.name) {
    errors.name = { type: 'required', message: 'Name is required.' }
  } else {
    const nameRegex = /^[a-zA-Z\s]+$/
    if (values.name.trim() !== values.name || !nameRegex.test(values.name) || values.name.length < 1) {
      errors.name = { type: 'invalid', message: 'Name is invalid. Must only contain letters and spaces.' }
    }
  }

	if (!values.email) {
		errors.email = { type: 'required', message: 'Email is required.' }
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = { type: 'invalid', message: 'Email is invalid.' }
	}

  if (!values.password) {
    errors.password = { type: 'required', message: 'Password is required.' }
  } else if (values.password.length <= 8) {
    errors.password = { type: 'invalid', message: 'Password must be at least 8 characters long.' }
  } else {
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
		if (!passwordRegex.test(values.password)) {
			errors.password = { type: 'invalid', message: 'Password must contain at least one letter and one number.' }
		}
	}

  return {
    values,
    errors,
  }
}

export default function CreateAccountForm() {
  const [checkbox, setCheckbox] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver })
  const router = useRouter()


  const handleCreateAccount = async (data: FormValues) => {
    const payload = data
		console.log(payload)
    const response = await useCreateAccount(payload)
    if (response) {
      alert('Conta criada com sucesso, por favor, realize o login')
      router.push('/api/auth/signin')
    } else {
      alert('Erro ao criar a conta')
    }
  }

	return (
		<form className="flex flex-col gap-7 w-full px-20" onSubmit={handleSubmit(handleCreateAccount)}>
			<h1 className="text-6xl font-semibold">Crie sua conta do Cultiva</h1>
			<p className="text-3xl italic font-thin">O melhor site de comércio de produtos sustentáveis</p>
			<TextField.Input placeholder="Nome" size={'3'} radius="small" className="py-6 text-xl" required {...register('name')} />
			{errors.name && <p className="text-red-500 text-xl">{errors.name.message}</p>}
			<TextField.Input placeholder="Email" size={'3'} radius="small" className="py-6 text-xl" required {...register('email')} />
			{errors.email && <p className="text-red-500 text-xl">{errors.email.message}</p>}
			<TextField.Input placeholder="Senha" size={'3'} type="password" radius="small" className="py-6 text-xl" required {...register('password')} />
			{errors.password && <p className="text-red-500 text-xl">{errors.password.message}</p>}
			<div className="flex justify-between items-center">
				<Text as="label" size="2">
					<Flex gap="2" className="items-center">
						<Checkbox size='3' onClick={() => setCheckbox(!checkbox)} required /> 
						<p className="text-2xl">Aceito os Termos de Uso</p>
					</Flex>
				</Text>
				<button className="text-2xl">Esqueci minha senha</button>
			</div>
			<div className="flex justify-between items-center mt-2">
				<Link href={"/api/auth/signin"} className="text-2xl py-3 px-12 bg-gray-600 text-white rounded-md hover:bg-gray-500">Já tenho uma conta</Link>
				<button type="submit" className="text-2xl py-3 px-12 bg-green-600 text-white rounded-md hover:bg-green-500">Criar</button>
			</div>
		</form>
	)
}
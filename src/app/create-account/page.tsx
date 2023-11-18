'use client'

import cultivaLogo from "@/../public/logo.png";
import '@/app/globals.css'
import Link from "next/link";
import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Checkbox, Flex, Text, TextField } from "@radix-ui/themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
})

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <section className="flex flex-col justify-between items-start w-1/2 h-full">
        <div className="background-create-account absolute w-1/2 h-full top-0 left-0 z-0"></div>
        <Link href={"/"} className="z-10 flex justify-start items-center gap-0">
			    <Image src={cultivaLogo} alt="Logo da Cultiva" width={320} height={320} />
			    <span className={cn("text-9xl text-white font-semibold mt-16 mr-20", poppins.className)}>Cultiva</span>
		    </Link>
        <h2 className="z-10 text-8xl font-medium p-10">
          Todos os orgânicos que você quiser em um só lugar &#58;&#41;
        </h2>
      </section>

      <section className="flex w-1/2 h-full drop-shadow-lg justify-center items-center">
        <div className="flex flex-col gap-7 w-full px-20">
          <h1 className="text-6xl font-semibold">Crie sua conta do Cultiva</h1>
          <p className="text-3xl italic font-thin">O melhor site de comércio de produtos sustentáveis</p>
          <TextField.Input placeholder="Nome" size={'3'} radius="small" className="py-6 text-xl" />
          <TextField.Input placeholder="Email" size={'3'} radius="small" className="py-6 text-xl" />
          <TextField.Input placeholder="Senha" size={'3'} radius="small" className="py-6 text-xl" />
          <div className="flex justify-between items-center">
            <Text as="label" size="2">
              <Flex gap="2" className="items-center">
                <Checkbox size='3' /> 
                <p className="text-2xl">Aceito os Termos de Uso</p>
              </Flex>
            </Text>
            <button className="text-2xl">Esqueci minha senha</button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <button className="text-2xl py-3 px-12 bg-gray-600 text-white rounded-md hover:bg-gray-500">Já tenho uma conta</button>
            <button className="text-2xl py-3 px-12 bg-green-600 text-white rounded-md hover:bg-green-500">Criar</button>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import cultivaLogo from '@/../public/logo.png'
import '@/app/globals.css'
import Link from 'next/link'
import { cn } from '@/lib/utils/utils'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import CreateAccountForm from '@/components/create-account/Form/Form'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
})

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <section className="flex flex-col justify-between items-start w-1/2 h-full">
        <div className="background-create-account absolute w-1/2 h-full top-0 left-0 z-0"></div>
        <Link href={'/'} className="z-10 flex justify-start items-center gap-0">
          <Image
            src={cultivaLogo}
            alt="Logo da Cultiva"
            width={320}
            height={320}
          />
          <span
            className={cn(
              'text-9xl text-white font-semibold mt-16 mr-20',
              poppins.className,
            )}
          >
            Cultiva
          </span>
        </Link>
        <h2 className="z-10 text-8xl font-medium p-10">
          Todos os orgânicos que você quiser em um só lugar &#58;&#41;
        </h2>
      </section>

      <section className="flex w-1/2 h-full drop-shadow-lg justify-center items-center">
        <CreateAccountForm />
      </section>
    </main>
  )
}

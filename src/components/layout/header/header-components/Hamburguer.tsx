'use client'
// TODO: Change URL href LINKs
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { IoMdExit } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import { BiSolidBookBookmark } from "react-icons/bi";

export default function Hamburguer() {
	const { data: session } = useSession()

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button
					className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
					aria-label="Customise options"
				>
					<HamburgerMenuIcon className="text-black" />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="min-w-[220px] bg-dropdown-menu-dark rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade px-4 text-white"
					sideOffset={5}
				>
					<DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 text-xl my-2">
						<Link href={session?.user ? `/user/${session?.user.id}` : '/api/auth/signin'}>Central do Usuário</Link> 
					</DropdownMenu.Item>
					<DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 text-xl mb-2">
						<Link href={'/guide'} className='flex'>
							<BiSolidBookBookmark className='mr-1' />
							Nossa Wiki
						</Link>
					</DropdownMenu.Item>

					{session?.user ? (
						<>
							<DropdownMenu.Separator className="h-[1px] bg-zinc-700 m-[5px]" />

							<Link href={'/api/auth/signout'}>
								<DropdownMenu.Item className="group text-[13px] leading-none text-violet11 justify-start flex items-center px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 text-xl text-white bg-red-600 rounded-full py-2.5">
									<IoMdExit className='mr-1' />
									Sair
								</DropdownMenu.Item>
							</Link>
						</>
					) : (
						<>
							<DropdownMenu.Separator className="h-[1px] bg-zinc-700 m-[5px]" />

							<Link href={'/api/auth/signin'}>
								<DropdownMenu.Item className="group text-[13px] leading-none text-violet11 justify-start flex items-center px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 text-xl text-white bg-green-600 rounded-full py-2.5">
									<GoSignIn />
									Entrar
								</DropdownMenu.Item>
							</Link>
							<DropdownMenu.Separator className="h-[1px] bg-zinc-700 m-[5px]" />

							<Link href={'/create-account'}>
								<DropdownMenu.Item className="group text-[13px] leading-none text-violet11 justify-start flex items-center px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 text-xl text-white bg-green-600 rounded-full py-2.5">
									<GoSignIn />
									Criar Conta
								</DropdownMenu.Item>
							</Link>
						</>
					)}

					<DropdownMenu.Arrow className="fill-white" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>

		</DropdownMenu.Root>
	)
}
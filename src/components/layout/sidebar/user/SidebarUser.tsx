import UserAvatar from "@/components/user/Avatar";
import SidebarRoot from "../Root";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FaCircleUser } from "react-icons/fa6"
import { IoSettingsSharp } from "react-icons/io5"

export default function SidebarUser() {
	const rating = [
		4, 5, 3, 2, 1, 2, 5, 5, 4
	]

	const rate = rating.reduce((acc, curr) => acc + curr, 0) / rating.length

	const fullStars = Math.floor(rate)
  const hasHalfStar = rate - fullStars >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

	return (
		<SidebarRoot>
			<div className="flex flex-col items-center justify-start px-5 py-2 rounded-lg bg-cultiva-main shadow-sm m-4 gap-4">
				<div className="flex items-center gap-4">
					<UserAvatar />
					<h1 className="text-3xl font-bold">Nome Nome Nome</h1>
				</div>
				<div className="flex items-center gap-3 bg-black rounded-full p-3">
					<div className="flex gap-1">
						{[...Array(fullStars)].map((_, index) => (
							<FaStar key={index} className='text-xl' />
						))}
						{hasHalfStar && <FaStarHalfAlt className='text-xl' />}
						{[...Array(emptyStars)].map((_, index) => (
							<FaRegStar key={index} className='text-xl' />
						))}
					</div>
					<p className="text-xl">{rate.toFixed(1)}</p>
				</div>
			</div>
			<div className='flex flex-col justify-center items-start gap-8 mt-3 w-full px-6 py-3'>
				<h1 className="text-4xl font-bold">Sua Conta</h1>
				<div className="flex flex-col gap-6 px-4 w-full">
					<div className='flex gap-4 items-center justify-start bg-green-700 rounded-lg p-3 cursor-pointer w-full'>
						<FaCircleUser className='text-4xl' />
						<p className="text-2xl">Detalhes Pessoais</p>
					</div>
					<div className='flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full'>
						<IoSettingsSharp className='text-4xl' />
						<p className="text-2xl">Configurações</p>
					</div>
				</div>
				<h1 className="text-4xl font-bold">Loja</h1>
				<div className="flex flex-col gap-6 px-4 w-full">
					<div className='flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full'>
						<FaCircleUser className='text-4xl' />
						<p className="text-2xl">Vendas</p>
					</div>
					<div className='flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full'>
						<IoSettingsSharp className='text-4xl' />
						<p className="text-2xl">Pedidos</p>
					</div>
				</div>
			</div>
		</SidebarRoot>
	)
}
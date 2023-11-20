import UserAvatar from "@/components/user/Avatar";
import SidebarRoot from "../Root";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { FaCircleUser } from "react-icons/fa6"
import { IoSettingsSharp } from "react-icons/io5"
import { useContext, useEffect, useState } from "react";
import { PageContext, UserContext } from "@/app/user/[id]/layout";
import { useSession } from "next-auth/react";
import { MdRequestPage, MdSell } from "react-icons/md";
import { RiMoneyDollarCircleFill, RiPriceTag2Fill  } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function SidebarUser({ setPage }: { setPage: React.Dispatch<React.SetStateAction<string>> }) {
	const [rating, setRating] = useState({
		rate: 0,
		fullStars: 0,
		hasHalfStar: false,
		emptyStars: 5
	})
	const page = useContext(PageContext)
	const user = useContext(UserContext)
	const { data: session, status } = useSession()
	const pathId = usePathname().split('/').pop()

	useEffect(() => {
		const rate = user && user.rating && user.rating.reduce((acc, curr) => acc + curr, 0) / user.rating.length || 0
	
		const fullStars = Math.floor(rate)
		const hasHalfStar = rate - fullStars >= 0.5
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

		setRating({
			rate,
			fullStars,
			hasHalfStar,
			emptyStars
		})
	}, [user])


	return (
		<SidebarRoot>
			<div className="flex flex-col items-center justify-start px-5 py-2 rounded-lg bg-cultiva-main shadow-sm mx-3 my-1 gap-4">
				<div className="flex items-center gap-4">
					{user ? (
						<>
							<UserAvatar image={user?.icon ? user?.icon : undefined} />
							<h1 className="text-2xl font-bold">{user.name}</h1>
						</>
					) : (
						<>
							<UserAvatar />
							<h1 className="text-2xl font-bold">Usuário não encontrado</h1>	
						</>
					)}
				</div>
				<div className="flex items-center gap-3 bg-black rounded-full p-2">
				{user.rating ? (
					<>
						<div className="flex gap-1">
						{[...Array(rating.fullStars)].map((_, index) => (
							<FaStar key={index} className='text-lg' />
						))}
						{rating.hasHalfStar && <FaStarHalfAlt className='text-lg' />}
						{[...Array(rating.emptyStars)].map((_, index) => (
							<FaRegStar key={index} className='text-lg' />
						))}
						</div>
						<p className="text-lg">{rating.rate.toFixed(1)}</p>
					</>
				) : (
					<>
						<div className="flex gap-1">
							<FaRegStar className='text-lg' />
							<FaRegStar className='text-lg' />
							<FaRegStar className='text-lg' />
							<FaRegStar className='text-lg' />
							<FaRegStar className='text-lg' />
						</div>
						<p className="text-lg">{rating.rate.toFixed(1)}</p>
					</>
				)}
				</div>
			</div>
			<div className='flex flex-col justify-center items-start gap-8 mt-3 w-full px-5 py-2'>
				{(status === "authenticated" && session?.user?.id === pathId) && (
					<>
						<h1 className="text-2xl font-bold">Sua Conta</h1>
						<div className="flex flex-col gap-4 px-4 w-full">
							<div className={`flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full, ${page === "profile" && "bg-green-700"}`} onClick={() => setPage("profile")}>
								<FaCircleUser className='text-2xl' />
								<p className="text-lg">Detalhes Pessoais</p>
							</div>
							<div className={`flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full, ${page === "config" && "bg-green-700"}`}  onClick={() => setPage("config")}>
								<IoSettingsSharp className='text-2xl' />
								<p className="text-lg">Configurações</p>
							</div>
						</div>
					</>
				)}
				<h1 className="text-2xl font-bold">Loja</h1>
				<div className="flex flex-col gap-4 px-4 w-full">
					<div className={`flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full, ${page === "sales" && "bg-green-700"}`}  onClick={() => setPage("sales")}>
						<RiPriceTag2Fill className='text-2xl' />
						<p className="text-lg">Vendas</p>
					</div>
					<div className={`flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full, ${page === "orders" && "bg-green-700"}`}  onClick={() => setPage("orders")}>
						<MdRequestPage className='text-2xl' />
						<p className="text-lg">Pedidos</p>
					</div>
					<div className={`flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full, ${page === "sells" && "bg-green-700"}`}  onClick={() => setPage("sells")}>
						<MdSell className='text-2xl' />
						<p className="text-lg">Vendendo</p>
					</div>
					<div className={`flex gap-4 items-center justify-start rounded-lg p-3 cursor-pointer w-full, ${page === "buys" && "bg-green-700"}`}  onClick={() => setPage("buys")}>
						<RiMoneyDollarCircleFill className='text-2xl' />
						<p className="text-lg">Compras</p>
					</div>
				</div>
			</div>
		</SidebarRoot>
	)
}
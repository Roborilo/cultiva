import UserAvatar from "../user/Avatar";
import Stars from "./Stars";
import { IoIosCheckmarkCircle } from "react-icons/io";

type User = {
	name?: string;
	icon?: string;
	rate?: number[] | number;
	sells?: number;
}

export default function UserPreview({ user }: { user?: User }) {
	return (
		<div className="flex flex-col items-center justify-start px-3.5 py-4 rounded-lg bg-cultiva-main shadow-sm gap-4 w-full min-w-[340px]">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-3">
					{user ? (
						<>
							<UserAvatar image={user?.icon ? user?.icon : undefined} wh="w-16 h-16" />
							<h1 className="text-xl font-bold">{user.name}</h1>
						</>
					) : (
						<>
							<UserAvatar />
							<h1 className="text-xl font-bold">Usuário não encontrado</h1>	
						</>
					)}
				</div>
				<p className="text-sm font-thin self-start">{user?.sells} vendas</p>
			</div>
			<div className={`flex items-center w-full justify-between`}>
				<Stars rating={user?.rate || 0} />
				<div className='flex items-center justify-center gap-1 rounded-full p-2 bg-white text-black'>
					<p className="text-md font-thin">Confiável</p>
					<IoIosCheckmarkCircle className="text-lg" />
				</div>
			</div>
		</div>
	)
}
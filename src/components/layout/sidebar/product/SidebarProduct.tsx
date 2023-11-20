import Stars from "@/components/product/Stars";
import SidebarRoot from "../Root";
import UserPreview from "@/components/product/UserPreview";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

export default function SidebarProduct() {
	return (
		<SidebarRoot>
			<div className="flex flex-col gap-4 w-11/12 p-4 mx-4 my-3 items-center justify-start">
				<div className="flex items-center justify-between gap-6 mr-2">
					<Stars />
					<p className="text-sm font-thin">Comprado por 999 pessoas</p>
				</div>
				<h1 className="text-4xl font-bold self-start ml-3">Nome do Produto</h1>
				<h2 className="text-2xl font-bold self-start ml-3 rounded-lg bg-green-700 text-white p-2">R$799,90</h2>
				<div className="flex flex-col items-center justify-between gap-1 w-full">
					<p className="text-sm font-thin text-start self-start">Oferecido por:</p>
					<UserPreview />
				</div>
				<div className="flex items-center justify-between w-full p-3.5 rounded-full border border-gray-800 bg-cultiva-main">
					<p className="text-xl font-semibold">Quantidade</p>
					<div className="flex gap-2.5 justify-center items-center rounded-full px-1.5 border border-white">
						<button className="text-2xl font-bold pl-1.5">-</button>
						<p className="text-xl font-semibold border-l border-r border-white px-2.5">1</p>
						<button className="text-2xl font-bold pr-1.5">+</button>
					</div>
				</div>
				<div className="flex items-center justify-center gap-3 w-full">
					<button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
						Adicionar ao Carrinho
					</button>
					<button className="focus:outline-none text-black bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-50 font-medium rounded-lg text-xl px-3.5 py-3.5 me-2 mb-2">
						<BsFillBookmarkPlusFill />
					</button>
				</div>
				<div className="flex flex-col gap-3 w-full border-t border-b border-white py-3 px-2.5">
					<h3 className='font-semibold text-xl'>Informações do Produto:</h3>
					<p className="font-thin text-lg text-justify line-clamp-3 sm:line-clamp-4 lg:line-clamp-5  xl:line-clamp-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, commodi quis molestiae cumque laboriosam molestias, non, alias ad odio blanditiis veniam vel laudantium. Quam recusandae ullam assumenda quo nostrum alias? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus itaque debitis consectetur? Ut quia ducimus, harum quidem eius ratione, rem veritatis eaque quisquam culpa sequi aliquam, quo deleniti vel possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum amet blanditiis a alias eaque voluptate consectetur quasi, quod odio esse incidunt nulla saepe laborum totam, voluptatem asperiores! Hic, cupiditate.</p>
				</div>
			</div>
    </SidebarRoot>	
	)
}
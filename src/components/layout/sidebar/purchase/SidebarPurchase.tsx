'use client'

import Link from "next/link";
import ProductPreview from "../../header/header-components/cart/ProductPreview";
import SidebarRoot from "../Root";
import { FaShoppingCart } from "react-icons/fa";

export default function SidebarPurchase() {
	return (
		<SidebarRoot>
			<div className="flex gap-4 w-full p-4 mx-6 my-3 border-b-2 border-white items-center justify-start">
				<FaShoppingCart className="text-xl" />
      	<h1 className="text-xl font-bold">Seu Pedido</h1>
			</div>
			<div className="flex flex-col gap-4 p-4 mx-6 border-b-2 border-white">
				<div className="flex justify-between">
					<p className='text-base font-medium'>Itens</p>
					<p className="text-base font-semibold">R$690,00</p>
				</div>
				<div className="flex justify-between">
					<p className='text-base font-medium'>Entrega</p>
					<p className="text-base font-semibold">R$30,00</p>
				</div>
				<div className="flex justify-between">
					<p className='text-base font-medium'>Taxas</p>
					<p className="text-base font-semibold">R$20,00</p>
				</div>
				<div className="flex justify-between">
					<p className="text-lg font-semibold">TOTAL</p>
					<p className='text-lg font-thin'>R$740,00</p>
				</div>
			</div>
			<div className="flex items-center justify-between gap-4 p-4 mx-6 border-b-2 border-white">
				<Link href={'/'} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded-sm">Cancelar</Link>
				<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded-sm">Finalizar</button>
			</div>
			<div className="flex items-center justify-between gap-4 px-4 my-2 mx-6 border border-gray-700 bg-gray-600 rounded-lg">
				<ProductPreview name="Produto" price={120} image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" quantity={1} />
			</div>
			<div className="flex items-center justify-between gap-4 px-4 my-2 mx-6 border border-gray-700 bg-gray-600 rounded-lg">
				<ProductPreview name="Produto" price={120} image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" quantity={1} />
			</div>
			<div className="flex items-center justify-between gap-4 px-4 my-2 mx-6 border border-gray-700 bg-gray-600 rounded-lg">
				<ProductPreview name="Produto" price={120} image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" quantity={1} />
			</div>
    </SidebarRoot>	
	)
}
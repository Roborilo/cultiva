'use client'

import Link from "next/link";
import ProductPreview from "../../header/header-components/cart/ProductPreview";
import SidebarRoot from "../Root";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/components/product/AddToCart";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { readyContext } from "@/app/purchase/layout";

export default function SidebarPurchase() {
	const { products, dec } = useCart()
	const context = useContext(readyContext)
	const router = useRouter()

	if (!products) return null
	if (!context) return null

	const { ready, setReady } = context

	const price = products.reduce((total, product) => total + Number(product.price) * product.quantity, 0)

	const handleFinish = () => {
		if (!ready) {
			alert('Preencha os dados de entrega e pagamento')
			return
		}

		if (!products.length) {
			alert('Adicione pelo menos um item ao carrinho')
			return
		}

		products.forEach((product) => {
			dec(product.id)
		})

		router.push('/')
	}

	return (
		<SidebarRoot>
			<div className="flex gap-4 w-full p-4 mx-6 my-3 border-b-2 border-white items-center justify-start">
				<FaShoppingCart className="text-xl" />
      	<h1 className="text-xl font-bold">Seu Pedido</h1>
			</div>
			<div className="flex flex-col gap-4 p-4 mx-6 border-b-2 border-white">
				<div className="flex justify-between">
					<p className='text-base font-medium'>Itens</p>
					<p className="text-base font-semibold">R${price.toFixed(2)}</p>
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
					<p className='text-lg font-thin'>R${(price + 30 + 20).toFixed(2)}</p>
				</div>
			</div>
			<div className="flex items-center justify-between gap-4 p-4 mx-6 border-b-2 border-white">
				<Link href={'/'} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded-sm" onClick={() => products.map((product) => dec(product.id))}>Cancelar</Link>
				<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded-sm" onClick={handleFinish}>Finalizar</button>
			</div>
			{products.map((product) => (
				<div className="flex items-center justify-between gap-4 px-4 my-2 mx-6 border border-gray-700 bg-gray-600 rounded-lg">
					<ProductPreview 
						key={product.id}
						id={product.id}
						name={product.name}
						quantity={product.quantity}
						price={Number(product.price)}
						image={product.images[0]}
					/>
				</div>
			))}
    </SidebarRoot>	
	)
}
import { create } from 'zustand'
import { Product } from '../customHooks/useGetUserProducts'
import { usePathname } from 'next/navigation'
import useGetProduct from '../customHooks/useGetProduct'

type Cart = {
  products: Product[]
  inc: (productToAdd: Product) => void
	dec: (productId: string) => void
}

export const useCart = create<Cart>()((set) => ({
  products: [],
	inc: (productToAdd) => set((state) => ({
		products: [...state.products, productToAdd],
	})),
	dec: (id) => set((state) => ({
		products: state.products.filter((product) => product.id !== id),
	}))
}))

export default function AddToCart() {
	const { inc } = useCart()
	const id = usePathname().split('/').pop()

	const handleClick = async () => {
		if (!id) {
			return
		}
		const product = await useGetProduct(id)
		if (!product) {
			return
		}

		inc({
			...product,
			quantity: 1
		})
	}

	return (
		<button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleClick}>
			Adicionar ao Carrinho
		</button>
	);
}
'use client'

import AccessDenied from "@/components/auth/access-denied";
import { Product } from "@/components/customHooks/useGetProducts";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/product-grid";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { create } from "zustand";

type Favorite = {
  products: Product[]
  inc: (productToAdd: Product) => void
	dec: (productId: string) => void
}

export const useFavorite = create<Favorite>()((set) => ({
  products: [],
	inc: (productToAdd) => set((state) => ({
		products: [...state.products, productToAdd],
	})),
	dec: (id) => set((state) => ({
		products: state.products.filter((product) => product.id !== id),
	}))
}))

export default function Home() {
	const products = useFavorite((state) => state.products);
	const { data: session, status } = useSession();


	if (products) {
		return (
			<section className='m-16'>
				{status === "authenticated" && (
					<>
						<h1 className='text-3xl font-bold mb-8'>Olá, {session?.user?.name}. Aqui estão os seus produtos favoritos</h1>
						{products && (
							products.length > 0 ? (
								<ProductGrid>
									{products.map((product) => (
										<ProductCard key={product.id} id={product.id} name={product.name} price={Number(product.price)} imageUrl={product.images[0]} />
									))}
								</ProductGrid>
							) : (
								<p className="text-2xl font-semibold mt-3">Você não adicionou nenhum produto aos seus favoritos.</p>
							)
						)}
					</>
				)}
				{status === "unauthenticated" && (
					<AccessDenied />
				)}
				{status === 'loading' && (
					<div className="flex flex-col justify-center items-center">
						<AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
						<p className='text-lg font-medium my-3'>Carregando informações</p>
					</div>
				)}
			</section>
		);
	}
}
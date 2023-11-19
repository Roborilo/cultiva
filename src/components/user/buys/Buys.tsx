import { Product } from "@/components/customHooks/useGetProducts";
import useGetUserBuys, { Buy } from "@/components/customHooks/useGetUserBuys";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/product-grid";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Buys() {
  const [buys, setBuys] = useState<Buy[]>()
  const id = usePathname()?.split('/').pop()

  useEffect(() => {
    useGetUserBuys(id as string).then((data) => {
      setBuys(data)
    })
  }, [])

	return (
		<section className='m-20'>
			<h1 className='text-3xl font-bold mb-4'>Compras</h1>
      <ProductGrid>
        {buys?.map((buy) => (
          <ProductCard key={buy.productId} id={buy.productId} name={buy.product.name} price={Number(buy.product.price)} imageUrl={buy.product.images[0]} />
        ))}
      </ProductGrid>
    </section>
	)
}
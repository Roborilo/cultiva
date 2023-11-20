import useGetUserBuys, { Buy } from "@/components/customHooks/useGetUserBuys";
import ProductCard from "@/components/products/ProductCard";
import ProductGrid from "@/components/products/product-grid";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
			<h1 className='text-3xl font-bold mb-8'>Compras</h1>
      {buys ? (
        buys.length > 0 ? (  
          <ProductGrid>
            {buys?.map((buy) => (
              <ProductCard key={buy.productId} id={buy.productId} name={buy.product.name} price={Number(buy.product.price)} imageUrl={buy.product.images[0]} />
            ))}
          </ProductGrid>
        ) : (
          <p className="text-xl font-semibold mt-2">O usuário ainda não fez nenhuma compra.</p>
        )
      ) : (
        <div className="flex flex-col justify-center items-center">
          <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
          <p className='text-lg font-medium my-3'>Carregando informações</p>
        </div>
      )}
    </section>
	)
}
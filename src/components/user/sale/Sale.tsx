import useGetUserSales, { Sale } from '@/components/customHooks/useGetUserSales'
import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/product-grid'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Sale() {
  const [sales, setSales] = useState<Sale[]>([])
  const id = usePathname()?.split('/').pop()

  useEffect(() => {
    useGetUserSales(id as string).then((data) => {
      setSales(data)
    })
  })

  return (
    <section className="m-16">
      <h1 className="text-2xl font-bold mb-8">Vendas</h1>
      {sales ? (
        sales.length > 0 ? (
          <ProductGrid>
            {sales?.map((sale) => (
              <ProductCard
                key={sale.product.id}
                id={sale.product.id}
                name={sale.product.name}
                price={Number(sale.product.price)}
                imageUrl={sale.product.images[0]}
              />
            ))}
          </ProductGrid>
        ) : (
          <p className="text-xl font-semibold mt-2">
            O usuário ainda não fez nenhuma venda.
          </p>
        )
      ) : (
        <div className="flex flex-col justify-center items-center">
          <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
          <p className="text-lg font-medium my-3">Carregando informações</p>
        </div>
      )}
    </section>
  )
}

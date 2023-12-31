import useGetUserOrders, {
  Product,
} from '@/components/customHooks/useGetUserOrders'
import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/product-grid'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Orders() {
  const [products, setProducts] = useState<Product[]>()
  const id = usePathname()?.split('/').pop()

  useEffect(() => {
    useGetUserOrders(id as string).then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <section className="m-16">
      <h1 className="text-2xl font-bold mb-8">Pedidos</h1>
      {products ? (
        products.length > 0 ? (
          <ProductGrid>
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={Number(product.price)}
                imageUrl={product.images[0]}
              />
            ))}
          </ProductGrid>
        ) : (
          <p className="text-xl font-semibold mt-2">
            O usuário ainda não fez nenhum pedido.
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

'use client'

import useGetProducts, { Product } from '@/components/customHooks/useGetProducts'
import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/product-grid'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function Home() {
  const { data: session, status } = useSession()
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    useGetProducts().then((data) => {
      setProducts(data)
    })
  }, [])


  return (
    <section className='m-20'>
      {status === 'authenticated' ? (
        <h1 className='text-5xl font-bold mb-8'>Olá, {session?.user?.name}! Separamos isso para você hoje.</h1>
      ) : (
        <h1 className='text-5xl font-bold mb-8'>Produtos</h1>
      )}
      <ProductGrid>
        {products?.map((product) => (
          <ProductCard key={product.id} id={product.id} name={product.name} price={Number(product.price)} imageUrl={product.images[0]} />
        ))}
      </ProductGrid>
    </section>
  )
}

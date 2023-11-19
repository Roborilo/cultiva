'use client'

import useGetProducts, { Product } from '@/components/customHooks/useGetProducts'
import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/product-grid'
import { useSession } from 'next-auth/react'
import { useContext, useEffect, useState } from 'react'
import { categoryContext } from './layout'

export default function Home() {
  const { data: session, status } = useSession()
  const [products, setProducts] = useState<Product[]>()
  const context = useContext(categoryContext)

  if (!context) {
    return null
  }

  const { category, setCategory } = context

  useEffect(() => {
    useGetProducts().then((data) => {
      if (category) {
        setProducts(data.filter((product) => product.category.name === category))
      } else {
        setProducts(data)
      }
    })
  }, [category])


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

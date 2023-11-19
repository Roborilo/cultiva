'use client'

import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/product-grid'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <section className='m-20'>
      {status === 'authenticated' ? (
        <h1 className='text-5xl font-bold mb-8'>Olá, {session?.user?.name}! Separamos isso para você hoje.</h1>
      ) : (
        <h1 className='text-5xl font-bold mb-8'>Produtos</h1>
      )}
      <ProductGrid>
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
        <ProductCard name={'Product 1'} price={100} />
      </ProductGrid>
    </section>
  )
}

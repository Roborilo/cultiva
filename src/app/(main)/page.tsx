'use client'

import useGetProducts, { Product } from '@/components/customHooks/useGetProducts'
import ProductCard from '@/components/products/ProductCard'
import ProductGrid from '@/components/products/product-grid'
import { useSession } from 'next-auth/react'
import { useContext, useEffect, useState } from 'react'
import { categoryContext, searchContext } from './layout'

export default function Home() {
  const { data: session, status } = useSession()
  const [products, setProducts] = useState<Product[]>()
  const context = useContext(categoryContext)
  const contextQuery = useContext(searchContext)

  if (!context) {
    return null
  }

  const { category, setCategory } = context

  if (!contextQuery) {
    return null
  }

  const { search, setSearch } = contextQuery

  useEffect(() => {
    const fetchData = async () => {
      const data = await useGetProducts();
  
      let filteredProducts = data;
  
      if (search && search !== '') {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
      }
  
      if (category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category.name === category
        );
      }
  
      setProducts(filteredProducts);
    };
  
    fetchData();
  }, [category, search]);


  return (
    <section className='m-20'>
      {status === 'authenticated' ? (
        <h1 className='text-5xl font-bold mb-8'>Olá, {session?.user?.name}! Separamos isso para você hoje.</h1>
      ) : (
        <h1 className='text-5xl font-bold mb-8'>Produtos</h1>
      )}
      {products && products.length > 0 ? (
        <ProductGrid>
          {products?.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} price={Number(product.price)} imageUrl={product.images[0]} />
          ))}
        </ProductGrid>
      ) : (
        <p className="text-3xl font-semibold mt-3">Nenhum produto encontrado.</p>
      )}
    </section>
  )
}

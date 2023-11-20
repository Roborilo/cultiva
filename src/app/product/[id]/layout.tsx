'use client'

import Header from '@/components/layout/header/Header'
import '@/app/globals.css'
import SidebarProduct from '@/components/layout/sidebar/product/SidebarProduct'
import { createContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import useGetProduct from '@/components/customHooks/useGetProduct'

type Comment = {
  id: string
  user: {
    id: string
    name: string
    email: string
    icon: string
    rating: number[]
  }
  content: string
  rating: number
  createdAt: string
}

type Product = {
  id: string
  name: string
  description: string
  manufacturingDate: string
  expirationDate: string
  soldOut: boolean
  quantity: number
  price: string
  rating: number[]
  images: string[]
  buys: object[]
  createdAt: string
  producerId: string
  user: {
    id: string
    name: string
    email: string
    icon: string
    rating: number[]
    sales: object[]
  }
  comments: Comment[]
}

type ProductContextType = {
  isLoading: boolean
  product: Product | null
  error: boolean
}

export const productContext = createContext<ProductContextType>({
  isLoading: true,
  product: null,
  error: false,
})

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [context, setContext] = useState<ProductContextType>({
    isLoading: true,
    product: null,
    error: false,
  })
  const id = usePathname().split('/').pop()

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        return
      }
      const data = await useGetProduct(id)
      if (!data) {
        setContext({
          isLoading: false,
          product: null,
          error: true,
        })
        return
      }
      setContext({
        isLoading: false,
        product: data,
        error: false,
      })
    }

    fetchData()
  }, [])

  return (
    <div className="w-screen reverse-layout min-h-screen">
      <Header />
      <productContext.Provider value={context}>
        <main className="main bg-cultiva-main w-full h-full flex justify-center items-start pb-4">
          {children}
        </main>
        <div className="sticky top-20 sidebar w-[400px]">
          <SidebarProduct />
        </div>
      </productContext.Provider>
    </div>
  )
}

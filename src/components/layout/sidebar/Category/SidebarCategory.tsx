'use client'

import { useEffect, useState } from "react"
import Input from "../Form/Input"
import SidebarRoot from "../Root"
import useGetProducts, { Product } from "@/components/customHooks/useGetProducts"
import { Category } from "."

type Category = {
  name: string
  quantity: number
}

export default function SidebarCategory() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    useGetProducts()
      .then((data) => {
        setProducts(data)
      })
  }, [])

  useEffect(() => {
    setCategories(prevCategories => {
      const updatedCategories = [...prevCategories];
  
      products.forEach(product => {
        const existingCategory = updatedCategories.find(category => category.name === product.category.name);
  
        if (existingCategory) {
          existingCategory.quantity += 1;
        } else {
          updatedCategories.push({
            name: product.category.name,
            quantity: 1,
          });
        }
      });
  
      return updatedCategories;
    });
  }, [products]);

  const filteredCategories = (categories: Category[], search: string) => {
    const filteredCategories = categories.filter((category: any) => category.name.toLowerCase().includes(search.toLowerCase()))

    if (filteredCategories.length === 0) {
      return <p className="text-lg font-semibold py-5 pl-1">Não há categorias encontradas</p>
    }

    return filteredCategories.map((category, index) => (
      <Category.Content
        key={index}
        name={category.name}
        quantity={category.quantity}
      />
    ))
  }
  
  return (
    <SidebarRoot>
      <h1 className="text-2xl font-bold pl-5 py-2">Categorias</h1>
      <div className="flex items-center px-5 py-2">
        <Input placeholder="Pesquisar" handleChange={setSearch} />
      </div>
      <Category.Root>
        {search.length > 0 ? (
          filteredCategories(categories, search)
        ) : (
          categories.length > 0 ? (
            categories.map((category, index) => (
              <Category.Content
                key={index}
                name={category.name}
                quantity={category.quantity}
              />
            ))
          ) : (
            <p className="text-lg font-semibold py-5 pl-1">Não há categorias encontradas</p>
          )
        )}
      </Category.Root>
    </SidebarRoot>
  )
}

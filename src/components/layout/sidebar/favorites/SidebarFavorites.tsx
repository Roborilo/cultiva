'use client'

import { useState } from "react"
import Input from "../Form/Input"
import SidebarRoot from "../Root"
import { Category } from "../Category"

type Category = {
  name: string
  quantity: number
}

export default function SidebarFavorites() {
  const [search, setSearch] = useState('')

  const categories: Category[] = [
    {
      name: "Cultura",
      quantity: 10,
    },
    {
      name: "Frutas",
      quantity: 20,
    },
    {
      name: "Vegetais",
      quantity: 32,
    },
    {
      name: "Horta",
      quantity: 15,
    },
    {
      name: "Lã",
      quantity: 91,
    },
    {
      name: "Eletrônicos",
      quantity: 921,
    },
    {
      name: "Cultura",
      quantity: 10,
    },
    {
      name: "Cultura",
      quantity: 10,
    },
  ]

  const filteredCategories = (categories: Category[], search: string) => {
    const filteredCategories = categories.filter((category: any) => category.name.toLowerCase().includes(search.toLowerCase()))

    if (filteredCategories.length === 0) {
      return <p className="text-base font-semibold py-5 pl-1">Não há produtos encontrados</p>
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
      <h1 className="text-xl font-bold pl-5 py-2">Favoritos</h1>
      <div className="flex items-center px-5 py-2">
        <Input placeholder="Filtrar por categoria" handleChange={setSearch} />
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
            <p className="text-base font-semibold py-5 pl-1">Não há produtos encontrados</p>
          )
        )}
      </Category.Root>
    </SidebarRoot>
  )
}

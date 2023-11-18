'use client'

import { useState } from "react"
import { Category } from "."
import Input from "../Form/Input"
import SidebarRoot from "../Root"

export default function SidebarCategory() {
  const [search, setSearch] = useState('')

  const categories = [
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
  
  return (
    <SidebarRoot>
      <h1 className="text-2xl font-bold pl-5 py-2">Categorias</h1>
      <div className="flex items-center px-5 py-2">
        <Input placeholder="Pesquisar" handleChange={setSearch} />
      </div>
      <Category.Root>
        {search.length > 0 ? (
          categories.map((category, index) => {
            if (category.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Category.Content
                  key={index}
                  name={category.name}
                  quantity={category.quantity}
                />
              )
            }
          })
        ) : (
          categories.map((category, index) => (
            <Category.Content
              key={index}
              name={category.name}
              quantity={category.quantity}
            />
          ))
        )}
      </Category.Root>
    </SidebarRoot>
  )
}

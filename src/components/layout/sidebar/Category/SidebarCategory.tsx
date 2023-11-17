import { Category } from "."
import Input from "../Form/Input"
import SidebarRoot from "../Root"

export default function SidebarCategory() {
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
        <Input placeholder="Pesquisar" />
      </div>
      <Category.Root>
        {categories.map((category) => (
          <Category.Content
            key={category.name}
            name={category.name}
            quantity={category.quantity}
          />
        ))}
      </Category.Root>
    </SidebarRoot>
  )
}

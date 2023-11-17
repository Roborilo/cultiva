import { Category } from "./Category"
import Input from "./Form/Input"

export default function Sidebar() {
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
    <div className="sidebar bg-cultiva-black">
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
    </div>
  )
}

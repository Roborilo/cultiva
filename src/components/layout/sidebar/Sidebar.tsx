import Categorias from "./Categoria"
import Input from "./Form/Input"

export default function Sidebar() {
  return (
    <div className="sidebar w-full h-full bg-blue-400">
      <div className="flex items-center px-5 py-2 bg-blue-300 rounded-e-lg ">
        <Input placeholder="Pesquisar" />
      </div>
      <div>
        <Categorias></Categorias>
      </div>
    </div>
  )
}

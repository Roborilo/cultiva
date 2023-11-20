import { useEffect, useState, useCallback } from "react";
import Input from "../Form/Input";
import SidebarRoot from "../Root";
import useGetProducts, { Product } from "@/components/customHooks/useGetProducts";
import { Category } from ".";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Category = {
  name: string;
  quantity: number;
};

export default function SidebarCategory() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchProducts = useCallback(async () => {
    const data = await useGetProducts();
    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const categoryQuantities = products.reduce((acc, product) => {
      const categoryName = product.category.name;
      // @ts-ignore
      acc[categoryName] = (acc[categoryName] || 0) + 1;
      return acc;
    }, {});
  
    const updatedCategories = Object.entries(categoryQuantities).map(([name, quantity]) => ({
      name,
      quantity: quantity as number
    }));
  
    setCategories(updatedCategories);
  }, [products]);

  const renderCategories = useCallback((categories: Category[]) => {
    if (!categories) {
      return (
        <div className="flex flex-col justify-center items-center">
          <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
          <p className='text-lg font-medium my-3'>Carregando informações</p>
        </div>
      );
    }

    if (categories.length === 0) {
      return <p className="text-base font-semibold py-5 pl-1">Não há categorias encontradas</p>;
    }

    return categories.map((category, index) => (
      <Category.Content key={index} name={category.name} quantity={category.quantity} />
    ));
  }, []);

  return (
    <SidebarRoot>
      <h1 className="text-xl font-bold pl-5 py-2">Categorias</h1>
      <div className="flex items-center px-5 py-2">
        <Input placeholder="Pesquisar" handleChange={setSearch} />
      </div>
      <Category.Root>
        {search.length > 0
          ? renderCategories(categories.filter((category) => category.name.toLowerCase().includes(search.toLowerCase())))
          : renderCategories(categories)}
      </Category.Root>
    </SidebarRoot>
  );
}

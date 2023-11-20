'use client'

import { categoryContext } from "@/app/(main)/layout"
import { useContext } from "react"

interface ICategoryProps {
	name: string
	quantity: number
}

export default function CategoryContent({ name, quantity }: ICategoryProps) {
	const context = useContext(categoryContext);

	if (!context) {
    return null;
  }

	const { category, setCategory } = context

	return (
		<button className="w-full flex justify-between items-center text-white font-medium text-xl hover:underline border-b border-gray-600 pb-4" onClick={() => {
			setCategory(category === name ? null : name)
		}}>
			<p>{name}</p>
			<p>{quantity}</p>
		</button>
	)
}
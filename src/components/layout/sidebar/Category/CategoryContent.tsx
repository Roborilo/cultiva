interface ICategoryProps {
	name: string
	quantity: number
}

export default function CategoryContent({ name, quantity }: ICategoryProps) {
	return (
		<button className="w-full flex justify-between items-center text-white font-medium text-2xl hover:underline border-b border-gray-600 pb-4">
			<p>{name}</p>
			<p>{quantity}</p>
		</button>
	)
}
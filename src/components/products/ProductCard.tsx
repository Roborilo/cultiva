import imageAdapter from "@/lib/utils/image-adapter";
import productPreviewImage from '@/../public/product-default.png'
import Link from "next/link";

type ProductCardProps = {
	id: string
	imageUrl?: string
	name: string
	price: number
}

export default function ProductCard({ id, imageUrl, name, price }: ProductCardProps) {
	return (
		<Link href={`/products/${id}`} className="flex flex-col gap-3 p-6 rounded-xl bg-dropdown-menu-dark w-52 cursor-pointer">
			{imageAdapter(imageUrl || productPreviewImage, 'w-48 h-40')}
			<h1 className="text-xl font-bold text-ellipsis whitespace-nowrap overflow-hidden">{name}</h1>
			<p className="text-base font-bold">R${price.toFixed(2)}</p>
		</Link>
	)
}
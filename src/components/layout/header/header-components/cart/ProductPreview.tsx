import { CiCircleMinus } from "react-icons/ci";

type ProductPreviewProps = {
	name: string
	quantity: number
	price: number
	image: string
}

export default function ProductPreview({ name, quantity, price, image }: ProductPreviewProps) {
	return (
		<div className="flex justify-between items-center w-full mt-3 border-b border-t py-2">
			<div className="flex gap-1">
				<img src={image || "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"} alt="Imagem do Produto" className='h-8 w-8' />
				<p className="text-lg font-medium self-start">{name}</p>
			</div>
			<div>
				<p className='text-lg font-semibold'>R${price.toFixed(2)}</p>
				<button className="font-semibold text-lg flex gap-2 items-center">
					<CiCircleMinus className='text-red-500 font-semibold' />
					<p>Qtd: <span className="font-semibold">{quantity}</span></p>
				</button>
			</div>
		</div>
	)
}
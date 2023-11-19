import { cn } from "@/lib/utils/utils";
import { CiCircleMinus } from "react-icons/ci";

type ProductPreviewProps = {
	name: string
	quantity: number
	price: number
	image: string
	hasBorders?: boolean
}

// TODO: IMPLEMENT CART POPUP

export default function ProductPreview({ name, quantity, price, image, hasBorders }: ProductPreviewProps) {
	return (
		<div className={cn("flex justify-between items-center w-full mt-3 py-2", hasBorders ? "border-b border-t" : "")}>
			<div className="flex gap-1">
				<img src={image || "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"} alt="Imagem do Produto" className='h-8 w-8' />
				<p className="text-lg font-medium self-start">{name}</p>
			</div>
			<div>
				<p className='text-lg font-semibold'>R${price.toFixed(2)}</p>
				<button className="font-semibold text-lg flex gap-2 items-center">
					<CiCircleMinus className='text-red-500 font-semibold' onClick={() => {}} />
					<p>Qtd: <span className="font-semibold">{quantity}</span></p>
				</button>
			</div>
		</div>
	)
}
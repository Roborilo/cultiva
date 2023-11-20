import { usePathname } from 'next/navigation'
import useGetProduct from '../customHooks/useGetProduct'
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { useFavorite } from '@/app/favorites/page'

export default function AddToFav() {
	const { inc } = useFavorite()
	const id = usePathname().split('/').pop()

	const handleClick = async () => {
		if (!id) {
			return
		}
		const product = await useGetProduct(id)
		if (!product) {
			return
		}
		
		inc(product)
	}

	return (
		<button className="focus:outline-none text-black bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-50 font-medium rounded-lg text-xl px-3.5 py-3.5 me-2 mb-2" onClick={handleClick}>
			<BsFillBookmarkPlusFill />
		</button>
	);
}
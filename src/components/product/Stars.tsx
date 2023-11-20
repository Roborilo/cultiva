import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function Stars() {
	return (
		<div className="flex items-center gap-3 bg-black rounded-full p-3">
			<div className="flex gap-1">
				<FaRegStar className='text-xl' />
				<FaRegStar className='text-xl' />
				<FaRegStar className='text-xl' />
				<FaRegStar className='text-xl' />
				<FaRegStar className='text-xl' />
			</div>
			<p className="text-xl">0</p>
		</div>
	)
}
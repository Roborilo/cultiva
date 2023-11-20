import { useEffect, useState } from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

export default function Stars({ rating }: { rating: number[] }) {
	const [ratin, setRatin] = useState({
		rate: 0,
		fullStars: 0,
		hasHalfStar: false,
		emptyStars: 5
	})

	useEffect(() => {
		if (!rating) {
			setRatin({
				rate: 3,
				fullStars: 3,
				hasHalfStar: false,
				emptyStars: 2
			})
			return
		}
		if (typeof rating === 'number') {
			setRatin({
				rate: rating,
				fullStars: Math.floor(rating),
				hasHalfStar: rating - Math.floor(rating) >= 0.5,
				emptyStars: 5 - Math.floor(rating) - (rating - Math.floor(rating) >= 0.5 ? 1 : 0)
			})
			return
		}
		const rate = rating.reduce((acc, curr) => acc + curr, 0) / rating.length
	
		const fullStars = Math.floor(rate)
		const hasHalfStar = rate - fullStars >= 0.5
		const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

		setRatin({
			rate,
			fullStars,
			hasHalfStar,
			emptyStars
		})
	}, [])

	return (
		<div className="flex items-center gap-3 bg-black rounded-full p-3">
			<div className="flex gap-1">
			{[...Array(ratin.fullStars)].map((_, index) => (
				<FaStar key={index} className='text-lg' />
			))}
			{ratin.hasHalfStar && <FaStarHalfAlt className='text-lg' />}
			{[...Array(ratin.emptyStars)].map((_, index) => (
				<FaRegStar key={index} className='text-lg' />
			))}
			</div>
			<p className="text-lg">{ratin.rate.toFixed(1)}</p>
		</div>
	)
}
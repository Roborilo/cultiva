'use client'

import Image from "next/image";
import { useState } from "react";

export default function ImageBanner({ images }: { images?: string[] }) {
	const [actualImage, setActualImage] = useState(images ? images[0] : 'https://information-science-engineering.newhorizoncollegeofengineering.in/wp-content/uploads/2020/01/default-placeholder.png');
	const [img, setImg] = useState(images ? images : ['https://information-science-engineering.newhorizoncollegeofengineering.in/wp-content/uploads/2020/01/default-placeholder.png']);

	const handleClick = (clickedImage: string) => {
		setActualImage(clickedImage);
		const newImages = img.filter(image => image !== clickedImage);
		setImg([clickedImage, ...newImages]);
	}

	return (
		<>
			<div className='flex flex-col gap-4 h-[510px] w-32'>
				{img.map((image, index) => (
					<div key={index} className="cursor-pointer hover:bg-opacity-80 w-28 max-h-28">
						<img
							src={image}
							alt=""
							onClick={() => handleClick(image)}
							className="h-full w-full rounded-lg bg-cover bg-center"
						/>
					</div>
				))}
			</div>
			<div className='flex justify-center items-center rounded-lg bg-dropdown-menu-dark w-full h-full'>
				<img src={actualImage} alt="" className='h-full w-auto' />
			</div>
		</>
	)
}

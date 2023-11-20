'use client'

import Image, { StaticImageData } from "next/image";
import productPreviewImage from '@/../public/product-default.png'
import productBackImage from '@/../public/abstract-nail-polish-texture-detail.jpg'
import ima1 from '@/../public/marisol-benitez-QvkAQTNj4zk-unsplash.jpg'
import ima2 from '@/../public/logo.png'
import { useState } from "react";

export default function ImageBanner() {
	const [images, setImages] = useState([
		productPreviewImage,
		productBackImage,
		ima1,
		ima2
	])
	const [actualImage, setActualImage] = useState(images[0])

	const handleClick = (clickedImage: StaticImageData) => {
		setActualImage(clickedImage);
		const newImages = images.filter(image => image !== clickedImage);
		setImages([clickedImage, ...newImages]);
	}

	return (
		<>
			<div className='flex flex-col gap-4 h-[510px] w-32'>
				{images.map((image, index) => (
					<div key={index} className="cursor-pointer hover:bg-opacity-80 w-32 max-h-32">
						<Image
							src={image}
							alt=""
							onClick={() => handleClick(image)}
							className="h-full w-full rounded-lg bg-cover bg-center"
						/>
					</div>
				))}
			</div>
			<div className='flex justify-center items-center rounded-lg bg-dropdown-menu-dark w-full h-full'>
				<Image src={actualImage} alt="" className='h-full w-auto' />
			</div>
		</>
	)
}

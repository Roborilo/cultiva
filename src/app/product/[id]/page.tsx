'use client'

import productPreviewImage from '@/../public/product-default.png'
import productBackImage from '@/../public/abstract-nail-polish-texture-detail.jpg'
import Image from 'next/image'
import CreateComment from '@/components/comment/create/CreateComment'
import Comment from '@/components/comment/Comment'

export default function ProductPage() {
	return (
		<section className='flex flex-col gap-4 justify-center items-center w-10/12 mt-6'>
			<article className='flex gap-4 justify-center items-start w-full h-[510px]'>
				<div className='flex flex-col gap-4'>
					<Image src={productPreviewImage} alt="" />
					<Image src={productPreviewImage} alt="" />
					<Image src={productPreviewImage} alt="" />
					<Image src={productPreviewImage} alt="" />
				</div>
				<div className='flex justify-center items-center rounded-lg bg-dropdown-menu-dark w-full h-full'>
					<Image src={productBackImage} alt="" className='h-full w-auto' />
				</div>
			</article>
			<article className='flex flex-col justify-start items-start w-full py-3.5 px-6 bg-cultiva-black bg-opacity-75 rounded-md'>
				<div className='flex justify-start items-center gap-3'>
					<h1 className='font-bold text-2xl'>Comentários</h1>
					<span className='text-3xl'>•</span>
					<p className='font-medium text-lg bg-cultiva-main p-2 rounded-full'>300 comentários</p>
				</div>
				<CreateComment />
				<Comment />
			</article>
		</section>
	)
}
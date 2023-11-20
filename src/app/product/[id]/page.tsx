'use client'

import CreateComment from '@/components/comment/create/CreateComment'
import Comment from '@/components/comment/Comment'
import ImageBanner from '@/components/product/image-banner/ImageBanner'

export default function ProductPage() {
	return (
		<section className='flex flex-col gap-4 justify-center items-center w-10/12 mt-6'>
			<article className='flex gap-4 justify-center items-start w-full h-[510px] mb-4'>
				<ImageBanner />
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
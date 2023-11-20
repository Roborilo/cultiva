'use client'

import CreateComment from '@/components/comment/create/CreateComment'
import Comment from '@/components/comment/Comment'
import ImageBanner from '@/components/product/image-banner/ImageBanner'
import { productContext } from './layout'
import { useContext } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function ProductPage() {
	const { isLoading, product, error} = useContext(productContext)

	if (isLoading) {
		return (
			<div className='flex justify-center items-center w-full h-screen'>
				<AiOutlineLoading3Quarters className='w-10 h-10 animate-spin' />
			</div>
		)
	}

	if (error) {
		return (
			<div className='flex justify-center items-center w-full h-screen'>
				<p>Erro ao carregar o produto</p>
			</div>
		)
	}

	return (
		<section className='flex flex-col gap-4 justify-center items-center w-10/12 mt-6'>
			<article className='flex gap-4 justify-center items-start w-full h-[510px] mb-4'>
				<ImageBanner images={product?.images} />
			</article>
			<article className='flex flex-col justify-start items-start w-full py-3.5 px-6 bg-cultiva-black bg-opacity-75 rounded-md'>
				<div className='flex justify-start items-center gap-3'>
					<h1 className='font-bold text-2xl'>Comentários</h1>
					<span className='text-3xl'>•</span>
					<p className='font-medium text-lg bg-cultiva-main p-2 rounded-full'>{product?.comments.length} comentários</p>
				</div>
				<CreateComment image={product?.user.icon} />
				{
					product?.comments.map((comment) => (
						comment.user && (
							<Comment
								key={comment.id}
								name={comment.user.name}
								icon={comment.user.icon}
								content={comment.content}
								rating={comment.rating}
								createdAt={comment.createdAt}
							/>
						)
					))
				}
			</article>
		</section>
	)
}
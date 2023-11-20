import Stars from "../product/Stars";
import UserAvatar from "../user/Avatar";

type CommentProps = {
	icon?: string
	name: string
	createdAt: string
	content: string
	rating: number
}

export default function Comment({ icon, name, createdAt, content, rating }: CommentProps) {

	return (
		<div className='flex justify-start items-start w-full mt-4 gap-4 bg-cultiva-main px-5 py-4 rounded-sm'>
			<UserAvatar wh='w-12 h-12' image={icon} />
			<div className='flex flex-col w-full pt-2'>
				<div className='flex items-center justify-start gap-2'>
					<p className='text-lg font-semibold'>{name}</p>
					<span className='text-xl'>•</span>
					<p className='text-lg font-thin'>4d</p>
				</div>
				<p className="text-lg font-thin text-start leading-6 xl:w-3/4 px-1.5 py-3">{content}</p>
				<div className="flex items-center justify-start gap-2">
					<Stars />
				</div>
			</div>
		</div>
	)
}
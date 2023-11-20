import Stars from "../product/Stars";
import UserAvatar from "../user/Avatar";

export default function Comment() {
	return (
		<div className='flex justify-start items-start w-full mt-4 gap-4 bg-cultiva-main px-5 py-4 rounded-sm'>
			<UserAvatar wh='w-12 h-12' />
			<div className='flex flex-col w-full pt-2'>
				<div className='flex items-center justify-start gap-2'>
					<p className='text-lg font-semibold'>Username</p>
					<span className='text-xl'>•</span>
					<p className='text-lg font-thin'>4d</p>
				</div>
				<p className="text-lg font-thin text-start leading-6 xl:w-3/4 px-1.5 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempora expedita corrupti harum, deleniti quo officia hic laudantium quod sint aperiam voluptate voluptates totam eligendi fugiat repellendus placeat aut fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit velit eos iusto, dicta asperiores vel, corrupti quasi illum officia consequatur facere dolore. Ullam ratione laboriosam, optio qui non fugit dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic libero similique atque quisquam facere incidunt porro impedit facilis nisi asperiores at, ratione esse quae illo nulla ipsa quia saepe!</p>
				<div className="flex items-center justify-start gap-2">
					<Stars />
				</div>
			</div>
		</div>
	)
}
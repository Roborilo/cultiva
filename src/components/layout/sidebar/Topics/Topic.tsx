export default function Topic({ name }: { name: string }) {
	return (
		<button className="w-full flex items-center text-white font-medium text-2xl hover:underline border-b border-gray-600 pb-4">
			<p>{name}</p>
		</button>
	)
}
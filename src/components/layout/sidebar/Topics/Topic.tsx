export default function Topic({
  name,
  handleClick,
}: {
  name: string
  handleClick: () => void
}) {
  return (
    <button
      className="w-full flex items-center text-white font-medium text-xl hover:underline border-b border-gray-600 pb-4"
      onClick={handleClick}
    >
      <p>{name}</p>
    </button>
  )
}

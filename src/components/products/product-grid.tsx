export default function ProductGrid({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
			{children}
		</div>
	)
}
export default function NavLink({ href, children }: { href?: string; children: React.ReactNode }) {
	return (
		<a href={href ? href : ''} className="button py-3 px-5 text-base font-medium rounded text-white bg-black shadow-sm transition-shadow duration-150 hover:shadow-sm shadow-white flex gap-1">
			{children}
		</a>
	)
}
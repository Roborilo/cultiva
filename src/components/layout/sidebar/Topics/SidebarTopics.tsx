import { Category } from "../Category";

export default function SidebarTopics({ children }: { children: React.ReactNode }) {
	return (
		<Category.Root>
			{children}
		</Category.Root>
	)
}
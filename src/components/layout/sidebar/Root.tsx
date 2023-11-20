export default function SidebarRoot({
  children,
}: {
  children: React.ReactNode
}) {
  return <aside className="sidebar bg-cultiva-black h-full">{children}</aside>
}

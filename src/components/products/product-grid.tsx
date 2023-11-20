export default function ProductGrid({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="w-full flex gap-4 flex-wrap">{children}</div>
}

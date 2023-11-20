export default function CategoryWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col justify-start items-center gap-4 mt-3 w-full px-6 py-3">
      {children}
    </section>
  )
}

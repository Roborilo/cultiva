'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"

export default function Avatar() {
	const { data: session } = useSession()

	return (
		<Link href={session?.user ? `/user/${session?.user.id}` : '/api/auth/signin'}>
			<img src={session?.user?.icon || "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"} alt="Avatar Icon" className="h-12 w-12 rounded-full" />
		</Link>
	)
}
'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <main>
      <h1>Hello World</h1>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <div>{session?.user?.email}</div>
      )}
      {session && <div>{JSON.stringify(session, null, 2)}</div>}
      {!session && <Link href={'/api/auth/signin'}>Sign in</Link>}
      {session && <Link href={'/api/auth/signout'}>Sign out</Link>}
    </main>
  )
}

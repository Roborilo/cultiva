import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'
import './globals.css'

import { Roboto } from 'next/font/google'
import { NextAuthProvider } from './providers'
import { cn } from '@/lib/utils/utils'
import { Theme } from '@radix-ui/themes'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Cultiva e-commerce',
  description: 'Sua loja de produtos sustentveis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={cn('w-screen h-screen', roboto.variable)}>
        <NextAuthProvider>
          <Theme className="w-full h-full layout" appearance="dark" accentColor="ruby" grayColor="gray" panelBackground="solid">
            {children}
          </Theme>
        </NextAuthProvider>
      </body>
    </html>
  )
}

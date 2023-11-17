import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'

import { Roboto } from 'next/font/google'
import './globals.css'
import { NextAuthProvider } from './providers'
import { cn } from '@/lib/utils/utils'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import Header from '@/components/layout/header/Header'
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
            <Header />
            <main className="main bg-cultiva-main w-full h-[5000px]">{children}</main>
            <div className='sticky top-28'>
              <Sidebar />
            </div>
          </Theme>
        </NextAuthProvider>
      </body>
    </html>
  )
}

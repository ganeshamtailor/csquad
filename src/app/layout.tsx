import Navbar from '@/components/Navbar'
import './globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoupleSquad',
  description: 'CoupleSquad app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang='en' className={cn('bg-white text-slate-900 antialiased light',inter.className)}>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

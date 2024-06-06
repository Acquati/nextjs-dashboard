import '@/ui/global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Dashboard',
  description:
    'This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

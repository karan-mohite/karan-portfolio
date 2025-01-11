import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karan Mohite',
  description: 'Karan Mohite',
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

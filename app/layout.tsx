import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'lightning control system',
  description: 'lightning control system',
  generator: 'lightning',
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

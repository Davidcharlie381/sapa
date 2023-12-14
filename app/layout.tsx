import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
// import { SpeedInsights } from '@vercel/speed-insights/next'

const sg = Space_Grotesk({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Dawn of Sapa',
  description: 'Abeg | Send me Tukay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sg.className}>{children}</body>
      {/* <SpeedInsights /> */}
    </html>
  )
}

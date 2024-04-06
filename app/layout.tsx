import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from '~/components/ui/toaster'
import { UserStoreProvider } from '~/providers/user-store-privder'

const redHat = Red_Hat_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QTI Test',
  description: 'QTI Test'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={redHat.className}>
        <main>
          <UserStoreProvider>
            {children}
            <Toaster />
          </UserStoreProvider>
        </main>
      </body>
    </html>
  )
}

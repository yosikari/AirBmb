import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/navbar'
import ClientOnly from './components/client-only'
import RegisterModal from './components/modals/register-modal'

export const metadata = {
  title: 'Airbmb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

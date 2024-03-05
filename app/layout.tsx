import { ClerkProvider } from '@clerk/nextjs'
import { Urbanist } from 'next/font/google'

import type { Metadata } from 'next'
import ToastProvider from '@/provider/toast-provider'
import Footer from '@/components/footer'

import './globals.css'
import ModalProvider from '@/provider/modal-provider'



const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: { domain: string } }) {




  return (

    <ClerkProvider>
      <html lang="en">

        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />

          {children}
          
          <Footer />

        </body>

      </html>
    </ClerkProvider>

  )
}

import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
		{children}

		<Toaster position='top-center'/>
		</body>
    </html>
  )
}

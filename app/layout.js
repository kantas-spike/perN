import './globals.css'
import { noto_sans_jp } from '@/lib/typography'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className={`${noto_sans_jp.variable}`}>
      <body className='font-sans'>{children}</body>
    </html>
  )
}

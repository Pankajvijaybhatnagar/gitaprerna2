import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

export const metadata = {
  title: 'Gita Prerna - भगवद् गीता की प्रेरणा',
  description: 'Experience the timeless wisdom of Bhagavad Gita in Hindi and English. Explore all 18 chapters with detailed explanations, key teachings, and profound insights.',
  keywords: 'Bhagavad Gita, Gita, Krishna, Arjuna, Hindu scripture, spiritual wisdom, dharma, yoga, meditation, bhagwa, saffron',
  authors: [{ name: 'Gita Prerna' }],
  openGraph: {
    title: 'Gita Prerna - भगवद् गीता की प्रेरणा',
    description: 'Experience the timeless wisdom of Bhagavad Gita',
    type: 'website',
  },
  themeColor: '#FF6B35',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FF6B35" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#FF6B35" />
      </head>
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: { default: 'Caio Velten | Software Engineer', template: '%s | Caio Velten' },
  description: 'Engenheiro de software full-stack criando produtos digitais claros, rápidos e escaláveis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} ${display.variable}`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

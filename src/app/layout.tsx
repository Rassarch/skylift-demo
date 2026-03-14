import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Skylift Fitness Center — Gym Premium Kota Metro',
  description: 'Gym premium berstandar internasional di Kota Metro, Lampung. Alat impor, personal trainer bersertifikat, sauna gratis, dan 2 studio kelas kebugaran.',
  keywords: 'gym metro lampung, fitness center metro, skylift gym, gym premium metro',
  openGraph: {
    title: 'Skylift Fitness Center',
    description: 'Lift Your Limits — Gym Premium di Kota Metro',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="bg-sk-bg text-sk-white font-body antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import AppointmentModal from '@/components/ui/AppointmentModal'
import FloatingCTA from '@/components/ui/FloatingCTA'

export const metadata: Metadata = {
  title: {
    default: 'Tirupati Balaji Health Care Group | Health Care Group in Vijayawada',
    template: '%s | Tirupati Balaji Health Care Group',
  },
  description:
    'Tirupati Balaji Health Care Group is a premier multi-specialty hospital in Vijayawada, Kolkata offering advanced cardiology, neurology, oncology, orthopaedics, and 22+ specialties with 150+ expert doctors and 28 years of excellence.',
  keywords: [
    'multi specialty hospital Vijayawada',
    'best hospital Kolkata',
    'Tirupati Balaji Health Care Group',
    'cardiology hospital Vijayawada',
    'cancer treatment Vijayawada',
    'orthopaedics hospital AP',
    'neurology Vijayawada',
  ],
  authors: [{ name: 'Tirupati Balaji Health Care Group' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Tirupati Balaji Health Care Group',
    title: 'Tirupati Balaji Health Care Group | Health Care Group in Vijayawada',
    description:
      'Advanced healthcare with 150+ specialist doctors across 22 departments. Serving Kolkata since 1996.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Tirupati Balaji Health Care Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tirupati Balaji Health Care Group',
    description: 'Premier multi-specialty healthcare in Vijayawada, Kolkata',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AppointmentModal />
        <FloatingCTA />
      </body>
    </html>
  )
}

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout'; // Fixed typo in import
import { Analytics } from '@vercel/analytics/react'; // ✅ add this

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfoliosite-gules-chi.vercel.app/'),
  title: 'Shun-Fa | Product Designer',
  description:
    'Portfolio — UX/UI | Enterprise Digital Transformation | AI-Enabled Product Strategy.',
  openGraph: {
    title: 'Shun-Fa | Product Designer',
    description:
      'Portfolio — UX/UI | Enterprise Digital Transformation | AI-Enabled Product Strategy.',
    url: 'https://portfoliosite-gules-chi.vercel.app/',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Shun-Fa portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shun-Fa | Product Designer',
    description:
      'Portfolio — UX/UI | Enterprise Digital Transformation | AI-Enabled Product Strategy.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-sans">
        <ClientLayout>{children}</ClientLayout>
        <Analytics /> {/* ✅ add here */}
      </body>
    </html>
  );
}

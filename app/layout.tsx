import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SEMUJUR ISLAND - Premium Marine Aquarium Store',
  description: 'Premium saltwater fish, corals, and natural seawater. Your gateway to the ocean\'s most stunning creatures.',
  keywords: 'marine aquarium, saltwater fish, coral reef, natural seawater, aquarium store, semujur island',
  openGraph: {
    title: 'SEMUJUR ISLAND - Premium Marine Aquarium Store',
    description: 'Premium saltwater fish, corals, and natural seawater.',
    images: [
      {
        url: '/logo.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEMUJUR ISLAND - Premium Marine Aquarium Store',
    description: 'Premium saltwater fish, corals, and natural seawater.',
    images: [
      {
        url: '/logo.webp',
      },
    ],
  },    verification: {
      google: 'evwQttFVFt7bOjEff8VZlG-NtDCFI-OfZ4j7ElC31Zc',
    },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

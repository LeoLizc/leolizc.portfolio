import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/ui/components/header';
import Footer from '@/ui/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const viewPort: Viewport = {
  themeColor: '#8f7ada',
};

export const metadata: Metadata = {
  title: 'Portfolio LeoLizc | Ingeniero de Sistemas',
  description: 'Portfolio de Leonardo Lizcano, Ingeniero de Sistemas de la Universidad del Norte, Colombia.',
  robots: 'index, follow',
  // alternates: {}, // TODO: Add alternates for other languages (if any). Also the canonical URL.
  // openGraph: {
  //   type: 'website',
  //   locale: 'es_CO',
  //   url: 'https://leolizcano.vercel.app/',
  //   title: 'Portfolio LeoLizc | Ingeniero de Sistemas',
  //   description: 'Portfolio de Leonardo Lizcano, Ingeniero de Sistemas
  // de la Universidad del Norte, Colombia.',
  //   images: [
  //     {
  //       url: '/imgs/avatar.webp',
  //       width: 512,
  //       height: 512,
  //       alt: 'avatar',
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

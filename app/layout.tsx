import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Source_Sans_3 } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TechBlog - Explore the Future of Technology',
  description: 'Discover insights, tutorials, and trends from the world of web development, design, and technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${sourceSans.variable} font-sans bg-slate-900 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
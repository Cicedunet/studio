import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils";
import './globals.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Élégance & Bien-Être | Josy Madie',
  description: 'Découvrez des parfums d’exception et construisez votre business en toute liberté avec Josy Madie.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "bg-background font-sans")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

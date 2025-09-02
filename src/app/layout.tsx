import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils";
import './globals.css';

export const metadata: Metadata = {
  title: 'Élégance & Bien-Être | Liz-Francine',
  description: 'Découvrez des parfums d’exception et construisez votre business en toute liberté avec Liz-Francine.',
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

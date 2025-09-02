import Link from "next/link";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Élégance & Bien-Être</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Josy Madie. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            {/* Add social links here if available */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

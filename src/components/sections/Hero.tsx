import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/#decouvrir", label: "Découvrir" },
  { href: "/parfums", label: "Liste des Parfums" },
  { href: "/produits-minceur", label: "Produits Minceur" },
  { href: "/#catalogue", label: "Catalogue" },
  { href: "/#business", label: "Business" },
  { href: "/#offres", label: "Offres" },
  { href: "/#contact", label: "Contact" },
];

const Hero = () => {
  return (
    <section id="decouvrir" className="relative pt-20 md:pt-32">
      <div
        className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-accent/50 to-background"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
              <Sparkles className="h-6 w-6 text-primary" />
              <span>Élégance & Bien-Être</span>
            </Link>
             <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Ouvrir le menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-6 p-6">
                     <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
                        <Sparkles className="h-6 w-6 text-primary" />
                        <span>Élégance & Bien-Être</span>
                    </Link>
                    <nav className="flex flex-col gap-4 text-lg font-medium">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className="transition-colors hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Liz-Francine: Votre guide vers l'Élégance & le Bien-Être
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Maman comblée, Infirmière et distributrice passionnée de parfums & cosmétiques haut de gamme. Depuis la douce Corrèze, je partage ma passion pour l'élégance au quotidien.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg">
                <Link href="#profiler">Trouvez votre parfum signature</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="#business">Démarrez votre aventure</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/600"
              alt="Portrait de Liz-Francine"
              width={500}
              height={500}
              data-ai-hint="elegant woman portrait"
              className="aspect-square rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>

        <nav className="hidden md:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg font-medium mt-16 pb-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Hero;

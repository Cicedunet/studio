import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles, ShoppingCart, Weight, BookOpen, Instagram, Facebook, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "/#decouvrir", label: "Découvrir" },
  { href: "/#profiler", label: "Mon Parfum Idéal" },
  { href: "/#catalogue", label: "Catalogue" },
  { href: "/#business", label: "Business" },
  { href: "/#offres", label: "Offres" },
  { href: "/#contact", label: "Contact" },
];

const ctaLinks = [
  { href: "/parfums", label: "Liste des Parfums", icon: ShoppingCart},
  { href: "/produits-minceur", label: "Produits Minceur", icon: Weight },
  { href: "https://www.chogangroupspa.com/referral/LIZA948BE/FR", label: "Catalogue", icon: BookOpen },
]

const socialLinks = [
    { href: "https://www.instagram.com/lizfrancine_elegance/", label: "Instagram", icon: Instagram },
    { href: "https://www.facebook.com/profile.php?id=61561083971213", label: "Facebook", icon: Facebook },
    { href: "https://www.tiktok.com/@lizfrancine_elegance", label: "TikTok", icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16.5 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z" /><path d="M11.5 16.5v-11" /><path d="m7.5 11.5 8-4" /></svg> },
    { href: "https://wa.me/+33652915596", label: "WhatsApp", icon: MessageCircle }
]

const Hero = () => {
  return (
    <section id="decouvrir" className="relative pt-20 md:pt-24 pb-12 md:pb-20">
      <div
        className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-accent/50 to-background"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <header className="flex justify-between items-center mb-8 md:mb-12">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
              <Sparkles className="h-6 w-6 text-primary" />
              <span>Élégance & Bien-Être</span>
            </Link>
             <nav className="hidden md:flex flex-wrap items-center justify-center gap-x-6 text-lg font-medium">
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
        </header>

        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Liz-Francine: Votre guide vers l'Élégance & le Bien-Être
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Maman comblée, Infirmière et distributrice passionnée de parfums & cosmétiques haut de gamme. Depuis la douce Corrèze, je partage ma passion pour l'élégance au quotidien.
            </p>
             <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a href={social.href} key={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                            <Icon />
                            <span className="sr-only">{social.label}</span>
                        </a>
                    )
                })}
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

        <div className="mt-16 md:mt-24">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {ctaLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith('http');
                const linkContent = (
                   <div className="flex items-center justify-center text-center gap-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-transform hover:scale-105 hover:shadow-lg">
                      <Icon className="h-8 w-8 text-primary" />
                      <span className="text-lg font-semibold">{link.label}</span>
                    </div>
                );
                
                if (isExternal) {
                  return (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      {linkContent}
                    </a>
                  )
                }

                return (
                  <Link href={link.href} key={link.href} >
                   {linkContent}
                  </Link>
                )
              })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

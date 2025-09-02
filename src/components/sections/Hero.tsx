import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles, ShoppingCart, Weight, BookOpen, Instagram, Facebook, MessageCircle, Briefcase, Gift, Phone, List } from "lucide-react";

const navLinks = [
  { href: "#profiler", label: "Mon Parfum Idéal", icon: Sparkles },
  { href: "#business", label: "Business", icon: Briefcase },
  { href: "#offres", label: "Offres", icon: Gift },
  { href: "#contact", label: "Contact", icon: Phone },
];

const productLinks = [
    { href: "/parfums", label: "Parfums", icon: List },
    { href: "/produits-minceur", label: "Minceur", icon: Weight },
    { href: "/catalogue", label: "Catalogue", icon: BookOpen },
]

const socialLinks = [
    { href: "https://www.instagram.com/lizfrancine_elegance/", label: "Instagram", icon: Instagram },
    { href: "https://www.facebook.com/profile.php?id=61561083971213", label: "Facebook", icon: Facebook },
    { href: "https://www.tiktok.com/@lizfrancine_elegance", label: "TikTok", icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16.5 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z" /><path d="M11.5 16.5v-11" /><path d="m7.5 11.5 8-4" /></svg> },
    { href: "https://wa.me/+33652915596", label: "WhatsApp", icon: MessageCircle }
]

const Hero = () => {
  return (
    <section id="decouvrir" className="relative pt-12 md:pt-20 pb-12 md:pb-20">
      <div
        className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-secondary/50 to-background"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <header className="flex justify-between items-center mb-8 md:mb-12">
            <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
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
                      {[...productLinks, ...navLinks].map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className="transition-colors hover:text-primary flex items-center gap-2"
                            target={link.target}
                          >
                            <link.icon className="h-5 w-5" />
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
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Liz-Francine: Votre guide vers l'Élégance & le Bien-Être
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Maman comblée, Infirmière et distributrice passionnée de parfums & cosmétiques haut de gamme. Depuis la douce Corrèze, je partage ma passion pour l'élégance au quotidien.
            </p>
             <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                        <a href={social.href} key={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125 hover:rotate-6">
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
              className="aspect-square rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
            />
          </div>
        </div>

        <nav className="hidden md:flex flex-wrap items-center justify-center gap-4 mt-16 md:mt-24 text-lg font-medium">
            {[...productLinks, ...navLinks].map((link) => (
            <Button asChild key={link.href} variant="outline" size="lg" className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-primary/10 hover:border-primary">
                <Link
                href={link.href}
                target={link.target}
                className="flex items-center gap-2"
                >
                <link.icon className="h-5 w-5 text-primary" />
                {link.label}
                </Link>
            </Button>
            ))}
        </nav>
      </div>
    </section>
  );
};

export default Hero;

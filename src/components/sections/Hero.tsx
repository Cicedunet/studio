import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { Cart } from "@/components/Cart";
import { Menu, Sparkles, Weight, BookOpen, Instagram, Facebook, MessageCircle, Briefcase, Gift, Phone, List, ShoppingBag, HeartPulse, Droplets } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface NavLink {
  href?: string;
  label: string;
  icon: any;
  subLinks?: { href: string; label: string }[];
}

const navLinks: NavLink[] = [
  { href: "#profiler", label: "Mon Parfum Idéal", icon: Sparkles },
  { href: "#business", label: "Business", icon: Briefcase },
  { href: "#offres", label: "Offres", icon: Gift },
  { href: "#contact", label: "Contact", icon: Phone },
];

const productLinks: NavLink[] = [
  { href: "/parfums", label: "Parfums", icon: List },
  { href: "/produits-minceur?tab=produits-minceur", label: "Minceur", icon: Weight },
  {
    label: "Soins",
    icon: HeartPulse,
    subLinks: [
      { href: "/catalogue?category=produit-pour-la-peau", label: "Visage & Corps" },
      { href: "/catalogue?category=soin-capillaire", label: "Cheveux" },
      { href: "/catalogue?category=hygiene-dentaire", label: "Hygiène Dentaire" },
      { href: "/catalogue?category=maquillage", label: "Maquillage" },
    ],
  },
  {
    label: "Maison",
    icon: Droplets,
    subLinks: [
      { href: "/catalogue?category=produit-entretien", label: "Entretien" },
      { href: "/catalogue?category=senteur-maison", label: "Senteurs" },
    ],
  },
  { href: "/catalogue?category=lunettes", label: "Lunettes", icon: ShoppingBag },
];

const socialLinks = [
  { href: "https://www.instagram.com/lizfrancine_elegance/", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/profile.php?id=61561083971213", label: "Facebook", icon: Facebook },
  { href: "https://www.tiktok.com/@lizfrancine_elegance", label: "TikTok", icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16.5 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z" /><path d="M11.5 16.5v-11" /><path d="m7.5 11.5 8-4" /></svg> },
  { href: "https://wa.me/+32466423584", label: "WhatsApp", icon: MessageCircle }
];

const Hero = () => {
  return (
    <section id="decouvrir" className="relative pt-12 md:pt-20 pb-12 md:pb-20 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-secondary/50 to-background"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <header className="flex justify-between items-center mb-8 md:mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span>Élégance & Bien-Être</span>
          </Link>
          <div className="flex items-center gap-4">
            <CurrencySwitcher />
            <Cart />
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
                      {[...productLinks, ...navLinks].map((link: any) => (
                        link.subLinks ? (
                          <Accordion type="single" collapsible className="w-full" key={link.label}>
                            <AccordionItem value="item-1" className="border-b-0">
                              <AccordionTrigger className="hover:no-underline">
                                <span className="transition-colors hover:text-primary flex items-center gap-2">
                                  <link.icon className="h-5 w-5" />
                                  {link.label}
                                </span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-4 pl-8 pt-2">
                                  {link.subLinks.map((subLink: any) => (
                                    <SheetClose asChild key={subLink.href}>
                                      <Link
                                        href={subLink.href}
                                        className="transition-colors hover:text-primary flex items-center gap-2"
                                      >
                                        {subLink.label}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <SheetClose asChild key={link.label}>
                            <Link
                              href={link.href || "#"}
                              className="transition-colors hover:text-primary flex items-center gap-2"
                            >
                              <link.icon className="h-5 w-5" />
                              {link.label}
                            </Link>
                          </SheetClose>
                        )
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Réintroduction d'une grille à deux colonnes */}
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          {/* Conteneur pour le texte et les liens sociaux */}
          <div className="flex flex-col items-start space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
              Josy Madie: L'Élégance & le Bien-Être au Quotidien
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Je suis Josy Madie, maman, professionnelle des chiffres et distributrice de parfums haut de gamme. Passionnée par le bien-être et l'élégance, je partage ici des produits et astuces qui vont ravir ton quotidien. Je t'aide également à construire ton propre business en toute liberté suivi de conseils à la clé.
              <br/><br/>
              Je t'invite à explorer mon univers raffiné.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a href={social.href} key={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-125 hover:rotate-6 animate-in fade-in zoom-in-50 duration-500" style={{animationDelay: `${600 + index * 100}ms`}}>
                    <Icon />
                    <span className="sr-only">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
          {/* Nouveau conteneur pour l'image du parfum */}
          <div className="flex justify-center items-center p-6 row-start-1 md:row-start-auto animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <Image
              src="https://static3.depositphotos.com/1000859/118/i/450/depositphotos_1180794-stock-photo-perfume-bottle-with-crystals.jpg" // Remplacez par le chemin de votre image
              alt="Image d'un parfum"
              width={250}
              height={250}
              className="rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
            />
          </div>
        </div>

        <nav className="hidden md:flex flex-wrap items-center justify-center gap-4 mt-16 md:mt-24 text-lg font-medium animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
          {[...productLinks, ...navLinks].map((link: any) => (
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="lg" className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-primary/10 hover:border-primary flex items-center gap-2">
                    <link.icon className="h-5 w-5 text-primary" />
                    {link.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.subLinks.map((subLink: any) => (
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link href={subLink.href}>{subLink.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild key={link.label} variant="outline" size="lg" className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-primary/10 hover:border-primary">
                <Link
                  href={link.href || "#"}
                  className="flex items-center gap-2"
                >
                  <link.icon className="h-5 w-5 text-primary" />
                  {link.label}
                </Link>
              </Button>
            )
          ))}
          <Button asChild size="lg" className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="https://www.chogangroupspa.com/registration_consultant/JOSCAAD53" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              Aller à la boutique
            </a>
          </Button>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
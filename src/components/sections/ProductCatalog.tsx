import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, BookOpen, List, Weight, ShoppingCart, Sparkles, HeartPulse, Droplets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCatalog() {
  return (
    <section id="catalogue" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ShoppingCart className="mx-auto h-12 w-12 text-primary animate-bounce" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Explorez un Univers de Senteurs et de Bien-Être
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plongez dans nos collections exclusives et trouvez les trésors qui sublimeront votre quotidien. Des parfums enivrants aux produits de bien-être, découvrez tout notre univers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Parfumerie", desc: "Équivalences de luxe & fragrances", icon: Sparkles, href: "/parfums" },
              { title: "Minceur & Bien-être", desc: "Cures détox & compléments", icon: Weight, href: "/produits-minceur" },
              { title: "Soin Visage & Corps", desc: "Bave d'escargot, Aloe Vera...", icon: HeartPulse, href: "/catalogue?category=produit-pour-la-peau" },
              { title: "Soin Capillaire", desc: "Shampoings & masques réparateurs", icon: Droplets, href: "/catalogue?category=soin-capillaire" },
              { title: "Hygiène Dentaire", desc: "Blanchiment & soins naturels", icon: List, href: "/catalogue?category=hygiene-dentaire" },
              { title: "Entretien Maison", desc: "Nettoyage pro & écologique", icon: Store, href: "/catalogue?category=produit-entretien" },
              { title: "Senteurs Maison", desc: "Diffuseurs & parfums d'ambiance", icon: Droplets, href: "/catalogue?category=senteur-maison" },
            ].map((cat, i) => (
              <Card key={i} className="group relative overflow-hidden border-none bg-secondary/30 p-6 transition-all duration-500 hover:bg-secondary/50 hover:shadow-2xl">
                  <div className="absolute -right-4 -top-4 text-primary/10 transition-transform duration-500 group-hover:scale-150 group-hover:-rotate-12">
                    <cat.icon size={120} />
                  </div>
                  <cat.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cat.desc}</p>
                  <Button asChild variant="ghost" className="mt-4 group-hover:translate-x-2 transition-transform p-0 hover:bg-transparent hover:text-primary">
                      <Link href={cat.href} className="flex items-center gap-2">
                        Découvrir <BookOpen className="h-4 w-4" />
                      </Link>
                  </Button>
              </Card>
            ))}
        </div>

         <div className="mt-16 text-center">
             <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-primary/20 transition-all hover:scale-105">
                <Link href="/catalogue" className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Consulter le Catalogue Complet
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, BookOpen, List, Weight, ShoppingCart, Sparkles } from "lucide-react";
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

        <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary/50">
                <Sparkles className="h-10 w-10 text-accent" />
                <h3 className="mt-4 text-2xl font-bold">Parfums d'Exception</h3>
                <p className="mt-2 text-muted-foreground">Consultez la liste complète de nos équivalences de parfums.</p>
                <Button asChild className="mt-6">
                    <Link href="/parfums">Voir les parfums</Link>
                </Button>
            </Card>
             <Card className="flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary/50">
                <Weight className="h-10 w-10 text-accent" />
                <h3 className="mt-4 text-2xl font-bold">Objectif Minceur</h3>
                <p className="mt-2 text-muted-foreground">Découvrez notre gamme pour vous aider à atteindre vos objectifs.</p>
                <Button asChild className="mt-6">
                    <Link href="/produits-minceur">Voir les produits</Link>
                </Button>
            </Card>
        </div>

         <div className="mt-16 text-center">
             <Card className="inline-block p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-secondary/50">
                <BookOpen className="mx-auto h-10 w-10 text-accent" />
                <h3 className="mt-4 text-2xl font-bold">Catalogue Complet</h3>
                <p className="mt-2 text-muted-foreground">Cosmétiques, bien-être, maison et plus encore.</p>
                <Button asChild className="mt-6">
                    <Link href="/catalogue">Voir le catalogue</Link>
                </Button>
            </Card>
        </div>
      </div>
    </section>
  );
}

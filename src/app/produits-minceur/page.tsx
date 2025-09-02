import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Weight, ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

const slimmingProducts = [
    {
        name: "Thé Détox",
        image: "https://picsum.photos/400/400?random=11",
        hint: "detox tea"
    },
    {
        name: "Brûleur de Graisses",
        image: "https://picsum.photos/400/400?random=12",
        hint: "fat burner supplement"
    },
    {
        name: "Shake Protéiné",
        image: "https://picsum.photos/400/400?random=13",
        hint: "protein shake"
    },
    {
        name: "Crème Anti-Cellulite",
        image: "https://picsum.photos/400/400?random=14",
        hint: "anti-cellulite cream"
    },
    {
        name: "Coupe-Faim Naturel",
        image: "https://picsum.photos/400/400?random=15",
        hint: "natural appetite suppressant"
    },
     {
        name: "Draineur Intense",
        image: "https://picsum.photos/400/400?random=16",
        hint: "detox drink"
    },
];

export default function ProduitsMinceurPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
        <header className="py-6 bg-secondary">
             <div className="container mx-auto px-4 md:px-6">
                <Button asChild variant="outline">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour à l'accueil
                    </Link>
                </Button>
            </div>
        </header>
        <main className="flex-grow py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <Weight className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
                        Nos Produits Minceur
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                       Une sélection de produits de haute qualité pour vous accompagner dans votre parcours bien-être et atteindre vos objectifs.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {slimmingProducts.map((product) => (
                        <Card key={product.name}>
                            <CardHeader className="p-0">
                                <div className="aspect-square relative w-full overflow-hidden rounded-t-lg">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    data-ai-hint={product.hint}
                                    className="object-cover"
                                />
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-xl text-center">{product.name}</CardTitle>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                 <div className="mt-16 text-center">
                    <h3 className="font-headline text-2xl font-bold">Intéressé(e) par un produit ?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">Contactez-moi pour des conseils personnalisés et pour passer votre commande.</p>
                     <Button asChild size="lg" className="mt-6 text-lg">
                        <a href="https://www.chogangroupspa.com/referral/LIZA948BE/FR" target="_blank" rel="noopener noreferrer">
                            Voir sur la boutique
                        </a>
                    </Button>
                </div>
            </div>
        </main>
      <Footer />
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Weight, ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";

const slimmingProducts = [
    {
        name: "Thé Détox",
        image: "/images/minceur/the-detox.jpg",
        hint: "detox tea"
    },
    {
        name: "Brûleur de Graisses",
        image: "/images/minceur/bruleur-graisses.jpg",
        hint: "fat burner supplement"
    },
    {
        name: "Shake Protéiné",
        image: "/images/minceur/shake-proteine.jpg",
        hint: "protein shake"
    },
    {
        name: "Crème Anti-Cellulite",
        image: "/images/minceur/creme-anti-cellulite.jpg",
        hint: "anti-cellulite cream"
    },
    {
        name: "Coupe-Faim Naturel",
        image: "/images/minceur/coupe-faim.jpg",
        hint: "natural appetite suppressant"
    },
     {
        name: "Draineur Intense",
        image: "/images/minceur/draineur-intense.jpg",
        hint: "detox drink"
    },
];

export default function ProduitsMinceurPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
        <header className="py-6 bg-secondary/50">
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
                    <Weight className="mx-auto h-12 w-12 text-primary animate-bounce" />
                    <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
                        Nos Produits Minceur
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                       Une sélection de produits de haute qualité pour vous accompagner dans votre parcours bien-être et atteindre vos objectifs.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {slimmingProducts.map((product) => {
                        const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit minceur : ${product.name}. Pouvez-vous m'en dire plus ?`);
                        const whatsappUrl = `https://wa.me/+32466423584?text=${whatsappMessage}`;

                        return (
                        <Card key={product.name} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                            <CardHeader className="p-0">
                                <div className="aspect-square relative w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    data-ai-hint={product.hint}
                                    className="object-cover"
                                />
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 flex-grow">
                                <CardTitle className="text-xl text-center h-12 flex items-center justify-center">{product.name}</CardTitle>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                 <Button asChild className="w-full">
                                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="mr-2 h-4 w-4" />
                                        Commander
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    )})}
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

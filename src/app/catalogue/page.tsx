import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";

const catalogueProducts = [
    { name: "Crème Visage à la Bave d'Escargot", image: "https://picsum.photos/400/400?random=51", hint: "face cream" },
    { name: "Masque Cheveux à la Kératine", image: "https://picsum.photos/400/400?random=52", hint: "hair mask" },
    { name: "Fond de Teint Longue Tenue", image: "https://picsum.photos/400/400?random=53", hint: "foundation makeup" },
    { name: "Rouge à Lèvres Mat Velours", image: "https://picsum.photos/400/400?random=54", hint: "lipstick" },
    { name: "Huile Sèche Pailletée Corps et Cheveux", image: "https://picsum.photos/400/400?random=55", hint: "shimmer body oil" },
    { name: "Détartrant pour Machine à Café", image: "https://picsum.photos/400/400?random=56", hint: "cleaning product" },
    { name: "Nettoyant Four et Plaque de Cuisson", image: "https://picsum.photos/400/400?random=57", hint: "oven cleaner" },
    { name: "Parfum d'Ambiance Bois d'Orient", image: "https://picsum.photos/400/400?random=58", hint: "home fragrance" },
];


export default function CataloguePage() {
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
                    <BookOpen className="mx-auto h-12 w-12 text-primary animate-pulse" />
                    <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
                        Notre Catalogue
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Découvrez une sélection de nos meilleurs produits cosmétiques, maquillage et pour la maison.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {catalogueProducts.map((product, index) => {
                        const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit : ${product.name}. Pouvez-vous m'en dire plus ?`);
                        const whatsappUrl = `https://wa.me/+33652915596?text=${whatsappMessage}`;

                        return (
                        <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                           <CardHeader className="p-0">
                                <div className="aspect-square relative w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    data-ai-hint={product.hint}
                                    className="object-cover"
                                />
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 flex-grow">
                                <CardTitle className="text-lg text-center h-12 flex items-center justify-center">{product.name}</CardTitle>
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
                    <h3 className="font-headline text-2xl font-bold">Un produit vous intéresse ?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">Contactez-moi pour passer commande ou pour obtenir plus d'informations.</p>
                    <Button asChild size="lg" className="mt-6 text-lg">
                        <a href="https://wa.me/+33652915596" target="_blank" rel="noopener noreferrer">
                            Commander sur WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </main>
      <Footer />
    </div>
  );
}
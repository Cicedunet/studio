import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";

const perfumeList = [
    { name: "N°1 - Inspiré par La Vie Est Belle", image: "/images/parfums/parfum-1.jpg", hint: "perfume bottle" },
    { name: "N°2 - Inspiré par Black Opium", image: "/images/parfums/parfum-2.jpg", hint: "perfume bottle" },
    { name: "N°3 - Inspiré par J'adore", image: "/images/parfums/parfum-3.jpg", hint: "perfume bottle" },
    { name: "N°4 - Inspiré par Coco Mademoiselle", image: "/images/parfums/parfum-4.jpg", hint: "perfume bottle" },
    { name: "N°5 - Inspiré par Si", image: "/images/parfums/parfum-5.jpg", hint: "perfume bottle" },
    { name: "N°6 - Inspiré par Angel", image: "/images/parfums/parfum-6.jpg", hint: "perfume bottle" },
    { name: "N°7 - Inspiré par Light Blue", image: "/images/parfums/parfum-7.jpg", hint: "perfume bottle" },
    { name: "N°8 - Inspiré par Good Girl", image: "/images/parfums/parfum-8.jpg", hint: "perfume bottle" },
    { name: "N°9 - Inspiré par L'Interdit", image: "/images/parfums/parfum-9.jpg", hint: "perfume bottle" },
    { name: "N°10 - Inspiré par Sauvage", image: "/images/parfums/parfum-10.jpg", hint: "perfume bottle" },
    { name: "N°11 - Inspiré par Bleu de Chanel", image: "/images/parfums/parfum-11.jpg", hint: "perfume bottle" },
    { name: "N°12 - Inspiré par Acqua di Gio", image: "/images/parfums/parfum-12.jpg", hint: "perfume bottle" },
    { name: "N°13 - Inspiré par 1 Million", image: "/images/parfums/parfum-13.jpg", hint: "perfume bottle" },
    { name: "N°14 - Inspiré par Terre d'Hermès", image: "/images/parfums/parfum-14.jpg", hint: "perfume bottle" },
    { name: "N°15 - Inspiré par Aventus", image: "/images/parfums/parfum-15.jpg", hint: "perfume bottle" },
    { name: "N°16 - Inspiré par Baccarat Rouge 540", image: "/images/parfums/parfum-16.jpg", hint: "perfume bottle" },
    { name: "N°17 - Inspiré par Santal 33", image: "/images/parfums/parfum-17.jpg", hint: "perfume bottle" },
    { name: "N°18 - Inspiré par Delina", image: "/images/parfums/parfum-18.jpg", hint: "perfume bottle" },
    { name: "N°19 - Inspiré par Oud Wood", image: "/images/parfums/parfum-19.jpg", hint: "perfume bottle" },
    { name: "N°20 - Inspiré par Gypsy Water", image: "/images/parfums/parfum-20.jpg", hint: "perfume bottle" }
];


export default function ParfumsPage() {
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
                    <Sparkles className="mx-auto h-12 w-12 text-primary animate-pulse" />
                    <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
                        Liste de nos Parfums
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Découvrez nos équivalences inspirées des plus grandes marques. Des fragrances de haute qualité à un prix accessible.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {perfumeList.map((perfume, index) => {
                        const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par le parfum : ${perfume.name}. Pouvez-vous m'en dire plus ?`);
                        const whatsappUrl = `https://wa.me/+33652915596?text=${whatsappMessage}`;

                        return (
                        <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                           <CardHeader className="p-0">
                                <div className="aspect-square relative w-full overflow-hidden">
                                <Image
                                    src={perfume.image}
                                    alt={perfume.name}
                                    width={400}
                                    height={400}
                                    data-ai-hint={perfume.hint}
                                    className="object-cover"
                                />
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 flex-grow">
                                <CardTitle className="text-lg text-center h-12 flex items-center justify-center">{perfume.name}</CardTitle>
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
                    <h3 className="font-headline text-2xl font-bold">Une senteur vous intéresse ?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">Contactez-moi pour passer commande ou pour obtenir un échantillon.</p>
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

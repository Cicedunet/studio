import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

const perfumeList = [
    "N°1 - Inspiré par La Vie Est Belle",
    "N°2 - Inspiré par Black Opium",
    "N°3 - Inspiré par J'adore",
    "N°4 - Inspiré par Coco Mademoiselle",
    "N°5 - Inspiré par Si",
    "N°6 - Inspiré par Angel",
    "N°7 - Inspiré par Light Blue",
    "N°8 - Inspiré par Good Girl",
    "N°9 - Inspiré par L'Interdit",
    "N°10 - Inspiré par Sauvage",
    "N°11 - Inspiré par Bleu de Chanel",
    "N°12 - Inspiré par Acqua di Gio",
    "N°13 - Inspiré par 1 Million",
    "N°14 - Inspiré par Terre d'Hermès",
    "N°15 - Inspiré par Aventus",
    "N°16 - Inspiré par Baccarat Rouge 540",
    "N°17 - Inspiré par Santal 33",
    "N°18 - Inspiré par Delina",
    "N°19 - Inspiré par Oud Wood",
    "N°20 - Inspiré par Gypsy Water"
];


export default function ParfumsPage() {
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
                    <Sparkles className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
                        Liste de nos Parfums
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Découvrez nos équivalences inspirées des plus grandes marques. Des fragrances de haute qualité à un prix accessible.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {perfumeList.map((perfume, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="text-lg">{perfume}</CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
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

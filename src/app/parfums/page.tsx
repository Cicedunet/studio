"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/currency";

interface Product {
  id: number;
  name: string;
  image: string;
  hint: string;
  price: number;
  category: string;
}

export default function ParfumsPage() {
  const { currency } = useCurrency();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/produits.json')
      .then(response => response.json())
      .then(data => {
        const perfumeProducts = data.products.filter((p: Product) => p.category === 'parfums');
        setProducts(perfumeProducts);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
        <header className="py-6 bg-secondary/50">
             <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                 <Button asChild variant="outline">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Retour à l'accueil
                    </Link>
                </Button>
                <CurrencySwitcher />
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
                    {products.map((perfume, index) => {
                        const price = convertPrice(perfume.price, currency);
                        const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par le parfum : ${perfume.name} au prix de ${price} ${currency.symbol}. Pouvez-vous m'en dire plus ?`);
                        const whatsappUrl = `https://wa.me/+32466423584?text=${whatsappMessage}`;

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
                                <p className="text-center text-primary font-bold text-lg mt-2">{price} {currency.symbol}</p>
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

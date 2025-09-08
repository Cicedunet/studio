"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { ProductCard } from '@/components/ProductCard';
import { Cart } from '@/components/Cart';

interface Product {
  id: number;
  name: string;
  image: string;
  hint: string;
  price: number;
  category: string;
  subCategory?: string;
}

export default function ParfumsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState('tous');

  useEffect(() => {
    fetch('/produits.json')
      .then(response => response.json())
      .then(data => {
        const perfumeProducts = data.products.filter((p: Product) => p.category === 'parfums');
        setProducts(perfumeProducts);
      });
  }, []);

  const filteredProducts = products.filter(p => {
    if (filter === 'tous') return true;
    return p.subCategory === filter;
  });

  const categories = ['tous', 'femme', 'homme', 'mixte'];

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
                <div className="flex items-center gap-4">
                  <CurrencySwitcher />
                  <Cart />
                </div>
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

                <div className="my-8 flex justify-center gap-2 md:gap-4">
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={filter === category ? 'default' : 'outline'}
                            onClick={() => setFilter(category)}
                            className="capitalize"
                        >
                            {category === 'tous' ? 'Tous' : category}
                        </Button>
                    ))}
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map(perfume => (
                        <ProductCard key={perfume.id} product={perfume} />
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

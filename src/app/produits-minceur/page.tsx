"use client";

import { useState, useEffect, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Weight, ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { ProductCard } from '@/components/ProductCard';
import { Cart } from '@/components/Cart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: number;
  name: string;
  image: string;
  hint: string;
  price: number;
  category: string;
  subCategory?: string;
}

function MinceurContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || 'produits-minceur';

  const [produitsMinceur, setProduitsMinceur] = useState<Product[]>([]);
  const [complementsAlimentaires, setComplementsAlimentaires] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/produits.json')
      .then(response => response.json())
      .then(data => {
        const allSlimmingProducts = data.products.filter((p: Product) => p.category === 'minceur');
        setProduitsMinceur(allSlimmingProducts.filter((p: Product) => p.subCategory === 'produit-minceur'));
        setComplementsAlimentaires(allSlimmingProducts.filter((p: Product) => p.subCategory === 'complement-alimentaire'));
      });
  }, []);

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
        <div className="mx-auto max-w-3xl text-center">
            <Weight className="mx-auto h-12 w-12 text-primary animate-bounce" />
            <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
                Nos Produits Minceur et Compléments Alimentaires
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Une sélection de produits de haute qualité pour vous accompagner dans votre parcours bien-être et atteindre vos objectifs.
            </p>
        </div>

        <Tabs value={tab} onValueChange={handleTabChange} className="mt-12">
            <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="produits-minceur">Produits Minceur</TabsTrigger>
            <TabsTrigger value="complements-alimentaires">Compléments Alimentaires</TabsTrigger>
            </TabsList>
            <TabsContent value="produits-minceur">

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
                {produitsMinceur.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            </TabsContent>
            <TabsContent value="complements-alimentaires">

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
                {complementsAlimentaires.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            </TabsContent>
        </Tabs>
    </>
  );
}

export default function ProduitsMinceurPage() {
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
                <Suspense fallback={<div className="text-center">Chargement...</div>}>
                  <MinceurContent />
                </Suspense>

                 <div className="mt-16 text-center">
                    <h3 className="font-headline text-2xl font-bold">Intéressé(e) par un produit ?</h3>
                    <p className="mt-2 text-lg text-muted-foreground">Contactez-moi pour des conseils personnalisés et pour passer votre commande.</p>
                     <Button asChild size="lg" className="mt-6 text-lg">
                        <a href="https://www.chogangroupspa.com/registration_consultant/JOSCAAD53" target="_blank" rel="noopener noreferrer">
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

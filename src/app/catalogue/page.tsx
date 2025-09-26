"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { useCurrency } from "@/context/CurrencyContext";
import { convertPrice } from "@/lib/currency";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: number;
  name: string;
  image: string;
  hint: string;
  price: number;
  category: string;
  description?: string;
  subCategory?: string;
}

function CatalogueContent() {
  const { currency } = useCurrency();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>(['all']);

  useEffect(() => {
    fetch('/produits.json')
      .then(response => response.json())
      .then(data => {
        // Exclude 'parfums' and 'minceur' categories as they have dedicated pages
        const excludedFromCatalogue = ['parfums', 'minceur'];
        const catalogueProducts = data.products.filter((p: Product) =>
          p.category && !excludedFromCatalogue.includes(p.category)
        );

        setAllProducts(catalogueProducts);

        const dynamicCategories = [...new Set(catalogueProducts
          .map(p => p.category)
          .filter((cat): cat is string => !!cat)
        )];
        setCategories(['all', ...dynamicCategories.sort()]);

        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl && dynamicCategories.includes(categoryFromUrl)) {
          setActiveFilter(categoryFromUrl);
          setFilteredProducts(catalogueProducts.filter(p => p.category === categoryFromUrl));
        } else {
          setActiveFilter('all');
          setFilteredProducts(catalogueProducts);
        }
      });
  }, [searchParams]);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    const params = new URLSearchParams(searchParams.toString());
    if (filter === 'all') {
      params.delete('category');
      setFilteredProducts(allProducts);
    } else {
      params.set('category', filter);
      setFilteredProducts(allProducts.filter(p => p.category === filter));
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="my-8 flex justify-center">
        <Select onValueChange={handleFilter} value={activeFilter}>
          <SelectTrigger className="w-[280px] text-lg py-6">
            <SelectValue placeholder="Filtrer par catégorie" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(filter => (
              <SelectItem key={filter} value={filter} className="capitalize text-lg">
                {filter === 'all' ? 'Toutes les catégories' : filter.replace('-', ' ')}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product, index) => {
            const price = convertPrice(product.price, currency);
            const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit : ${product.name} au prix de ${price} ${currency.symbol}. Pouvez-vous m'en dire plus ?`);
            const whatsappUrl = `https://wa.me/+32466423584?text=${whatsappMessage}`;

            return (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
                    <CardTitle className="text-lg text-center h-12 flex items-center justify-center">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground text-center mt-2 h-20 overflow-hidden">{product.description}</p>
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
    </>
  );
}

export default function CataloguePage() {
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
                        <BookOpen className="mx-auto h-12 w-12 text-primary animate-pulse" />
                        <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight md:text-5xl">
                            Notre Catalogue
                        </h1>
                    </div>
                    <Suspense fallback={<div>Chargement des produits...</div>}>
                      <CatalogueContent />
                    </Suspense>
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
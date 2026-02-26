"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { ProductCard } from '@/components/ProductCard';
import { Cart } from '@/components/Cart';
import { useCurrency } from "@/context/CurrencyContext";
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
        const excludedFromCatalogue = ['parfums', 'minceur'];
        const catalogueProducts = data.products.filter((p: Product) =>
          p.category && !excludedFromCatalogue.includes(p.category) && p.category !== 'catalogue'
        );

        setAllProducts(catalogueProducts);

        // Nettoyage des catégories dynamiques sans erreurs de types
        const dynamicCategories: string[] = Array.from(new Set(catalogueProducts
          .map((p: Product) => p.category)
          .filter((cat: string | undefined): cat is string => !!cat)
        )) as string[];
        
        setCategories(['all', ...dynamicCategories.sort()]);

        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl && dynamicCategories.includes(categoryFromUrl)) {
          setActiveFilter(categoryFromUrl);
          setFilteredProducts(catalogueProducts.filter((p: Product) => p.category === categoryFromUrl));
        } else {
          setActiveFilter('all');
          setFilteredProducts(catalogueProducts);
        }
      })
      .catch(err => console.error("Erreur chargement produits:", err));
  }, [searchParams]);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    const params = new URLSearchParams(searchParams.toString());
    if (filter === 'all') {
      params.delete('category');
      setFilteredProducts(allProducts);
    } else {
      params.set('category', filter);
      setFilteredProducts(allProducts.filter((p: Product) => p.category === filter));
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

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
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
                    <div className="flex items-center gap-4">
                      <CurrencySwitcher />
                      <Cart />
                    </div>
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
                    <Suspense fallback={<div className="text-center py-10">Chargement des produits...</div>}>
                      <CatalogueContent />
                    </Suspense>
                    <div className="mt-16 text-center">
                        <h3 className="font-headline text-2xl font-bold">Un produit vous intéresse ?</h3>
                        <p className="mt-2 text-lg text-muted-foreground">Contactez-moi pour passer commande ou pour obtenir plus d'informations.</p>
                        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                            <Button asChild size="lg" className="text-lg gap-2 shadow-lg hover:shadow-primary/20">
                                <a href="https://wa.me/+32466423584" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="h-5 w-5" />
                                    Discuter sur WhatsApp
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg gap-2 shadow-md">
                                <a href="https://www.chogangroupspa.com/registration_consultant/JOSCAAD53" target="_blank" rel="noopener noreferrer">
                                    <ShoppingBag className="h-5 w-5" />
                                    Boutique Chogan
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
          <Footer />
        </div>
      );
}
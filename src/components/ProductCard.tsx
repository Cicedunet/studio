"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { useCart } from "@/context/CartContext";
import { convertPrice } from "@/lib/currency";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  image: string;
  hint: string;
  price: number;
  category: string;
  subCategory?: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { currency } = useCurrency();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [imgSrc, setImgSrc] = useState(product.image);

  // Update imgSrc if product.image changes
  useEffect(() => {
    setImgSrc(product.image);
  }, [product.image]);

  const fallbackImages: Record<string, string> = {
    'hair mask': 'https://images.unsplash.com/photo-1527799822344-429dfa622ca4?auto=format&fit=crop&q=80&w=800',
    'foundation makeup': 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800',
    'lipstick': 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=800',
    'shimmer body oil': 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800',
    'retro eyeglasses': 'https://images.unsplash.com/photo-1511499767390-a75ca5f9387e?auto=format&fit=crop&q=80&w=800',
    'perfume bottle': 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800',
    'cleaning product': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    'oven cleaner': 'https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&q=80&w=800',
    'body lotion': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    'face scrub': 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800'
  };

  const handleImageError = () => {
    const fallback = fallbackImages[product.hint] || 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800';
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };

  const price = convertPrice(product.price, currency);
  const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par le produit : ${product.name} au prix de ${price} ${currency.symbol}. Pouvez-vous m'en dire plus ?`);
  const whatsappUrl = `https://wa.me/+32466423584?text=${whatsappMessage}`;

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Produit ajouté au panier",
      description: `${product.name} a été ajouté à votre panier.`,
    });
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-muted/20">
      <CardHeader className="p-0">
        <div className="aspect-square relative w-full overflow-hidden bg-muted/20">
          <Image
            src={imgSrc}
            alt={product.name}
            width={400}
            height={400}
            data-ai-hint={product.hint}
            onError={handleImageError}
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col gap-2">
        <CardTitle className="text-lg font-bold text-center line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
          {product.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground text-center line-clamp-3 min-h-[3rem]">
          {product.description}
        </p>
        <div className="mt-auto pt-4 text-center">
          <span className="text-2xl font-black text-primary">
            {price} <span className="text-sm font-normal">{currency.symbol}</span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0 grid grid-cols-2 gap-2">
        <Button asChild className="w-full shadow-sm">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-xs sm:text-sm px-1">
            <MessageCircle className="mr-1 h-4 w-4 shrink-0" />
            <span>Commander</span>
          </a>
        </Button>
        <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5 text-xs sm:text-sm px-1" onClick={handleAddToCart}>
          <ShoppingCart className="mr-1 h-4 w-4 shrink-0" />
          <span>Au panier</span>
        </Button>
      </CardFooter>
    </Card>
  );
}

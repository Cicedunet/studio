"use client";

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
    <Card className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
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
      <CardFooter className="p-4 pt-0 flex flex-col space-y-2">
        <Button asChild className="w-full">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />
            Commander
          </a>
        </Button>
        <Button variant="outline" className="w-full" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  );
}

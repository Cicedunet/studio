"use client";

import { useCart } from '@/context/CartContext';
import { useCurrency } from '@/context/CurrencyContext';
import { convertPrice } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export function Cart() {
  const { cartItems, removeFromCart, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const { currency } = useCurrency();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPrice = convertPrice(total, currency);

  const handleOrder = () => {
    const message = cartItems.map(item => `${item.name} (x${item.quantity})`).join(', ');
    const whatsappMessage = encodeURIComponent(`Bonjour, je voudrais commander les produits suivants : ${message}. Le total est de ${totalPrice} ${currency.symbol}.`);
    const whatsappUrl = `https://wa.me/+32466423584?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Votre Panier</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <div className="flex-grow overflow-y-auto pr-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden">
                      <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {convertPrice(item.price, currency)} {currency.symbol} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Separator />
            <SheetFooter className="mt-4">
              <div className="w-full">
                <div className="flex justify-between items-center font-bold text-lg mb-4">
                  <span>Total</span>
                  <span>{totalPrice} {currency.symbol}</span>
                </div>
                <div className="space-y-2">
                   <Button onClick={handleOrder} className="w-full">Commander via WhatsApp</Button>
                   <Button variant="outline" onClick={clearCart} className="w-full">Vider le panier</Button>
                </div>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg font-semibold">Votre panier est vide</p>
            <p className="text-sm text-muted-foreground">Ajoutez des produits pour les voir ici.</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

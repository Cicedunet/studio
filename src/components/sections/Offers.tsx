import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";
import Image from "next/image";

export default function Offers() {
  return (
    <section id="offres" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Gift className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Profitez de nos Offres Exclusives
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ne manquez pas nos promotions en cours pour vous faire plaisir ou gâter vos proches à prix doux.
          </p>
        </div>

        
      </div>
    </section>
  );
}

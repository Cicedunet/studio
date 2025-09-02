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

        <div className="mx-auto mt-12 max-w-2xl">
          <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src="https://picsum.photos/600/400"
                  alt="Offre spéciale"
                  fill
                  data-ai-hint="gift package"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Offre du Moment</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Pour toute commande de deux parfums, recevez une crème pour les mains parfumée en cadeau !
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" className="w-full text-lg">
                    <a href="https://docs.google.com/forms/d/1OFaCU6is1sWCXCNTqbNH7L4ri9bUZrwZX3q7guDREF0/edit" target="_blank" rel="noopener noreferrer">
                      Je Passe Commande
                    </a>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

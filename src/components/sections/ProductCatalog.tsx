import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, BookOpen, List } from "lucide-react";
import Image from "next/image";

const products = [
    {
        name: "Parfum Floral Élégant",
        description: "Notes de rose, jasmin et pivoine.",
        image: "https://picsum.photos/400/400?random=1",
        hint: "perfume bottle"
    },
    {
        name: "Essence Boisée Intense",
        description: "Accords de cèdre, santal et patchouli.",
        image: "https://picsum.photos/400/400?random=2",
        hint: "perfume bottle"
    },
    {
        name: "Fraîcheur Hespéridée",
        description: "Zestes de citron, bergamote et mandarine.",
        image: "https://picsum.photos/400/400?random=3",
        hint: "perfume bottle"
    },
]

export default function ProductCatalog() {
  return (
    <section id="catalogue" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Store className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Explorez un Univers de Senteurs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plongez dans nos collections exclusives et trouvez les trésors qui sublimeront votre quotidien.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                 <Card key={product.name}>
                    <CardHeader>
                        <div className="aspect-square relative w-full overflow-hidden rounded-t-lg">
                         <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            data-ai-hint={product.hint}
                            className="object-cover"
                         />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription className="mt-2">{product.description}</CardDescription>
                    </CardContent>
                 </Card>
            ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="flex flex-col items-center justify-center p-8 text-center">
                <List className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">Liste des Parfums</h3>
                <p className="mt-2 text-muted-foreground">Consultez la liste complète de nos équivalences de parfums.</p>
                <Button asChild className="mt-6">
                    <a href="https://drive.google.com/drive/u/0/mobile/folders/1JlFrM7owE9ANEtLlO0uA5QEdUFv4RRf9" target="_blank" rel="noopener noreferrer">Voir la liste</a>
                </Button>
            </Card>
            <Card className="flex flex-col items-center justify-center p-8 text-center">
                <BookOpen className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">Catalogues Produits</h3>
                <p className="mt-2 text-muted-foreground">Découvrez tous nos produits cosmétiques, de bien-être et pour la maison.</p>
                <Button asChild className="mt-6">
                    <a href="https://www.chogangroupspa.com/referral/LIZA948BE/FR" target="_blank" rel="noopener noreferrer">Voir les catalogues</a>
                </Button>
            </Card>
        </div>

         <div className="mt-16 text-center">
            <h3 className="font-headline text-2xl font-bold">Prêt(e) à shopper ?</h3>
            <p className="mt-2 text-lg text-muted-foreground">Visitez ma boutique en ligne pour passer votre commande.</p>
            <Button asChild size="lg" className="mt-6 text-lg">
                <a href="https://www.chogangroupspa.com/referral/LIZA948BE/FR" target="_blank" rel="noopener noreferrer">
                    Accéder à la Boutique
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}

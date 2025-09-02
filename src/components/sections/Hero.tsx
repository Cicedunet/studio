import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="decouvrir" className="relative -mt-20 py-20 md:py-32">
       <div
        className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Liz-Francine: Votre guide vers l'Élégance & le Bien-Être
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Maman comblée, Infirmière et distributrice passionnée de parfums & cosmétiques haut de gamme. Depuis la douce Corrèze, je partage ma passion pour l'élégance au quotidien.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg">
                <Link href="#profiler">Trouvez votre parfum signature</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="#business">Démarrez votre aventure</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/600"
              alt="Portrait de Liz-Francine"
              width={500}
              height={500}
              data-ai-hint="elegant woman portrait"
              className="aspect-square rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

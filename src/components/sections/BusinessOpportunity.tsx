import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Rocket, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie D.",
    quote: "Rejoindre l'équipe de Liz-Francine a changé ma vie. Je suis plus épanouie et financièrement indépendante.",
    role: "Partenaire",
  },
  {
    name: "Marc L.",
    quote: "Un accompagnement exceptionnel et des produits de qualité. Je ne pouvais pas rêver mieux pour lancer mon activité.",
    role: "Nouveau Distributeur",
  },
  {
    name: "Hélène P.",
    quote: "La flexibilité de cette opportunité est parfaite pour ma vie de maman. Je recommande à 100% !",
    role: "Partenaire",
  },
];

export default function BusinessOpportunity() {
  return (
    <section id="business" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Rocket className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Construisez Votre Business en Toute Liberté
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rejoignez une communauté de passionnés et développez votre propre activité à votre rythme. Je vous accompagne à chaque étape vers le succès.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <Quote className="h-8 w-8 text-accent" />
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-headline text-2xl font-bold">Prêt(e) à vous lancer ?</h3>
          <p className="mt-2 text-lg text-muted-foreground">Devenez votre propre patron dès aujourd'hui.</p>
          <Button asChild size="lg" className="mt-6 text-lg">
            <a href="https://www.chogangroupspa.com/registration_consultant/LIZA948BE" target="_blank" rel="noopener noreferrer">
              Démarrer Mon Activité
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

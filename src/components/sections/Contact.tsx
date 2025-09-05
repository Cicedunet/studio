import { Button } from "@/components/ui/button";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Besoin d'un Conseil Personnalisé ?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Je suis là pour vous aider à choisir le parfum qui vous ressemble ou pour répondre à toutes vos questions. Contactez-moi directement !
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="text-lg gap-2">
              <a href="https://wa.me/+32466423584" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-6 w-6" />
                Discutons sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

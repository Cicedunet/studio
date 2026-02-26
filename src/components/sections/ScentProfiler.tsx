"use client";

import * as React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BrainCircuit, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getRecommendationsAction } from "@/app/actions";
import type { PersonalizedRecommendationsOutput } from "@/ai/flows/personalized-scent-recommendations";

const formSchema = z.object({
  fragranceType: z.enum(["floral", "woody", "citrus", "oriental"], {
    required_error: "Veuillez sélectionner un type de parfum.",
  }),
  intensity: z.enum(["light", "medium", "strong"], {
    required_error: "Veuillez sélectionner une intensité.",
  }),
  occasion: z.enum(["day", "night", "any"], {
    required_error: "Veuillez sélectionner une occasion.",
  }),
  personality: z
    .string()
    .min(10, "Veuillez décrire votre personnalité avec un peu plus de détails (10 caractères min).")
    .max(200, "Veuillez limiter votre description à 200 caractères."),
});

type FormValues = z.infer<typeof formSchema>;

const fragranceTypeOptions = [
  { value: "floral", label: "Floral" },
  { value: "woody", label: "Boisé" },
  { value: "citrus", label: "Hespéridé (Citrus)" },
  { value: "oriental", label: "Oriental" },
];

const intensityOptions = [
  { value: "light", label: "Léger" },
  { value: "medium", label: "Moyen" },
  { value: "strong", label: "Intense" },
];

const occasionOptions = [
  { value: "day", label: "Journée" },
  { value: "night", label: "Soirée" },
  { value: "any", label: "Toutes occasions" },
];

export default function ScentProfiler() {
  const [recommendations, setRecommendations] = React.useState<PersonalizedRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personality: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setRecommendations(null);
    const result = await getRecommendationsAction(data);
    setIsLoading(false);

    if (result.success && result.data) {
      setRecommendations(result.data);
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: result.error || "Impossible d'obtenir des recommandations. Veuillez réessayer.",
      });
    }
  };

  return (
    <section id="profiler" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <BrainCircuit className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Découvrez Votre Parfum Signature
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Répondez à quelques questions et laissez notre intelligence artificielle vous suggérer des parfums qui vous correspondent parfaitement.
          </p>
        </div>

        <Card className="mx-auto mt-12 max-w-4xl">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-3">
                  <FormField
                    control={form.control}
                    name="fragranceType"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-semibold">Type de fragrance</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            {fragranceTypeOptions.map((option) => (
                              <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={option.value} />
                                </FormControl>
                                <FormLabel className="font-normal">{option.label}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="intensity"
                    render={({ field }) => (
                       <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-semibold">Intensité</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            {intensityOptions.map((option) => (
                              <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={option.value} />
                                </FormControl>
                                <FormLabel className="font-normal">{option.label}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="occasion"
                    render={({ field }) => (
                       <FormItem className="space-y-3">
                        <FormLabel className="text-lg font-semibold">Occasion</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            {occasionOptions.map((option) => (
                              <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={option.value} />
                                </FormControl>
                                <FormLabel className="font-normal">{option.label}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="personality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">Votre personnalité</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ex: Je suis une personne créative et j'aime les longues balades en nature..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Décrivez votre personnalité en une phrase.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-center">
                  <Button type="submit" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Recherche...
                      </>
                    ) : (
                      "Obtenir mes recommandations"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {isLoading && (
          <div className="mt-12 text-center">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-lg text-muted-foreground">Notre expert IA recherche les meilleures fragrances pour vous...</p>
          </div>
        )}

        {recommendations && recommendations.recommendations.length > 0 && (
          <div className="mx-auto mt-12 max-w-4xl">
            <h3 className="text-center font-headline text-2xl font-bold tracking-tight md:text-3xl">
              Vos recommandations personnalisées
            </h3>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {recommendations.recommendations.map((rec, index) => (
                <Card key={index} className="flex flex-col items-center text-center">
                  <CardHeader>
                    <Sparkles className="mx-auto h-8 w-8 text-primary" />
                    <CardTitle className="mt-2 text-xl">{rec}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
             <div className="mt-8 text-center">
                <Button asChild size="lg">
                    <a href="https://www.chogangroupspa.com/referral/JOSCAAD53/FR" target="_blank" rel="noopener noreferrer">
                        Explorer la boutique
                    </a>
                </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// src/ai/flows/personalized-scent-recommendations.ts
'use server';
/**
 * @fileOverview Provides personalized perfume recommendations based on user preferences.
 *
 * - getPersonalizedRecommendations - A function that takes user preferences as input and returns perfume recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  fragranceType: z.enum(['floral', 'woody', 'citrus', 'oriental']).describe('The type of fragrance preferred.'),
  intensity: z.enum(['light', 'medium', 'strong']).describe('The preferred intensity of the fragrance.'),
  occasion: z.enum(['day', 'night', 'any']).describe('The occasion for wearing the fragrance.'),
  personality: z.string().describe('Describe your personality in one sentence.'),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.string().describe('A list of perfume recommendations based on user preferences.')
  ).describe('The list of recommended perfumes.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert perfume consultant. Based on the user's preferences, recommend three perfumes that they would enjoy.

Preferences:
- Fragrance Type: {{{fragranceType}}}
- Intensity: {{{intensity}}}
- Occasion: {{{occasion}}}
- Personality: {{{personality}}}

Recommendations:`, // Shorten prompt for brevity
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

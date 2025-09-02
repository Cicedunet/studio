"use server";

import {
  getPersonalizedRecommendations,
  type PersonalizedRecommendationsInput,
} from "@/ai/flows/personalized-scent-recommendations";

export async function getRecommendationsAction(input: PersonalizedRecommendationsInput) {
  try {
    const result = await getPersonalizedRecommendations(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error getting recommendations:", error);
    let errorMessage = "An unexpected error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}

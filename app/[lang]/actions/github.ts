'use server';

import { fetchContributedForkedRepositories } from "@/lib/github";

export const getContributions = async (username: string, lang: "fr" | "en" = "fr") => {
  try {
    return await fetchContributedForkedRepositories(username, lang);
  } catch (error) {
    console.error("Error while fetching contributions: ", error);
    throw new Error(lang === "fr"
      ? "Erreur lors de la récupération des contributions"
      : "Error while fetching contributions");
  }
}

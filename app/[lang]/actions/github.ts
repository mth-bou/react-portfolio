'use server';

import { fetchContributedForkedRepositories } from "@/lib/github";

export const getContributions = async (username: string) => {
  try {
    const data = await fetchContributedForkedRepositories(username);
    console.log("Contributions récupérées :", data);
    return data;
  } catch (error) {
    console.error("Error while fetching contributions: ", error);
    throw new Error("Error while fetching contributions");
  }
}

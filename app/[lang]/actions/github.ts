'use server';

import { fetchContributedForkedRepositories } from "@/lib/github";

export const getContributions = async (username: string) => {
  try {
    return await fetchContributedForkedRepositories(username);
  } catch (error) {
    console.error("Error while fetching contributions: ", error);
    throw new Error("Error while fetching contributions");
  }
}

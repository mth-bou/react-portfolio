'use server';

import { fetchForkedRepositories } from "@/lib/github";

export const getContributions = async (username: string) => {
  return await fetchForkedRepositories(username);
}

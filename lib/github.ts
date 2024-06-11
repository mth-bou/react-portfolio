import { Octokit } from "octokit";
import { OpenSourceRepository } from "@/types/types";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const fetchForkedRepositories = async (username: string): Promise<OpenSourceRepository[]> => {
  const response = await octokit.request('GET /users/{username}/repos', {
    username,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': username,
      'Content-Type': 'application/json',
    },
  });

  const data = response.data;

  return data
    .filter((repo: any) => repo.fork)
    .map((repo: any): OpenSourceRepository => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      date: repo.updated_at || repo.created_at,
      image: repo.owner.avatar_url,
    }));
}

export const fetchPullRequests = async (owner: string, repo: string) => {
  return await octokit.request('GET /repos/{owner}/{repo}/pulls', {
    owner,
    repo,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': owner,
      'Content-Type': 'application/json',
    },
  });
}

export const fetchContributors = async (owner: string, repo: string) => {
  return await octokit.request('GET /repos/{owner}/{repo}/contributors', {
    owner,
    repo,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': owner,
      'Content-Type': 'application/json',
    },
  });
}

export const fetchUserContributions = async (username: string) => {
  return await octokit.request('GET /users/{username}/contributions', {
    username,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': username,
      'Content-Type': 'application/json',
    },
  });
}

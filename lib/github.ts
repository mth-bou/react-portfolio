import { Octokit } from "octokit";
import { OpenSourceRepository } from "@/types/types";

const octokit = new Octokit({
	auth: process.env.GITHUB_TOKEN,
});

export const fetchForkedRepositories = async (username: string): Promise<any[]> => {
	const response = await octokit.request('GET /users/{username}/repos', {
		username,
		headers: {
			Accept: 'application/vnd.github.v3+json',
			'User-Agent': username,
			'Content-Type': 'application/json',
		},
	});

	return response.data.filter((repo: any) => repo.fork && !repo.disabled);
}

export const fetchRepositoryDetails = async (owner: string, repo: string): Promise<any> => {
	try {
		const response = await octokit.request('GET /repos/{owner}/{repo}', {
			owner,
			repo,
			headers: {
				Accept: 'application/vnd.github.v3+json',
				'User-Agent': owner,
				'Content-Type': 'application/json',
			},
		});

		const data = response.data;

		// Extract only the necessary data
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			html_url: data.html_url,
			parent: data.parent
				? {
					full_name: data.parent.full_name,
					owner: {
						login: data.parent.owner.login,
						avatar_url: data.parent.owner.avatar_url,
					},
					html_url: data.parent.html_url,
					name: data.parent.name,
				}
				: null,
		};
	} catch (error) {
		console.error(`Erreur lors de la récupération des détails du dépôt ${owner}/${repo} :`, error);
		throw Error(`Erreur lors de la récupération des détails du dépôt ${owner}/${repo}: ${error}`);
	}
};

export const fetchPullRequests = async (owner: string, repo: string): Promise<any[]> => {
	try {
		const response = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
			owner,
			repo,
			state: 'all', // Include opened, closed, and merged PRs
			per_page: 100,
			headers: {
				Accept: 'application/vnd.github.v3+json',
				'User-Agent': owner,
				'Content-Type': 'application/json',
			},
		});

    //console.log(`Pull Requests pour ${owner}/${repo} :`, response.data);
		return response.data;
	} catch (error) {
    console.error(`Error while fetching pull requests for ${owner}/${repo}:`, error);
    return [];
  }

}

/**
 * Check if the user has merged pull requests in the parent repository forked
 */
const hasMergedPullRequests = (pulls: any[], username: string): boolean => {
	return pulls.some(
		(pr: any) =>
			pr.user.login === username &&
			pr.merged_at !== null // PR merged
	);
};

/**
 * Transform the GitHub API response to an OpenSourceRepository object
 */
const mapToOpenSourceRepository = (repo: any): OpenSourceRepository => ({
	id: repo.id,
	name: repo.name,
	description: repo.description,
	html_url: repo.html_url,
	date: repo.contribution_date || repo.updated_at || repo.created_at,
	image: repo.parent?.owner.avatar_url || '',
});

const checkRateLimit = async () => {
  const response = await octokit.request('GET /rate_limit');
  console.log("Limites API GitHub :", response.data.rate);
};

/**
 * Retrieve the repositories that the user has contributed to by forking and merging pull requests
 */
export const fetchContributedForkedRepositories = async (
	username: string
): Promise<OpenSourceRepository[]> => {
  await checkRateLimit();
	const forkedRepos = await fetchForkedRepositories(username);
	const contributedRepos: OpenSourceRepository[] = [];

	for (const repo of forkedRepos) {

		const repoDetails = await fetchRepositoryDetails(repo.owner.login, repo.name);

		if (!repoDetails || !repoDetails.parent) {
			continue;
		}

		const parentRepo = repoDetails.parent;

		const pulls = await fetchPullRequests(parentRepo.owner.login, parentRepo.name);

		// Find the first merged pull request made by the user
		const mergedPull = pulls.find(
			(pr: any) => pr.user.login === username && pr.merged_at !== null
		);

		// Extract the date of the contribution if the PR has been merged
		const contributionDate = mergedPull?.merged_at || null;

		if (mergedPull) {
			contributedRepos.push(
				mapToOpenSourceRepository({
					...repoDetails,
					contribution_date: contributionDate,
				})
			);
		}
	}

	return contributedRepos;
};

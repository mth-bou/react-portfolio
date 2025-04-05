export const githubErrors = {
	fr: {
		rateLimit: "La limite API GitHub a été atteinte. Veuillez réessayer plus tard.",
		generic: "Une erreur est survenue lors de la récupération des contributions.",
		fetchDetails: (repo: string, owner: string, error: string) =>
			`Erreur lors de la récupération des détails du dépôt ${repo}.`,
	},
	en: {
		rateLimit: "GitHub API rate limit reached. Please try again later.",
		generic: "An error occurred while fetching your contributions.",
		fetchDetails: (repo: string, owner: string, error: string) =>
			`Error while fetching repository details for ${owner}/${repo}: ${error}.`,
	},
};

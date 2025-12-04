import { defaultLocale } from "@/constants/locales";
import Section from "@/app/[lang]/components/Section";
import { Card } from "@/components/ui/card";
import Contribution from "@/app/[lang]/components/github/Contribution";
import { OpenSourceRepository } from "@/types/types";
import ContributionSkeleton from "@/app/[lang]/components/github/ContributionSkeleton";
import { fetchContributedForkedRepositories } from "@/lib/github";
import { Dictionary } from "@/app/[lang]/dictionaries";
import { Locale, i18n } from "@/i18n-config";

type GithubContributionsProps = {
  username: string;
  dict: Dictionary;
};

const GithubContributions = async ({ username, dict }: GithubContributionsProps) => {
  const lang: Locale = i18n.locales.includes(dict._lang as Locale)
    ? (dict._lang as Locale)
    : defaultLocale;

  const { success, data, message } = await fetchContributedForkedRepositories(username, lang).catch(
    (error: Error) => ({
      success: false,
      data: null,
      message: dict.Contributions.unexpectedErrorMessage ?? error.message,
    })
  );

  const contributions = (data ?? []) as OpenSourceRepository[];
  const error = success ? "" : message;

  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[2] w-full h-full flex flex-col gap-4">
        <Card className="flex flex-col p-4 w-full gap-2">
          <p className="text-base lg:text-lg text-muted-foreground mb-2">{dict.Contributions.title}</p>

          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-md mb-4">
              <p className="text-sm md:text-base font-semibold">{dict.Contributions.errorTitle}</p>
              <p className="text-sm md:text-base">{error}</p>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {contributions.map((contribution) => (
              <Contribution key={contribution.id} {...contribution} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export const GithubContributionsSkeleton = ({ dict }: { dict: Dictionary }) => (
  <Section className="flex max-lg:flex-col items-start gap-4">
    <div className="flex-[2] w-full h-full flex flex-col gap-4">
      <Card className="flex flex-col p-4 w-full gap-2">
        <p className="text-base lg:text-lg text-muted-foreground mb-2">{dict.Contributions.title}</p>
        <div className="flex flex-col gap-4">
          <ContributionSkeleton />
        </div>
      </Card>
    </div>
  </Section>
);

export default GithubContributions;

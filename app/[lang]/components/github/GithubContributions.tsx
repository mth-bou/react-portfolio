'use client';

import React, { useEffect, useState } from 'react';
import { getContributions } from "@/app/[lang]/actions/github";
import Section from "@/app/[lang]/components/Section";
import { Card } from "@/components/ui/card";
import Contribution from "@/app/[lang]/components/github/Contribution";
import { OpenSourceRepository } from "@/types/types";
import ContributionSkeleton from "@/app/[lang]/components/github/ContributionSkeleton";

const GithubContributions = ({ username, dict }: { username: string, dict: any }) => {
  const [contributions, setContributions] = useState<OpenSourceRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const lang = dict._lang ?? "fr";

  useEffect(() => {
    const fetchOpenSourceContributions = async () => {
      try {
        const result = await getContributions(username, lang);

        if (!result.success) {
          setError(result.message);
          setContributions([]);
        } else {
          setContributions(result.data || []);
        }
      } catch (error) {
        console.error(error);
        setError(dict.Contributions.unexpectedErrorMessage);
      } finally {
        setLoading(false);
      }
    }

    fetchOpenSourceContributions();
  }, [dict, lang, username]);

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
            {loading ? (
              <ContributionSkeleton />
            ) : (
              contributions.map(contribution => (
                <Contribution key={contribution.id} {...contribution} />
              )
            ))}
          </div>

        </Card>
      </div>
    </Section>
  );
};

export default GithubContributions;

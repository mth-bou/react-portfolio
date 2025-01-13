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

  useEffect(() => {
    const fetchOpenSourceContributions = async () => {
      try {
        const data = await getContributions(username);
        //console.log(contributions);
        setContributions(data);
      } catch (error) {
        setError("Impossible de charger les contributions");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchOpenSourceContributions();
  }, [username]);

  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[2] w-full h-full flex flex-col gap-4">
        <Card className="flex flex-col p-4 w-full gap-2">
          <p className="text-base lg:text-lg text-muted-foreground mb-2">{dict.Contributions.title}</p>

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

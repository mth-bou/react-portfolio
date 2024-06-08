'use client';
import React, { useEffect, useState } from 'react';
import { getContributions } from "@/app/[lang]/actions/github";
import Section from "@/app/[lang]/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Contribution from "@/app/[lang]/components/github/Contribution";
import { OpenSourceRepository } from "@/types/types";

const GithubContributions = ({ username, dict }: { username: string, dict: any }) => {
  const [repos, setRepos] = useState<OpenSourceRepository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpenSourceContributions = async () => {
      try {
        const contributions = await getContributions(username);
        console.log(contributions);
        setRepos(contributions);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchOpenSourceContributions();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[2] w-full h-full flex flex-col gap-4">
        <Card className="flex flex-col p-4 w-full gap-2">
          <p className="text-base lg:text-lg text-muted-foreground mb-2">{dict.Contributions.title}</p>

          <div className="flex flex-col gap-4">
            {repos.map(repo => (
              <Contribution key={repo.id} {...repo} />
            ))}
          </div>

        </Card>
      </div>
    </Section>
  );
};

export default GithubContributions;

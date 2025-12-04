import Header from "@/app/[lang]/components/Header";
import Hero from "@/app/[lang]/components/hero/Hero";
import Spacing from "@/app/[lang]/components/Spacing";
import Experiences from "@/app/[lang]/components/Experiences";
import Skills from "@/app/[lang]/components/Skills";
import Stack from "@/app/[lang]/components/Stack";
import Tools from "@/app/[lang]/components/Tools";
import Footer from "@/app/[lang]/components/Footer";
// import Contact from "@/app/_components/Contact";
import { getDictionary } from "@/app/[lang]/dictionaries";
import GithubContributions, { GithubContributionsSkeleton } from "@/app/[lang]/components/github/GithubContributions";
import { Locale } from "@/i18n-config";
import { Suspense } from "react";

type HomePageProps = {
  params: { lang: Locale };
};

export default async function Home({ params }: HomePageProps){
  const { lang } = params;
  const dict = await getDictionary(lang);
  const githubUsername = "mth-bou";
  return (
    <main>
      <Header lang={lang}/>
      <Spacing size="md"/>
      <Hero dict={dict}/>
      <Spacing size="md"/>
      <Experiences dict={dict}/>
      <Spacing size="md"/>
      <Suspense fallback={<GithubContributionsSkeleton dict={dict} />}>
        <GithubContributions username={githubUsername} dict={dict}/>
      </Suspense>
      <Spacing size="md"/>
      <Skills dict={dict}/>
      <Spacing size="md"/>
      <Stack dict={dict}/>
      <Spacing size="md"/>
      <Tools dict={dict}/>
      <Spacing size="md"/>
      {/*<Contact/>
            <Spacing size="md"/>*/}
      <Footer dict={dict}/>
    </main>
  );
}

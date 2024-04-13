"use client";
import React from 'react';
import Section from "@/app/[lang]/components/Section";
import {Card} from "@/components/ui/card";
import {ContactCard} from "@/app/[lang]/components/ContactCard";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCartShopping, faSignal} from "@fortawesome/free-solid-svg-icons";
import {SideProjects, SideProjectsProps} from "@/app/[lang]/components/SideProjects";
import {Work, WorkProps} from "@/app/[lang]/components/Work";
import LikomeIcon from '@/public/img/favicon-likome.svg';
import LinkedinIcon from '@/public/img/linkedin-icon.svg';
import GmailIcon from '@/public/img/google-gmail.svg';

const Experiences = ({ dict, lang }: {dict: any, lang: string}) => {

    const sideProjects = SIDE_PROJECTS(dict);

    return (
        <Section className="flex max-lg:flex-col items-start gap-4">

            <div className="flex-[2] w-full h-full flex flex-col gap-4">
                <Card className="flex flex-col p-4 w-full gap-2">
                    <p className="text-base lg:text-lg text-muted-foreground mb-2">{dict.Experiences.experienceCard.title}</p>

                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work key={index} {...work} />
                        ))}
                    </div>

                </Card>

                <Card className="flex-1 flex flex-col gap-2 p-4 w-full">
                    <p className="text-base lg:text-lg text-muted-foreground mb-2">{dict.Experiences.contactCard.title}</p>
                    <ContactCard
                        name="Mathieu Boucher"
                        image="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                        mediumImage={LinkedinIcon}
                        description=""
                        url="https://www.linkedin.com/in/mathieu-boucher-9b4578198/"
                    />
                    <ContactCard
                        name="mathieu.boucher55@gmail.com"
                        image="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                        mediumImage={GmailIcon}
                        description=""
                        url="mailto:mathieu.boucher55@gmail.com"
                    />
                </Card>
            </div>

            <div className="flex-[3] w-full">
                <Card className="w-full flex flex-col gap-2 p-4">
                    <p className="text-base lg:text-lg text-muted-foreground mb-2">{dict.Experiences.sideProjectsCard.title}</p>

                    <div className="flex flex-col gap-4">
                        {sideProjects.map((project, index) => (
                            <SideProjects key={index} {...project} />
                        ))}
                    </div>
                </Card>
            </div>

        </Section>
    );
};

const SIDE_PROJECTS = (dict: any) => [
    {
        logo: faCartShopping,
        title: "Symfony Ecom App",
        description: dict.Experiences.sideProjectsCard.symfonyProject.desc,
        url: "https://github.com/mth-bou/ecom"
    },
    {
        logo: faGithub,
        title: "Githreads",
        description: dict.Experiences.sideProjectsCard.githreadsProject.desc,
        url: "https://githreads-mthb.vercel.app/"
    },
    {
        logo: faSignal,
        title: "Ping Stability Test",
        description: dict.Experiences.sideProjectsCard.pingProject.desc,
        url: "https://github.com/mth-bou/ping-stability-test"
    }
];

const WORKS: WorkProps[] = [
    {
        image: "/img/logo-cr.jpg",
        title: "Clinic Renaissance",
        role: "Web Developer",
        date: "2021 - 2023",
        url: "https://clinic-renaissance.fr"
    },
    {
        image: LikomeIcon,
        title: "Likome Website",
        role: "Web Developer",
        date: "2023",
        url: "https://likome.fr",
        freelance: true
    },
    {
        image: "/img/logo-osteocar.png",
        title: "Osteocar Website",
        role: "Web Developer",
        date: "2022",
        url: "https://osteocar-osteopathie.fr/",
        freelance: true
    },
    {
        image: "/img/favicon-happyvap.ico",
        title: "HappyVap",
        role: "Web Developer",
        date: "2020 - 2021",
        url: "",
    },
];

export default Experiences;

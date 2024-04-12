"use client";
import React from 'react';
import Section from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {ContactCard} from "@/app/_components/ContactCard";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faCartShopping, faSignal} from "@fortawesome/free-solid-svg-icons";
import {SideProjects, SideProjectsProps} from "@/app/_components/SideProjects";
import {Work, WorkProps} from "@/app/_components/Work";

const Experiences = () => {

    return (
        <Section className="flex max-lg:flex-col items-start gap-4">

            <div className="flex-[2] w-full h-full flex flex-col gap-4">
                <Card className="flex flex-col p-4 w-full gap-2">
                    <p className="text-base lg:text-lg text-muted-foreground mb-2">Expériences</p>

                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work key={index} {...work} />
                        ))}
                    </div>

                </Card>

                <Card className="flex-1 flex flex-col gap-2 p-4 w-full">
                    <p className="text-base lg:text-lg text-muted-foreground mb-2">Me contacter</p>
                    <ContactCard
                        name="Mathieu Boucher"
                        image="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                        mediumImage="/img/linkedin-icon.svg"
                        description=""
                        url="https://www.linkedin.com/in/mathieu-boucher-9b4578198/"
                    />
                    {/*<ContactCard
                        name="mathieu.boucher55@gmail.com"
                        image="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                        mediumImage="/img/google-gmail.svg"
                        description=""
                        url="mailto:mathieu.boucher55@gmail.com"
                    />*/}
                </Card>
            </div>

            <div className="flex-[3] w-full">
                <Card className="w-full flex flex-col gap-2 p-4">
                    <p className="text-base lg:text-lg text-muted-foreground mb-2">Projets secondaires</p>

                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProjects key={index} {...project} />
                        ))}
                    </div>
                </Card>
            </div>

        </Section>
    );
};

const SIDE_PROJECTS: SideProjectsProps[] = [
    {
        logo: faCartShopping,
        title: "Symfony Ecom App",
        description: "Pour tester mes compétences, j'ai créé mon propre site e-commerce avec Symfony 7",
        url: "https://github.com/mth-bou/ecom"
    },
    {
        logo: faGithub,
        title: "Githreads",
        description: "Application qui affiche un flux de posts que les utilisateurs peuvent aimer et commenter, une fois qu'ils se sont authentifiés auprès de Github. Développée avec Next.js et React.",
        url: "https://githreads-mthb.vercel.app/"
    },
    {
        logo: faSignal,
        title: "Ping Stability Test",
        description: "Application qui vous permet de tester la stabilité de votre ping vers un hôte distant. Conçue avec Next.js et React.",
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
        image: "/img/favicon-likome.svg",
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

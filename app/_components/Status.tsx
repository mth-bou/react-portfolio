"use client";
import React from 'react';
import Section from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {ArrowUpRight} from "lucide-react";
import {faSignal} from "@fortawesome/free-solid-svg-icons";

const Status = () => {

    return (
        <Section className="flex max-lg:flex-col items-start gap-4">

            <div className="flex-[3] w-full">
                <Card className="w-full flex flex-col gap-2 p-4">
                    <p className="text-lg text-muted-foreground mb-2">Projets secondaires</p>

                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProjects
                                key={index}
                                logo={project.logo}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />
                        ))}
                    </div>
                </Card>
            </div>

            <div className="flex-[2] w-full h-full flex flex-col gap-4">
                <Card className="flex-1 p-4 w-full gap-2">
                    <p className="text-lg text-muted-foreground mb-2">Expériences</p>

                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>

                </Card>

                <Card className="flex-1 p-4 w-full">
                    <p className="text-lg text-muted-foreground mb-2">Me contacter</p>
                    <ContactCard
                        name="Mathieu Boucher"
                        image="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                        mediumImage="/img/linkedin-icon.svg"
                        description=""
                    />
                </Card>
            </div>

        </Section>
    );
};

const ContactCard = (props: {
    image: string,
    mediumImage: string,
    name: string,
    description: string
}) => {
    return (
        <Link
            href="https://www.linkedin.com/in/mathieu-boucher-9b4578198/"
            className="p-3 bg-accent/10 hover:bg-accent/50 transition-colors group flex items-center gap-4 rounded"
        >
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain" />
                <img src={props.mediumImage} alt={props.name} className="w-4 h-4 bg-foreground absolute -bottom-1 -right-1 rounded-full object-contain" />
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-md font-semibold">{props.name}</p>

                </div>
                <p className="text-md text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight size={16} className="mr-3 text-accent-foreground group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
        </Link>
    );
}

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

type SideProjectsProps = {
    logo: any;
    title: string;
    description: string;
    url: string;
}

const SideProjects = (props: SideProjectsProps) => {
    return (
        <Link
            href={props.url}
            target="_blank"
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded"
        >
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <FontAwesomeIcon icon={props.logo} size="lg" />
            </span>

            <div>
                <p className="text-md font-semibold">{props.title}</p>
                <p className="text-md text-muted-foreground">{props.description}</p>
            </div>
        </Link>
    );
}

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

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
}

const Work = (props: WorkProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded px-2"
            target="_blank"
        >

            <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" />

            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-md font-semibold">{props.title}</p>
                    {props.freelance && (
                        <Badge
                            className="bg-primary/30 text-primary ml-1 p-1 rounded-sm text-xs"
                            variant="outline"
                        >
                            Mission
                        </Badge>
                    )}
                </div>
                <p className="text-md text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    );
}

export default Status;

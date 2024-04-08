"use client";
import React from 'react';
import Section from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {LucideIcon} from "lucide-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSymfony, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Status = () => {

    return (
        <Section className="flex max-lg:flex-col items-start gap-4">

            <div className="flex-[3] w-full">
                <Card className="w-full flex flex-col gap-2 p-4">
                    Side projects
                </Card>
            </div>

            <div className="flex-[2] w-full h-full flex flex-col gap-4">
                <Card className="flex-1 p-4 w-full">
                    <p className="text-lg text-muted-foreground mb-2">
                        Side, fun projects
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProjects
                                key={index}
                                logo={project.logo}
                                title={project.title}
                                description={project.description}
                                url="/"
                            />
                        ))}
                    </div>
                </Card>

                <Card className="flex-1 p-4 w-full">
                    Contact me
                </Card>
            </div>

        </Section>
    );
};

const SIDE_PROJECTS = [
    {
        logo: faSymfony,
        title: "Symfony Ecom App",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        logo: faGithub,
        title: "Githreads",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        logo: faReact,
        title: "Githreads",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
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
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
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

export default Status;

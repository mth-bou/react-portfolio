"use client";
import React from 'react';
import Section from "@/app/[lang]/components/Section";
import {Card} from "@/components/ui/card";
import {ContactCard} from "@/app/[lang]/components/ContactCard";
import {SideProjects} from "@/app/[lang]/components/SideProjects";
import {Work} from "@/app/[lang]/components/Work";
import { SIDE_PROJECTS } from "@/constants/sideProjects";
import { WORKS } from "@/constants/works";
import LinkedinIcon from '@/public/img/linkedin-icon.svg';
import GmailIcon from '@/public/img/google-gmail.svg';

const Experiences = ({ dict }: {dict: any}) => {

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

export default Experiences;

"use client";
import React from 'react';
import {Badge} from "@/components/ui/badge";
import TooltipIcon from "@/app/[lang]/components/TooltipIcon";
import Section from "@/app/[lang]/components/Section";
import GitIcon from "@/app/[lang]/components/icons/GitIcon";
import GithubIcon from "@/app/[lang]/components/icons/GithubIcon";
import GithubActionsIcon from "@/app/[lang]/components/icons/GithubActionsIcon";
import PostmanIcon from "@/app/[lang]/components/icons/PostmanIcon";
import GitlabIcon from "@/app/[lang]/components/icons/GitlabIcon";
import JenkinsIcon from "@/app/[lang]/components/icons/JenkinsIcon";
import WordpressIcon from "@/app/[lang]/components/icons/WordpressIcon";
import JetbrainsIcon from "@/app/[lang]/components/icons/JetbrainsIcon";
import PrestashopIcon from "@/app/[lang]/components/icons/PrestashopIcon";
import AtlassianIcon from "@/app/[lang]/components/icons/AtlassianIcon";
import GoogleCloudIcon from "@/app/[lang]/components/icons/GoogleCloudIcon";
import DockerIcon from "@/app/[lang]/components/icons/DockerIcon";
import FigmaIcon from "@/app/[lang]/components/icons/FigmaIcon";
import FirebaseIcon from "@/public/img/firebase.svg";
import {Tooltip} from "react-tooltip";

const Tools = ({ dict }: { dict: any }) => {

    const iconList = [
        { IconComponent: GitIcon, content: "Git" },
        { IconComponent: GithubIcon, content: "Github" },
        { IconComponent: GithubActionsIcon, content: "Github Actions" },
        { IconComponent: GitlabIcon, content: "Gitlab" },
        { IconComponent: PostmanIcon, content: "Postman" },
        { IconComponent: JenkinsIcon, content: "Jenkins" },
        { path: FirebaseIcon, content: "Firebase" },
        { IconComponent: JetbrainsIcon, content: "Jetbrains" },
        { IconComponent: AtlassianIcon, content: "Atlassian" },
        { IconComponent: DockerIcon, content: "Docker" },
        { IconComponent: GoogleCloudIcon, content: "Google Cloud" },
        { IconComponent: FigmaIcon, content: "Figma" },
        { IconComponent: WordpressIcon, content: "Wordpress" },
        { IconComponent: PrestashopIcon, content: "Prestashop" },
    ];

    return (
        <Section className="flex flex-col items-start md:items-center gap-4 md:gap-8">

            <Badge variant="outline" className="text-xl md:text-2xl bg-card">{dict.Tools.title}</Badge>

            {/*<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                ... Et mes outils
            </h2>*/}

            <div className="inline-flex flex-wrap items-center justify-center m-auto w-full sm:w-3/4 lg:w-1/2 gap-10 py-4">
                {iconList.map((icon, index) => (
                    <React.Fragment key={index}>
                        <TooltipIcon IconComponent={icon.IconComponent} content={icon.content} />
                        <Tooltip id={icon.content + 'Icon'} />
                    </React.Fragment>
                ))}
            </div>
        </Section>
    );
};

export default Tools;

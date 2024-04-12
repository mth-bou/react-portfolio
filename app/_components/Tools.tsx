import React from 'react';
import TooltipIcon from "@/app/_components/TooltipIcon";
import Section from "@/app/_components/Section";
import GitIcon from "@/app/_components/icons/GitIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import GithubActionsIcon from "@/app/_components/icons/GithubActionsIcon";
import PostmanIcon from "@/app/_components/icons/PostmanIcon";
import {Badge} from "@/components/ui/badge";
import GitlabIcon from "@/app/_components/icons/GitlabIcon";
import JenkinsIcon from "@/app/_components/icons/JenkinsIcon";
import WordpressIcon from "@/app/_components/icons/WordpressIcon";
import JetbrainsIcon from "@/app/_components/icons/JetbrainsIcon";
import PrestashopIcon from "@/app/_components/icons/PrestashopIcon";
import AtlassianIcon from "@/app/_components/icons/AtlassianIcon";
import GoogleCloudIcon from "@/app/_components/icons/GoogleCloudIcon";
import DockerIcon from "@/app/_components/icons/DockerIcon";
import FigmaIcon from "@/app/_components/icons/FigmaIcon";

const Tools = () => {
    return (
        <Section className="flex flex-col items-center gap-4">

            <Badge variant="outline" className="text-2xl bg-card">Mes outils</Badge>

            {/*<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                ... Et mes outils
            </h2>*/}

            <div className="inline-flex flex-wrap items-center m-auto w-3/4 lg:w-1/2 gap-10 py-4">
                <TooltipIcon IconComponent={GitIcon} content="Git" />
                <TooltipIcon IconComponent={GithubIcon} content="Github" color="#000000" />
                <TooltipIcon IconComponent={GithubActionsIcon} content="Github Actions" />
                <TooltipIcon IconComponent={GitlabIcon} content="Gitlab" />
                <TooltipIcon IconComponent={PostmanIcon} content="Postman" />
                <TooltipIcon IconComponent={JenkinsIcon} content="Jenkins" />
                <TooltipIcon path="/img/firebase.svg" content="Firebase" />
                <TooltipIcon IconComponent={JetbrainsIcon} content="Jetbrains" />
                <TooltipIcon IconComponent={AtlassianIcon} content="Atlassian" />
                <TooltipIcon IconComponent={DockerIcon} content="Docker" />
                <TooltipIcon IconComponent={GoogleCloudIcon} content="Google Cloud" />
                <TooltipIcon IconComponent={FigmaIcon} content="Figma" />
                <TooltipIcon IconComponent={WordpressIcon} content="Wordpress" />
                <TooltipIcon IconComponent={PrestashopIcon} content="Prestashop" />
            </div>
        </Section>
    );
};

export default Tools;

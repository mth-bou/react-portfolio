import React from 'react';
import TooltipIcon from "@/app/_components/TooltipIcon";
import Section from "@/app/_components/Section";
import GitIcon from "@/app/_components/icons/GitIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import GithubActionsIcon from "@/app/_components/icons/GithubActionsIcon";
import PostmanIcon from "@/app/_components/icons/PostmanIcon";
import {Badge} from "@/components/ui/badge";

const Tools = () => {
    return (
        <Section className="flex flex-col items-center gap-4">

            <Badge variant="outline" className="text-2xl bg-card">Mes outils</Badge>

            {/*<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                ... Et mes outils
            </h2>*/}

            <div className="inline-flex flex-wrap items-center m-auto gap-10 py-4">
                <TooltipIcon IconComponent={GitIcon} content="Git" />
                <TooltipIcon IconComponent={GithubIcon} content="Github" color="#000000" />
                <TooltipIcon IconComponent={GithubActionsIcon} content="Github Actions" />
                <TooltipIcon IconComponent={PostmanIcon} content="Postman" />
            </div>
        </Section>
    );
};

export default Tools;

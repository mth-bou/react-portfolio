import React from 'react';
import TooltipIcon from "@/app/_components/TooltipIcon";
import Section from "@/app/_components/Section";
import GitIcon from "@/app/_components/icons/GitIcon";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import GithubActionsIcon from "@/app/_components/icons/GithubActionsIcon";
import PostmanIcon from "@/app/_components/icons/PostmanIcon";

const Tools = () => {
    return (
        <Section className="flex flex-col items-end gap-4">

            <h2 className="scroll-m-20 pb-2 text-3xl text-right font-semibold tracking-tight first:mt-0">
                ... Et outils
            </h2>

            <div className="inline-flex items-center m-auto gap-10">
                <TooltipIcon IconComponent={GitIcon} content="Git" />
                <TooltipIcon IconComponent={GithubIcon} content="Github" />
                <TooltipIcon IconComponent={GithubActionsIcon} content="Github Actions" />
                <TooltipIcon IconComponent={PostmanIcon} content="Postman" />
            </div>
        </Section>
    );
};

export default Tools;

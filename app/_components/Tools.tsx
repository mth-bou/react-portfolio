import React from 'react';
import TooltipIcon from "@/app/_components/TooltipIcon";
import PhpIcon from "@/app/_components/icons/PhpIcon";
import SymfonyIcon from "@/app/_components/icons/SymfonyIcon";
import ReactIcon from "@/app/_components/icons/ReactIcon";
import NextJsIcon from "@/app/_components/icons/NextJsIcon";
import NodeJsIcon from "@/app/_components/icons/NodeJsIcon";
import JavascriptIcon from "@/app/_components/icons/JavascriptIcon";
import TypescriptIcon from "@/app/_components/icons/TypescriptIcon";
import Section from "@/app/_components/Section";

const Tools = () => {
    return (
        <Section className="flex flex-col items-start gap-4">

            <h2 className="scroll-m-20 pb-2 text-3xl text-right font-semibold tracking-tight first:mt-0">
                ... Et outils
            </h2>

            <div className="w-50 inline-flex items-center m-auto gap-10">
                <TooltipIcon IconComponent={PhpIcon} content="PHP" />
                <TooltipIcon IconComponent={SymfonyIcon} content="Symfony" />
                <TooltipIcon IconComponent={ReactIcon} content="React" />
                <TooltipIcon IconComponent={NextJsIcon} content="NextJS" />
                <TooltipIcon IconComponent={NodeJsIcon} content="NodeJS" />
                <TooltipIcon IconComponent={JavascriptIcon} content="Javascript" />
                <TooltipIcon IconComponent={TypescriptIcon} content="Typescript" />
            </div>
        </Section>
    );
};

export default Tools;

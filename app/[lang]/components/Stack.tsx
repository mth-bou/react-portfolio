import React from 'react';
import Section from "@/app/[lang]/components/Section";
import {Badge} from "@/components/ui/badge";
import SymfonyIcon from "@/app/[lang]/components/icons/SymfonyIcon";
import ReactIcon from "@/app/[lang]/components/icons/ReactIcon";
import NextJsIcon from "@/app/[lang]/components/icons/NextJsIcon";
import NodeJsIcon from "@/app/[lang]/components/icons/NodeJsIcon";
import JavascriptIcon from "@/app/[lang]/components/icons/JavascriptIcon";
import PhpIcon from "@/app/[lang]/components/icons/PhpIcon";
import TypescriptIcon from "@/app/[lang]/components/icons/TypescriptIcon";
import TooltipIcon from "@/app/[lang]/components/TooltipIcon";
import TailwindCssIcon from "@/app/[lang]/components/icons/TailwindCssIcon";
import SassIcon from "@/app/[lang]/components/icons/SassIcon";
import HtmlIcon from "@/app/[lang]/components/icons/HtmlIcon";
import CssIcon from "@/app/[lang]/components/icons/CssIcon";
import PostgreIcon from "@/app/[lang]/components/icons/PostgreIcon";
import GraphqlIcon from "@/app/[lang]/components/icons/GraphqlIcon";
import WebpackIcon from "@/app/[lang]/components/icons/WebpackIcon";
import SolidityIcon from "@/app/[lang]/components/icons/SolidityIcon";

const Stack = ({ dict }: {dict: any}) => {
    return (
        <Section className="flex flex-col items-start md:items-center gap-4 md:gap-8">

            <Badge variant="outline" className="text-xl md:text-2xl bg-card">{dict.Stack.title}</Badge>

            {/*<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Ma stack technique ...
            </h2>*/}

            <div className="inline-flex flex-wrap items-center m-auto justify-center w-full sm:w-3/4 lg:w-1/2 gap-10 py-4">
                <TooltipIcon IconComponent={PhpIcon} content="PHP" />
                <TooltipIcon IconComponent={SymfonyIcon} content="Symfony" />
                <TooltipIcon IconComponent={ReactIcon} content="React" />
                <TooltipIcon IconComponent={NextJsIcon} content="NextJS" />
                <TooltipIcon IconComponent={NodeJsIcon} content="NodeJS" />
                <TooltipIcon IconComponent={JavascriptIcon} content="Javascript" />
                <TooltipIcon IconComponent={TypescriptIcon} content="Typescript" />
                <TooltipIcon IconComponent={TailwindCssIcon} content="Tailwind CSS" />
                <TooltipIcon IconComponent={HtmlIcon} content="HTML" />
                <TooltipIcon IconComponent={CssIcon} content="CSS" />
                <TooltipIcon IconComponent={SassIcon} content="Sass" />
                <TooltipIcon IconComponent={WebpackIcon} content="Webpack" />
                <TooltipIcon IconComponent={PostgreIcon} content="PostgreSQL" />
                <TooltipIcon IconComponent={GraphqlIcon} content="GraphQL" />
                <TooltipIcon IconComponent={SolidityIcon} content="Solidity" />
            </div>
        </Section>
    );
};

export default Stack;

"use client";
import React from 'react';
import Section from "@/app/[lang]/components/Section";
import {Badge} from "@/components/ui/badge";
import {Tooltip} from "react-tooltip";
import TooltipIcon from "@/app/[lang]/components/TooltipIcon";
import SymfonyIcon from "@/app/[lang]/components/icons/SymfonyIcon";
import ReactIcon from "@/app/[lang]/components/icons/ReactIcon";
import NextJsIcon from "@/app/[lang]/components/icons/NextJsIcon";
import NodeJsIcon from "@/app/[lang]/components/icons/NodeJsIcon";
import JavascriptIcon from "@/app/[lang]/components/icons/JavascriptIcon";
import PhpIcon from "@/app/[lang]/components/icons/PhpIcon";
import TypescriptIcon from "@/app/[lang]/components/icons/TypescriptIcon";
import TailwindCssIcon from "@/app/[lang]/components/icons/TailwindCssIcon";
import SassIcon from "@/app/[lang]/components/icons/SassIcon";
import HtmlIcon from "@/app/[lang]/components/icons/HtmlIcon";
import CssIcon from "@/app/[lang]/components/icons/CssIcon";
import PostgreIcon from "@/app/[lang]/components/icons/PostgreIcon";
import GraphqlIcon from "@/app/[lang]/components/icons/GraphqlIcon";
import WebpackIcon from "@/app/[lang]/components/icons/WebpackIcon";
import SolidityIcon from "@/app/[lang]/components/icons/SolidityIcon";

const Stack = ({ dict }: {dict: any}) => {

    const iconList = [
        { IconComponent: PhpIcon, content: "PHP" },
        { IconComponent: SymfonyIcon, content: "Symfony" },
        { IconComponent: ReactIcon, content: "React" },
        { IconComponent: NextJsIcon, content: "NextJS" },
        { IconComponent: NodeJsIcon, content: "NodeJS" },
        { IconComponent: JavascriptIcon, content: "Javascript" },
        { IconComponent: TypescriptIcon, content: "Typescript" },
        { IconComponent: TailwindCssIcon, content: "Tailwind CSS" },
        { IconComponent: HtmlIcon, content: "HTML" },
        { IconComponent: CssIcon, content: "CSS" },
        { IconComponent: SassIcon, content: "Sass" },
        { IconComponent: WebpackIcon, content: "Webpack" },
        { IconComponent: PostgreIcon, content: "PostgreSQL" },
        { IconComponent: GraphqlIcon, content: "GraphQL" },
        { IconComponent: SolidityIcon, content: "Solidity" },
    ];

    return (
        <Section className="flex flex-col items-start md:items-center gap-4 md:gap-8">

            <Badge variant="outline" className="text-xl md:text-2xl bg-card">{dict.Stack.title}</Badge>

            {/*<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Ma stack technique ...
            </h2>*/}

            <div className="inline-flex flex-wrap items-center m-auto justify-center w-full sm:w-3/4 lg:w-1/2 gap-10 py-4">
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

export default Stack;

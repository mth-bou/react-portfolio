"use client";
import React from 'react';
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
import IconList from "@/app/[lang]/components/IconList";
import MySQLIcon from "@/app/[lang]/components/icons/MySQLIcon";

const Stack = ({ dict }: {dict: any}) => {

    const iconList = [
        { IconComponent: PhpIcon, content: "PHP" },
        { IconComponent: SymfonyIcon, content: "Symfony" },
        { IconComponent: ReactIcon, content: "React" },
        { IconComponent: NextJsIcon, content: "NextJS" },
        // { IconComponent: NodeJsIcon, content: "NodeJS" },
        { IconComponent: JavascriptIcon, content: "Javascript" },
        { IconComponent: TypescriptIcon, content: "Typescript" },
        { IconComponent: TailwindCssIcon, content: "Tailwind CSS" },
        { IconComponent: HtmlIcon, content: "HTML" },
        { IconComponent: CssIcon, content: "CSS" },
        { IconComponent: SassIcon, content: "Sass" },
        { IconComponent: WebpackIcon, content: "Webpack" },
        { IconComponent: PostgreIcon, content: "PostgreSQL" },
        { IconComponent: MySQLIcon, content: "MySQL" },
        // { IconComponent: GraphqlIcon, content: "GraphQL" },
        // { IconComponent: SolidityIcon, content: "Solidity" },
    ];

    return <IconList iconList={iconList} title={dict.Stack.title} />;
};

export default Stack;

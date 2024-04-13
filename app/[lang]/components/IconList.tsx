import React from 'react';
import {Badge} from "@/components/ui/badge";
import TooltipIcon from "@/app/[lang]/components/TooltipIcon";
import {Tooltip} from "react-tooltip";
import Section from "@/app/[lang]/components/Section";

type IconListProps = {
    iconList: {
        IconComponent?: React.ComponentType<{size?: number, color?: string}>;
        content: string;
        path?: string;
    }[];
    title: string;
}

const IconList = ({ iconList, title }: IconListProps) => {
    return (
        <Section className="flex flex-col items-start md:items-center gap-4 md:gap-8">
            <Badge variant="outline" className="text-xl md:text-2xl bg-card">{title}</Badge>
            <div className="inline-flex flex-wrap items-center justify-center m-auto w-full sm:w-3/4 lg:w-1/2 gap-10 py-4">
                {iconList.map((icon, index) => (
                    <React.Fragment key={index}>
                        {icon.IconComponent && <TooltipIcon IconComponent={icon.IconComponent} content={icon.content} />}
                        {icon.path && <TooltipIcon path={icon.path} content={icon.content} />}
                        <Tooltip id={icon.content + 'Icon'} />
                    </React.Fragment>
                ))}
            </div>
        </Section>
    );
};

export default IconList;

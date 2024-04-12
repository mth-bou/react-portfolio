import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Image from "next/image";

type TooltipIconProps = {
    IconComponent?: React.ComponentType<{size?: number, color?: string}>;
    content: string;
    path?: string;
    size?: number;
    color?: string;
}

const TooltipIcon = ({IconComponent, content, path, size = 60, color}: TooltipIconProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {IconComponent && <IconComponent size={size} color={color} />}
                    {path && <Image src={path} alt={content} width={size} height={size} />}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipIcon;

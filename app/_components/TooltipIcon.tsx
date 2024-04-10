import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

type TooltipIconProps = {
    IconComponent: React.ComponentType<{size?: number}>;
    content: string;
    size?: number;
}

const TooltipIcon = ({IconComponent, content, size = 70}: TooltipIconProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <IconComponent size={size} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipIcon;

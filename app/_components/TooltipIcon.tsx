import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

type TooltipIconProps = {
    IconComponent: React.ComponentType<{size?: number, color?: string}>;
    content: string;
    size?: number;
    color?: string;
}

const TooltipIcon = ({IconComponent, content, size = 70, color}: TooltipIconProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <IconComponent size={size} color={color} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default TooltipIcon;

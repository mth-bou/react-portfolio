import React from "react";
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
        <a
            data-tooltip-id={content + 'Icon'}
            data-tooltip-content={content}
            data-tooltip-place="top"
        >
            {IconComponent && <IconComponent size={size} color={color}/>}
            {path && <Image src={path} alt={content} width={size} height={size}/>}
        </a>
    );
};

export default TooltipIcon;

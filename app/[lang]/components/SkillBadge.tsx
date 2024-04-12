import React, {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

const SkillBadge = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return <span
        className={cn(
            "bg-accent/30 font-mono text-primary border border-accent px-1 py-0.5 rounded-sm hover:bg-accent/50 transition-colors",
            className
        )} {...props}
    />;
}

export default SkillBadge;

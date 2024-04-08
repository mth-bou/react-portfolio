import React, {PropsWithChildren} from 'react';
import {cn} from "@/lib/utils";

const Section = (props: PropsWithChildren<{className?: string}>) => {
    return (
        <div className={cn("max-w-6xl px-4 m-auto", props.className)}>
            {props.children}
        </div>
    );
};

export default Section;

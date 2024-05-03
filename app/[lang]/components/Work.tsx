import React from "react";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import Image, {StaticImageData} from "next/image";

export type WorkProps = {
    image: string | StaticImageData
    title: string;
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
}
export const Work = (props: WorkProps) => {
    return (
        <Link
            href={props.url}
            className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded px-2"
            target="_blank"
        >

            <Image src={props.image} alt={props.title} className="object-contain rounded-md" style={{ width: '40px', height: 'auto' }} />

            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-sm md:text-base font-semibold">{props.title}</p>
                    {props.freelance && (
                        <Badge
                            className="bg-primary/30 text-primary ml-1 p-1 rounded-sm text-xs"
                            variant="outline"
                        >
                            Mission
                        </Badge>
                    )}
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{props.role}</p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    );
}

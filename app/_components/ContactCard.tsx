import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import React from "react";

export const ContactCard = (props: {
    image: string,
    mediumImage: string,
    name: string,
    description: string,
    url: string
}) => {
    return (
        <Link
            href={props.url}
            className="p-3 bg-accent/10 hover:bg-accent/50 transition-colors group flex items-center gap-4 rounded w-full"
        >
            <div className="relative">
                <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain"/>
                <img src={props.mediumImage} alt={props.name}
                     className="w-4 h-4 bg-foreground absolute -bottom-1 -right-1 rounded-full object-contain"/>
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-md font-semibold">{props.name}</p>
                </div>
                <p className="text-md text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight size={16}
                          className="mr-3 text-accent-foreground group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"/>
        </Link>
    );
}

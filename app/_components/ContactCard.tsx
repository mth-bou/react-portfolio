import React from "react";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import Image from "next/image";

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
                <Image src={props.image} alt={props.name} width={40} height={40} className="rounded-full object-contain"/>
                <Image src={props.mediumImage} alt={props.name} width={16} height={16} className="bg-foreground absolute -bottom-1 -right-1 rounded-full object-contain"/>
            </div>
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-sm md:text-base font-semibold">{props.name}</p>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight
                size={16}
                className="mr-3 text-accent-foreground group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
            />
        </Link>
    );
}

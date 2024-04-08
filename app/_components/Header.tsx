import React from 'react';
import Section from "@/app/_components/Section";
import {buttonVariants} from "@/components/ui/button";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import Link from "next/link";
import {cn} from "@/lib/utils";
import LinkedinIcon from "@/app/_components/icons/LinkedinIcon";

const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-2xl font-bold">mathieu-boucher.fr</h1>
                <div className="flex-1"></div>
                <ul className="flex items-center gap-2">
                    <Link
                        href="https://github.com/mth-bou"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <GithubIcon size={20} className="text-foreground" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/mathieu-boucher-9b4578198/"
                        target="_blank"
                        className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
                    >
                        <LinkedinIcon size={20} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    );
};

export default Header;

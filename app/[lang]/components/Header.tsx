import React from 'react';
import Section from "@/app/[lang]/components/Section";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import GithubIcon from "@/app/[lang]/components/icons/GithubIcon";
import LinkedinIcon from "@/app/[lang]/components/icons/LinkedinIcon";
import LanguageDropdown from "@/app/[lang]/components/LanguageDropdown";

const Header = ({ lang }: { lang: string }) => {

    return (
        <header className="top-0 py-4">
            <Section className="flex items-baseline">
                <div className="flex-1"></div>
                <ul className="flex items-center gap-2">
                    <LanguageDropdown lang={lang} />
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

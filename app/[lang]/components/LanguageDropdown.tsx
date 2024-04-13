import React from 'react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import FranceFlag from "@/public/img/france-flag.svg";
import EnglandFlag from "@/public/img/england-flag.svg";
import Link from "next/link";
import Image, {StaticImageData} from "next/image";

interface Language {
    lang: string;
    flag: StaticImageData;
    alt: string;
}

const languages: Language[] = [
    { lang: 'fr', flag: FranceFlag, alt: 'Drapeau Français' },
    { lang: 'en', flag: EnglandFlag, alt: 'Drapeau Anglais' },
];

const Flag = ({ src, alt }: { src: any, alt: string}) => (
    <Image src={src} alt={alt} className="w-8 rounded" />
);

const LanguageDropdown = ({ lang }: { lang: string }) => {

    // ! after find() method indicates that the value will never be null
    const currentLanguage = languages.find(language => language.lang === lang)!;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Flag src={currentLanguage.flag} alt={currentLanguage.alt} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-0">
                {languages.map((language) => (
                    <DropdownMenuItem key={language.lang}>
                        <Link href={`/${language.lang}`}>
                            <Flag src={language.flag} alt={language.alt} />
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageDropdown;

import React from 'react';
import Section from "@/app/[lang]/components/Section";
import SkillBadge from "@/app/[lang]/components/SkillBadge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhp, faReact, faSymfony, faSquareJs} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import ProfilePhoto from "@/public/img/profile-photo.jpg";

const Hero = ({ dict }: {dict: any }) => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-10">
            <div className="flex-[3] flex flex-col gap-3 w-full">
                <h2 className="font-caption font-bold text-4xl md:text-5xl text-primary">Mathieu Boucher</h2>
                <h3 className="font-caption text-2xl md:text-3xl">{dict.Hero.h3}</h3>
                <p className="text-base">{dict.Hero.desc}<br />
                </p>
                {/*<Link href="https://github.com/mth-bou" target="_blank">
                    <SkillBadge className="inline-flex items-center mr-auto">
                        <GithubIcon size={16} className="inline mr-1"/>PHP
                    </SkillBadge>
                </Link>*/}
                <div className="inline-flex items-center gap-2">
                    <SkillBadge className="inline-flex items-center">
                        <FontAwesomeIcon icon={faPhp} size="2xl" />
                    </SkillBadge>
                    <SkillBadge className="inline-flex items-center">
                        <FontAwesomeIcon icon={faSymfony} size="2xl" />
                    </SkillBadge>
                    <SkillBadge className="inline-flex items-center">
                        <FontAwesomeIcon icon={faSquareJs} size="2xl" />
                    </SkillBadge>
                    <SkillBadge className="inline-flex items-center">
                        <FontAwesomeIcon icon={faReact} size="2xl" />
                    </SkillBadge>
                </div>
            </div>
            <div className="relative flex-[2] max-lg:m-auto flex justify-center overflow-hidden rounded-full max-w-56 max-md:w-30">
                <Image
                    src={ProfilePhoto}
                    alt="Mathieu Boucher"
                    className="w-full h-auto"
                    width={400}
                    height={400}
                />
            </div>
        </Section>
    );
};

export default Hero;

import React from 'react';
import Section from "@/app/_components/Section";
import SkillBadge from "@/app/_components/SkillBadge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhp, faReact, faSymfony, faSquareJs} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[3] flex flex-col gap-3 w-full">
                <h2 className="font-caption font-bold text-4xl md:text-5xl text-primary">Mathieu Boucher</h2>
                <h3 className="font-caption text-2xl md:text-3xl">Ingénieur logiciel</h3>
                <p className="text-base">
                    Diplômé d'ingénierie informatique, je conçois et développe des applications web et
                    mobiles innovantes, modernes et réactives.<br />
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
            <div className="flex-[2] max-lg:m-auto flex justify-center">
                <Image
                    src="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                    alt="Mathieu Boucher's picture"
                    className="w-full h-auto rounded-full max-w-56 max-md:w-30"
                    width={400}
                    height={400}
                />
            </div>
        </Section>
    );
};

export default Hero;

import React from 'react';
import Section from "@/app/[lang]/components/Section";
import {Badge} from "@/components/ui/badge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSymfony, faReact} from "@fortawesome/free-brands-svg-icons";
import {faGroupArrowsRotate, faShieldHalved, faTableList} from "@fortawesome/free-solid-svg-icons";

const Skills = ({ dict }: { dict: any}) => {
    return (
        <Section className="flex flex-col items-start gap-4 md:gap-8">
            <Badge variant="outline" className="text-xl md:text-2xl bg-card">{dict.Skills.title}</Badge>

            {/*<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                J'aime travailler sur ...
            </h2>*/}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faSymfony} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">{dict.Skills.backend.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">{dict.Skills.backend.desc}</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faReact} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">{dict.Skills.frontend.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">{dict.Skills.frontend.desc}</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faGroupArrowsRotate} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">{dict.Skills.automation.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">{dict.Skills.automation.desc}</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faTableList} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">{dict.Skills.data.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">{dict.Skills.data.desc}</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex justify-center items-center mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faShieldHalved} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">{dict.Skills.security.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">{dict.Skills.security.desc}</p>
                </div>
            </div>

        </Section>
    );
};

export default Skills;

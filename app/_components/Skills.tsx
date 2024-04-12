import React from 'react';
import Section from "@/app/_components/Section";
import {Badge} from "@/components/ui/badge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSymfony, faReact} from "@fortawesome/free-brands-svg-icons";
import {faGroupArrowsRotate, faShieldHalved, faTableList} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4 md:gap-8">
            <Badge variant="outline" className="text-xl md:text-2xl bg-card">Ce sur quoi j'aime travailler</Badge>

            {/*<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                J'aime travailler sur ...
            </h2>*/}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="flex flex-col items-center">
                    <div className="mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faSymfony} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">Développement Web Backend</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">Je développe des solutions
                        backend
                        robustes et sécurisées, conçues pour des logiciels évolutifs et durables.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faReact} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">Développement Web Frontend</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">Je crée des interfaces
                        frontend dynamiques
                        et intuitives, optimisées pour une expérience utilisateur fluide et engageante.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faGroupArrowsRotate} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">Automatisation</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">J'aime développer des
                        automatisations de
                        tâches qui améliorent l'efficacité et la productivité, tout en permettant aux utilisateurs de
                        gagner du temps.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faTableList} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">Traitement de données</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">L'extraction, la manipulation,
                        le
                        traitement, l'analyse et l'interprétation de données font partie des composantes que
                        j'apprécie.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mb-2 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faShieldHalved} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-center">Sécurité</h3>
                    <p className="text-sm md:text-base text-muted-foreground text-center">La sécurité des systèmes
                        numériques étant
                        une préoccupation fondamentale, je veille à ce que les solutions que je développe soient
                        protégées.</p>
                </div>
            </div>

        </Section>
    );
};

export default Skills;

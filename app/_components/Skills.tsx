import React from 'react';
import Section from "@/app/_components/Section";
import {Badge} from "@/components/ui/badge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSymfony, faPhp, faReact} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline" className="text-2xl bg-card">Compétences</Badge>

            {/*<h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                J'aime travailler sur ...
            </h2>*/}

            <div className="flex max-md:flex-col gap-4">
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faPhp} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">Marketing</h3>
                    <p className="text-md text-muted-foreground">Plan it, create it, launch it. Collaborate seamlessly
                        with all the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faSymfony} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">Legal</h3>
                    <p className="text-md text-muted-foreground">Protect your organization, devices and stay compliant
                        with
                        our structured workflows and custom permissions made for you.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                        <FontAwesomeIcon icon={faReact} size="2xl" className="text-primary"/>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">Business Automation</h3>
                    <p className="text-md text-muted-foreground">Auto-assign tasks, send Slack messages, and much more.
                        Now
                        power up with hundreds of new templates to help you get started.</p>
                </div>
            </div>

        </Section>
    );
};

export default Skills;

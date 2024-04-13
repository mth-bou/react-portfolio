import React from 'react';
import Section from "@/app/[lang]/components/Section";
import {Badge} from "@/components/ui/badge";
import {ContactCard} from "@/app/[lang]/components/ContactCard";

const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline" className="text-2xl bg-card">Contactez-moi</Badge>

            <div className="flex max-md:flex-col gap-4">
                <ContactCard
                    name="Mathieu Boucher"
                    image="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                    mediumImage="/img/linkedin-icon.svg"
                    description=""
                    url="https://www.linkedin.com/in/mathieu-boucher-9b4578198/"
                />
                <ContactCard
                    name="mathieu.boucher55@gmail.com"
                    image="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                    mediumImage="/img/google-gmail.svg"
                    description=""
                    url="mailto:mathieu.boucher55@gmail.com"
                />
            </div>

        </Section>
    );
};

export default Contact;

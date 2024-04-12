import React from 'react';
import SkillBadge from "@/app/_components/SkillBadge";

const Footer = () => {
    return (
        <footer className="rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <hr className="my-6 sm:mx-auto lg:my-8"/>
                <span className="block text-xs sm:text-sm sm:text-center">Conçu et développé
                    par Mathieu Boucher avec {" "}
                    <SkillBadge className="inline-flex items-center">
                        React
                    </SkillBadge> / {" "}
                    <SkillBadge className="inline-flex items-center">
                        Next.js
                    </SkillBadge> / {" "}
                    <SkillBadge className="inline-flex items-center">
                        Tailwind CSS
                    </SkillBadge>
                </span>
            </div>
        </footer>
    );
};

export default Footer;

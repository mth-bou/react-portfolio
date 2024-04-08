import React, {ComponentPropsWithoutRef} from 'react';
import Section from "@/app/_components/Section";
import Image from "next/image";
import {cn} from "@/lib/utils";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import Link from "next/link";

const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return <span
        className={cn(
            "bg-accent/30 font-mono text-primary border border-accent px-1 py-0.5 rounded-sm hover:bg-accent/50 transition-colors",
            className
        )} {...props}
    />;
}

const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Mathieu Boucher</h2>
                <h3 className="font-caption text-3xl">Software Developer</h3>
                <p className="text-base">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua on {" "}
                    <Link href="https://github.com/mth-bou" target="_blank">
                        <Code className="inline-flex items-center">
                            <GithubIcon size={16} className="inline mr-1"/> Web
                        </Code>
                    </Link>
                </p>
            </div>
            <div className="flex-1 max-lg:m-auto">
                <img
                    src="https://media.licdn.com/dms/image/C5603AQFSssap-2Gfgg/profile-displayphoto-shrink_400_400/0/1618583076650?e=1718236800&v=beta&t=mkVC0iyiSxeFnVKyFicLmX5ShwVMQTJ6BKdigZKPblo"
                    className="w-full h-auto rounded-full max-w-xs max-md:w-30"
                    alt="Mathieu Boucher picture"
                    width={400}
                    height={400}
                />
            </div>
        </Section>
    );
};

export default Hero;

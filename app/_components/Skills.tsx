import React from 'react';
import Section from "@/app/_components/Section";
import {Badge} from "@/components/ui/badge";

const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant="outline" className="text-2xl bg-card">Skills</Badge>

            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on ...
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;

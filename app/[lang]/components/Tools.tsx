"use client";
import React from 'react';
import GitIcon from "@/app/[lang]/components/icons/GitIcon";
import GithubIcon from "@/app/[lang]/components/icons/GithubIcon";
import GithubActionsIcon from "@/app/[lang]/components/icons/GithubActionsIcon";
import PostmanIcon from "@/app/[lang]/components/icons/PostmanIcon";
import GitlabIcon from "@/app/[lang]/components/icons/GitlabIcon";
import JenkinsIcon from "@/app/[lang]/components/icons/JenkinsIcon";
import WordpressIcon from "@/app/[lang]/components/icons/WordpressIcon";
import JetbrainsIcon from "@/app/[lang]/components/icons/JetbrainsIcon";
import PrestashopIcon from "@/app/[lang]/components/icons/PrestashopIcon";
import AtlassianIcon from "@/app/[lang]/components/icons/AtlassianIcon";
import GoogleCloudIcon from "@/app/[lang]/components/icons/GoogleCloudIcon";
import DockerIcon from "@/app/[lang]/components/icons/DockerIcon";
import FigmaIcon from "@/app/[lang]/components/icons/FigmaIcon";
import FirebaseIcon from "@/public/img/firebase.svg";
import IconList from "@/app/[lang]/components/IconList";

const Tools = ({ dict }: { dict: any }) => {

    const iconList = [
        { IconComponent: GitIcon, content: "Git" },
        { IconComponent: GithubIcon, content: "Github" },
        { IconComponent: GithubActionsIcon, content: "Github Actions" },
        { IconComponent: GitlabIcon, content: "Gitlab" },
        { IconComponent: PostmanIcon, content: "Postman" },
        { IconComponent: JenkinsIcon, content: "Jenkins" },
        { path: FirebaseIcon, content: "Firebase" },
        { IconComponent: JetbrainsIcon, content: "Jetbrains" },
        { IconComponent: AtlassianIcon, content: "Atlassian" },
        { IconComponent: DockerIcon, content: "Docker" },
        { IconComponent: GoogleCloudIcon, content: "Google Cloud" },
        { IconComponent: FigmaIcon, content: "Figma" },
        { IconComponent: WordpressIcon, content: "Wordpress" },
        { IconComponent: PrestashopIcon, content: "Prestashop" },
    ];

    return <IconList iconList={iconList} title={dict.Tools.title} />;
};

export default Tools;

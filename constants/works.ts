import { WorkProps } from "@/app/[lang]/components/Work";
import LikomeIcon from '@/public/img/favicon-likome.svg';

export const WORKS: WorkProps[] = [
    {
        image: "/img/logo-cr.jpg",
        title: "Clinic Renaissance",
        role: "Web Developer",
        date: "2021 - 2023",
        url: "https://clinic-renaissance.fr"
    },
    {
        image: LikomeIcon,
        title: "Likome Website",
        role: "Web Developer",
        date: "2023",
        url: "https://likome.fr",
        freelance: true
    },
    {
        image: "/img/logo-osteocar.png",
        title: "Osteocar Website",
        role: "Web Developer",
        date: "2022",
        url: "https://osteocar-osteopathie.fr/",
        freelance: true
    },
    {
        image: "/img/favicon-happyvap.ico",
        title: "HappyVap",
        role: "Web Developer",
        date: "2020 - 2021",
        url: "",
    },
];

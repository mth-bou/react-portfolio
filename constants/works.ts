import { WorkProps } from "@/app/[lang]/components/Work";
import LikomeIcon from '@/public/img/favicon-likome.svg';
import LogoCR from '@/public/img/logo-cr.jpg';
import LogoOsteocar from '@/public/img/logo-osteocar.png';
import FaviconHappyvap from '@/public/img/favicon-happyvap.ico';


export const WORKS: WorkProps[] = [
    {
        image: LogoCR,
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
        image: LogoOsteocar,
        title: "Osteocar Website",
        role: "Web Developer",
        date: "2022",
        url: "https://osteocar-osteopathie.fr/",
        freelance: true
    },
    {
        image: FaviconHappyvap,
        title: "HappyVap",
        role: "Web Developer",
        date: "2020 - 2021",
        url: "",
    },
];

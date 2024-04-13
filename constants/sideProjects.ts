import { faCartShopping, faSignal } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const SIDE_PROJECTS = (dict: any) => [
    {
        logo: faCartShopping,
        title: "Symfony Ecom App",
        description: dict.Experiences.sideProjectsCard.symfonyProject.desc,
        url: "https://github.com/mth-bou/ecom"
    },
    {
        logo: faGithub,
        title: "Githreads",
        description: dict.Experiences.sideProjectsCard.githreadsProject.desc,
        url: "https://githreads-mthb.vercel.app/"
    },
    {
        logo: faSignal,
        title: "Ping Stability Test",
        description: dict.Experiences.sideProjectsCard.pingProject.desc,
        url: "https://github.com/mth-bou/ping-stability-test"
    }
];

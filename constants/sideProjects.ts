import {
    faCartShopping,
    faSignal,
    faDiagramProject,
    faTableCells,
    faRobot,
    faPersonBiking
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const SIDE_PROJECTS = (dict: any) => [
    {
        logo: faGithub,
        title: "Githreads",
        description: dict.Experiences.sideProjectsCard.githreadsProject.desc,
        url: "https://githreads-mthb.vercel.app/"
    },
    {
        logo: faCartShopping,
        title: "Symfony Ecom App",
        description: dict.Experiences.sideProjectsCard.symfonyProject.desc,
        url: "https://github.com/mth-bou/ecom"
    },
    {
        logo: faDiagramProject,
        title: "Task management webservice",
        description: dict.Experiences.sideProjectsCard.taskProject.desc,
        url: "https://github.com/mth-bou/task-management-webservice"
    },
    {
        logo: faTableCells,
        title: "The Game of Life",
        description: dict.Experiences.sideProjectsCard.gameOfLifeProject.desc,
        url: "https://the-game-of-life-mathieu-boucher.vercel.app"
    },
    {
        logo: faRobot,
        title: "Chatbot",
        description: dict.Experiences.sideProjectsCard.chatbotProject.desc,
        url: "https://github.com/mth-bou/chatsonic-chatbot"
    },
    {
        logo: faPersonBiking,
        title: "vLille Search Project",
        description: dict.Experiences.sideProjectsCard.vLilleProject.desc,
        url: "https://github.com/mth-bou/vlille-search"
    },
    {
        logo: faSignal,
        title: "Ping Stability Test",
        description: dict.Experiences.sideProjectsCard.pingProject.desc,
        url: "https://github.com/mth-bou/ping-stability-test"
    }
];

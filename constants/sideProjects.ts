import {
	faSignal,
	faDiagramProject,
	faTableCells,
	faRobot,
	faPersonBiking,
	faRotate,
  faChartSimple,
	faHexagonNodes,
	faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const SIDE_PROJECTS = (dict: any) => [
	{
		logo: faGithub,
		title: dict.Experiences.sideProjectsCard.githreadsProject.title,
		description: dict.Experiences.sideProjectsCard.githreadsProject.desc,
		url: "https://githreads-mthb.vercel.app/"
	},
	{
		logo: faRotate,
		title: dict.Experiences.sideProjectsCard.imagesConverterProject.title,
		description: dict.Experiences.sideProjectsCard.imagesConverterProject.desc,
	},
	{
		logo: faChartSimple,
		title: dict.Experiences.sideProjectsCard.binanceTracking.title,
		description: dict.Experiences.sideProjectsCard.binanceTracking.desc,
	},
	{
		logo: faChartLine,
		title : dict.Experiences.sideProjectsCard.tradingJournalApi.title,
		description: dict.Experiences.sideProjectsCard.tradingJournalApi.desc,
		url: "https://trading-journal-eei0.onrender.com/api"
	},
	{
		logo: faHexagonNodes,
		title: dict.Experiences.sideProjectsCard.bookstoreMicroservices.title,
		description: dict.Experiences.sideProjectsCard.bookstoreMicroservices.desc,
		url: "https://github.com/mth-bou/nest-bookstore-microservices"
	},
	{
		logo: faDiagramProject,
		title: dict.Experiences.sideProjectsCard.taskProject.title,
		description: dict.Experiences.sideProjectsCard.taskProject.desc,
		url: "https://github.com/mth-bou/task-management-webservice"
	},
	{
		logo: faTableCells,
		title: dict.Experiences.sideProjectsCard.gameOfLifeProject.title,
		description: dict.Experiences.sideProjectsCard.gameOfLifeProject.desc,
		url: "https://the-game-of-life-mathieu-boucher.vercel.app"
	},
	{
		logo: faRobot,
		title: dict.Experiences.sideProjectsCard.chatbotProject.title,
		description: dict.Experiences.sideProjectsCard.chatbotProject.desc,
		url: "https://github.com/mth-bou/chatsonic-chatbot"
	},
	{
		logo: faPersonBiking,
		title: dict.Experiences.sideProjectsCard.vLilleProject.title,
		description: dict.Experiences.sideProjectsCard.vLilleProject.desc,
		url: "https://github.com/mth-bou/vlille-search"
	},
	{
		logo: faSignal,
		title: dict.Experiences.sideProjectsCard.pingProject.title,
		description: dict.Experiences.sideProjectsCard.pingProject.desc,
		url: "https://github.com/mth-bou/ping-stability-test"
	}
];

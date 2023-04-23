import { DocumentDriveKpis, DocumentDriveTeam } from './DocumentDriveVisuals';
import { Kpi } from '../../Components/Kpi/Kpi';
import { ProjectModel } from '../../Utils/ProjectModel';
import MdIntro from './1-DocumentDrive-Intro.md';
import MdAudienceTeam from './2-DocumentDrive-AudienceTeam.md';
import MdBody from './3-DocumentDrive-Body.md';
import DocumentPlatformImg from "./../../Images/DocumentPlatform.png";

export const DocumentDriveModel: ProjectModel = {
    title: "Document Platform",
    subTitle: "How might we redeseign a 10-years old document platotform?",
    color: "agile",
    agileTags: [
        "Scrum",
        "Lean UX"
    ],
    designTags: [
        "UX Management",
        "UX Design",
        "User Research"
    ],
    softwareTags: [
        "Azure Cloud",
        "Kubernetes",
        "Microservices",
        "Microfrontend"
    ],
    back: "",
    next: "",
    briefText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    coverImg: DocumentPlatformImg,
    components: [
        MdIntro,
        <DocumentDriveKpis />,
        MdAudienceTeam,
        <DocumentDriveTeam />,
        MdBody
    ],
    route: '/document-drive'
};
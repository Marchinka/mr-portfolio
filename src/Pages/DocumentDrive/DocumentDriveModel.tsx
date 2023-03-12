import { DocumentDriveKpis } from '../../Components/DocumentDriveKpi/DocumentDriveKpi';
import { Kpi } from '../../Components/Kpi/Kpi';
import { ProjectModel } from '../../Utils/ProjectModel';
import MdIntro from './1-DocumentDrive-Intro.md';
import MdBody from './2-DocumentDrive-Body.md';
import DocumentPlatformImg from "./../../Images/DocumentPlatform.png";

export const DocumentDriveModel: ProjectModel = {
    title: "Document Platform",
    subTitle: "Document Platform Redesign",
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
        "Azure CLoud",
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
        // <DocumentDriveGantt />,
        MdBody
    ],
    route: '/document-drive'
};
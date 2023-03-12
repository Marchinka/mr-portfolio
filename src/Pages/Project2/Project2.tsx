import { DocumentDriveKpis } from '../../Components/DocumentDriveKpi/DocumentDriveKpi';
import { Kpi } from '../../Components/Kpi/Kpi';
import { ProjectModel } from '../../Utils/ProjectModel';
import DocumentPlatformImg from "./../../Images/DocumentPlatform.png";
import Project2Img from "./../../Images/Project2.png";

export const Project2Model: ProjectModel = {
    title: "Project2",
    subTitle: "Lorem ipsum dolor sit amet",
    color: "design",
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
    coverImg: Project2Img,
    components: [
    ],
    route: '/document-drive'
};
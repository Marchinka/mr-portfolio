import { DocumentDriveKpis } from '../DocumentDrive/DocumentDriveVisuals';
import { Kpi } from '../../Components/Kpi/Kpi';
import { ProjectModel } from '../../Utils/ProjectModel';
import DocumentPlatformImg from "./../../Images/DocumentPlatform.png";
import Project2Img from "./../../Images/Project2.png";

export const Project2Model: ProjectModel = {
    title: "Project2",
    subTitle: "Lorem ipsum dolor sit amet",
    color: "software",
    agileTags: [
        "Test", "Test"
    ],
    designTags: [
        "Test", "Test", "Test"
    ],
    softwareTags: [
        "Test", "Test", "Test", "Test"
    ],
    back: "",
    next: "",
    briefText: null,
    coverImg: Project2Img,
    paragraphs: [
    ],
    route: '/document-drive'
};
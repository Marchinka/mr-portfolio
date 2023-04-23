import { DocumentDriveKpis, DocumentDriveTeam } from './DocumentDriveVisuals';
import { Kpi } from '../../Components/Kpi/Kpi';
import { ProjectModel } from '../../Utils/ProjectModel';


import MdIntro from './Markdown/1-Intro.md';
import MdAudience from './Markdown/2-Audience.md';
import MdGovernance from './Markdown/3-Governance.md';
import MdDesign from './Markdown/4-Design.md';
import MdEmpathy from './Markdown/5-Empathy.md';
import MdDefine from './Markdown/6-Define.md';
import MdIdeate from './Markdown/7-Ideate.md';
import MdPrototype from './Markdown/8-Prototype.md';
import MdTest from './Markdown/9-Test.md';

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
        MdAudience,
        <DocumentDriveTeam />,
        MdGovernance,
        MdDesign,
        MdEmpathy,
        MdDefine,
        MdIdeate,
        MdPrototype,
        MdTest
    ],
    route: '/document-drive'
};
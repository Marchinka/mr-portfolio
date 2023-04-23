import { DocumentDriveKpis, DocumentDriveTeam } from './DocumentDriveVisuals';
import { Kpi } from '../../Components/Kpi/Kpi';
import { ProjectModel } from '../../Utils/ProjectModel';


import MdIntro from './Markdown/Intro.md';
import MdAudience from './Markdown/Audience.md';
import MdTimeline from './Markdown/Timeline.md';
import MdGovernance from './Markdown/Governance.md';
import MdChallenge from './Markdown/Challenge.md';
import MdResearch from './Markdown/Research.md';
import MdSolution from './Markdown/Solution.md';
import MdFinal from './Markdown/Final.md';

import DocumentPlatformImg from "./../../Images/DocumentPlatform.png";

export const DocumentDriveModel: ProjectModel = {
    title: "Document Platform",
    subTitle: "How might we redeseign a 10-years old document platform?",
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
    briefText: MdIntro,
    coverImg: DocumentPlatformImg,
    paragraphs: [
        { title: "Summary", components: [MdIntro, <DocumentDriveKpis />] },
        { title: "Timeline", components: [MdTimeline] },
        { title: "Target Audience", components: [MdAudience] },
        { title: "Team & My Role", components: [<DocumentDriveTeam />, MdGovernance] },
        { title: "Challenge", components: [MdChallenge] },
        { title: "Research", components: [MdResearch] },
        { title: "Solution", components: [MdSolution] },
        { title: "Final thoughts", components: [MdFinal] }
    ],
    // paragraphs: [
    //     MdIntro,
    //     <DocumentDriveKpis />,
    //     MdAudience,
    //     <DocumentDriveTeam />,
    //     MdGovernance,
    //     MdDesign,
    //     MdEmpathy,
    //     MdDefine,
    //     MdIdeate,
    //     MdPrototype,
    //     MdTest
    // ],
    route: '/document-drive'
};
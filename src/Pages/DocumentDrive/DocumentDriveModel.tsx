import { DocumentDriveHighlights, DocumentDriveKpis, DocumentDrivePersonas, DocumentDriveTeam } from './DocumentDriveVisuals';
import { Kpi } from '../../Components/Kpi/Kpi';
import { ProjectModel } from '../../Utils/ProjectModel';

import DocumentumImg from "./../../Images/documentum.png";

import MdIntro from './Markdown/Intro.md';
import MdAudience from './Markdown/Audience.md';
import MdTimeline from './Markdown/Timeline.md';
import MdGovernance from './Markdown/Governance.md';
import MdChallenge from './Markdown/Challenge.md';
import MdResearch from './Markdown/Research.md';
import MdSolution from './Markdown/Solution.md';
import MdFinal from './Markdown/Final.md';

import DocumentPlatformImg from "./../../Images/DocumentPlatform.png";
import { RefImage } from '../../Components/RefImage/RefImage';

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
        { title: "", components: [<DocumentDriveHighlights />] },
        { title: "Challenge", components: [MdIntro, <DocumentDriveKpis />, <RefImage img={DocumentumImg} caption="A screenshot of the old product (it was an instance of D2 documentum)." />] },
        { title: "Target Audience", components: [<p>For this project we decided to use role-based personas.</p>, <DocumentDrivePersonas />] },
        { title: "Team & Governance", components: [<DocumentDriveTeam />, MdGovernance] },
        // { title: "Challenge", components: [MdChallenge] },
        // { title: "Research", components: [MdResearch] },
        // { title: "Solution", components: [MdSolution] },
        // { title: "Final thoughts", components: [MdFinal] }
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
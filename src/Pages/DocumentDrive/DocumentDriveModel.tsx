import { DocumentDriveKpis } from '../../Components/DocumentDriveKpi/DocumentDriveKpi';
import { Kpi } from '../../Components/Kpi/Kpi';
import { ProjectModel } from '../../Utils/ProjectModel';
import MdIntro from './1-DocumentDrive-Intro.md';
import MdBody from './2-DocumentDrive-Body.md';


export const DocumentDriveModel: ProjectModel = {
    title: "Document Platform",
    subTitle:"Document Platform Redesign",
    color:"agile", 
    agileTags:[
            "Scrum",
            "Lean UX"
        ],
    designTags:[
            "UX Management", 
            "UX Design", 
            "User Research"
        ],
    softwareTags:[
            "Azure CLoud", 
            "Kubernetes", 
            "Microservices", 
            "Microfrontend"
        ],
    back:"",
    next:"",
    components:[
        MdIntro,
        <DocumentDriveKpis />,
        // <DocumentDriveGantt />,
        MdBody
    ]
};
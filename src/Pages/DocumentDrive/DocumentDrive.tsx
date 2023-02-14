import { MarkdownContent } from "../../Components/MarkdownContent/HtmlContent";
import { PortfolioProject } from "../../Components/PortfolioProject/PortfolioProject";
import MdIntro from './1-DocumentDrive-Intro.md';
import MdBody from './2-DocumentDrive-Body.md';
import { Kpi } from "../../Components/Kpi/Kpi";
import { Typography } from "../../Components/Typography/Typography";

// gantt chart
// https://www.npmjs.com/package/gantt-task-react

export const DocumentDrive = () => {
    return <PortfolioProject 
                title={"Document Platform"} 
                subTitle={"Document Platform Redesign"} 
                color={"agile"} 
                agileTags={[
                        "Scrum",
                        "Lean UX"
                    ]}
                designTags={[
                        "UX Management", 
                        "UX Design", 
                        "User Research"
                    ]}
                softwareTags={[
                        "Azure CLoud", 
                        "Kubernetes", 
                        "Microservices", 
                        "Microfrontend"
                    ]}
                back={""}
                next={""} 
                components={[
                    MdIntro,
                    <DocumentDriveKpis />,
                    MdBody
                ]}/>
}


export const DocumentDriveKpis = () => {
    return <div className={"w3-row"}>
            <div className="w3-col s12 m12 l4">
                <Kpi 
                            type="design" 
                            kpi="3k"
                            title="Users"
                            subTitle="working on the platform"/>
            </div>
            <div className="w3-col s12 m12 l4">
                <Kpi 
                        type="agile" 
                        fontSize="24px"
                        kpi="600k"
                        title="Documents"
                        subTitle="to migrate form older platform"/>
            </div>
            <div className="w3-col s12 m12 l4">
                <Kpi 
                        type="software" 
                        kpi="25"
                        title="Tb"
                        subTitle="of physical files to migrate"/>

            </div>
        </div>
}
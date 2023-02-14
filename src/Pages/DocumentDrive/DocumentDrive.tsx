import { MarkdownContent } from "../../Components/MarkdownContent/HtmlContent";
import { PortfolioProject } from "../../Components/PortfolioProject/PortfolioProject";
import MdIntro from './1-DocumentDrive-Intro.md';
import MdBody from './2-DocumentDrive-Body.md';
import { Kpi } from "../../Components/Kpi/Kpi";
import { Typography } from "../../Components/Typography/Typography";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

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
                    // <DocumentDriveGantt />,
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
                            subTitle="working on the platform on 12 different professional areas"/>
            </div>
            <div className="w3-col s12 m12 l4">
                <Kpi 
                        type="agile" 
                        fontSize="24px"
                        kpi="600k"
                        title="Documents"
                        subTitle="to make accessible form older platform"/>
            </div>
            <div className="w3-col s12 m12 l4">
                <Kpi 
                        type="software" 
                        kpi="25"
                        title="Tb"
                        subTitle="of physical files to migrate, index and expose via full-text search"/>

            </div>
        </div>
}

export const DocumentDriveGantt = () => {
    let tasks: Task[] = [
        {
          start: new Date(2020, 10, 1),
          end: new Date(2021, 1, 31),
          name: 'Ideation & Discovery',
          id: 'Task 0',
          type:'task',
          progress: 100,
          isDisabled: true,
          styles: { progressColor: '#313131', progressSelectedColor: '#313131' },
        },
        {
          start: new Date(2020, 11, 1),
          end: new Date(2021, 2, 27),
          name: 'Technical Project Preparation',
          id: 'Task 1',
          type:'task',
          progress: 100,
          isDisabled: true,
          styles: { progressColor: '#313131', progressSelectedColor: '#313131' },
        }
    ];
    return <Gantt tasks={tasks} viewMode={ViewMode.Month} listCellWidth=""/>
}
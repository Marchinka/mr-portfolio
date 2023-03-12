import { PortfolioProject } from "../../Components/PortfolioProject/PortfolioProject";
import MdIntro from './1-DocumentDrive-Intro.md';
import MdBody from './2-DocumentDrive-Body.md';
import { Kpi } from "../../Components/Kpi/Kpi";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { useEffect } from "react";
import { ScrollToTop } from "../../Utils/ScrollToTop";
import { DocumentDriveModel } from "./DocumentDriveModel";

// gantt chart
// https://www.npmjs.com/package/gantt-task-react

export const DocumentDrive = () => {
    useEffect(() => {
        ScrollToTop();
    }, [])

    return <PortfolioProject model={DocumentDriveModel}/>
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
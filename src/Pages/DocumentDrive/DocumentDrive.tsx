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
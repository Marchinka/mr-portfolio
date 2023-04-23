import { PortfolioProject } from "../../Components/PortfolioProject/PortfolioProject";
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
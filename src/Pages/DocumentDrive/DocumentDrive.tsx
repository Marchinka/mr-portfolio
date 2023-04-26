import { PortfolioProject } from "../../Components/PortfolioProject/PortfolioProject";
import { useEffect } from "react";
import { ScrollToTop } from "../../Utils/ScrollToTop";
import { DocumentDriveModel } from "./DocumentDriveModel";
import { usePageView } from "../../Utils/Analytics";

// gantt chart
// https://www.npmjs.com/package/gantt-task-react

export const DocumentDrive = () => {
    useEffect(() => {
        ScrollToTop();
    }, [])

    usePageView("/document-drive", "Document Drive");

    return <PortfolioProject model={DocumentDriveModel}/>
}
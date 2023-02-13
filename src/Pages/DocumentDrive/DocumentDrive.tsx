import { MarkdownContent } from "../../Components/MarkdownContent/HtmlContent";
import { PortfolioProject } from "../../Components/PortfolioProject/PortfolioProject";
import Md from './DocumentDrive.md';

export const DocumentDrive = () => {
    return <PortfolioProject 
                mdUrl={Md}
                back={""}
                next={""} 
                title={"Document Platform"} 
                breadcrumbTitle={"Document Platform Redesign"} 
                color={"agile"} />
}
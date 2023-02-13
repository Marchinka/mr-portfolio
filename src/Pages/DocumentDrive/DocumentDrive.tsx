import { MarkdownContent } from "../../Components/MarkdownContent/HtmlContent";
import { PortfolioProject } from "../../Components/PortfolioProject/PortfolioProject";
import Md from './DocumentDrive.md';

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
                mdUrl={Md}
                back={""}
                next={""} />
}
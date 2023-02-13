import { MarkdownContent } from "../MarkdownContent/HtmlContent";
import './PortfolioProject.scss';

export const PortfolioProject = (props: { mdUrl: string}) => {
    return <div className="animate__animated animate__fadeIn page-content embedded-markup">
        <div>
            back to portfolio
        </div>
        <MarkdownContent url={props.mdUrl} />
        <div></div>
    </div>
}



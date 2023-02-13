import { Divider } from "../Divider/Divider";
import { MarkdownContent } from "../MarkdownContent/HtmlContent";
import './PortfolioProject.scss';

export const PortfolioProject = (props: { mdUrl: string}) => {
    return <div className="animate__animated animate__fadeIn page-content embedded-markup">
        <MarkdownContent url={props.mdUrl} />
        {/* <div className="portfolio-footer">
            <button className={`w3-button w3-mr-black`}> Back to Portfolio</button>
            <button className={`w3-button w3-mr-black`}> Next Project</button>
        </div> */}
    </div>
}



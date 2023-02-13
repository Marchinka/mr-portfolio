import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "../Divider/Divider";
import { MarkdownContent } from "../MarkdownContent/HtmlContent";
import './PortfolioProject.scss';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const PortfolioProject = (props: { mdUrl: string}) => {
    return <div className="animate__animated animate__fadeIn page-content embedded-markup">
        <MarkdownContent url={props.mdUrl} />
        <Divider className="portfolio-divider"/>
        <div className="portfolio-footer">
            <button className={`w3-button w3-white w3-border w3-round-large `}>
                <FontAwesomeIcon icon={faAngleLeft} /> Back to Portfolio
            </button>
            <button className={`w3-button w3-mr-black w3-round-large w3-mr-lifted`}> 
                Next Project <FontAwesomeIcon icon={faAngleRight} /> 
            </button>
        </div>
    </div>
}



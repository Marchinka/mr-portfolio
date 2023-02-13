import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "../Divider/Divider";
import { MarkdownContent } from "../MarkdownContent/HtmlContent";
import './PortfolioProject.scss';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Typography } from "../Typography/Typography";
import { Tag } from "../Tag/Tag";

interface Props {
    title: string | React.ReactNode;
    subTitle: string | React.ReactNode;
    color: "software" | "agile" | "design",
    agileTags: string[];
    designTags: string[];
    softwareTags: string[];
    mdUrl: string;
    back: string;
    next: string;
}

export const PortfolioProject = (props: Props) => {
    return <div className="animate__animated animate__fadeIn page-content embedded-markup">
                <div>
                    <Typography type="p" color="black">
                        <Link className={props.color} to={"/"}>Portfolio</Link>&nbsp;
                        <FontAwesomeIcon icon={faAngleRight} className="text light-grey" />&nbsp;
                        {props.subTitle}
                    </Typography>
                </div>
                <Typography type="h2" color={"black"} className={`title`}>
                    {props.title}
                </Typography>
                <div>
                    {props.agileTags.map(tag => <Tag key={tag} label={tag} color="agile"/>)}
                    {props.designTags.map(tag => <Tag key={tag} label={tag} color="design" />)}
                    {props.softwareTags.map(tag => <Tag key={tag} label={tag} color="software" />)}
                </div>
                <br /> 
                <MarkdownContent url={props.mdUrl} />
                <Divider className="portfolio-divider"/>
                <div className="portfolio-footer">
                    <Link className={`w3-button w3-white w3-border w3-round-large `} to={props.back}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Previous Project
                    </Link>
                    <Link className={`w3-button w3-mr-black w3-round-large w3-mr-lifted`} to={props.next}> 
                        Next Project <FontAwesomeIcon icon={faAngleRight} /> 
                    </Link>
                </div>
            </div>
}



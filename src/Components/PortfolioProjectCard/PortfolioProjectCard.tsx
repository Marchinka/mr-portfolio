import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { JsxElement } from "typescript";
import { Typography } from "../Typography/Typography";
import "./PortfolioProjectCard.scss";

interface Props {
    title: string | React.ReactNode;
    subTitle: string | React.ReactNode;
    content: string | React.ReactNode;
    img: React.ReactNode;
    route: string;
    color: "software" | "agile" | "design",
    classname?: string;
}

export const ProjectSection = (props: Props) => {
    return <Link className={`w3-row-padding project-section ${props.classname || ""}`} to={props.route}>
                <Typography type="h3" color="black" className={`title line-${props.color}`}>
                    {props.title}
                </Typography>
                <Typography type="small" color="black" weight="bold" className="sub-title">
                    {props.subTitle}
                </Typography>
                <Typography type="p" color="black" className="content">
                    {props.content}
                </Typography>
                <div className={`link`}>
                    <button className={`w3-button w3-mr-black w3-round w3-mr-lifted`}> 
                        View Project <FontAwesomeIcon icon={faAngleRight} /> 
                    </button>
                </div>
                <div>{props.img}</div>
            </Link>
}
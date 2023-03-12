import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { JsxElement } from "typescript";
import { ProjectModel } from "../../Utils/ProjectModel";
import { Tag } from "../Tag/Tag";
import { Typography } from "../Typography/Typography";
import "./PortfolioProjectCard.scss";

interface Props {
    model: ProjectModel;
    classname: string;
}

export const ProjectSection = (props: Props) => {
    return <Link className={`w3-row-padding project-section ${props.classname || ""}`} to={props.model.route}>

                <div>
                    <Typography type="h3" color="black" className={`title line-${props.model.color}`}>
                    {props.model.title}
                </Typography>
                <Typography type="small" color="black" weight="bold" className="sub-title">
                    {props.model.subTitle}
                </Typography>
                <div>
                    {props.model.agileTags.map(tag => <Tag key={tag} label={tag} color="agile"/>)}
                    {props.model.designTags.map(tag => <Tag key={tag} label={tag} color="design" />)}
                    {props.model.softwareTags.map(tag => <Tag key={tag} label={tag} color="software" />)}
                </div>
                <Typography type="p" color="black" className="content">
                    {props.model.briefText}
                </Typography>
                </div>
                
                <img src={props.model.coverImg} alt="M" style={{width: "100%"}} />
                {/* <div className="link">
                    <button className={`w3-button w3-mr-black w3-round w3-mr-lifted`}> 
                            View Project <FontAwesomeIcon icon={faAngleRight} /> 
                    </button>
                </div> */}
            </Link>
}
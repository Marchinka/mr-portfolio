import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "../Divider/Divider";
import { MarkdownContent } from "../MarkdownContent/HtmlContent";
import './PortfolioProject.scss';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Typography } from "../Typography/Typography";
import { Tag } from "../Tag/Tag";
import { ProjectModel } from "../../Utils/ProjectModel";

type Content = React.ReactNode | string;

interface Props {
    model: ProjectModel;
    className?: string;
}

export const PortfolioHeader = (props: Props) => {
    return <div className={props.className}>
                <div className={`title`}>
                    <Typography type="h2" color={"black"} >
                        {props.model.title}
                    </Typography>
                </div>
                <div className={`subTitle`}>
                    <Typography type="small" color={"muted"} transform="uppercase">
                        {props.model.subTitle}
                    </Typography>
                </div>
           
                {/* <div>
                    {props.model.agileTags.map(tag => <Tag key={tag} label={tag} color="white"/>)}
                    {props.model.designTags.map(tag => <Tag key={tag} label={tag} color="white" />)}
                    {props.model.softwareTags.map(tag => <Tag key={tag} label={tag} color="white" />)}
                </div> */}

            </div>

}

export const PortfolioProject = (props: Props) => {
    return <div className={`animate__animated animate__fadeIn page-content embedded-markup ${props.model.color}`}>
                <div>
                    <Typography type="p" color="black">
                        <Link className={props.model.color} to={"/"}>Portfolio</Link>&nbsp;
                        <FontAwesomeIcon icon={faAngleRight} className="text light-grey" />&nbsp;
                        {props.model.title}
                    </Typography>
                </div>

                <PortfolioHeader {...props} />

                {props.model.paragraphs.map(par => {
                    return  <div key={par.title}>
                                <h4 id={par.title} >{par.title}</h4>
                                {par.components.map((component, index) => {
                                    if (typeof(component) == "string") {
                                        return <MarkdownContent url={component} key={index} />
                                    } else {
                                        return <div key={index}>{component}</div>
                                    }
                                })}
                            </div>
                })}
                <div className="animate__animated animate__fadeIn animate__delay-1s">
                    <Divider className="portfolio-divider"/>
                    <div className="portfolio-footer">
                        <Link className={`w3-button w3-white w3-border w3-round-large `} to={props.model.back}>
                            <FontAwesomeIcon icon={faAngleLeft} /> Previous Project
                        </Link>
                        <Link className={`w3-button w3-mr-black w3-round-large w3-mr-lifted`} to={props.model.next}> 
                            Next Project <FontAwesomeIcon icon={faAngleRight} /> 
                        </Link>
                    </div>
                </div>
            </div>
}



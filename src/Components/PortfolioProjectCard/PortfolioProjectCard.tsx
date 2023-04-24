import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ProjectModel } from "../../Utils/ProjectModel";
import { MarkdownContent } from "../MarkdownContent/HtmlContent";
import { Responsive } from "../Responsive/Responsive";
import { Tag } from "../Tag/Tag";
import { Typography } from "../Typography/Typography";
import "./PortfolioProjectCard.scss";

interface Props {
    model: ProjectModel;
    className: string;
}

export const PortfolioCard = (props: Props) => {
    return <Link className={`portfolio-card ${props.model.color} ${props.className}`}  to={props.model.route}>
               
                <Typography type="h3" color={"black"} className={`title line-${props.model.color}`}>
                    {props.model.title}
                </Typography>
                <Typography type="h5" color={"muted"} className={`subTitle`}>
                    {props.model.subTitle}
                </Typography>
           
                <div>
                    {props.model.agileTags.map(tag => <Tag key={tag} label={tag} color="white"/>)}
                    {props.model.designTags.map(tag => <Tag key={tag} label={tag} color="white" />)}
                    {props.model.softwareTags.map(tag => <Tag key={tag} label={tag} color="white" />)}
                </div>

                <div className="content">
                    {props.model.briefText && <MarkdownContent url={props.model.briefText} />}
                    {!props.model.briefText && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}
                </div>
                
                <Responsive displayOn="mobile">
                    <div className="link">
                        <button className={`w3-button w3-white w3-round w3-mr-lifted`}> 
                                View Project <FontAwesomeIcon icon={faAngleRight} className={`text ${props.model.color}`}/> 
                        </button>
                    </div>
                </Responsive>
                {/* <img src={props.model.coverImg} alt="M" style={{width: "100%"}} /> */}

            </Link>

}

export const ProjectSection = (props: Props) => {
    return <Link className={`w3-row-padding project-section ${props.className || ""}`} to={props.model.route}>

                <div>
                    <Typography type="h3" color="black" className={`title line-${props.model.color}`}>
                        {props.model.title}
                    </Typography>
                    <Typography type="small" color="black" weight="bold" className="sub-title" transform="capitalize">
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
                {/*<Responsive displayOn="mobile">
                    <div className="link">
                        <button className={`w3-button w3-mr-black w3-round w3-mr-lifted`}> 
                                View Project <FontAwesomeIcon icon={faAngleRight} /> 
                        </button>
                    </div>
                </Responsive>*/}
                {/* <br /> */}
                <img src={props.model.coverImg} alt="M" style={{width: "100%"}} />
                
            </Link>
}

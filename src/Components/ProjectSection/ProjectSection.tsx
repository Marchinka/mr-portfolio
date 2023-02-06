import { Link } from "react-router-dom";
import { JsxElement } from "typescript";
import { Typography } from "../Typography/Typography";
import "./ProjectSection.scss";

type Type = "left" | "right";

interface Props {
    title: string | React.ReactNode;
    subTitle: string | React.ReactNode;
    content: string | React.ReactNode;
    img: React.ReactNode;
    route: string;
    color: "software" | "agile" | "design"
}

export const ProjectSection = (props: Props) => {
    return <Link className="w3-row-padding project-section" to={props.route}>
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
                    <button className={`w3-button w3-mr-black`}> View Project</button>
                </div>
                <div>{props.img}</div>
            </Link>
}
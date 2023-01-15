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
}

export const ProjectSection = (props: Props) => {
    return <div className="w3-row-padding project-section">
                <Typography type="h3" color="black">
                    {props.title}
                </Typography>
                <Typography type="small" color="muted">
                    {props.subTitle}
                </Typography>
                <Typography type="p" color="black">
                    {props.content}
                </Typography>
                <div>
                    <Link to="/">
                        <Typography type="p" color="black" weight="bold">
                            View Project <i className="fa fa-regular fa-arrow-right"></i>
                        </Typography>
                    </Link>
                </div>
                <div>{props.img}</div>
            </div>
}
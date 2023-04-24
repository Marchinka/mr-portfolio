import { Typography } from "../Typography/Typography";
import "./RefImage.scss";

type Type = "software" | "agile" | "design";
type IconType = "Tie" | "User" | "Mob";

interface Props { 
    caption: string, 
    img: string
}

export const RefImage = (props: Props) => {
    return  <div className="ref-image">
                <img src={props.img} />
                <div className="caption">
                    <Typography>{props.caption}</Typography>
                </div>
            </div>
}
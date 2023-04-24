import { Typography } from "../Typography/Typography";
import "./Card.scss";

type Type = "software" | "agile" | "design";
type IconType = "Tie" | "User" | "Mob";

interface Props { 
    color: Type;
    children: any;
}

export const Card = (props: Props) => {
    return  <div className={`card card-${props.color}`}>
                {props.children}
            </div>
}
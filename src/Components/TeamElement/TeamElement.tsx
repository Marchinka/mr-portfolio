import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUserAlt, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "../Typography/Typography";
import "./TeamElement.scss";

type Type = "software" | "agile" | "design";
type IconType = "Tie" | "User" | "Mob";

interface Props { 
    type: Type, 
    icon: IconType, 
    number: string,
    title: string, 
    subTitle: string | React.ReactNode 
}

export const TeamElement = (props: Props) => {
    let icon = null;
    
    switch (props.icon) {
        case "Tie":
            icon = faUserTie;
            break;
        case "Mob":
            icon = faUsers;
            break;
        default:
            icon = faUserAlt;
            break;
    }


    return  <div className="team-element">
                <Typography type="h4" className="number">{props.number}</Typography> 
                    <div className="x">X</div>
                <div className={`icon ${props.type}`}>
                    <FontAwesomeIcon icon={icon}/>
                </div>
                <div className="content">

                    <div className="text">
                        <Typography type="span" color="muted" weight="bold">{props.title}</Typography> 
                        <Typography type="small" color="muted">{props.subTitle}</Typography> 
                    </div>
                </div>
            </div>
}
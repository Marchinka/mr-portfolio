import { Typography } from "../Typography/Typography";
import "./Pill.scss";

type Type = "software" | "agile" | "design";
type IconType = "Tie" | "User" | "Mob";

interface Props { 
    type?: Type, 
    // icon: IconType, 
    // number: string,
    title: string, 
    subTitle: string | React.ReactNode 
}

export const Pill = (props: Props) => {
    return  <div className="pill">
                <div>
                </div>
                    <Typography color="black"  type="h4" >{props.title}</Typography>
                <div style={{marginTop: "8px"}}>
                    <Typography>{props.subTitle}</Typography>
                </div>
            </div>
}
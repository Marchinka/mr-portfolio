import { Card } from "../Card/Card";
import { Typography } from "../Typography/Typography";
import "./Persona.scss";

type Type = "software" | "agile" | "design";
type IconType = "Tie" | "User" | "Mob";

interface Props { 
    type?: Type, 
    color: Type;
    name: string, 
    img: string, 
    description: string | React.ReactNode;
    painPoints: string[]; 
    goals: string[]; 
}

export const Persona = (props: Props) => {
    return  <Card color={props.color}>
                <div className={`persona`}>
                    <div>
                        <Typography color="black"  type="span" weight="bold" >{props.name}</Typography>
                    </div>
                    <div className="persona-img">
                        <img src={props.img} />
                    </div>
                    <div className="description">
                        <Typography color="black"  type="p" >{props.description}</Typography>
                    </div>
                    <div>
                        <Typography color="black"  type="span" weight="bold" >Pain Points</Typography>
                        <ul>
                            {props.painPoints.map(x => <li key={x}><Typography color="black"  type="span" >{x}</Typography></li>)}
                        </ul>
                    </div>
                    <br />
                    <div>
                        <Typography color="black" type="span" weight="bold">Needs</Typography>
                        <ul>
                            {props.goals.map(x => <li key={x}><Typography color="black"  type="span" >{x}</Typography></li>)}
                        </ul>
                    </div>
                    
                </div>
            </Card>
}
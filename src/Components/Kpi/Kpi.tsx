import "./Kpi.scss";

type Type = "software" | "agile" | "design";

interface Props { 
    type: Type, 
    title: string, 
    kpi: string,
    fontSize?: string,
    subTitle: string | React.ReactNode 
}

export const Kpi = (props: Props) => {

   

    return  <div className="skill-container">
                <div className={`kpi ${props.type}`} style={props.fontSize == null ? {} : {fontSize: props.fontSize}}>
                    {props.kpi}
                </div>
                <div className="skill-text">
                    <div className="title">{props.title}</div>
                    <div className="sub-title">{props.subTitle}</div>
                </div>
            </div>
}
import "./Skill.scss";

type Type = "software" | "agile" | "design";


export const Skill = (props: { type: Type, kpi: string, title: string, subTitle: string }) => {

   

    return  <div className="skill-container">
                <div className={`kpi ${props.type}`}>
                    {props.kpi}
                </div>
                <div className="skill-text">
                    <div className="title">{props.title}</div>
                    <div className="sub-title">{props.subTitle}</div>
                </div>
            </div>
}
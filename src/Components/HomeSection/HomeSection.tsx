import "./HomeSection.scss";

type Type = "left" | "right";

interface Props {
    type: Type;
    icon: React.ReactNode;
    content: React.ReactNode;
}

export const HomeSection = (props: Props) => {
    return <div className="w3-row s-center">
                {props.type === "left" && <div className="w3-col s12 m12 l4 w3-center">
                    {props.icon}
                </div>}
                <div className="w3-col s12 m12 l8">
                    {props.content}
                </div>
                {props.type === "right" && <div className="w3-col s12 m12 l8 w3-center">
                    {props.icon}
                </div>}
            </div>
}
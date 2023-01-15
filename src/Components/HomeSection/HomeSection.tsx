import { JsxElement } from "typescript";
import "./HomeSection.scss";

type Type = "left" | "right";

interface Props {
    type: Type;
    icon: React.ReactNode;
    content: React.ReactNode;
}

export const HomeSection = (props: Props) => {
    return <div className="w3-row-padding w3-padding-64 ">
                {props.type == "left" && <div className="w3-third w3-center">
                    {props.icon}
                </div>}
                <div className="w3-twothird">
                    {props.content}
                </div>
                {props.type == "right" && <div className="w3-third w3-center">
                    {props.icon}
                </div>}
            </div>
}
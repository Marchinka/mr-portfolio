import "./Tag.scss";

interface Props {
    color?: "software" | "agile" | "design" | "white" | "black";
    label: any;
}

export const Tag = (props: Props) => {
    return <span className={`w3-tag w3-mr-margin mr-tag-${props.color || "black"}`}>
                {props.label}
            </span>
}
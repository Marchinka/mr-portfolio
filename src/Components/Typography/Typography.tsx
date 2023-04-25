import "./Typography.scss";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
type MrColor = "black" | "muted" | "software" | "agile" | "design";
type MrWeight = "normal" | "bold";
type Transform = "uppercase" | "capitalize";

interface Props {
    type?: TypographyElement;
    children?: any;
    label?: string;
    color?: MrColor | string;
    weight?: MrWeight;
    className?: string;
    transform?: Transform;
}

export const Typography = (props: Props) => {
    let colorClass = `text ${props.color || "black"} ${props.weight || "normal"} ${props.className || ""} ${props.transform}`;

    switch (props.type) {
        case "h1":
            return <h1 className={`typography ${colorClass}`}>{props.children || props.label}</h1>    
        case "h2":
            return <h2 className={`typography ${colorClass}`}>{props.children || props.label}</h2>    
        case "h3":
            return <h3 className={`typography ${colorClass}`}>{props.children || props.label}</h3>    
        case "h4":
            return <h4 className={`typography ${colorClass}`}>{props.children || props.label}</h4>    
        case "h5":
            return <h5 className={`typography ${colorClass}`}>{props.children || props.label}</h5>    
        case "h6":
            return <h6 className={`typography ${colorClass}`}>{props.children || props.label}</h6>    
        case "p":
            return <p className={`typography ${colorClass}`}>{props.children || props.label}</p>  
        case "small":
            return <small className={`typography ${colorClass}`}>{props.children || props.label}</small>   
        default:
            return <span className={`typography ${colorClass}`}>{props.children || props.label}</span>    
    }
}
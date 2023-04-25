import "./Responsive.scss";

interface Props {
    displayOn: "desktop" | "tablet" | "mobile";
    children: any;
}

export const Responsive = (props: Props) => {
    let className = "";
    if (props.displayOn == "mobile") {
        className = "w3-hide-large w3-hide-medium";
    }
    if (props.displayOn == "desktop") {
        className = "w3-hide-small";
    }

    return <div className={className}>
                {props.children}
            </div>
}
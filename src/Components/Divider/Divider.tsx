import "./Divider.scss";

export const Divider = (props: {className?: string}) => {
    return <div className={"divider " + (props.className || "")}></div>
}
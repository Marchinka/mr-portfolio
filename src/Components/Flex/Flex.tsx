import "./Flex.scss";

type FlexJustify = "space-between"
type FlexAlign = "center"

export const Flex = (props: { children: any, justify: FlexJustify, align: FlexAlign }) => {
    let className = "mr-flex";

    switch (props.justify) {
        case "space-between":
            className += " justify-space-between"
            break;
        default:
            break;
    }

    switch (props.align) {
        case "center":
            className += " align-center"
            break;
        default:
            break;
    }

    return <div className={className}>{props.children}</div>

}
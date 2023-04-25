import "./Flex.scss";

type FlexJustify = "space-between" | "space-around" | "center";
type FlexAlign = "center" | "flex-start" | "flex-end"

export const Flex = (props: { children: any, justify: FlexJustify, align: FlexAlign, gap?: number }) => {
    let style = {
        display: "flex",
        alignItems: props.align,
        justifyContent: props.justify,
        gap: `${props.gap}px`,
        width: "100%"
    };

    return <div style={style}>{props.children}</div>

}
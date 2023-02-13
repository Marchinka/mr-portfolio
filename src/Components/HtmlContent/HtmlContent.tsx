import DOMPurify from "dompurify";

export const HtmlContent = (props: { html: string }) => {
    const safeHtml = DOMPurify.sanitize(props.html);

    return <div dangerouslySetInnerHTML={{__html: safeHtml}}></div>
}
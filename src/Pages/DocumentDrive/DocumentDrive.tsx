import ReactMarkdown from "react-markdown";
import { HtmlContent } from "../../Components/HtmlContent/HtmlContent";
import "./DocumentDrive.scss";
var introMd = require('./Contents/1_Intro.md');


export const DocumentDrive = () => {
    return <div className="page-content">
        <div>
            back to portfolio
        </div>
        <ReactMarkdown>{introMd}</ReactMarkdown>
        <div></div>
    </div>
}
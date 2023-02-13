import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const MarkdownContent = (props: { url: string }) => {
    let [readable, setReadable] = useState({ md: "" });

    useEffect(() => {
      fetch(props.url)
        .then((res) => res.text())
        .then((md) => {
          setReadable({ md });
        });
    }, []);
  
    return (
      <div>
        <ReactMarkdown children={readable.md} rehypePlugins={[rehypeRaw]} />
      </div>
    );
}
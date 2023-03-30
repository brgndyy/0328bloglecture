"use client";
import classes from "./MarkDownPost.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

type postType = {
  post: string;
};

export default function MarkDownPost({ post }: postType) {
  return (
    <div className={classes.markdown_container}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
        linkTarget="_blank" // Append target _blank to links so they open in new tab/window
        components={{
          code({ node, inline, className, style, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={a11yDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      >
        {post}
      </ReactMarkdown>
    </div>
  );
}

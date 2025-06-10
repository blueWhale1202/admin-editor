import { memo } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
    content: string;
};

export const MarkdownHighlighter = memo(({ content }: Props) => {
    return (
        <Markdown
            components={{
                code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");

                    return !inline && match ? (
                        <SyntaxHighlighter
                            style={vs2015}
                            PreTag="div"
                            language={match[1]}
                            {...props}
                        >
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {content}
        </Markdown>
    );
});

MarkdownHighlighter.displayName = "MarkdownHighlighter";

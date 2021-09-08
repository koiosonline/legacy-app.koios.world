import React from "react";
import MarkdownToJsx from "markdown-to-jsx";

type MarkdownProps = {
  value: string;
};

export const Markdown = (props: MarkdownProps) => {
  return (
    <div className="markdown">
    <MarkdownToJsx options={{ forceBlock: true, wrapper: React.Fragment }}>{props.value}</MarkdownToJsx>
    </div>
  );
};

import React from "react";
import MarkdownToJsx from "markdown-to-jsx";

type MarkdownProps = {
  value: string;
};

const OpenLinkInNewTab = ({ href, children }) => (
  <a href={href} rel="noreferrer" target="_blank">
    {children}
  </a>
);

const markDownToJsxOptions = {
  forceBlock: true,
  wrapper: React.Fragment,
  overrides: {
    a: OpenLinkInNewTab,
  },
};

export const Markdown = (props: MarkdownProps) => {
  return (
    <div className="markdown">
      <MarkdownToJsx options={markDownToJsxOptions}>
        {props.value}
      </MarkdownToJsx>
    </div>
  );
};

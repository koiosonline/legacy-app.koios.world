import MarkdownToJsx from "markdown-to-jsx";

type MarkdownProps = {
  value: string;
};

export const Markdown = (props: MarkdownProps) => {
  return (
    <MarkdownToJsx options={{ forceBlock: true }}>{props.value}</MarkdownToJsx>
  );
};

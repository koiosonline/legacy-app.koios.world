import MarkdownToJsx from "markdown-to-jsx";
import { useEffect, useState } from "react";

export const Markdown = (props) => {
  const file_name = "ledger.md";
  const [post, setPost] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const mdFile = await import(`../articles/blockchain/${file_name}`);
        console.log(mdFile.default)
        const getText =  await fetch(mdFile.default);
        const setText = await getText.text();
        setPost(setText);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  

  return (
    <>
      <MarkdownToJsx>{post}</MarkdownToJsx>
    </>
  );
};

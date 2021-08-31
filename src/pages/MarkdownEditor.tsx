import { useState } from "react";
import { Markdown } from "../components/Markdown";

export const MarkdownEditor = () => {
  const [input, setInput] = useState("");

  return (
    <div className="markdown-editor">
      <h1 className="markdown-editor__title">Markdown editor</h1>
      <section>
        <div>
          <h2>Markdown</h2>
          <textarea onChange={(e) => setInput(e.target.value)} />
        </div>
        <div>
          <h2>Preview</h2>
          <Markdown value={input} />
        </div>
      </section>
    </div>
  );
};

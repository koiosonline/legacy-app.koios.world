import { useState } from "react";
import { Markdown } from "../components/Markdown";

export const MarkdownEditor = () => {
  const [input, setInput] = useState("");

  return (
    <main>
    <div className="markdown-editor">
      <h1 className="markdown-editor__title">Markdown editor</h1>

      <section className="editor-wrapper">
        <div className="editor">
          <h2 className="editor__title">Markdown</h2>
          <textarea className="editor__text-area" onChange={(e) => setInput(e.target.value)} />
        </div>

        <div className="preview">
          <h2 className="preview__title">Preview</h2>
          <Markdown value={input} />
        </div>
      </section>

    </div>
    </main>
  );
};

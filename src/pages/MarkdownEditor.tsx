import { useState } from "react";
import { Markdown } from "../components/Markdown";
import { Header } from "../components/Layout/Header";

export const MarkdownEditor = () => {
  const [input, setInput] = useState("");
  const [fileName, setFileName] = useState("");

  const saveInputAsFile = () => {
    const blob = new Blob([input], { type: "markdown" });
    let downloadLink = document.createElement("a");
    downloadLink.download = fileName + ".md";
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.click();
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="markdown-editor container">
          <div className="metadata">
            <h2 className="metadata__label">Document name</h2>
            <div className="metadata__input-container">
              <input
                className="metadata__input"
                type="text"
                placeholder="What's the title of the document?"
                onChange={(e) => setFileName(e.target.value)}
              />
              <button className="metadata__submit" onClick={() => saveInputAsFile()}>Save file</button>
            </div>
          </div>

          <section className="editor">
            <div className="editor__window">
              <h2 className="editor__title">Markdown</h2>
              <textarea
                className="editor__text-area"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write here your markdown to see a live preview of how it will look like on app.koios.world"
              />
            </div>

            <div className="editor__window preview">
              <h2 className="editor__title">Preview</h2>
              <Markdown value={input} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

import { useState } from 'react';
import { Markdown } from '../../components/Markdown';
import MDEditor, { commands } from '@uiw/react-md-editor';
import { Icon } from '../../components/Util/Icon';

const title3 = {
  name: 'title3',
  keyCommand: 'title3',
  buttonProps: { 'aria-label': 'Insert title3' },
  icon: (
    <svg width="12" height="12" viewBox="0 0 520 520">
      <path fill="currentColor" d="M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z" />
    </svg>
  ),
  execute: (state, api) => {
    let modifyText = `### ${state.selectedText}\n`;
    if (!state.selectedText) {
      modifyText = `### `;
    }
    api.replaceSelection(modifyText);
  },
};

export const ContentEditor = () => {
  const [input, setInput] = useState('');
  const [fileName, setFileName] = useState('');

  const saveInputAsFile = () => {
    const blob = new Blob([input], { type: 'markdown' });
    const downloadLink = document.createElement('a');
    downloadLink.download = fileName + '.md';
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.click();
  };

  return (
    <>
      {/* <Header /> */}
      <main className="main">
        <div className="markdown-editor container">
          {/* <div className="metadata">
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
          </div> */}

          <section className="editor">
            <div className="editor__window">
              {/* <h2 className="editor__title">Markdown</h2> */}
              {/* <textarea
                className="editor__text-area"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write here your markdown to see a live preview of how it will look like on app.koios.world"
              /> */}
              <MDEditor
                value={input}
                onChange={setInput}
                commands={[
                  // text manipulation commands
                  commands.group(
                    [
                      commands.title1,
                      commands.title2,
                      commands.title3,
                      commands.title4,
                      commands.title5,
                      commands.title6,
                    ],
                    {
                      name: 'title',
                      groupName: 'title',
                      buttonProps: { 'aria-label': 'Insert title' },
                      icon: (<Icon type='heading' />)
                    }
                  ),
                  commands.bold,
                  commands.italic,
                  commands.strikethrough,
                  commands.hr,
                  commands.divider,
                  // insertion tools
                  commands.link,
                  commands.quote,
                  commands.codeBlock,
                  commands.image,
                  commands.divider,
                  // list creation
                  commands.unorderedListCommand,
                  commands.orderedListCommand,
                  commands.checkedListCommand
                ]}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

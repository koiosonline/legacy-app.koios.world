import { useEffect, useState } from 'react';
import { Markdown } from '../../components/Markdown';
import TermsOfUse from './data/terms-of-use.md';

export const Terms = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(TermsOfUse)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className='container'>
      <Markdown value={content} />
    </div>
  );
};

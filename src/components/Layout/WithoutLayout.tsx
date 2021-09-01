import React from 'react';

export const WithoutLayout: React.FC = (props) => {
  return (
      <main className="main">
        {props.children}
      </main>
  );
};
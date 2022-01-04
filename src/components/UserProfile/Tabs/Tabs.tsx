import React, { ReactElement, useState } from 'react';
import { TabButton } from './TabButton';

type Props = {
  children: ReactElement[];
};

export const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='tabs'>
      <ul className='tabs-options'>
        {children.map((item, index) => (
          <TabButton
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

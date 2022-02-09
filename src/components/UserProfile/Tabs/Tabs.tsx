import React, { ReactElement, useEffect, useState } from 'react';
import { TabButton } from './TabButton';
import { useLocation } from 'react-router-dom';

type TabsProps = {
  children: ReactElement[];
};

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const searchQuery = useLocation().search;
  const queryStringTab = new URLSearchParams(searchQuery).get('tab');
  const indexOfTab = children.findIndex(activeTab => activeTab.props.title.toLowerCase() === queryStringTab);
  const getCurrentTab = queryStringTab ? indexOfTab : 0;
  const [selectedTab, setSelectedTab] = useState(getCurrentTab);
  
  useEffect(() => {
    setSelectedTab(getCurrentTab);
  }, [getCurrentTab]);

  return (
    <div className="tabs">
      <ul className="tabs-options">
        {children.map((item, index) => (
          <TabButton
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            isActive={selectedTab === index}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

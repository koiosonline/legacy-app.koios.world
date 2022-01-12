import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

type TabButtonProps = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive: boolean;
};

export const TabButton: React.FC<TabButtonProps> = ({ title, index, setSelectedTab, isActive }) => {
  const history = useHistory();

  const activateTab = useCallback(() => {
    setSelectedTab(index);
    history.push({search: `tab=${title.toLowerCase()}`});
  }, [setSelectedTab, index, history, title]);


  return (
    <li className={`tabs-title ${isActive ? 'tabs-title--active' : ''}`} onClick={activateTab}>{title}</li>
  );
};

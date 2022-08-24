import { useState } from 'react';
import { Icon } from './Util/Icon';

type ReadMoreProps = {
  className?: string;
};

export const ReadMore: React.FC<ReadMoreProps> = ({ children, className }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const text = children as string;
  const slicedText = text.slice(0, 150);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className={`read-more ${className ? className : ''}`}>
      {isReadMore ? slicedText : text}

      <span onClick={toggleReadMore} className={`read-more--toggle ${className ? `${className}--toggle` : ''}`}>
        {isReadMore 
        ? (<>Read more <Icon type="angle-down" /></>) 
        : (<>Show less <Icon type="angle-up" /></>)
        }
      </span>
    </p>
  );
};

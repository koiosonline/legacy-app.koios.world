import { useState } from 'react';
import { Icon } from './Util/Icon';

type ReadMoreProps = {
  children: string;
  className?: string;
  maxCharacters?: number;
};

export const ReadMore = (props: ReadMoreProps) => {
  const maxCharacters = props.maxCharacters ? props.maxCharacters : 150;
  const isLongerThanMaxCharacters = props.children.length > maxCharacters;
  const text = props.children;
  const slicedText = props.children.slice(0, maxCharacters);
  const [isReadMore, setIsReadMore] = useState<boolean>(isLongerThanMaxCharacters);

  const toggleIsReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className={`read-more ${props.className ? props.className : ''}`}>
      {isReadMore ? slicedText : text}

      {isLongerThanMaxCharacters && (
        <span
          onClick={toggleIsReadMore}
          className={`read-more--toggle ${props.className ? `${props.className}--toggle` : ''}`}
        >
          {isReadMore ? (
            <>
              Read more <Icon type="angle-down" />
            </>
          ) : (
            <>
              Show less <Icon type="angle-up" />
            </>
          )}
        </span>
      )}
    </p>
  );
};

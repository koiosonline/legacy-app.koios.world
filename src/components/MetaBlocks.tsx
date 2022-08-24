import { AddTokenToWallet } from './Web3/AddTokenToWallet';
import titanCoin from '../assets/images/logos/koios-circle.svg';
import { useCoinContract } from '../Web3/hooks/useTitanCoinContract';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type MetaBlocksProps = {
  balance?: boolean;
};

type SingleMetaBlockProps = {
  title?: string;
  image?: {
    src: string;
    alt: string;
  };
  content: string | number;
};

const SingleMetaBlock = ({ title, image, content }: SingleMetaBlockProps) => {
  return (
    <li className="metablock" onClick={() => window.ethereum && AddTokenToWallet(window.ethereum)}>
      {title && <h4 className="metablock__title">{title}</h4>}
      {image && <img className="metablock__img" src={image.src} alt={image.alt} />}
      <p className="metablock__content">{content}</p>
    </li>
  );
};

export const MetaBlocks = (props: MetaBlocksProps) => {
  const { getUserBalance } = useCoinContract();
  const { userId } = useParams<{ userId: string }>();
  const [titanCoinBalance, setTitanCoinBalance] = useState<number>(0);

  useEffect(() => {
    const retrieveTitanCoinBalance = async () => {
      setTitanCoinBalance(await getUserBalance(userId));
    };
    retrieveTitanCoinBalance();
  }, [userId, getUserBalance]);

  if (!props.balance) {
    return null;
  }

  return (
    <ul className="metablocks">
      {props.balance && <SingleMetaBlock image={{ src: titanCoin, alt: 'Titan coin' }} content={titanCoinBalance} />}
    </ul>
  );
};

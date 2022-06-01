import { NFTProps } from '../types/NFTProps';
import { CardNFT, CardSize } from './Cards/CardNFT';

type NFTCardsProps = {
  nfts: NFTProps[];
  onClick?: (item: NFTProps) => void;
};

export const NFTCards = (props: NFTCardsProps) => {
  return (
    <>
      {props.nfts.map((item, index) => {
        return (
          <li className="nft-tab__list-item" key={item.name + index}>
            <CardNFT metadata={item} size={CardSize.SMALL} onClick={() => props.onClick(item)} />
          </li>
        );
      })}
    </>
  );
};

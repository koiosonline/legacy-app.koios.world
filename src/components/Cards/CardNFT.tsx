import { NFTProps } from '../../types/NFTProps';
import { noop } from '../Util/noop';

export enum CardSize {
  SMALL = 'small',
  REGULAR = 'regular',
}

type NFTCardProps = {
  metadata: NFTProps;
  size?: CardSize;
  onClick?: (e) => void;
};

export const CardNFT = ({ metadata, size, onClick }: NFTCardProps) => {
  const regularCardSize = size === CardSize.REGULAR;
  
  return (
    <div className="card card--nft" onClick={e => onClick ? onClick(e) : noop()}>
      <img className="card__img" src={metadata.image} alt="NFT Image" />
      <h3 className={`card__name ${!regularCardSize ? 'card__name--ellipsis' : ''}`}>{metadata.name}</h3>
      <span className="card__metatag">{metadata.value}</span>

      {regularCardSize && <p className="card__description">{metadata.description}</p>}
    </div>
  );
};

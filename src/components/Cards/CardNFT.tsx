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
  return (
    <div className="card card--nft" onClick={e => onClick ? onClick(e) : noop()}>
      <img className="card__img" src={metadata.image} alt="" />
      <h3 className="card__title">{metadata.name}</h3>
      <span className="card__metatag">{metadata.value}</span>

      {size === CardSize.REGULAR && <p className="card__description">{metadata.description}</p>}
    </div>
  );
};

import { NFTProps } from '../../types/NFTProps';
import { Icon } from '../Util/Icon';
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
  const totalMetatags = size === CardSize.SMALL ? 3 : metadata.attributes.length;

  return (
    <div className="card card--nft" onClick={(e) => (onClick ? onClick(e) : noop())}>
      <img className="card__img" src={metadata.image} alt="NFT Image" />

      <div className='card__heading'>
        <h3 className={`card__name ${!regularCardSize ? 'card__name--ellipsis' : ''}`}>{metadata.name}</h3>

        {regularCardSize && (
          <a
            className="card__icon-link"
            href={`https://testnets.opensea.io/assets/rinkeby/0x762e5600ddeb2e60fd247d4d66613c8afaf6968a/${metadata.tokenId}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon type="opensea" />
          </a>
        )}
      </div>

      <ul className="card__metatags">
        {metadata.attributes.slice(0, totalMetatags).map((attribute, index) => (
          <li className="card__metatags--tag" key={`${attribute}${index}`}>
            {attribute.value}
          </li>
        ))}
      </ul>

      {regularCardSize && <p className="card__description">{metadata.description}</p>}
    </div>
  );
};

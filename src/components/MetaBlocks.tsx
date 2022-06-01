import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import titanCoin from '../assets/images/placeholders/placeholder-titan-token.png';

export const MetaBlocks = () => {
  const { userAccount } = useContext(UserContext);

  return (
    <ul className="metablocks">
      <li className="metablock">
        <h4 className="metablock__title">Total Titan-tokens</h4>
        <img
          className="metablock__img"
          src={titanCoin}
          alt="Token icon"
        />
        <p className="metablock__balance">{userAccount?.userBalance}</p>
      </li>

      <li className="metablock">
        <h4 className="metablock__title">Wallet</h4>
        <p>{userAccount?.publicKeyFormatted}</p>
      </li>
    </ul>
  );
};

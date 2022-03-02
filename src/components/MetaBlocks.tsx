import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

export const MetaBlocks = () => {
  const { userAccount } = useContext(UserContext);

  return (
    <ul className="metablocks">
      <li className="metablock">
        <h4 className="metablock__title">Total Titan-tokens</h4>
        <img
          className="metablock__img"
          src={userAccount?.tokenBalance.tokenIcon}
          alt="Token icon"
        />
        <p className="metablock__balance">{userAccount?.tokenBalance.balance}</p>
      </li>

      <li className="metablock">
        <h4 className="metablock__title">Wallet</h4>
        <p>{userAccount?.publicKeyFormatted}</p>
      </li>
    </ul>
  );
};

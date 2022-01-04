import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { UserAccountContext } from "../types/UserProfile/UserAccount";

export const MetaBlocks = () => {
  const { userAccount } = useContext<UserAccountContext>(UserContext);

  return (
    <ul className="metablocks">
      <li className="metablock">
        <h4 className="metablock__title">Total Titan-tokens</h4>
        <div>
          <img src={userAccount.tokenBalance.tokenIcon} alt="Token icon" />
          <p>{userAccount.tokenBalance.balance}</p>
        </div>
      </li>
      <li className="metablock">
        <h4 className="metablock__title">Wallet</h4>
        <p className="metablock__content">{userAccount.publicKeyFormatted}</p>
      </li>
      <li className="metablock">
        <h4 className="metablock__title">Current network</h4>
      </li>
    </ul>
  );
};

import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { UserContext } from '../../Context/UserContext';
import { mintToken } from '../Web3/mintToken';

export const CardMint = () => {
  const { web3 } = useContext(AuthContext);
  const { userAccount } = useContext(UserContext);
  const [ isMinting, setIsMinting ] = useState<boolean>(false);

  return (
    <div className="card card-mint">
      <h2 className="card-mint__title">Mint your new NFT</h2>
      <button className="btn" onClick={() => mintToken(web3, userAccount.publicKey, setIsMinting)}>
        {isMinting ? "Currently minting" : "Mint"}
      </button>
    </div>
  );
};

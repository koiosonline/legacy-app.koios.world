import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { UserContext } from '../../Context/UserContext';
import { mintToken } from '../Web3/mintToken';
import placeholderNFT from '../../assets/images/placeholders/placeholder-titan-nft.png';
import { Link } from 'react-router-dom';
import titanTokenPlaceholder from '../../assets/images/placeholders/placeholder-titan-token.png';
import { useNFTs } from '../UserProfile/Hooks/useNFTs';

export const CardMint = () => {
  const { getNFTs } = useNFTs();
  const { web3 } = useContext(AuthContext);
  const { userAccount } = useContext(UserContext);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [transactionHash, setTransactionHash] = useState<string>('n/a');

  return (
    <div className="card card--mint">
      <h2 className="card__title">Titan mint</h2>

      <div className="card__product-container">
        <img className="card__img card__product-img" src={placeholderNFT} alt="NFT Image placeholder" />
        <div className="card__product-header">
          <h3 className="card__product-title">Koios Titan</h3>
          <h3 className="card__product-token-id">#unrevealed</h3>
        </div>
      </div>

      <div className="card__summary">
        <p className="card__summary-key">Mint price</p>
        <span className="card__summary-value">
          1 <img className="card__summary-token-icon" src={titanTokenPlaceholder} alt="Titan-token" />
        </span>
      </div>

      <div className="card__summary">
        <p className="card__summary-key">You receive</p>
        <span className="card__summary-value">1 Titan NFT</span>
      </div>

      <div className="card__summary">
        <p className="card__summary-key">Transaction hash</p>
        <span className="card__summary-value">{transactionHash}</span>
      </div>

      <button
        className="btn btn--rounded btn--purple"
        onClick={() => mintToken(web3, userAccount.publicKey, setIsMinting, setTransactionHash, getNFTs)}
      >
        {isMinting ? 'Minting...' : 'Mint Titan'}
      </button>

      <span className="card__disclaimer">
        Please ensure you <Link to="">understand the risks</Link> before minting.
      </span>
    </div>
  );
};

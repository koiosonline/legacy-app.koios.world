import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { UserContext } from '../../Context/UserContext';
import { mintToken } from '../Web3/mintToken';
import placeholderNFT from '../../assets/images/placeholders/placeholder-titan.png';
import titanTokenPlaceholder from '../../assets/images/placeholders/placeholder-titan-token.png';
import { useNFTs } from '../UserProfile/Hooks/useNFTs';
import { noop } from '../Util/noop';

export const CardMint = ({ insufficientLiquidity, reachedMintLimit }) => {
  const { getNFTs } = useNFTs();
  const { web3 } = useContext(AuthContext);
  const { userAccount } = useContext(UserContext);
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [mintStatus, setMintStatus] = useState<string>('Mint Titan');
  const [transactionHash, setTransactionHash] = useState<string>('n/a');
  const isDisabled = insufficientLiquidity || reachedMintLimit;
  const hasTransactionHash = transactionHash !== 'n/a';

  useEffect(() => {
    if (isMinting) {
      return setMintStatus('Minting...');
    }
    if (reachedMintLimit) {
      return setMintStatus('You reached max number of Titans');
    }
    if (insufficientLiquidity) {
      return setMintStatus('Insufficient liquidity');
    } else {
      return setMintStatus('Mint Titan');
    }
  }, [insufficientLiquidity, isMinting, reachedMintLimit]);

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
        {!hasTransactionHash ? (
          <span className="card__summary-value hash"> {transactionHash}</span>
        ) : (
          <a
            className="card__summary-value hash"
            href={`https://etherscan.io/tx/${transactionHash}`}
            target="_blank"
            rel="noreferrer"
          >
            {transactionHash}
          </a>
        )}
      </div>

      <button
        className={`btn btn--rounded ${isDisabled ? 'btn-disabled' : 'btn--purple'}`}
        disabled={isMinting}
        onClick={
          !isDisabled ? () => mintToken(web3, userAccount.publicKey, setIsMinting, setTransactionHash, getNFTs) : noop
        }
      >
        {mintStatus}
      </button>

      <span className="card__disclaimer">
        Please ensure you{' '}
        <a href="https://wiki.koios.world/important-info/disclaimers" target="_blank" rel="noreferrer">
          understand the risks
        </a>{' '}
        before minting.
      </span>
    </div>
  );
};

import React, { useContext } from 'react';
import { useState } from 'react';
import { NFTProps } from '../../../types/NFTProps';
import { CardMint } from '../../Cards/CardMint';
import { CardNFT, CardSize } from '../../Cards/CardNFT';
import { CardPlaceholderNFT } from '../../Cards/CardPlaceholderNFT';
import { Modal } from '../../Modal';
import { NFTCards } from '../../NFTCards';
import { useNFTs } from '../Hooks/useNFTs';
import { useUserInfo } from '../Hooks/useUserInfo';
// import titanTokenContractABI from '../../../contracts/rinkeby/TokenTitanContractABIRinkeby';
// import titanTokenContractABI from '../../../contracts/rinkeby/token-titan-contract-abi-rinkeby.json';
import titanTokenContractABI from '../../../contracts/polygon/token-titan-contract-abi-polygon.json';
import { UserContext } from '../../../Context/UserContext';

type NFTTabProps = {
  title: string;
};

export const NFTTab: React.FC<NFTTabProps> = () => {
  const { nftsQuery } = useNFTs();
  const { getUserBalance } = useUserInfo();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedNFT, setClickedNFT] = useState<NFTProps>();
  const [titanTokenBalance, setTitanTokenBalance] = useState<number>(0);
  const titanTokenContractAddress = process.env.REACT_APP_TITAN_TOKEN_CONTRACT_ADDRESS_POLYGON;
  const { userAccount } = useContext(UserContext);
  const reachedMintLimit = nftsQuery.data?.length >= 2;
  const insufficientLiquidity = titanTokenBalance < 1;
  const totalPlaceholders = 4;

  (async () => {
    const titanBalance = await getUserBalance(titanTokenContractABI, titanTokenContractAddress, userAccount.publicKey);
    setTitanTokenBalance(titanBalance);
  })();

  const modalState = (item?: NFTProps) => {
    if (item) {
      setClickedNFT(item);
    }
    setIsModalOpen(!isModalOpen);
  };

  if (nftsQuery.status === 'loading') {
    return (
      <ul className="nft-tab__list">
        {Array.from({ length: totalPlaceholders }, (_, i) => (
          <CardPlaceholderNFT key={i} />
        ))}
      </ul>
    );
  }

  if (nftsQuery.error === 'error') {
    return <p>Couldn't load NFTs</p>;
  }

  return (
    <>
      <div className="nft-tab">
        <ul className="nft-tab__list">
          {nftsQuery.data && (
            <>
              <NFTCards nfts={nftsQuery.data} onClick={(item: NFTProps) => modalState(item)} />
            </>
          )}
          <CardMint insufficientLiquidity={insufficientLiquidity} reachedMintLimit={reachedMintLimit} />
        </ul>
      </div>

      {isModalOpen && (
        <Modal modalState={modalState}>
          <CardNFT metadata={clickedNFT} size={CardSize.REGULAR} />
        </Modal>
      )}
    </>
  );
};

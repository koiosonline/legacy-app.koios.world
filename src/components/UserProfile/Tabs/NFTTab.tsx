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
import titanTokenContractABI from '../../../contracts/TitanContractABI';
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
  const titanTokenContractAddress = process.env.REACT_APP_TITAN_TOKEN_CONTRACT_ADDRESS_RINKEBY;
  const { userAccount } = useContext(UserContext);


  const totalPlaceholders = 4;


  (async () => {
    const titanBalance = await getUserBalance(titanTokenContractABI, titanTokenContractAddress, userAccount.publicKey);
    setTitanTokenBalance(titanBalance);
  })();

  console.log(titanTokenBalance);


  const modalState = (item?: NFTProps) => {
    if (item) {
      setClickedNFT(item);
    }
    setIsModalOpen(!isModalOpen);
  };

  if (nftsQuery.status === 'loading') {
    // key plaatsen
    return <ul className="nft-tab__list">{Array(totalPlaceholders).fill(<CardPlaceholderNFT />)}</ul>;
  }

  if (nftsQuery.error === 'error') {
    return <p>error!</p>;
  }

  return (
    <>
      <div className="nft-tab">
        <ul className="nft-tab__list">
          <NFTCards nfts={nftsQuery.data} onClick={(item: NFTProps) => modalState(item)} />
          <CardMint />
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

import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NFTProps } from '../../../types/NFTProps';
import { CardNFT, CardSize } from '../../Cards/CardNFT';
import { CardPlaceholderNFT } from '../../Cards/CardPlaceholderNFT';
import { Modal } from '../../Modal';
import { NFTCards } from '../../NFTCards';
import { Alert } from '../../Util/Alert';
import { useNFTs } from '../Hooks/useNFTs';

type NFTTabProps = {
  title: string;
};

export const NFTTab: React.FC<NFTTabProps> = () => {
  const { nftsQuery } = useNFTs();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedNFT, setClickedNFT] = useState<NFTProps>();
  const hasNfts = nftsQuery.data?.length > 0;
  const totalPlaceholders = 4;
  const { userId } = useParams<{ userId: string }>();

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
    return <Alert type="error" >Couldn't load items</Alert>;
  }

  if (!hasNfts || !userId) {
    return <Alert type="info" >No items to display</Alert>;
  }

  return (
    <>
      <div className="nft-tab">
        {nftsQuery.data && hasNfts && (
          <ul className="nft-tab__list">
            <NFTCards nfts={nftsQuery.data} onClick={(item: NFTProps) => modalState(item)} />
          </ul>
        )}
      </div>

      {isModalOpen && (
        <Modal modalState={modalState}>
          <CardNFT metadata={clickedNFT} size={CardSize.REGULAR} />
        </Modal>
      )}
    </>
  );
};

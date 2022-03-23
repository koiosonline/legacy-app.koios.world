import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { getNFTs } from '../../../api/getNFTs';
import { UserContext } from '../../../Context/UserContext';
import { NFTProps } from '../../../types/NFTProps';
import { CardMint } from '../../Cards/CardMint';
import { CardNFT, CardSize } from '../../Cards/CardNFT';
import { Modal } from '../../Modal';
import { NFTCards } from '../../NFTCards';

type NFTTabProps = {
  title: string;
};

export const NFTTab: React.FC<NFTTabProps> = () => {
  const { userAccount } = useContext(UserContext);
  const { data, status } = useQuery('nfts', () => getNFTs(userAccount.publicKey));
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedNFT, setClickedNFT] = useState<NFTProps>();

  const modalState = (item?: NFTProps) => {
    if (item) {
      setClickedNFT(item);
    }
    setIsModalOpen(!isModalOpen);
  };

  if (status === 'loading') {
    return <p>loading...</p>;
  }

  if (status === 'error') {
    return <p>error!</p>;
  }

  return (
    <>
      <div className="nft-tab">
        <ul className="nft-tab__list">
          <NFTCards nfts={data} onClick={(item: NFTProps) => modalState(item)} />
          <CardMint />
          <CardMint />

          <CardMint />
          <CardMint />
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

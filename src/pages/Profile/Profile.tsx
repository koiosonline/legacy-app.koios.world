import { useState } from "react";
import { Modal } from "../../components/Modal";
import { WalletSetupModal } from "./WalletSetupModal";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalState = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className={"profile"}>
      <h1>Your personal galaxy</h1>
      <p>Please connect your wallet to earn Titan-tokens and grow a collection of NFT’s within the world of Koios.</p>
      <div>
        <button onClick={modalState}>Set up a wallet</button>
        {isModalOpen && (
          <Modal modalState={modalState}>
            <WalletSetupModal />
          </Modal>
        )}
        <button>Connect wallet</button>
      </div>
    </div>
  );
};

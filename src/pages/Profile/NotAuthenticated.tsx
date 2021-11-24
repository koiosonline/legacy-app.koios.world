import { useState } from "react";
import { Modal } from "../../components/Modal";
import { WalletSetupModal } from "./WalletSetupModal";
import { useWeb3 } from "../../components/Web3/useWeb3";

export const NotAuthenticated = () => {
  const { connectWallet } = useWeb3();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalState = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div>
      <h1>Your personal galaxy</h1>
      <p>Please connect your wallet to earn Titan-tokens and grow a collection of NFT’s within the world of Koios.</p>
      <div>
        <button onClick={modalState}>Set up a wallet</button>
        {isModalOpen && (
          <Modal modalState={modalState}>
            <WalletSetupModal />
          </Modal>
        )}
        {/* <button onClick={() => authenticate()}>Connect wallet</button>
        {isAuthenticating && <div>loading</div>}
        {authError && <div>{authError.message}</div>} */}
        <button onClick={() => connectWallet()}>Connect wallet</button>
      </div>
    </div>
  );
};

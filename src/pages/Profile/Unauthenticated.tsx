import { useContext, useState } from 'react';
import { Modal } from '../../components/Modal';
import { ModalWalletSetup } from './ModalWalletSetup';
import { useWeb3 } from '../../components/Web3/useWeb3';
import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { AuthContext } from '../../Context/AuthContext';
import { Icon } from '../../components/Util/Icon';

export const Unauthenticated = () => {
  const { connectWallet } = useWeb3();
  const { isAuthenticating, authError } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const contactLink = 'https://twitter.com/KoiosDAO';

  const modalState = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="unauthenticated container">
        <ProfileBanner />

        <div className="unauthenticated__content-wrapper">
          <h1 className="unauthenticated__title">You haven't setup your profile yet!</h1>

          <p className="unauthenticated__description">
            Please connect your wallet to track your progress, earn Titan-tokens while learning and grow a collection of
            NFT’s within the universe of Koios.
          </p>

          <div className="unauthenticated__c2a">
            <button onClick={() => connectWallet()} className="btn btn-gradient btn--fs-16">
              {isAuthenticating && !authError && <Icon type="spinner" />}
              Connect wallet
            </button>
            or
            <button onClick={modalState} className="btn btn-link btn--fs-16">
              create a wallet
            </button>
          </div>

          {authError && (
            <div className="unauthenticated__error-msg">
              Hey Titan! We're unable to connect your wallet. Please try again or&nbsp;
              <a href={contactLink} target="_blank" rel="noreferrer">
                get in touch with us.
              </a>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <Modal modalState={modalState}>
          <ModalWalletSetup />
        </Modal>
      )}
    </>
  );
};

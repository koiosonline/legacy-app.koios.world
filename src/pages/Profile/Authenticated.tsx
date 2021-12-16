import { useWeb3 } from '../../components/Web3/useWeb3';
import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { UserAccountContext } from '../../types/UserProfile/UserAccount';

export const Authenticated = () => {
  const { disconnectWallet } = useWeb3();
  const { userAccount } = useContext<UserAccountContext>(UserContext);

  return (
    <div className='authenticated container'>
      <ProfileBanner
        userName={userAccount.name}
        backgroundCover={userAccount.profileBanner}
        discordProfile={userAccount.discordProfile}
      />
      <div>welcome</div>
      <button onClick={() => disconnectWallet()}>log out</button>
      {console.log('test')}
    </div>
  );
};

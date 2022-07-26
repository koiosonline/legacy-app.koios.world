import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { OverviewTab } from '../../components/UserProfile/Tabs/OverviewTab';
import { NFTTab } from '../../components/UserProfile/Tabs/NFTTab';
import { SettingsTab } from '../../components/UserProfile/Tabs/SettingsTab';
import { Tabs } from '../../components/UserProfile/Tabs/Tabs';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export const Profile = () => {
  const { userAccount } = useContext(UserContext);
  const { address } = useAccount();

  return (
    <div className="authenticated container">
      <ProfileBanner discordProfile={userAccount?.discordProfile} />

      {/* {isMobile ? (
        <>
          <ProfileInfo
            walletAddress={userAccount?.publicKeyFormatted}
            userBalance={userAccount?.userBalance}
            discordUsername={userAccount?.discordProfile?.discordHandle}
          />
        </>
      ) : (
        <MetaBlocks />
      )} */}

      <div className="authenticated__connect">
        <ConnectButton />
      </div>

      {address && (
        <Tabs>
          <OverviewTab title="Overview" />
          <NFTTab title="NFTs" />
          <SettingsTab title="Settings" />
        </Tabs>
      )}
    </div>
  );
};

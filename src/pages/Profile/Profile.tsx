import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { OverviewTab } from '../../components/UserProfile/Tabs/OverviewTab';
import { NFTTab } from '../../components/UserProfile/Tabs/NFTTab';
import { SettingsTab } from '../../components/UserProfile/Tabs/SettingsTab';
import { Tabs } from '../../components/UserProfile/Tabs/Tabs';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MetaBlocks } from '../../components/MetaBlocks';

export const Profile = () => {
  const { userAccount } = useContext(UserContext);

  return (
    <div className="my-profile container">
      <ProfileBanner discordProfile={userAccount?.discordProfile} />

      <div className="my-profile__meta">
        <MetaBlocks balance />
        <ConnectButton />
      </div>

      <Tabs>
        <OverviewTab title="Overview" />
        <NFTTab title="NFTs" />
        <SettingsTab title="Settings" />
      </Tabs>
    </div>
  );
};

import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { OverviewTab } from '../../components/UserProfile/Tabs/OverviewTab';
import { NFTTab } from '../../components/UserProfile/Tabs/NFTTab';
import { SettingsTab } from '../../components/UserProfile/Tabs/SettingsTab';
import { Tabs } from '../../components/UserProfile/Tabs/Tabs';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MetaBlocks } from '../../components/MetaBlocks';
import { useAccount } from 'wagmi';

export const Profile = () => {
  const { address } = useAccount();

  return (
    <div className="my-profile container">
      <ProfileBanner />

      <div className="my-profile__meta">
        {address && <MetaBlocks balance />}
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

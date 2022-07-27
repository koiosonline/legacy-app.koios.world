import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { OverviewTab } from '../../components/UserProfile/Tabs/OverviewTab';
import { NFTTab } from '../../components/UserProfile/Tabs/NFTTab';
import { SettingsTab } from '../../components/UserProfile/Tabs/SettingsTab';
import { Tabs } from '../../components/UserProfile/Tabs/Tabs';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { MetaBlocks } from '../../components/MetaBlocks';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { MappedDiscordProfile } from '../../types/UserProfile/DiscordProfile';
import { getDiscordProfile } from '../../api/Api';
import { mapDiscordProfileData } from '../../components/UserProfile/mapUserData';

export const Profile = () => {
  const { address } = useAccount();
  const [discordProfile, setDiscordProfile] = useState<MappedDiscordProfile>();

  useEffect(() => {
    const retrieveDiscordProfile = async () => {
      const discordUsername = localStorage.getItem('discordUsername') === undefined ? '' : localStorage.getItem('discordUsername');
      const discordProfile = await getDiscordProfile(discordUsername);
      const mappedDiscordProfile = mapDiscordProfileData(discordUsername, discordProfile);
      setDiscordProfile(mappedDiscordProfile);
    };
    retrieveDiscordProfile();
  }, []);

  return (
    <div className="my-profile container">
      <ProfileBanner discordProfile={discordProfile} />

      <div className="my-profile__meta">
        {address && <MetaBlocks balance />}
        <ConnectButton />
      </div>

      <Tabs>
        <OverviewTab title="Overview" discordProfile={discordProfile} />
        <NFTTab title="NFTs" />
        <SettingsTab title="Settings" />
      </Tabs>
    </div>
  );
};

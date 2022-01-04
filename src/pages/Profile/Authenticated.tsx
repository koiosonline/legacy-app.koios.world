import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { UserAccountContext } from '../../types/UserProfile/UserAccount';
import { MetaBlocks } from '../../components/MetaBlocks';
import { OverviewTab } from '../../components/UserProfile/Tabs/OverviewTab';
import { SettingsTab } from '../../components/UserProfile/Tabs/SettingsTab';
import { Tabs } from '../../components/UserProfile/Tabs/Tabs';

export const Authenticated = () => {
  const { userAccount } = useContext<UserAccountContext>(UserContext);

  return (
    <div className="authenticated container">
      <ProfileBanner
        userName={userAccount.name}
        profileImage={userAccount.profileImage}
        backgroundCover={userAccount.profileBanner}
        discordProfile={userAccount.discordProfile}
      />

      <MetaBlocks />

      <Tabs>
        <OverviewTab title="Overview" />
        <SettingsTab title="Settings" />
      </Tabs>

    </div>
  );
};

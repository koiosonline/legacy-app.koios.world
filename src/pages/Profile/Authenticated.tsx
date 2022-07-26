import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { MetaBlocks } from '../../components/MetaBlocks';
import { OverviewTab } from '../../components/UserProfile/Tabs/OverviewTab';
import { NFTTab } from '../../components/UserProfile/Tabs/NFTTab';
import { SettingsTab } from '../../components/UserProfile/Tabs/SettingsTab';
import { Tabs } from '../../components/UserProfile/Tabs/Tabs';
import { useSizes } from '../../components/Util/useSizes';
import { ProfileInfo } from '../../components/UserProfile/ProfileInfo';

export const Authenticated = () => {
  const { userAccount } = useContext(UserContext);
  const { width } = useSizes();
  const isMobile = width < 769;

  return (
    <div className="authenticated container">
      <ProfileBanner
        discordProfile={userAccount?.discordProfile}
      />

      {isMobile ? (
        <>
          <ProfileInfo
            walletAddress={userAccount?.publicKeyFormatted}
            userBalance={userAccount?.userBalance}
            discordUsername={userAccount?.discordProfile?.discordHandle}
          />
        </>
      ) : (
        <MetaBlocks />
      )}

      <Tabs>
        <OverviewTab title="Overview" />
        <NFTTab title="NFTs" />
        <SettingsTab title="Settings" />
      </Tabs>
    </div>
  );
};

import { ProfileBanner } from '../../components/UserProfile/ProfileBanner';
import { NFTTab } from '../../components/UserProfile/Tabs/NFTTab';
import { SettingsTab } from '../../components/UserProfile/Tabs/SettingsTab';
import { Tabs } from '../../components/UserProfile/Tabs/Tabs';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';
import { MappedDiscordProfile } from '../../types/UserProfile/DiscordProfile';
import { getDiscordProfile } from '../../api/Api';
import { mapDiscordProfileData } from '../../components/UserProfile/mapUserData';
import { useQuery } from '@apollo/client';
import { LENS_GET_PROFILE } from '../../api/Apollo/queries/LENS_GET_PROFILE';
import avatarPlaceholder from '../../assets/images/placeholders/placeholder-titan.png';
import bannerPlaceholder from '../../assets/images/placeholders/placeholder-banner.png';
import { ipfsPrefix1, ipfsPrefix2, ipfsPrefix3, stripIpfsPrefix } from '../../components/Web3/Ipfs';
import { useHistory, useParams } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ExternalLinks } from './ExternalLinks';
import { ReadMore } from '../../components/ReadMore';
import { FormatPublicKey } from '../../components/Util/FormatPublicKey';
import { MetaBlocks } from '../../components/MetaBlocks';
import { Alert } from '../../components/Util/Alert';

export const Profile = () => {
  const history = useHistory();
  const { userId } = useParams<{ userId: string }>();
  const { address } = useAccount();
  const isPersonalAccount = address === userId;
  const [discordProfile, setDiscordProfile] = useState<MappedDiscordProfile>();
  const [profilePicture, setProfilePicture] = useState<string>(avatarPlaceholder);
  const { loading, error, data } = useQuery(LENS_GET_PROFILE(userId), { skip: !userId });

  // Profile definitions
  const profile = data?.defaultProfile;
  const totalFollowers = profile?.stats?.totalFollowers;
  const totalFollowing = profile?.stats?.totalFollowing;
  const rawProfilePicture = data?.defaultProfile?.picture?.original?.url;

  const backgroundCoverUrlFormatted = data?.defaultProfile?.coverPicture?.original?.url
    ? stripIpfsPrefix(data.defaultProfile.coverPicture.original.url)
    : undefined;
  const backgroundCover =
    data && backgroundCoverUrlFormatted
      ? 'https://lens.infura-ipfs.io/ipfs/' + backgroundCoverUrlFormatted
      : bannerPlaceholder;

  const checkIfProfilePictureIsIpfsAddress =
    rawProfilePicture?.startsWith(ipfsPrefix1) ||
    rawProfilePicture?.startsWith(ipfsPrefix2) ||
    rawProfilePicture?.startsWith(ipfsPrefix3);

  useEffect(() => {
    if (rawProfilePicture && checkIfProfilePictureIsIpfsAddress) {
      setProfilePicture('https://lens.infura-ipfs.io/ipfs/' + stripIpfsPrefix(rawProfilePicture));
    } else if (rawProfilePicture && !checkIfProfilePictureIsIpfsAddress) {
      setProfilePicture(rawProfilePicture);
    }
  }, [checkIfProfilePictureIsIpfsAddress, rawProfilePicture]);

  useEffect(() => {
    const retrieveDiscordProfile = async () => {
      const discordProfileLink = data?.defaultProfile?.attributes?.find(
        (attribute) => attribute.key.toLowerCase() === 'discord'
      )?.value;

      if (discordProfileLink) {
        const discordUsername = discordProfileLink.substring(discordProfileLink.lastIndexOf('/') + 1);
        const discordProfile = await getDiscordProfile(discordUsername);
        const mappedDiscordProfile = mapDiscordProfileData(discordUsername, discordProfile);
        setDiscordProfile(mappedDiscordProfile);
      }
    };
    retrieveDiscordProfile();
  }, [data]);

  useEffect(() => {
    if (address && !userId) {
      history.push(`/profile/${address}`);
    }
  }, [address, userId, history]);

  if (error) {
    return (
      <div className="my-profile my-profile--error container">
        <Alert type="error">This account does not exist. Please try another search.</Alert>
      </div>
    );
  }

  return (
    <div className="my-profile">
      <ProfileBanner backgroundCover={backgroundCover} discordProfile={discordProfile} isLoading={loading} />

      <div className="container">
        <section className="profile-info">
          <div className="profile-image-container">
            {loading ? (
              <div className="profile-image-container__img skeleton-item" />
            ) : (
              <img src={profilePicture} alt="Profile photo" className="profile-image-container__img" />
            )}
          </div>

          <div className="profile-info__meta">
            {userId && data && <MetaBlocks balance userId={userId} />}

            {isPersonalAccount && (
              <span>
                <ConnectButton />
              </span>
            )}
          </div>

          {loading && (
            <h2 className="profile-info__name profile-info__name--loading">
              <div className="skeleton-item" />
            </h2>
          )}

          {(profile?.name || userId) && (
            <h2 className="profile-info__name">{profile?.name ? profile.name : FormatPublicKey(userId)}</h2>
          )}

          {(totalFollowers || totalFollowing || loading) && (
            <ul className="profile-info__stats">
              {loading && (
                <>
                  <li className="profile-info__stats-item profile-info__stats-item--loading">
                    <div className="skeleton-item" />
                  </li>
                  <li className="profile-info__stats-item profile-info__stats-item--loading">
                    <div className="skeleton-item" />
                  </li>
                </>
              )}
              {totalFollowers && (
                <li className="profile-info__stats-item">
                  <strong>{totalFollowers}</strong> followers
                </li>
              )}
              {totalFollowing && (
                <li className="profile-info__stats-item">
                  <strong>{totalFollowing}</strong> following
                </li>
              )}
            </ul>
          )}

          {profile?.bio && <ReadMore className="profile-info__bio">{profile.bio}</ReadMore>}

          {profile?.attributes && profile?.handle && (
            <ExternalLinks links={profile.attributes} lensHandle={profile.handle} />
          )}
        </section>

        <Tabs>
          {/* <OverviewTab title="Overview" discordProfile={discordProfile} /> */}
          <NFTTab title="NFTs" />
          {isPersonalAccount && <SettingsTab title="Settings" lensHandle={data?.defaultProfile?.handle} />}
        </Tabs>
      </div>
    </div>
  );
};

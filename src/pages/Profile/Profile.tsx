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
import { stripIpfsPrefix } from '../../components/Web3/Ipfs';
import { useHistory, useParams } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ExternalLinks } from './ExternalLinks';
import { ReadMore } from '../../components/ReadMore';
import { FormatPublicKey } from '../../components/Util/FormatPublicKey';

export const Profile = () => {
  const history = useHistory();
  const { userId } = useParams<{ userId: string }>();
  const { address } = useAccount();
  const isPersonalAccount = address === userId;
  const [discordProfile, setDiscordProfile] = useState<MappedDiscordProfile>();
  const { loading, error, data } = useQuery(LENS_GET_PROFILE(userId), { skip: !userId });
  const backgroundCoverUrlFormatted = data?.defaultProfile?.coverPicture?.original?.url
    ? stripIpfsPrefix(data.defaultProfile.coverPicture.original.url)
    : undefined;
  const backgroundCover =
    data && backgroundCoverUrlFormatted
      ? 'https://lens.infura-ipfs.io/ipfs/' + backgroundCoverUrlFormatted
      : bannerPlaceholder;

  // Profile definitions
  const profile = data?.defaultProfile;
  const totalFollowers = profile?.stats?.totalFollowers;
  const totalFollowing = profile?.stats?.totalFollowing;

  console.log('account data:', data);
  console.log('pubkey param:', userId);
  console.log('pers acc:', isPersonalAccount);

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
    if (address) {
      history.push(`/profile/${address}`);
    }
  }, [address, history]);

  return (
    <div className="my-profile">
      <ProfileBanner backgroundCover={backgroundCover} discordProfile={discordProfile} />

      <div className="container">

        <section className="profile-info">
          <div className="profile-image-container">
            <img 
              src={data?.defaultProfile?.picture?.original?.url || avatarPlaceholder} 
              alt="Profile photo" className="profile-image-container__img" />
          </div>

          <div className="profile-info__meta">
            {/* {(userId || !profileDoesNotExist ) && <MetaBlocks balance />} */}

            {isPersonalAccount && (
              <span>
                <ConnectButton />
              </span>
            )}
          </div>

          {(profile?.name || userId) && <h2 className="profile-info__name">{profile?.name ? profile.name : FormatPublicKey(userId)}</h2>}
          {(!data || error ) && <h2>Does not exist</h2>}

          {(totalFollowers || totalFollowing) && (
            <ul className="profile-info__stats">
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

          {profile?.bio && (
            <ReadMore className="profile-info__bio">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a malesuada est. Sed semper erat nec porttitor
          fermentum. Donec fermentum blandit velit quis blandit. Aliquam imperdiet lorem tincidunt nisi pellentesque,
          non tincidunt leo auctor. Nulla in mollis tortor, ornare ullamcorper felis. In sodales tincidunt hendrerit.
          Proin laoreet elit et pharetra porta. Curabitur tempus pharetra blandit. Nam dignissim tellus eget nunc
          porttitor, sit amet semper diam pulvinar. Vestibulum euismod massa eu odio molestie dapibus. Praesent blandit
          fringilla metus, ac semper ex ullamcorper ac. Sed eu gravida quam. Sed id lorem posuere, lacinia dolor ac,
          condimentum sapien. In vel aliquam purus. Cras et molestie sem, at malesuada nisl. Maecenas bibendum cursus
          imperdiet. Quisque et interdum arcu. Quisque feugiat, turpis nec maximus vestibulum, neque diam dapibus dolor,
          vel laoreet orci diam id tortor. Cras non risus dapibus, dignissim dolor vitae, mollis orci. Sed nec ligula
          quam. Pellentesque euismod tempus arcu, eu mollis dolor lobortis nec. Pellentesque nisi nulla, molestie sit
          amet justo id, cursus maximus elit. Fusce sagittis vehicula odio, sed vulputate erat imperdiet eu. Sed sit
          amet interdum odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Etiam eu purus nulla. Nullam quis placerat urna. Pellentesque sodales posuere. */}
              {profile.bio}
            </ReadMore>
          )}

          {profile?.attributes && <ExternalLinks links={profile.attributes} />}
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

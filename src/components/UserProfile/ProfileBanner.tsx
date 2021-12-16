import { MappedDiscordProfile } from '../../types/UserProfile/DiscordProfile';

type ProfileBannerProps = {
  backgroundCover: string;
  userName: string;
  discordProfile?: MappedDiscordProfile;
};

export const ProfileBanner = (props: ProfileBannerProps) => {
  return (
    <div
      className="profile-banner"
      style={{ backgroundImage: `url(${props.backgroundCover})` }}
    >
      <div className="profile-banner__user-info">
        <h1 className="profile-banner__name">{props.userName}</h1>
      </div>

      {props.discordProfile && (
        <div>
          <h2>Lv. {props.discordProfile.level}</h2>
          <p>
            <span>{props.discordProfile.xp.currentXP}</span>/
            {props.discordProfile.xp.necessaryXP}
          </p>
        </div>
      )}
    </div>
  );
};

import { MappedDiscordProfile } from '../../types/UserProfile/DiscordProfile';

type ProfileBannerProps = {
  backgroundCover: string;
  profileImage: string;
  userName: string;
  discordProfile?: MappedDiscordProfile;
};

export const ProfileBanner = (props: ProfileBannerProps) => {
  const currentXp = props.discordProfile.xp.currentXP;
  const necessaryXp = props.discordProfile.xp.necessaryXP;
  return (
    <div
      className="profile-banner"
      style={{ backgroundImage: `url(${props.backgroundCover})` }}
    >
      <div className="user-info">
        <h1 className="user-info__name">{props.userName}</h1>
      </div>

      <div className="profile-image-container">
        <img
          src={props.profileImage}
          alt="Profile photo"
          className="profile-image-container__img"
        />
      </div>

      {props.discordProfile && (
        <div className="user-progress">
          <h2 className="user-progress__level">
            Lv.
            <span className="user-progress__level--number">
              {props.discordProfile.level}
            </span>
          </h2>
          <p className="user-progress__xp">
            {currentXp}&nbsp;/&nbsp; 
            <span className="user-progress__xp--grey">
              {necessaryXp}
              &nbsp;XP
            </span>
          </p>
          <progress
            className="user-progress__bar"
            value={currentXp}
            max={necessaryXp}
          />
        </div>
      )}
    </div>
  );
};

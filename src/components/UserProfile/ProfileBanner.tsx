import { MappedDiscordProfile } from '../../types/UserProfile/DiscordProfile';
import { Icon } from '../Util/Icon';
import avatarPlaceholder from "../../assets/images/placeholders/avatar-placeholder.png";
import bannerPlaceholder from "../../assets/images/placeholders/banner-placeholder.png";

type ProfileBannerProps = {
  backgroundCover?: string;
  profileImage?: string;
  userName?: string;
  discordProfile?: MappedDiscordProfile;
};

export const ProfileBanner = (props: ProfileBannerProps) => {
  const backgroundCover = props.backgroundCover ? props.backgroundCover : bannerPlaceholder;
  const profileImage = props.profileImage ? props.profileImage : avatarPlaceholder;
  const currentXp = props.discordProfile?.xp?.currentXP;
  const necessaryXp = props.discordProfile?.xp?.necessaryXP;
  const percentageXp = (100 * currentXp) / necessaryXp;

  return (
    <div
      className="profile-banner"
      style={{ backgroundImage: `url(${backgroundCover})` }}
    >
      <div className="user-info">
        {props.userName && (
          <h1 className="user-info__name">{props.userName}</h1>
        )}
        {props.discordProfile && props.discordProfile.discordHandle && (
          <a
            className="user-info__social"
            href={`https://discordapp.com/users/${props.discordProfile.discordHandle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="discord" />
            {props.discordProfile.discordHandle}
          </a>
        )}
      </div>

      <div className="profile-image-container">
        <img
          src={profileImage}
          alt="Profile photo"
          className="profile-image-container__img"
        />
      </div>

      {props.discordProfile?.discordHandle && props.discordProfile.level && props.discordProfile.xp && (
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
          <div className="progress-bar">
            <span
              className="progress-value"
              style={{ width: `${percentageXp}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

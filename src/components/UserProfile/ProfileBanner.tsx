import { MappedDiscordProfile } from '../../types/UserProfile/DiscordProfile';
import { Icon } from '../Util/Icon';

type ProfileBannerProps = {
  backgroundCover: string;
  profileImage: string;
  userName: string;
  discordProfile?: MappedDiscordProfile;
};

export const ProfileBanner = (props: ProfileBannerProps) => {
  const currentXp = props.discordProfile.xp.currentXP;
  const necessaryXp = props.discordProfile.xp.necessaryXP;
  const percentageXp = (100 * currentXp) / necessaryXp;

  return (
    <div
      className="profile-banner"
      style={{ backgroundImage: `url(${props.backgroundCover})` }}
    >
      <div className="user-info">
        <h1 className="user-info__name">{props.userName}</h1>
        {props.discordProfile.discordHandle && (
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
        {props.discordProfile.discordHandle && (
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

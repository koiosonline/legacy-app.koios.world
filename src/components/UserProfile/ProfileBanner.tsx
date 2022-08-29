import { MappedDiscordProfile } from '../../types/UserProfile/DiscordProfile';

type ProfileBannerProps = {
  backgroundCover: string;
  discordProfile?: MappedDiscordProfile;
  isLoading?: boolean;
};

export const ProfileBanner = (props: ProfileBannerProps) => {
  const currentXp = props.discordProfile?.xp?.currentXP;
  const necessaryXp = props.discordProfile?.xp?.necessaryXP;
  const percentageXp = (100 * currentXp) / necessaryXp;

  if (props.isLoading) {
    return (
      <div className="profile-banner">
        <div className="skeleton-item" />
      </div>
    );
  }

  return (
    <div className="profile-banner" style={{ backgroundImage: `url(${props.backgroundCover})` }}>
      <section className="profile-banner__content container">
        {props.discordProfile?.discordHandle && props.discordProfile.level && props.discordProfile.xp && (
          <div className="user-progress">
            <h2 className="user-progress__level">
              Lv.
              <span className="user-progress__level--number">{props.discordProfile.level}</span>
            </h2>
            <p className="user-progress__xp">
              {currentXp}&nbsp;/&nbsp;
              <span className="user-progress__xp--grey">
                {necessaryXp}
                &nbsp;XP
              </span>
            </p>
            <div className="progress-bar">
              <span className="progress-value" style={{ width: `${percentageXp}%` }} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

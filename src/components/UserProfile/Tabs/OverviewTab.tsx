import discordLogo from '../../../assets/images/brands/discord--3d.png';
import { Alert } from '../../Util/Alert';
import { MappedDiscordProfile } from '../../../types/UserProfile/DiscordProfile';

type OverviewTabProps = {
  title: string;
  discordProfile: MappedDiscordProfile;
};

type StatisticBlockProps = {
  img?: string;
  title: string;
  subtitle: string;
};

const StatisticBlock: React.FC<StatisticBlockProps> = ({ img, title, subtitle }) => {
  return (
    <div className={`statistic-block ${img ? 'statistic-block--left' : ''}`}>
      {img && <img src={`${img}`} className="statistic-block__img" />}
      <div className="statistic-block__text-wrapper">
        <h2 className="statistic-block__title">{title}</h2>
        <h3 className="statistic-block__subtitle">{subtitle}</h3>
      </div>
    </div>
  );
};

export const OverviewTab: React.FC<OverviewTabProps> = ({discordProfile}) => {

  return (
    <div className="overview-tab">
      {discordProfile && discordProfile.isMember ? (
        <>
          {discordProfile.discordRank && (
            <StatisticBlock
              title={`${discordProfile.discordRank}`}
              subtitle="Discord rank"
              img={`${discordLogo}`}
            />
          )}
          {discordProfile.messageCount && (
            <StatisticBlock title={`${discordProfile.messageCount}`} subtitle="Total Discord messages" />
          )}
          {discordProfile.xp.totalXP && (
            <StatisticBlock title={`${discordProfile.xp.totalXP}`} subtitle="Total earned XP" />
          )}
        </>
      ) : (
        <>
          {discordProfile?.discordHandle && !discordProfile?.isMember ? (
            <Alert type="info">
              You're not a member of the Koios Discord yet,{' '}
              <a href="https://discord.com/invite/jBjudugeBa" target="_blank" rel="noreferrer">
                join the community
              </a>{' '}
              to become a Titan and see your contribution back here in the statistics.
            </Alert>
          ) : (
            <Alert type="info">Connect your Discord profile to see an overview of your statistics</Alert>
          )}
        </>
      )}
    </div>
  );
};

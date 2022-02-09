import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import discordLogo from '../../../assets/images/brands/discord--3d.png';

type OverviewTabProps = {
  title: string;
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

export const OverviewTab: React.FC<OverviewTabProps> = () => {
  const { userAccount } = useContext(UserContext);

  return (
    <div className="overview-tab">
      {userAccount && userAccount.discordProfile && userAccount.discordProfile.isMember ? (
        <>
          {userAccount.discordProfile.discordRank && (
            <StatisticBlock
              title={`${userAccount.discordProfile.discordRank}`}
              subtitle="Discord rank"
              img={`${discordLogo}`}
            />
          )}
          {userAccount.discordProfile.messageCount && (
            <StatisticBlock title={`${userAccount.discordProfile.messageCount}`} subtitle="Total Discord messages" />
          )}
          {userAccount.discordProfile.xp.totalXP && (
            <StatisticBlock title={`${userAccount.discordProfile.xp.totalXP}`} subtitle="Total earned XP" />
          )}
        </>
      ) : (
        <>
          {userAccount.discordProfile?.discordHandle && !userAccount.discordProfile?.isMember ? (
            <h2 className="overview-tab__inactive">
              You're not a member of the Koios Discord yet,&nbsp;
              <a href="https://discord.com/invite/jBjudugeBa" target="_blank" rel="noreferrer">
                join the community
              </a>&nbsp;
              to become a Titan and see your contribution back here in the statistics.
            </h2>
          ) : (
            <h2 className="overview-tab__inactive">
              Connect your Discord profile to see an overview of your statistics.
            </h2>
          )}
        </>
      )}
    </div>
  );
};

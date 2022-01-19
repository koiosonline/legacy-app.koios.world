import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import koiosLogo from "../../../assets/images/brands/discord--3d.png";

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
      {img &&
        <img src={`${img}`} className="statistic-block__img" />
      }
      <div className="statistic-block__text-wrapper">
        <h2 className="statistic-block__title">{title}</h2>
        <h3 className="statistic-block__subtitle">{subtitle}</h3>
      </div>
    </div>
  );
};

export const OverviewTab: React.FC<OverviewTabProps> = () => {
  const { userAccount } = useContext(UserContext);

  return <div className="overview-tab">
    <StatisticBlock title={`${userAccount.discordProfile.discordRank}`} subtitle="Discord rank" img={`${koiosLogo}`}/>
    <StatisticBlock title={`${userAccount.discordProfile.messageCount}`} subtitle="Total Discord messages" />
    <StatisticBlock title={`${userAccount.discordProfile.xp.totalXP}`} subtitle="Total earned XP" />
  </div>;
};

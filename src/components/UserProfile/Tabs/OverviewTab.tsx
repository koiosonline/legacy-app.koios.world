import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";

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
    <div className="statistic-block">
      {img &&
        <img src={`${img}`} />
      }
      <h2 className="statistic-block__title">{title}</h2>
      <h3 className="statistic-block__subtitle">{subtitle}</h3>
    </div>
  );
};

export const OverviewTab: React.FC<OverviewTabProps> = () => {
  const { userAccount } = useContext(UserContext);

  return <div className="overview-tab">
    <StatisticBlock title={`${userAccount.discordProfile.discordRank}`} subtitle="Discord rank" />
    <StatisticBlock title={`${userAccount.discordProfile.messageCount}`} subtitle="Total Discord messages" />
    <StatisticBlock title={`${userAccount.discordProfile.xp.totalXP}`} subtitle="Total earned XP" />
  </div>;
};

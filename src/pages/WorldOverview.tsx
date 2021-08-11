import worldsData from '../assets/data/Worlds.json';
import {useParams} from "react-router-dom";
import QuickLinks from "../components/QuickLinks";
import LinkCard from "../components/LinkCard";
import {Slugify} from '../components/Util/Slugify';
import SmallCard from "../components/SmallCard";
import LearnToNavigate from "../components/LearnToNavigate";

type CourseContentParams = {
  worldContent: string;
};

const WorldOverview = () => {
  const {worldContent} = useParams<CourseContentParams>();
  const world = worldsData.find((item) => Slugify(item.url, {
    lowerCase: true,
    replaceAmpersand: "and"
  }) === worldContent);

  return (
    <>
      <div className={'worldOverviewHeader'}>
        <div className={'worldOverviewHeader__titleRow'}>
          <h1 className={'worldOverviewHeader__titleRow__title'}>{world?.course}</h1>
          <p className={'worldOverviewHeader__titleRow__description'}>{world?.description}</p>
        </div>
        <SmallCard/>
      </div>
      <div className={'container worldOverviewContainer'}>
        <LearnToNavigate world={world}/>
        {/*<QuickLinks data={world?.quickLinks}/>*/}
        {/*<div className={'linkCardContainer'}>*/}
        {/*  <LinkCard data={world?.content} baseUrl={worldContent} title={'Learn'}/>*/}
        {/*  <LinkCard data={world?.earn} baseUrl={worldContent} title={'Earn'}/>*/}
        {/*  <LinkCard data={world?.connect} baseUrl={worldContent} title={'Connect'}/>*/}
        {/*</div>*/}
      </div>
    </>
  )
}
export default WorldOverview;


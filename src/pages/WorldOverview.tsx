import worldsData from '../assets/data/Worlds.json';
import {useParams} from "react-router-dom";
import QuickLinks from "../components/QuickLinks";
import LinkCard from "../components/LinkCard";
import { Slugify } from '../components/Util/Slugify';

type CourseContentParams = {
    worldContent: string;
};

const WorldOverview = () => {
    const {worldContent} = useParams<CourseContentParams>();
    const world = worldsData.find((item) => Slugify(item.url, { lowerCase: true, replaceAmpersand: "and" }) === worldContent);

    return (
        <div className={'container worldOverviewContainer'}>
            <div className={'worldOverviewContainer__titleRow'}>
                <h1 className={'worldOverviewContainer__titleRow__title'}>{world?.course}</h1>
            </div>
            <p className={'worldOverviewContainer__description'}>{world?.description}</p>
            <QuickLinks data={world?.quickLinks}/>
            <div className={'linkCardContainer'}>
                <LinkCard data={world?.content} baseUrl={worldContent} title={'Learn'}/>
                <LinkCard data={world?.earn} baseUrl={worldContent} title={'Earn'}/>
                <LinkCard data={world?.connect} baseUrl={worldContent} title={'Connect'}/>
            </div>
        </div>
    )
}
export default WorldOverview;
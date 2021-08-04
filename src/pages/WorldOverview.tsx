import worldsData from '../assets/data/Worlds.json';
import {useParams} from "react-router-dom";
import QuickLinks from "../components/QuickLinks";
import LinkCard from "../components/LinkCard";
import { Slugify } from '../components/Util/Slugify';

type CourseContentParams = {
    worldContent: string;
};

const WorldOverview = () => {
    const data = worldsData;
    const {worldContent} = useParams<CourseContentParams>();

    const world = data.find((item) => Slugify(item.url, { lowerCase: true, replaceAmpersand: "and" }) === worldContent);

    // const lastVersion = store.get('lastWatched');

    return (
        <div className={'container worldOverviewContainer'}>
            <div className={'worldOverviewContainer__titleRow'}>
                <h1 className={'worldOverviewContainer__titleRow__title'}>{world?.course}</h1>
                {/*{lastVersion &&*/}
                {/*<div className={'worldOverviewContainer__titleRow__button'}>*/}
                {/*    <Button title={'Continue Learning'} link={'/worlds/' + lastVersion.world + '/' + lastVersion.level + lastVersion.video}/>*/}
                {/*</div>*/}
                {/*}*/}
            </div>
            <p className={'worldOverviewContainer__description'}>{world?.description}</p>
            <QuickLinks data={world?.quickLinks}/>
            <div className={'linkCardContainer'}>
                {console.log(world.content)}
                <LinkCard data={world?.content} baseUrl={worldContent} title={'Learn'}/>
                <LinkCard data={world?.earn} baseUrl={worldContent} title={'Earn'}/>
                <LinkCard data={world?.connect} baseUrl={worldContent} title={'Connect'}/>
            </div>
        </div>
    )
}

export default WorldOverview;
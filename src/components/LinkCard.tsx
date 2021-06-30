import {Link} from 'react-router-dom'
import {Slugify} from "./Util/Slugify";
import store from "store";
import Button from "./Button";

const LinkCard = (props) => {
    const continueLearning = store.get('lastWatched');
    const data = props.data;
    return (
        <div>
        <div className={"linkCardContainer__card"}>
            <h2 className={"linkCardContainer__card__title"}>{props.title}</h2>
            {continueLearning && props.title === 'Learn' &&
                <div className={'linkCardContainer__card__continueButton'}>
                    <Button title={'Continue Learning'} link={'/worlds/' + continueLearning.world + '/' + continueLearning.level + continueLearning.video}/>
                </div>
            }
            {data?.map((linkData, i) => (
            <Link
                key={i}
                to={props.title === 'Learn' ? props.baseUrl + '/' + Slugify(linkData.title, {lowerCase: true}) : '/coming-soon'}
                className={props.title === 'Learn' ? "linkCardContainer__card__link": "linkCardContainer__card__default-link"}>
                <p>{linkData.title}</p>
            </Link>
            ))}
        </div>
        </div>
    )
}

export default LinkCard;
import { Link } from 'react-router-dom';
import {Icon} from "./Util/Icon";

const Card = (props: {image: string; title: string; description: string; linkUrl: string; linkTitle: string; duration: string; users: number;}) => {
    return (
        <div className={"cardContainer__card"}>
            <img src={props.image} alt={'artwork'} className={"cardContainer__card__img"}/>
            <div className={"cardContainer__card__text"}>
                <h2 className={"cardContainer__card__text__title"}>{props.title}</h2>
                <div className={'cardContainer__card__text__metaData'}>
                    <p><Icon type="time" className={'clock'}/>{Math.floor(parseInt(props.duration) / 60)} Min</p>
                    {/*<p><Icon type="user" className={'clock'}/>{props.users}</p>*/}
                </div>
            </div>
            <p className={"cardContainer__card__description"}>{props.description}</p>
            <Link to={props.linkUrl} className={"cardContainer__card__link"}><p>{props.linkTitle}</p></Link>
        </div>
    )
}

export default Card;
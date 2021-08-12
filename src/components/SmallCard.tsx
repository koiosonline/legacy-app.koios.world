import {Link} from 'react-router-dom'
import {Slugify} from "./Util/Slugify";
import store from "store";
import Button from "./Button";
import cardData from "../assets/data/overviewHeaderLinks.json";
import {Icon} from "./Util/Icon";
import {SvgSprite} from "./Util/SvgSprite";

const SmallCard = () => {
  return (
    <div className={"smallCard-container"}>
      {cardData.map((data) => {
        return (
          <div className={"smallCard"}>
            <div className={"smallCard__title-row"}>
              <h2 className={"smallCard__title"}>{data.title}</h2>
              <Icon type={data.icon as keyof typeof SvgSprite}/>
            </div>
            <p className={"smallCard__description"}>{data.description}</p>
            <a className={"smallCard__link"} href={data.link}>{data.linkTitle}</a>
          </div>
        )
      })
      }
    </div>
  );
}

export default SmallCard;

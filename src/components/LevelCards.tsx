import { Slugify } from "./Util/Slugify";
import { Link } from "react-router-dom";

const LevelCards = (props) => {
  return (
    <div className={"levelCards-container"}>
      <div className={"text-holder"}>
        <h3 className={"text-holder__title"}>Start with lessons</h3>
        <p className={"text-holder__description"}>
          An online webpage with all the assignments that are part of this minor
        </p>
      </div>

      <div className={"cards-container"}>
        {props.world.content &&
          props.world.content.map((cardData, index) => {
            return (
              <Link
                className={"card"}
                to={props.baseUrl + "/" + Slugify(cardData.title, { lowerCase: true })}
                key={index}
              >
                <h4 className={"card__title"}>{cardData.title}</h4>
                <p className={"card__subtitle"}>{cardData.subtitle}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default LevelCards;

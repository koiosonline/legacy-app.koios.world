import { Link } from "react-router-dom";
import { store } from "./Util/Storage";

const ExploreMore = (props) => {
  const continueLearning = store.getJson("lastWatched");

  return (
    <>
      {continueLearning && (
        <div className={"exploreMoreContainer"}>
          <h1 className={"exploreMoreContainer__title"}>Continue Exploring</h1>
          <p className={"exploreMoreContainer__world"}>World: {continueLearning.world}</p>
          <div className={"exploreMoreContainer__buttonContainer"}>
            <Link to={"/worlds/" + continueLearning.world + "/" + continueLearning.level + continueLearning.video}>
              <p>Continue Learning</p>
            </Link>
          </div>
        </div>
      )}
      {!continueLearning && (
        <div className={"exploreMoreContainer"}>
          <h1 className={"exploreMoreContainer__title"}>{props.title}</h1>
          <div className={"exploreMoreContainer__buttonContainer"}>
            <Link to={props.buttonLink}>
              <p>{props.buttonTitle}</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreMore;

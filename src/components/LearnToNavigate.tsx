import data from "../assets/data/learnToNavigate.json";
import QuickLinks from "./QuickLinks";
import store from "store";

const LearnToNavigate = (props) => {
  const continueLearning = store.get("lastWatched");

  return (
    <div className={"learnToNavigate-container"}>
      <div className={"learnToNavigate"}>
        <h2 className={"learnToNavigate__title"}>{data.title}</h2>
        <p className={"learnToNavigate__description"}>{data.description}</p>
        <div className={"links"}>
          {continueLearning && (
            <div className={"continue"}>
              <a href={"#/worlds/" + continueLearning.world + "/" + continueLearning.level + continueLearning.video}>
                Continue learning
              </a>
            </div>
          )}
          <QuickLinks data={props.world?.quickLinks} />
        </div>
      </div>
      <div className={"image"}>
        <img src={"/images/blockchain.svg"} alt={"blockchain"} />
      </div>
    </div>
  );
};

export default LearnToNavigate;

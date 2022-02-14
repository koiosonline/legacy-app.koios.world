import worldsData from "../assets/data/courseinfo.json";
import CourseCard from "../components/CourseCard";
import Button from "../components/Button";
import store from "store";

export const Worlds = () => {
  const data = worldsData;
  const allowed = ["blockchain", "tdfa01", "datascience01", "programmingdapps01", "introduction"];
  const continueLearning = store.get("lastWatched");

  const filtered = Object.keys(data)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

  return (
    <div className="container worlds">
      <h1>Select a world</h1>
      <p className={"worlds__subtitle"}>
        Discover new worlds and expand your knowledge about different topics or continue where you left off
      </p>
      {continueLearning && (
        <Button
          title={"Continue Learning"}
          link={"/worlds/" + continueLearning.world + "/" + continueLearning.level + continueLearning.video}
        />
      )}
      <div className="card-container">
        {Object.keys(filtered).map((data, i) => (
          <CourseCard
            key={i}
            image={worldsData[data].image}
            title={worldsData[data].course}
            description={worldsData[data].description}
            linkTitle="Enter world"
            linkUrl={worldsData[data].link}
            duration={worldsData[data].duration}
            external={worldsData[data].external}
          />
        ))}
      </div>
    </div>
  );
};

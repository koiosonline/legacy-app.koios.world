import { ItemList } from "../../components/ItemList";
import { useWorldContent } from "./useWorldContent";

export const WorldContent = () => {
  const courseData = useWorldContent();
  const courseLevels = courseData?.content.map((item) => item.title);

  return (
    <div>
      <div className="container">
        {courseData && courseLevels && (
          <ItemList header={courseData.course} items={courseLevels} />
        )}
      </div>
    </div>
  );
};

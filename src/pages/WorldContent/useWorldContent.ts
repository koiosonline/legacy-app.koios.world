import { useParams } from "react-router-dom";
import { Slugify } from "../../components/Util/Slugify";
import CoursesData from "../../assets/data/Worlds.json";

type CourseContentParams = {
  worldContent: string;
};

export const useWorldContent = () => {
  const { worldContent } = useParams<CourseContentParams>();

  const courseData = CoursesData.find(
    (item) =>
      Slugify(item.course, { lowerCase: true, replaceAmpersand: "and" }) ===
      worldContent
  );

  if (courseData) {
    return courseData;
  } else {
    return undefined;
  }
};

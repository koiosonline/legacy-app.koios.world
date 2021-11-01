import bc01 from "../../assets/data/quiz/bcLevel01_quiz.json";
import bc02 from "../../assets/data/quiz/bcLevel02_quiz.json";
import { useParams } from "react-router-dom";
import { CourseDetailParams, VideoSlugParams } from "../../types/Params";

const useQuiz = () => {
  const { worldDetail } = useParams<CourseDetailParams>();
  const { videoSlug } = useParams<VideoSlugParams>();

  let data = [];
  switch (worldDetail) {
  case "blockchain-level-1":
    data = bc01;
    break;
  case "blockchain-level-2":
    data = bc02;
    break;
  }
  return data.find((element) => element.chapter === videoSlug);
};

export default useQuiz;

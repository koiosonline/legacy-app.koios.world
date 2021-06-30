import { getVideoInfo } from "../../api/Api";
import { Slugify } from "../../components/Util/Slugify";

// type FindCourseDetailProps = {
//   hash: string;
//   videoInfoAddress: string;
// };

export const FindCourseDetail = async (hash, videoInfoAddress) => {
  const slugifiedHash = Slugify(hash);
  const data = await getVideoInfo(videoInfoAddress);

  if (hash) {
    const video = data.videos.find((v) =>
      Slugify(v.title, {
        lowerCase: true,
        replaceDot: "-",
        replaceAmpersand: "and",
      }) === slugifiedHash && !v.chapter
    );
    const checkIsVideo = video ? video : data.videos.find(v => !v.chapter);
    return checkIsVideo;
  } else {
    return data.videos.find(v => !v.chapter);
  }
};

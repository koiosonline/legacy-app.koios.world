import { getVideoInfo } from '../../api/Api';
import { Slugify } from '../../components/Util/Slugify';

export const FindCourseDetail = async (videoSlug, videoInfoAddress) => {
  const data = await getVideoInfo(videoInfoAddress);

  if (videoSlug) {
    const slugifiedHash = Slugify(videoSlug);
    const video = data.videos.find(
      (v) =>
        Slugify(v.title, {
          lowerCase: true,
          replaceDot: '-',
          replaceAmpersand: 'and',
        }) === slugifiedHash && !v.chapter
    );
    const checkIsVideo = video ? video : data.videos.find((v) => !v.chapter);
    return checkIsVideo;
  } else {
    const firstLesson = data.videos.find((v) => !v.chapter);
    return firstLesson;
  }
};

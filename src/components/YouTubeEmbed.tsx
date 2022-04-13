import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { CourseContentParams, CourseDetailParams, VideoSlugParams } from "../types/Params";
import { store } from "./Util/Storage";

type YouTubeEmbedProps = {
  videoId: string;
};

export const YouTubeEmbed = (props: YouTubeEmbedProps) => {
  const { worldDetail } = useParams<CourseDetailParams>();
  const { worldContent } = useParams<CourseContentParams>();
  const { videoSlug } = useParams<VideoSlugParams>();

  const watched = () => {
    store.setJson(props.videoId, { hash: `/${videoSlug}`, videoId: props.videoId });
    store.setJson("lastWatched", { world: worldContent, level: worldDetail, video: `/${videoSlug}` });
  };

  const activeVideo = () => {
    store.setJson("active", { hash: `/${videoSlug}`, videoId: props.videoId });
  };

  const opts = {
    playerVars: {
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
  };

  return (
    <YouTube
      videoId={props.videoId}
      onEnd={watched}
      onReady={activeVideo}
      containerClassName={"youtube-api"}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      opts={opts}
    />
  );
};

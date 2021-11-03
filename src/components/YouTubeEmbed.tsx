import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import store from "store";
import { CourseContentParams, CourseDetailParams, VideoSlugParams } from "../types/Params";

type YouTubeEmbedProps = {
  videoId: string;
};

export const YouTubeEmbed = (props: YouTubeEmbedProps) => {
  const { worldDetail } = useParams<CourseDetailParams>();
  const { worldContent } = useParams<CourseContentParams>();
  const { videoSlug } = useParams<VideoSlugParams>();

  const watched = () => {
    store.set(props.videoId, { hash: `/${videoSlug}`, videoId: props.videoId });
    store.set("lastWatched", { world: worldContent, level: worldDetail, video: `/${videoSlug}` });
  };

  const activeVideo = () => {
    store.set("active", { hash: `/${videoSlug}`, videoId: props.videoId });
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

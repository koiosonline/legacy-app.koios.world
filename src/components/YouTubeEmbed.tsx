import YouTube from 'react-youtube';
import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import store from "store"
import {CourseContentParams, CourseDetailParams} from "../types/Params";

type YouTubeEmbedProps = {
  videoId: string;
}

export const YouTubeEmbed = (props: YouTubeEmbedProps) => {
  const { hash } = useLocation();
  const { worldDetail } = useParams<CourseDetailParams>();
  const { worldContent } = useParams<CourseContentParams>();

  const watched = () => {
    store.set(props.videoId, { hash: hash, videoId: props.videoId });
    store.set('lastWatched', { world: worldContent, level: worldDetail, video: hash });
  }

  const activeVideo = () => {
    store.set('active', { hash: hash, videoId: props.videoId });
  }

  const opts = {
    playerVars: {
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
  };

  return (
    // <iframe
    //   title="youtube-embed"
    //   className="youtube-embed"
    //   src={`https://www.youtube.com/embed/${props.videoId}`}
    //   frameBorder="0"
    // />
      // @ts-ignore
      <YouTube videoId={props.videoId} onEnd={watched} onReady={activeVideo} containerClassName={"youtube-api"} opts={opts}/>
  );
}
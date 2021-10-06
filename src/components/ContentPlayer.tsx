import { Slugify } from "./Util/Slugify";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { HashLink } from "react-router-hash-link";
import store from "store";
import { useEffect, useState } from "react";
import { Icon } from "./Util/Icon";

type ContentPlayerProps = {
  worldContent: string;
  worldDetail: string;
  videoSlug: string;
  videoContent: VideoProps;
  videoList: VideoProps[];
};

type VideoProps = {
  chapter: boolean;
  description?: string;
  duration: number;
  subtitles:
    | []
    | [
        {
          lang: string;
          subtitle: SubTitleProps[];
        }
      ];
  title: string;
  videoid?: string;
};

type SubTitleProps = {
  dur: string;
  start: string;
  text: string;
};

export const ContentPlayer = (props: ContentPlayerProps) => {
  const [videoCheck, setVideoCheck] = useState<boolean>(false);

  const activeVideo = (video, title) => {
    const slugifiedTitle = Slugify(title, {
      lowerCase: true,
      replaceDot: "-",
      replaceAmpersand: "and",
    });

    if (store.get(video)) {
      store.remove(video);
      setVideoCheck(!videoCheck);
    } else {
      store.set(video, { hash: `/${props.videoSlug}`, videoId: video });
      store.set("lastWatched", {
        world: props.worldContent,
        level: props.worldDetail,
        video: `/${slugifiedTitle}`,
      });
      setVideoCheck(!videoCheck);
    }
  };

  useEffect(() => {
    const activeVideoItem = document.getElementById(props.videoSlug);
    const offset = activeVideoItem.offsetTop - 100;
    document.getElementById("videoList").scrollTop = offset;
  }, [props.videoSlug]);

  return (
    <div className="content-player">
      <div className="content-player__video-container">
        <YouTubeEmbed videoId={props.videoContent.videoid} />
      </div>

      <div className="content-player__listContainer">
        <ul className="content-player__listContainer__video-list" id="videoList">
          {props.videoList &&
            props.videoList.map((video, index) => {
              const slugifiedVideoTitle = Slugify(video.title, {
                lowerCase: true,
                replaceDot: "-",
                replaceAmpersand: "and",
              });

              return video.chapter ? (
                <h2 key={index}>{video.title}</h2>
              ) : (
                <li
                  key={index}
                  id={slugifiedVideoTitle}
                  className={`
                    ${store.get(video.videoid) ? "watched" : ""} 
                    ${props.videoSlug === slugifiedVideoTitle ? "active-state" : ""}`}
                >
                  <Icon type="check-in-circle" onClick={() => activeVideo(video.videoid, video.title)} />
                  <HashLink to={`/worlds/${props.worldContent}/${props.worldDetail}/${slugifiedVideoTitle}`}>
                    {video.title}
                  </HashLink>
                  <p>{Math.floor(video.duration / 60) + ":" + ("0" + Math.floor(video.duration % 60)).slice(-2)}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

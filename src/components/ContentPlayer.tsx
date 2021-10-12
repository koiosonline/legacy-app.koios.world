import { Slugify } from "./Util/Slugify";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { HashLink } from "react-router-hash-link";
import store from "store";
import { useEffect, useState } from "react";

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
    if (store.get(video)) {
      store.remove(video);
      setVideoCheck(!videoCheck);
    } else {
      store.set(video, { hash: `/${props.videoSlug}`, videoId: video });
      store.set("lastWatched", {
        world: props.worldContent,
        level: props.worldDetail,
        video:
          "/" +
          Slugify(title, {
            lowerCase: true,
            replaceDot: "-",
            replaceAmpersand: "and",
          }),
      });
      setVideoCheck(!videoCheck);
    }
  };

  useEffect(() => {
    const activeVideoItem = document.getElementById(props.videoSlug);
    const offset = activeVideoItem?.offsetTop - 100;
    document.getElementById("videoList").scrollTop = offset;
  }, [props.videoSlug]);

  return (
    <div className="content-player">
      <div className="content-player__video-container">
        <YouTubeEmbed videoId={props.videoContent.videoid} />
      </div>
      <div className="content-player__listContainer">
        <ul
          className="content-player__listContainer__video-list"
          id={"videoList"}
        >
          {props.videoList &&
            props.videoList.map((video, index) =>
              video.chapter ? (
                <h2 key={index}>{video.title}</h2>
              ) : (
                <li
                  key={index}
                  className={`${store.get(video.videoid) ? "watched" : ""} ${
                    props.videoSlug ===
                    Slugify(video.title, {
                      lowerCase: true,
                      replaceDot: "-",
                      replaceAmpersand: "and",
                    })
                      ? "active-state"
                      : ""
                  }`}
                  id={`${Slugify(video.title, {
                    lowerCase: true,
                    replaceDot: "-",
                    replaceAmpersand: "and",
                  })}`}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="check-circle"
                    onClick={() => activeVideo(video.videoid, video.title)}
                    className="svg-inline--fa fa-check-circle fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  <HashLink
                    to={
                      "/worlds/" +
                      props.worldContent +
                      "/" +
                      props.worldDetail +
                      "/" +
                      Slugify(video.title, {
                        lowerCase: true,
                        replaceDot: "-",
                        replaceAmpersand: "and",
                      })
                    }
                  >
                    {video.title}
                  </HashLink>
                  <p>
                    {Math.floor(video.duration / 60) +
                      ":" +
                      ("0" + Math.floor(video.duration % 60)).slice(-2)}
                  </p>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};

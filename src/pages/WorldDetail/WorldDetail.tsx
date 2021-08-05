import {useEffect, useState} from "react";
import { useLocation, useParams } from "react-router-dom";
import { FindCourseDetail } from "./useWorldDetail";
import courseInfo from "../../assets/data/Worlds.json";
import { Slugify } from "../../components/Util/Slugify";
import { YouTubeEmbed } from "../../components/YouTubeEmbed";
import { SingleVideo } from "../../types/Courses/SingleVideo";
import { CourseContentParams, CourseDetailParams } from "../../types/Params";
import { getVideoInfo } from "../../api/Api";
import TabInfo from "../../components/TabInfo";
import axios from "axios";
import useQuiz from "../../components/quiz/useQuiz";
import Quiz from "../../components/quiz/Quiz";
import store from "store"
import Loading from "../../components/Loading";
import { HashLink } from 'react-router-hash-link';
import { Markdown } from "../../components/Markdown";
import readme from "../../articles/blockchain/ledger.md";

export const WorldDetail = () => {
  const { hash } = useLocation();
  const [videoContent, setVideoContent] = useState<SingleVideo>();
  const { worldContent } = useParams<CourseContentParams>();
  const { worldDetail } = useParams<CourseDetailParams>();
  const [isLoading, setIsLoading] = useState(false);
  const [courseData, setCourseData] = useState<any[]>();
  const [videoList, setVideoList] = useState<any[]>();
  const [extraInfo, setExtraInfo] = useState<any[]>();
  const [quizState, setQuizState] = useState<boolean>(false);
  const [videoCheck, setVideoCheck] = useState<boolean>(false);

  const course = courseInfo.find(
    (item) =>
      Slugify(item.url, { lowerCase: true, replaceAmpersand: "and" }) ===
      worldContent
  );

  const courseLevel = course.content.find(
    (item) =>
      Slugify(item.title, { lowerCase: true, replaceAmpersand: "and" }) ===
      worldDetail
  );

  const data = async () => {
    setIsLoading(true);
    const d = await FindCourseDetail(hash, courseLevel.videoInfo);
    setVideoContent(d);
    const getVideoList = await getVideoInfo(courseLevel.videoInfo);
    setExtraInfo(getVideoList.literature);
    setVideoList(getVideoList.videos);
    const getCourseData = await getVideoInfo(courseLevel.data);
    setCourseData(getCourseData);
    setIsLoading(false);
  };

  const getCourseId = () => {
    const courseId = videoContent.title;
    const splitted = courseId.split(' ');
    return splitted[0];
  }

    const filterDataById = () => {
      const all = courseData.filter((item) => getCourseId() === item.chapter);
      const addedInfo = extraInfo.filter((item) => getCourseId() === item.chapter);
      const allFilter = courseData.filter((item) => "*" === item.chapter);
      const merged = allFilter.concat(all, addedInfo);
      const unique = merged.filter((v,i,a)=>a.findIndex(t=>(t.title === v.title && t.url===v.url))===i)
      const withoutPng = unique.filter((item) => !item.png);
      if (withoutPng.length === 0) {
        return false
      } else {
        return withoutPng;
      }
    }

    const onlyUrl = () => {
      const data = filterDataById();
      if (typeof data !== "boolean") {
        return data.filter((item) => item.url);
      }
    }

    const onlyLiterature = () => {
      const data = filterDataById();
      if (typeof data !== "boolean") {
        return data.filter((item) => item.cid);
      }
    }

    const filterDefaultLinks = () => {
      return courseData.filter((item) => "*" === item.chapter);
    }

    const fetchPDF = (link, title, world) => {
      let a = document.createElement("a");
      document.body.appendChild(a);
      axios(`https://ipfs.io/ipfs/` + link, {
        method: 'GET',
        responseType: 'blob'
      }).then(response => {
        const file = new Blob(
            [response.data],
            {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        a.href = fileURL;
        a.download = world + '-' + title;
        a.click();
        window.URL.revokeObjectURL(fileURL);
      }).catch(error => {
        console.log(error);
      });
    }

  const quiz = useQuiz();

  const openQuiz = () => {
    setQuizState(!quizState);
    console.log(quizState);
  }

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, worldDetail]);

  useEffect(() => {
    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ block: 'center', inline: 'end'});
    }
  })

  const activeVideo = (video, title) => {
    if (store.get(video)) {
      store.remove(video);
      console.log('remove');
      setVideoCheck(!videoCheck);
    } else {
      store.set(video, { hash: hash, videoId: video });
      store.set('lastWatched', { world: worldContent, level: worldDetail, video: "#" + Slugify(title, {lowerCase: true, replaceDot: "-", replaceAmpersand: "and"})});
      console.log('set');
      setVideoCheck(!videoCheck);
    }
  }

  const openDiscord = () => {
    window.open('https://discord.gg/jBjudugeBa', '_blank');
  }

  return (
      <div className={'container'}>
    <div className="world-detail">
      {isLoading ? (
        <Loading/>
      ) : (
        videoContent && (
          <>
            <div className="content-player">
              <div className="content-player__video-container">
                <YouTubeEmbed videoId={videoContent.videoid} />
              </div>
              <div className="content-player__listContainer">
              <ul className="content-player__listContainer__video-list" id={'videoList'}>
                {videoList &&
                  videoList.map((video, index) =>
                    video.chapter ? (
                      <h2 key={index}>{video.title}</h2>
                    ) : (
                      <li key={index} className={`${store.get(video.videoid) ? 'watched' : ''} ${hash === "#" +
                      Slugify(video.title, {
                        lowerCase: true,
                        replaceDot: "-",
                        replaceAmpersand: "and",
                      }) ? 'active-state' : ''}`}
                          id={"#" +
                          Slugify(video.title, {
                            lowerCase: true,
                            replaceDot: "-",
                            replaceAmpersand: "and",
                          })}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" onClick={() => activeVideo(video.videoid, video.title)}
                             className="svg-inline--fa fa-check-circle fa-w-16" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                        </svg>
                        <HashLink
                          to={
                            worldDetail +
                            "#" +
                            Slugify(video.title, {
                              lowerCase: true,
                              replaceDot: "-",
                              replaceAmpersand: "and",
                            })
                          }
                        >
                          {video.title}
                        </HashLink>
                        <p>{Math.floor(video.duration / 60) + ':' + ('0' + Math.floor(video.duration % 60)).slice(-2)}</p>
                      </li>
                    )
                  )}
              </ul>
              </div>
            </div>
            <div className={'ctaContainer'}>
              {filterDefaultLinks().map((link, index) => {
                return (
                        link.title === 'Sheets' &&
                        <button key={index} onClick={() => fetchPDF(link.cid, link.title, worldDetail)} className={'ctaContainer__button'}>
                          <img src={'/images/file-solid.svg'} alt={'sheets'}/>
                          <p>Download slides</p>
                        </button>
                    )
                }
              )}
              {filterDefaultLinks().map((link, index) => {
                    return (
                        link.title === 'Literature' &&
                        <button key={index} onClick={() => fetchPDF(link.cid, link.title, worldDetail)} className={'ctaContainer__button'}>
                          <img src={'/images/book-solid.svg'} alt={'sheets'}/>
                          <p>Download Literature</p>
                        </button>
                    )
                  }
              )}
              <button onClick={openDiscord} className={'ctaContainer__button'}>
                <img src={'/images/Discord-Logo-Black.svg'} alt={'sheets'}/>
                <p>Discuss on Discord</p>
              </button>
              { quiz &&
                <button onClick={openQuiz} className={'ctaContainer__button'}>
                  <img src={'/images/scroll-solid.svg'} alt={'sheets'}/>
                  <p>Quiz</p>
                </button>
              }
            </div>
            <div className="world-detail__content">
              <div className="world-detail__content__textContainer">
                <h2 className="world-detail__content__textContainer__title" id={'title'}>{videoContent.title}</h2>
                <p className="world-detail__content__textContainer__description">
                  {videoContent.description.replace(/___(.*?)___/g,'')}
                </p>
              </div>
            { courseData && filterDataById() &&
                <TabInfo allLinks={filterDataById} urls={onlyUrl} literature={onlyLiterature}/>
            }
            </div>
            { quizState &&
              <Quiz quizData={quiz} modalState={openQuiz}/>
            }

            <article>
              <Markdown markdown={readme}/>
            </article>
          </>
        )
      )}
    </div>
      </div>
  );
}
import Youtube from 'react-youtube';
import {useEffect, useState} from "react";
import videoData from '../assets/data/explanation.json';

const ExplanationVideos = () => {
  const [playerTimeVid1, setPlayerTimeVid1] = useState<number>()
  const [playerTimeVid2, setPlayerTimeVid2] = useState<number>()
  const [intervalUpdateVid1, setIntervalUpdateVid1] = useState(true)
  const [intervalUpdateVid2, setIntervalUpdateVid2] = useState(true)


  const opts = {
    playerVars: {
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
  };


  // not a very pretty solution to use 2 functions for the same thing, tried using if statement around the event.target.id
  // however they occasionally change for some reason. This solution works but there is room for improvement.

  const updateTimeVid1 = (event) => {

    const checkVid1EverySecond = () => {
      const roundedTime = Math.round(event.target.getCurrentTime());
      setPlayerTimeVid1(roundedTime);
    }

    if (intervalUpdateVid1) {
      setInterval(checkVid1EverySecond, 1000);
      setIntervalUpdateVid1(false);
    }
    if (!intervalUpdateVid1) {
      clearInterval();
    }
  }

  const updateTimeVid2 = (event) => {

    const checkVid2EverySecond = () => {
      const roundedTime = Math.round(event.target.getCurrentTime());
      setPlayerTimeVid2(roundedTime);
    }

    if (intervalUpdateVid2) {
      setInterval(checkVid2EverySecond, 1000);
      setIntervalUpdateVid2(false);
    }
    if (!intervalUpdateVid2) {
      clearInterval();
    }
  }

  return (
    <>
      <div className={'banner'}>
        <div className={'banner__text'}>
          <h1>Explanation</h1>
          <p>Here we will be getting you up and running with everything that has to do with Koios!</p>
        </div>
      </div>

      <div className={'content-container'}>

        <div className={'videos'}>
          {/*First video*/}
          <div className={'introduction'}>
            <h1>{videoData.introduction.title}</h1>
            <p>{videoData.introduction.description}</p>
          </div>

          <div className={'content-row'}>
            <div className={'content-row__list'}>
              <ul>
                {
                  videoData.introduction.timeCodeList.map((data) => {
                    return (
                      <li className={playerTimeVid1 >= data.time ? 'active-color' : ''}>
                        {data.timestring + ' ' + data.label}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={'content-row__video'}>
              { // @ts-ignore is needed because of option types are not working for some reason.
                <Youtube videoId={videoData.introduction.videoId} opts={opts} onPlay={updateTimeVid1}/>
              }
            </div>
          </div>

          {/*Second video*/}
          <div className={'introduction vid2'}>
            <h1>{videoData.metamask.title}</h1>
            <p>{videoData.metamask.description}</p>
          </div>

          <div className={'content-row'}>
            <div className={'content-row__list'}>
              <ul>
                {
                  videoData.metamask.timeCodeList.map((data) => {
                    return (
                      <li className={playerTimeVid2 >= data.time ? 'active-color' : ''}>
                        {data.timestring + ' ' + data.label}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={'content-row__video'}>
              { // @ts-ignore is needed because of option types are not working for some reason.
                <Youtube videoId={videoData.metamask.videoId} opts={opts} onPlay={updateTimeVid2}/>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExplanationVideos;

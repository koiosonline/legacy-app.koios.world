import { useState } from "react";

const TabInfo = (props) => {
  const [allLinks] = useState(props.allLinks);
  const [allLinksState, setAllLinksState] = useState(true);
  const [urls] = useState(props.urls);
  const [urlState, setUrlState] = useState(false);
  const [literature] = useState(props.literature);
  const [literatureState, setLiteratureState] = useState(false);
  const [podcastsState, setpodcastsState] = useState(false);

  const changeTabAll = () => {
    setAllLinksState(true);
    setUrlState(false);
    setLiteratureState(false);
    setpodcastsState(false);
  };

  const changeTabWebsites = () => {
    setAllLinksState(false);
    setUrlState(true);
    setLiteratureState(false);
    setpodcastsState(false);
  };

  const changeTabLiterature = () => {
    setAllLinksState(false);
    setUrlState(false);
    setLiteratureState(true);
    setpodcastsState(false);
  };

  const changeTabPodcasts = () => {
    setAllLinksState(false);
    setUrlState(false);
    setLiteratureState(false);
    setpodcastsState(true);
  };

  return (
    <div className={"tabContainer"}>
      <div className={"tabContainer__tabs"}>
        <button
          onClick={changeTabAll}
          className={allLinksState ? "tabContainer__tabs__button--active" : "tabContainer__tabs__button"}
        >
          All
        </button>
        <button
          onClick={changeTabWebsites}
          className={urlState ? "tabContainer__tabs__button--active" : "tabContainer__tabs__button"}
        >
          Websites
        </button>
        <button
          onClick={changeTabLiterature}
          className={literatureState ? "tabContainer__tabs__button--active" : "tabContainer__tabs__button"}
        >
          Literature
        </button>
        <button
          onClick={changeTabPodcasts}
          className={podcastsState ? "tabContainer__tabs__button--active" : "tabContainer__tabs__button"}
        >
          Podcasts
        </button>
      </div>
      <div className={"contentContainer"}>
        {allLinksState && (
          <ul className={"contentContainer__list"}>
            {allLinks.map((all, index) => {
              return (
                (all.url && (
                  <li className={"contentContainer__list__item"} key={index}>
                    <a
                      href={all.url}
                      className={"contentContainer__list__item__link"}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {all.url.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                )) ||
                (all.pdf && (
                  <li className={"contentContainer__list__item"} key={index}>
                    <a
                      href={"https://ipfs.io/ipfs/" + all.pdf}
                      className={"contentContainer__list__item__link"}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {"https://ipfs.io/ipfs/" + all.pdf}
                    </a>
                  </li>
                )) ||
                (all.cid && (
                  <li className={"contentContainer__list__item"} key={index}>
                    <a
                      href={"https://ipfs.io/ipfs/" + all.cid}
                      className={"contentContainer__list__item__link"}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {all.title}
                    </a>
                  </li>
                ))
              );
            })}
          </ul>
        )}{" "}
        {urlState && (
          <ul className={"contentContainer__list"}>
            {urls.map((all, index) => {
              return (
                all.url && (
                  <li className={"contentContainer__list__item"} key={index}>
                    <a
                      href={all.url}
                      className={"contentContainer__list__item__link"}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {all.url.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                )
              );
            })}
          </ul>
        )}{" "}
        {literatureState && (
          <ul className={"contentContainer__list"}>
            {literature.map((all, index) => {
              return (
                (all.cid && (
                  <li className={"contentContainer__list__item"} key={index}>
                    <a
                      href={"https://ipfs.io/ipfs/" + all.cid}
                      className={"contentContainer__list__item__link"}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {all.title.replace(/^https?:\/\//, "")}
                    </a>
                  </li>
                )) ||
                (all.pdf && (
                  <li className={"contentContainer__list__item"} key={index}>
                    <a
                      href={"https://ipfs.io/ipfs/" + all.pdf}
                      className={"contentContainer__list__item__link"}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      {"https://ipfs.io/ipfs/" + all.pdf}
                    </a>
                  </li>
                ))
              );
            })}
          </ul>
        )}
        {podcastsState && (
          <ul className={"contentContainer__list"}>
            <li className={"contentContainer__list__item"}>
              <p className={"contentContainer__list__item__link"}>No podcasts available</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TabInfo;

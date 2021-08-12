import { Slugify } from "./Util/Slugify";
import { Icon } from "./Util/Icon";

export const ArticlePageLinks = (props) => {
  return (
    <>
      <div className="nav-page-links">
        <a
          className="page-link page-link__previous"
          href={`#${props.pathname}#${Slugify(props.previousVideo, {
            lowerCase: true,
            replaceDot: "-",
            replaceAmpersand: "and",
          })}`}
        >
          <Icon type="arrow-left" className="page-link-icon" />
          <div className="page-link-text">
            <span className="page-link-text__sub-title">Previous</span>
            <span className="page-link-text__video-title">{`${props.previousVideo}`}</span>
          </div>
        </a>
        <a
          className="page-link"
          href={`#${props.pathname}#${Slugify(props.nextVideo, {
            lowerCase: true,
            replaceDot: "-",
            replaceAmpersand: "and",
          })}`}
        >
          <div className="page-link-text">
            <span className="page-link-text__sub-title">Next</span>
            <span className="page-link-text__video-title">{`${props.nextVideo}`}</span>
          </div>
          <Icon type="arrow-right" className="page-link-icon" />
        </a>
      </div>
    </>
  );
};

import { Link, useLocation, useParams } from "react-router-dom";
import { Slugify } from "./Util/Slugify";

type ItemListProps = {
  header?: string;
  items: string[];
};

export const ItemList = (props: ItemListProps) => {
  const location = useLocation();
  const { courseContent } = useParams<{courseContent: string;}>();

  return (
    <div className="item-list">
      {props.header && 
      <h2 className={`item-list__header ${courseContent ? "item-list--" + courseContent: ""}`}>{props.header}</h2>
      }
      <ul className="item-list__list">
        {props.items.map((item, index) => (
          <li className="item-list__item" key={index}>
            <Link className="item-list__link link" to={location.pathname + `/${Slugify(item, {lowerCase: true, replaceAmpersand: "and"})}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

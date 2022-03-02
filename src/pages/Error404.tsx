import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className={"container errorContainer"}>
      <img src={"/images/404.svg"} alt={"404"} className={"errorContainer__img"} />
      <h1 className={"errorContainer__title"}>Oops, you are lost in space</h1>
      <Link to={"/worlds"} className="btn btn-primary btn--fs-16"><p>Go back to all worlds</p></Link>
    </div>
  );
};

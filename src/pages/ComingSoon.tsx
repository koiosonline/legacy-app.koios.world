import { Link } from "react-router-dom";

export const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon__image-container">
        <img src="/images/rocket.svg" alt="Rocket" />
      </div>
      <h1 className="coming-soon__header">Not ready for launch yet</h1>
      <p>We're currently working on this page.</p>
      <Link to="/worlds" className="btn btn-primary btn--fs-16"><p>Go back to all worlds</p></Link>
    </div>
  );
};

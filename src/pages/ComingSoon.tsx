import React from "react";
import Button from "../components/Button";


export const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon__image-container">
        <img src="/images/rocket.svg" alt="Rocket" />
      </div>
      <h1 className="coming-soon__header">Not ready for launch yet</h1>
      <p>We're currently working on this page.</p>
      <Button title="Go back to worlds" link="/worlds"/>
    </div>
  );
};

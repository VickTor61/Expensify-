import React from "react";

const PortfolioData = (props) => {
  return (
    <div>
      <h1>A thing i've done</h1>

      <p>This page is for the item with id of {props.match.params.id}</p>
    </div>
  );
};

export default PortfolioData;

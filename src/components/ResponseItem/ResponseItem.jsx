import React from "react";
import "./ResponseItem.scss";

const ResponseItem = ({ item }) => {
  return (
    <div className="responseCard">
      <div className="prompt">
        <h3>Prompt:</h3>
        <p>{item.prompt}</p>
      </div>
      <div className="response">
        <h3>Response:</h3>
        <p>{item.response}</p>
      </div>
    </div>
  );
};

export default ResponseItem;

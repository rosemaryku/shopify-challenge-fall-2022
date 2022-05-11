import React from "react";
import "./ResponseItem.scss";

const ResponseItem = ({ item }) => {
  return (
    <div className="responseCard">
      <div className="prompt">
        <b>Prompt:</b>
        <p>{item.prompt}</p>
      </div>

      <div className="response">
        <b>Response:</b>
        <p>{item.response}</p>
      </div>
    </div>
  );
};

export default ResponseItem;

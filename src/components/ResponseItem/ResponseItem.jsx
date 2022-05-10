import React from "react";
import "./ResponseItem.scss";

const ResponseItem = ({ item }) => {
  return (
    <div className="responseCard">
      <b>Prompt:</b>
      <p>{item.prompt}</p>

      <b>Response:</b>
      <p>{item.response}</p>
    </div>
  );
};

export default ResponseItem;

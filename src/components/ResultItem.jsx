import React from "react";

const ResultItem = ({ item }) => {
  return (
    <div>
      <b>Prompt:</b>
      <p>{item.prompt}</p>

      <b>Response:</b>
      <p>{item.response}</p>
    </div>
  );
};

export default ResultItem;

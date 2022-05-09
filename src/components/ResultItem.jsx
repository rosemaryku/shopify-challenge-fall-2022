import React from "react";

const ResponseItem = ({ item }) => {
  return (
    <div>
      <b>Prompt:</b>
      <p>{item.prompt}</p>

      <b>Response:</b>
      <p>{item.response}</p>
    </div>
  );
};

export default ResponseItem;

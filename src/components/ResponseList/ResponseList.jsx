import ResponseItem from "../ResponseItem/ResponseItem";
import "./ResponseList.scss";

const ResponseList = ({ responses }) => {
  return (
    <div className="responseList">
      <h4>Responses</h4>

      {responses !== null &&
        responses.map((item, index) => (
          <ResponseItem key={index} item={item} />
        ))}
    </div>
  );
};

export default ResponseList;

import ResponseItem from "../ResponseItem/ResponseItem";
import "./ResponseList.scss";

const ResponseList = ({ responses }) => {
  return (
    <div className="card">
      <div className="responseList">
        <h4>Responses</h4>
      </div>
      <div>
        {responses !== null &&
          responses.map((item, index) => (
            <ResponseItem key={index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ResponseList;

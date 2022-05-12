import ResponseItem from "../ResponseItem/ResponseItem";
import "./ResponseList.scss";

const ResponseList = ({ responses }) => {
  return (
    <div>
      <h2>Responses</h2>
      {responses !== null ? (
        responses.map((item, index) => <ResponseItem key={index} item={item} />)
      ) : (
        <p>No responses yet, submit a question above.</p>
      )}
    </div>
  );
};

export default ResponseList;

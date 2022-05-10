import ResponseItem from "../ResponseItem/ResponseItem";

const ResponseList = ({ responses }) => {
  return (
    <div>
      {responses !== null &&
        responses.map((item, index) => (
          <ResponseItem key={index} item={item} />
        ))}
    </div>
  );
};

export default ResponseList;

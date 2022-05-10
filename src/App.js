import "./App.css";
import ls from "local-storage";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import ResponseItem from "./components/ResultItem";
import Header from "./components/Header/Header";

function App() {
  const [promptInput, setPromptInput] = useState("");
  const [responses, setResponses] = useState([]);

  const isClear = (responses) => {
    return responses == null || !responses.length > 0;
  };

  const removeResponses = () => {
    ls.clear();
    setResponses([]);
  };

  useEffect(() => {
    let myResponses = ls.get("myResponses");
    setResponses(myResponses);
  }, []);

  return (
    <div className="App">
      <Header />
      <Search
        promptInput={promptInput}
        setPromptInput={setPromptInput}
        responses={responses}
        setResponses={setResponses}
      />

      <h3>Responses</h3>
      <div>
        {responses !== null &&
          responses.map((item, index) => (
            <ResponseItem key={index} item={item} />
          ))}
      </div>

      <button disabled={isClear(responses)} onClick={removeResponses}>
        Clear
      </button>
    </div>
  );
}

export default App;

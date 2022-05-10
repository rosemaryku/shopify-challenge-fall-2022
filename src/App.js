import "./App.css";
import ls from "local-storage";
import { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import ResponseList from "./components/ResponseList/ResponseList";
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

      <ResponseList responses={responses} />

      <div>
        <button disabled={isClear(responses)} onClick={removeResponses}>
          Clear Responses
        </button>
      </div>
    </div>
  );
}

export default App;

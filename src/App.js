import "./App.css";
import { useState } from "react";
import PromptForm from "./components/PromptForm";
import ResultItem from "./components/ResultItem";

function App() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();
  const [responses, setResponses] = useState([]);

  return (
    <div className="App">
      <h1>Fun with AI</h1>
      <PromptForm
        promptInput={promptInput}
        setPromptInput={setPromptInput}
        setResult={setResult}
        responses={responses}
        setResponses={setResponses}
      />

      <h3>Responses</h3>
      <div>
        {responses.map((item, index) => (
          <ResultItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;

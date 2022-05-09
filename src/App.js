import "./App.css";
import { useState } from "react";

function App() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

  const data = {
    prompt: promptInput,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    // console.log("Success:", res.choices[0].text);
    setResult(res.choices[0].text);
    setPromptInput("");
  }

  return (
    <div className="App">
      <h1>Fun with GPT-3</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="prompt"
          placeholder="Enter a prompt"
          value={promptInput}
          onChange={(e) => setPromptInput(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <h3>Response:</h3>
      <p>{result}</p>
    </div>
  );
}

export default App;

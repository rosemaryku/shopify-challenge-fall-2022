import ls from "local-storage";
import "./Search.scss";
import { useState } from "react";

const Search = ({ promptInput, setPromptInput, responses, setResponses }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [engine, setEngine] = useState("text-curie-001");

  const data = {
    prompt: promptInput,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  async function handleSubmit() {
    setIsLoading(true);
    const response = await fetch(
      `https://api.openai.com/v1/engines/${engine}/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(data),
      }
    );
    const answer = await response.json();
    let newResponses = [];
    if (responses == null) {
      newResponses = [
        { prompt: promptInput, response: answer.choices[0].text },
      ];
    } else {
      newResponses = [
        { prompt: promptInput, response: answer.choices[0].text },
        ...responses,
      ];
    }
    setResponses(newResponses);
    setIsLoading(false);
    ls.set("myResponses", newResponses);
    setPromptInput("");
  }

  return (
    <div className="card">
      <div className="banner">
        <h4>
          GPT-3 is a powerful AI model created by OpenAI. It can process plain
          text prompts and produce outputs that are hard to distinguish from
          human writing.
        </h4>
      </div>

      <label htmlFor="prompt">
        <b>Ask a geography trivia question here:</b>
      </label>
      <textarea
        id="prompt"
        name="prompt"
        type="text"
        rows="5"
        cols="50"
        value={promptInput}
        onChange={(e) => setPromptInput(e.target.value)}
      />
      <br />
      <select
        value={engine}
        aria-label="Default select example"
        onChange={(e) => setEngine(e.target.value)}
      >
        <option value="text-curie-001">Curie</option>
        <option value="text-ada-001">Ada</option>
        <option value="text-babbage-001">Babbage</option>
        <option value="text-davinci-002">Davinci</option>
      </select>

      <button type="submit" onClick={handleSubmit}>
        {isLoading ? "Loading ..." : "Submit"}
      </button>
    </div>
  );
};

export default Search;

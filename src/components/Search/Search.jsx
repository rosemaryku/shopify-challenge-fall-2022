import ls from "local-storage";
import "./Search.scss";
import { useState } from "react";

const Search = ({ promptInput, setPromptInput, responses, setResponses }) => {
  const [Loading, setLoading] = useState(false);
  const [engine, setEngine] = useState("text-curie-001");
  const [btnDisabled, setBtnDisabled] = useState(true);

  // Disable submit button if no text is entered
  const handleTextChange = (value) => {
    setPromptInput(value);
    if (value === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  };

  // Handle clear responses button
  const removeResponses = () => {
    ls.clear();
    setResponses(null);
  };

  // Evaluate if there are any responses
  const isClear = (responses) => {
    return responses == null || !responses.length > 0;
  };

  // Fetch request from OpenAI API and add answer to responses state
  async function handleSubmit() {
    setLoading(true);

    const data = {
      prompt: promptInput,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    try {
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
      setLoading(false);
      setBtnDisabled(true);
      setPromptInput("");
      ls.set("myResponses", newResponses);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <div className="banner">
        <label htmlFor="prompt">
          <h1>Ask a geography trivia question below:</h1>
        </label>
      </div>

      <textarea
        id="prompt"
        name="prompt"
        type="text"
        rows="5"
        cols="50"
        value={promptInput}
        placeholder="eg., what is the capital city of Canada?"
        onChange={(e) => handleTextChange(e.target.value)}
      />

      <div className="filters">
        <div className="searchEngine">
          <label htmlFor="engine-select">Choose a search engine:</label>
          <select
            id="engine-select"
            value={engine}
            aria-label="Default select example"
            onChange={(e) => setEngine(e.target.value)}
          >
            <option value="text-curie-001">Curie</option>
            <option value="text-ada-001">Ada</option>
            <option value="text-babbage-001">Babbage</option>
            <option value="text-davinci-002">Davinci</option>
          </select>
        </div>

        <div className="buttons">
          <button type="submit" onClick={handleSubmit} disabled={btnDisabled}>
            {Loading ? "Loading ..." : "Submit"}
          </button>
          <button disabled={isClear(responses)} onClick={removeResponses}>
            Clear Responses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

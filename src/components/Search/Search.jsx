import ls from "local-storage";
import "./Search.scss";

const Search = ({
  promptInput,
  setPromptInput,
  setResult,
  responses,
  setResponses,
}) => {
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
    let newResponses = [];
    if (responses == null) {
      newResponses = [{ prompt: promptInput, response: res.choices[0].text }];
    } else {
      newResponses = [
        { prompt: promptInput, response: res.choices[0].text },
        ...responses,
      ];
    }

    setResponses(newResponses);
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">
          <b>Enter a prompt below</b>
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
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;

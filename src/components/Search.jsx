import ls from "local-storage";

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
    setResult(res.choices[0].text);
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
    <div>
      <p>Enter prompt</p>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="prompt"
          placeholder="Enter a prompt"
          value={promptInput}
          onChange={(e) => setPromptInput(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Search;

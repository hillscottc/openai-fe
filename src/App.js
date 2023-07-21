import axios from "axios";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Header from "./Header";
import "./App.css";

const fetchData = async (input) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `Complete this sentence: "${input}"`,
      model: "text-davinci-002",
      max_tokens: 50,
      n: 1,
      stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      },
    }
  );
  return response.data.choices[0].text;
};

const fetchRapperData = async (person1, person2) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Write a rap battle between ${person1} and ${person2}.`,
      },
    ],
    temperature: 0.8,
    max_tokens: 1024,
  });
  // return response.data;
  console.log("Got:", response.data.choices[0].message?.content);
  return response.data.choices[0].message?.content;
};

function App() {
  const [formData, setFormData] = useState({
    person1: "",
    person2: "",
  });

  const [rapResults, setRapResults] = useState("");

  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRapResults("Thinking...");
    const results = await fetchRapperData(formData.person1, formData.person2);
    setRapResults(results);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              Give me a rap battle between
              <input
                type="text"
                value={formData.person1}
                onChange={(e) =>
                  setFormData({ ...formData, person1: e.target.value })
                }
              />
              and
              <input
                type="text"
                value={formData.person2}
                onChange={(e) =>
                  setFormData({ ...formData, person2: e.target.value })
                }
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
          <textarea value={rapResults} rows={30} cols={75} />
        </div>

        <hr />
        <textarea
          cols={500}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={5}
          placeholder="Type in some words and I'll finish the rest..."
        />
        <button className="button" onClick={handleClick}>
          Complete Sentence
        </button>
        {completedSentence && <p>Completed sentence: {completedSentence}</p>}
      </main>
    </div>
  );
}

export default App;

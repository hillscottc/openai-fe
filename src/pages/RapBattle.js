import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

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
  return response.data.choices[0].message?.content;
};

function RapBattle() {
  const [formData, setFormData] = useState({
    person1: "",
    person2: "",
  });

  const [rapResults, setRapResults] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRapResults("Thinking...");
    const results = await fetchRapperData(formData.person1, formData.person2);
    setRapResults(results);
  };

  return (
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
    </main>
  );
}

export default RapBattle;

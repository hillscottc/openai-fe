import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dna } from "react-loader-spinner";
import { getJargon } from "../utils.js";
import MicIcon from "@mui/icons-material/Mic";

const fetchRapperData = async (person1, person2) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  });
  // Silences warning https://community.openai.com/t/error-set-unsafe-header-user-agent-implement-chatgpt/264305
  configuration.baseOptions.headers = {
    Authorization: "Bearer " + process.env.REACT_APP_OPENAI_KEY,
  };
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRapResults("Working....");
    setIsLoading(true);

    // start the jargon timer
    const jargonInterval = setInterval(() => {
      setRapResults((rapResults) => rapResults + "\n" + getJargon());
    }, 3000);

    const MOCKED_QUERY = true;
    if (MOCKED_QUERY) {
      // For fake data, during dev.
      setTimeout(() => {
        clearInterval(jargonInterval); // stop the jargon timer
        setRapResults((rapResults) => rapResults + "\n\n\nRESULTS:\nMOCKED!!!");
        setIsLoading(false);
      }, 10000);
    } else {
      // Do the OpenAI query
      const results = await fetchRapperData(formData.person1, formData.person2);
      clearInterval(jargonInterval); // stop the jargon timer
      setRapResults((rapResults) => rapResults + "\n\n\nRESULTS:\n" + results);
      setIsLoading(false);
    }
  };

  return (
    <main>
      <form>
        <div>
          <Typography variant="h1" gutterBottom>
            <MicIcon fontSize={"inherit"} /> Rap Battle
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Chatbot, give me a rap battle between <br />
            <input
              type="text"
              value={formData.person1}
              onChange={(e) =>
                setFormData({ ...formData, person1: e.target.value })
              }
            />
            &nbsp;and&nbsp;
            <input
              type="text"
              value={formData.person2}
              onChange={(e) =>
                setFormData({ ...formData, person2: e.target.value })
              }
            />
          </Typography>
        </div>
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          GO!
        </Button>
      </form>

      {isLoading && (
        <div class="container-grid">
          <div class="col col-1">
            {/* Loading spinner */}
            <Dna
              visible={isLoading}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
          <div class="col col-2">Working</div>
        </div>
      )}

      <br />
      {rapResults && (
        <textarea value={rapResults} rows={30} cols={75} readOnly />
      )}
    </main>
  );
}

export default RapBattle;

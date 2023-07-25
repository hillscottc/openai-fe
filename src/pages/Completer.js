import {useState} from "react";
import Typography from "@mui/material/Typography";
import SmsIcon from "@mui/icons-material/Sms";
import {fetchCompleter} from "../dataFunctions";

function Completer() {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  async function handleClick() {
    try {
      const completedSentence = await fetchCompleter(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <Typography variant="h1" gutterBottom>
        <SmsIcon fontSize={"inherit"} /> Completer
      </Typography>

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
  );
}

export default Completer;

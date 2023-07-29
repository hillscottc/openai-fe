import {useState, useContext} from "react";
import {Button, Paper, Typography, InputLabel, MenuItem, FormControl, TextField, Box} from "@mui/material";
import {Dna} from "react-loader-spinner";
import {getJargon} from "../common/utils.js";
import ChatIcon from "@mui/icons-material/Chat";
import Fader from "../components/Fader";
import {fetchChat} from "../common/dataFunctions";
import {AppContext} from "../AppContext";
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

// import TextField from "@mui/material/TextField";

function ChatBot() {
  const [formData, setFormData] = useState({
    person1: "",
    person2: "",
    chatType: ""
  });

  const value = useContext(AppContext);

  const [rapResults, setRapResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // setRapResults("Working....");
    setIsLoading(true);

    // start the jargon timer
    // const jargonInterval = setInterval(() => {
    //   setRapResults((rapResults) => rapResults + "\n" + getJargon());
    // }, 3000);

    const MOCKED_QUERY = false;
    if (MOCKED_QUERY) {
      // For fake data, during dev.
      setTimeout(() => {
        // clearInterval(jargonInterval); // stop the jargon timer
        setRapResults((rapResults) => rapResults + "\n\n\nRESULTS:\nMOCKED!!!");
        setIsLoading(false);
      }, 10000);
    } else {
      // Do the OpenAI query

      // const results = await fetchChat(formData.person1, formData.person2);
      const results = await fetchChat(
        {
          persons: [formData.person1, formData.person2],
          topic: null,
          chatType: formData.chatType
        }
      );


      // clearInterval(jargonInterval); // stop the jargon timer
      setRapResults((rapResults) => rapResults + "\n\n\nRESULTS:\n" + results);
      setIsLoading(false);
    }
  };

  const personHelperText = "A person by name or description. Trump? Cleopatra? Sinead's barber? My lazy cousin? etc...";

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "5px 10px",
      }}
    >
      <form>
        <div>
          <Typography variant="h1" gutterBottom>
            <ChatIcon fontSize={"inherit"}/> Chat Bot
          </Typography>

          {/*<h3>context val = {value}</h3>*/}

          <Typography variant="subtitle1" gutterBottom>
            Chat Bot, give me a ...<br/><br/>
            <Box sx={{minWidth: 120}}>
              <FormControl fullWidth>
                <InputLabel>Chat Type</InputLabel>
                <Select
                  value={formData.chatType}
                  label="Chat Type"
                  onChange={(e) =>
                    setFormData({...formData, chatType: e.target.value})
                  }
                >
                  <MenuItem value={"rap battle"}>rap battle</MenuItem>
                  <MenuItem value={"discussion"}>discussion</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <br/>
            between <br/>

            <TextField
              helperText={personHelperText}
              size="small"
              onChange={(e) =>
                setFormData({...formData, person1: e.target.value})
              }
              value={formData.person1}
              fullWidth
              label={"Person"}
              variant="outlined"
            />
            &nbsp;and&nbsp;

            <TextField
              helperText={personHelperText}
              size="small"
              onChange={(e) =>
                setFormData({...formData, person2: e.target.value})
              }
              value={formData.person2}
              fullWidth
              label={"Person"}
              variant="outlined"
            />
          </Typography>
        </div>
        <br/>
        <Button variant="contained" onClick={handleSubmit}>
          GO!
        </Button>
      </form>

      {isLoading && (
        <div className="container-grid">
          <div className="col col-1">
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
          <div className="col col-2">
            <Fader text="Working"></Fader>
            {/*<Fader text={getJargon()}></Fader>*/}
          </div>
        </div>
      )}

      <br/>
      {rapResults && (
        <textarea value={rapResults} rows={30} cols={75} readOnly/>
      )}
    </Paper>
  );
}

export default ChatBot;

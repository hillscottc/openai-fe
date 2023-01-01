import {useState, useContext} from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Dna} from "react-loader-spinner";
import {getJargon} from "../common/utils.js";
import MicIcon from "@mui/icons-material/Mic";
import Fader from "../components/Fader";
import {fetchRapBattle} from "../common/dataFunctions";
import {AppContext} from "../AppContext";

function RapBattle() {
  const [formData, setFormData] = useState({
    person1: "",
    person2: "",
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
      const results = await fetchRapBattle(formData.person1, formData.person2);
      // clearInterval(jargonInterval); // stop the jargon timer
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

          {/*<h3>context val = {value}</h3>*/}

          <Typography variant="subtitle1" gutterBottom>
            Rap Bot, give me a battle between <br />
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
          <div class="col col-2">
            <Fader text="Working"></Fader>
            {/*<Fader text={getJargon()}></Fader>*/}
          </div>
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

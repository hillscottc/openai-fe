import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {Link} from "react-router-dom";

export default function About() {
  return (
    <main>
      <Typography variant="h1" gutterBottom>
        <DashboardIcon fontSize={"inherit"}/> About
      </Typography>

      A React app leveraging the [OpenAI Platform](https://platform.openai.com/).
      <br/><br/>
      Coded with React, React Router and MaterialUI
      <br/><br/>
      Source Code: <a href={"https://github.com/hillscottc/openai-fe"}>https://github.com/hillscottc/openai-fe</a>
      <br/><br/>
      Hosted at <a href="https://scotts-bots.onrender.com/">https://scotts-bots.onrender.com</a> on <a
      href="https://render.com/">Render</a>

    </main>
  );
}

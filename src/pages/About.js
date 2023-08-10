import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {Link} from "react-router-dom";

export default function About() {
  return (
    <main>
      <Typography variant="h1" gutterBottom>
        <DashboardIcon fontSize={"inherit"}/> About
      </Typography>

      A React app leveraging the <a href="https://platform.openai.com/">OpenAI Platform</a>.
      <br/><br/>
      Coded with React, React Router and MaterialUI
      <br/><br/>
      Source Code: <a href={"https://github.com/hillscottc/openai-fe"}>https://github.com/hillscottc/openai-fe</a>

    </main>
  );
}

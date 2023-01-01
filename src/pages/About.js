import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <main>
      <Typography variant="h1" gutterBottom>
        <DashboardIcon fontSize={"inherit"} /> About
      </Typography>

        Source: <a href={"https://github.com/hillscottc/openai-fe"}>https://github.com/hillscottc/openai-fe</a>

    </main>
  );
}

import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Typography variant="h1" gutterBottom>
        <DashboardIcon fontSize={"inherit"}/> Welcome
      </Typography>
      Check out the <Link to={"/chat"}>Chat Bot</Link> .
    </main>
  );
}

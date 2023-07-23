import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Home() {
  return (
    <main>
      <Typography variant="h1" gutterBottom>
        <DashboardIcon fontSize={"inherit"} /> Welcome
      </Typography>
    </main>
  );
}

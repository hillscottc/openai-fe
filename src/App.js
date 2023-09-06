import * as React from "react";
import {Box, Toolbar, Typography, IconButton, Container, CssBaseline, createTheme, ThemeProvider} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AppNavLeft from "./AppNavLeft";
import Copyright from "./components/Copyright";
import AppRoutes from "./AppRoutes";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import {AppContext} from "./AppContext";
import "./index.css";

const defaultTheme = createTheme();

export default function App() {
  const value = 'My Context Value';


  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{display: "flex"}}>
          <CssBaseline/>

          {/* APP HEADER */}
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && {display: "none"}),
                }}
              >
                <MenuIcon/>
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{flexGrow: 1}}
              >
                Scott's Bots
              </Typography>
              {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            </Toolbar>
          </AppBar>

          {/* LEFT NAV DRAWER */}
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon/>
              </IconButton>
            </Toolbar>
            <AppNavLeft/>
          </Drawer>

          {/* MAIN CONTENT */}
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar/>
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
              {/* ROUTES RENDERED */}
              <AppRoutes/>
              <Copyright sx={{pt: 4}}/>
            </Container>
          </Box>
        </Box>

      </ThemeProvider>
    </AppContext.Provider>
  );
}

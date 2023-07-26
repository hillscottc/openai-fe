import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {mainListItems, secondaryListItems} from "./App-LeftNav";
import Copyright from "./components/Copyright";
import Routes from "./Routes";
import {AppBar} from "./components/AppBar";
import {Drawer} from "./components/Drawer";
import "./index.css";
import {AppContext} from "./components/AppContext";


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
                        <Divider/>
                        <List component="nav">
                            {mainListItems}
                            <Divider sx={{my: 1}}/>
                            {secondaryListItems}
                        </List>
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
                            <Routes/>
                            <Copyright sx={{pt: 4}}/>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </AppContext.Provider>
    );
}

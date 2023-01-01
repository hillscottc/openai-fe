import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";
import SmsIcon from "@mui/icons-material/Sms";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

export default function AppNavLeft() {
  return (
    <>
      <Divider/>
      <List component="nav">
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component={Link} to="/rap">
          <ListItemIcon>
            <MicIcon />
          </ListItemIcon>
          <ListItemText primary="Rap Battle" />
        </ListItemButton>

        <ListItemButton component={Link} to="/completer">
          <ListItemIcon>
            <SmsIcon />
          </ListItemIcon>
          <ListItemText primary="Completer" />
        </ListItemButton>
        <Divider sx={{my: 1}}/>
        <ListSubheader component="div" inset>
          Other Stuff
        </ListSubheader>
        <ListItemButton component={Link} to="/about">
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </List>
    </>
  )
}


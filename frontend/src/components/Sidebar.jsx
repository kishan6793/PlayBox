import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Avatar,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

import logo from "../assets/play-box-logo.png";
import profilePhoto from "../assets/profile-photo.svg";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MovieIcon from "@mui/icons-material/Movie";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import ViewListIcon from "@mui/icons-material/ViewList";
import PersonIcon from "@mui/icons-material/Person";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import { Link } from "react-router-dom"; 

const drawerWidth = 250;

function Sidebar({ onPageChange }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#050A30",
        },
      }}
    >
      <Box
        sx={{
          padding: 2,
          color: "white",
          textAlign: "center",
          borderBottom: "2px solid #4A90E2",
          cursor: "pointer",
        }}
      >
        <img src={logo} alt="" />
      </Box>

      <List>
        <ListItem
          button
          onClick={() => onPageChange("Dashboard")}
          sx={{
            "&:hover": {
              backgroundColor: "blue", // Blue background on hover
              cursor: "pointer", // Pointer cursor on hover
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: "white" }} />
        </ListItem>

        <ListItem
          button
          onClick={() => onPageChange("Users")}
          sx={{
            "&:hover": {
              backgroundColor: "blue",
              cursor: "pointer",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Users" sx={{ color: "white" }} />
        </ListItem>

        <ListItem
          button
          onClick={() => onPageChange("Movies")}
          sx={{ "&:hover": { backgroundColor: "blue", cursor: "pointer" } }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <LiveTvIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" sx={{ color: "white" }} />
        </ListItem>

        <ListItem
          button
          onClick={() => onPageChange("Web Series")}
          sx={{
            "&:hover": {
              backgroundColor: "blue",
              cursor: "pointer",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="Web Series" sx={{ color: "white" }} />
        </ListItem>

        {/* Divider after Web Series */}
        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", my: 1 }} />

        <ListItem
          button
          onClick={() => onPageChange("Languages")}
          sx={{
            "&:hover": {
              backgroundColor: "blue",
              cursor: "pointer",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Languages" sx={{ color: "white" }} />
        </ListItem>

        <ListItem
          button
          onClick={() => onPageChange("Menu")}
          sx={{
            "&:hover": {
              backgroundColor: "blue",
              cursor: "pointer",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary="Menu" sx={{ color: "white" }} />
        </ListItem>

        <ListItem
          button
          onClick={() => onPageChange("Packages")}
          sx={{
            "&:hover": {
              backgroundColor: "blue",
              cursor: "pointer",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="Packages" sx={{ color: "white" }} />
        </ListItem>
      </List>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: "pointer",
          //   justifyContent: "space-around",
        }}
      >
        <Avatar
          src={profilePhoto}
          alt="Tony Stark"
          sx={{ width: 56, height: 56, mb: 1, ml: 2 }}
        />
        <Typography
          variant="body2"
          color="white"
          sx={{ ml: 2.5, textAlign: "center" }}
        >
          Tony Stark
        </Typography>
      </Box>
    </Drawer>
  );
}

export default Sidebar;

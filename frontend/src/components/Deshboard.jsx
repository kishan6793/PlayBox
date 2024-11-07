import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

function Dashboard() {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="error">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton
  //         size="large"
  //         aria-label="show 17 new notifications"
  //         color="inherit"
  //       >
  //         <Badge badgeContent={17} color="error">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        // p: 3,
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      {/* <AppBar position="static" sx={{ backgroundColor: "#050A30" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Hello, Tony Stark
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu} */}

      <Box sx={{ m: "20px" }}>
        <Typography variant="h4">Analytics</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {[
            {
              label: "Total Pending",
              value: 508,
              icon: <HourglassEmptyIcon />,
            },
            { label: "Total Sales", value: "₹58945", icon: <TrendingUpIcon /> },
            {
              label: "Total Platform Order",
              value: 466,
              icon: <InventoryIcon />,
            },
            { label: "Total User", value: 6512, icon: <GroupIcon /> },
          ].map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1">{item.label}</Typography>
                    <Typography variant="h5">{item.value}</Typography>
                  </Box>
                  {item.icon}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5">Current Booking Status</Typography>

          <Grid container spacing={2}>
            {/* Total Users */}
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <CardContent>
                  <Typography variant="h5">2</Typography>
                  <Typography variant="subtitle1">Total Users</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Movies */}
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <CardContent>
                  <Typography variant="h5">15</Typography>
                  <Typography variant="subtitle1">Total Movies</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total TV Series */}
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <CardContent>
                  <Typography variant="h5">1</Typography>
                  <Typography variant="subtitle1">Total TV Series</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Packages */}
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <CardContent>
                  <Typography variant="h5">3</Typography>
                  <Typography variant="subtitle1">Total Packages</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Coupons */}
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <CardContent>
                  <Typography variant="h5">0</Typography>
                  <Typography variant="subtitle1">Total Coupons</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Faqs */}
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <CardContent>
                  <Typography variant="h5">0</Typography>
                  <Typography variant="subtitle1">Total Faqs</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Genres */}
            <Grid item xs={3}>
              <Card style={{ backgroundColor: "#e0f7fa" }}>
                <CardContent>
                  <Typography variant="h5">13</Typography>
                  <Typography variant="subtitle1">Total Genres</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;

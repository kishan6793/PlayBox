import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import Sidebar from "../components/Sidebar";
// import Deshboard from "../components/Deshboard";
import MoviePage from "../components/Movie";
import AdminNavbar from "../components/AdminNavbar";
import Table from "../components/Table";

function AdminDeshboard() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <>
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {/* <Sidebar onPageChange={handlePageChange} />{" "} */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <AdminNavbar
              text="Menu"
              NotificationsIcon={true}
              MailIcon={false}
              AccountCircle={false}
            />

            {/* Pass handlePageChange as prop */}
            {/* Conditionally render the Dashboard or MoviesPage component */}
            <Box sx={{ flexGrow: 1 }}>
              {/* {selectedPage === "Dashboard" && <Deshboard />} */}
              {selectedPage === "Movies" && <MoviePage />}
            </Box>
          </Box>
        </Box>
      </div>
      <Table />
    </>
  );
}

export default AdminDeshboard;

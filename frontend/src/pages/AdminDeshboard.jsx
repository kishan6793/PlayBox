import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Deshboard from "../components/Deshboard";
import MoviePage from "../components/MoviePage";
import AdminNavbar from "../components/AdminNavbar";

function AdminDeshboard() {
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar onPageChange={handlePageChange} />{" "}
        <Box sx={{ display: "flex",flexDirection:"column",width:"100%" }}>
          <AdminNavbar />

          {/* Pass handlePageChange as prop */}
          {/* Conditionally render the Dashboard or MoviesPage component */}
          <Box sx={{ flexGrow: 1 }}>
            {selectedPage === "Dashboard" && <Deshboard />}
            {selectedPage === "Movies" && <MoviePage />}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default AdminDeshboard;

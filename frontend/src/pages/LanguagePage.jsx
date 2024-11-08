import React, { useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import Sidebar from "../components/Sidebar";
// import Deshboard from "../components/Deshboard";
import MoviePage from "../components/Movie";
import AdminNavbar from "../components/AdminNavbar";
import TableForLanguage from "../components/TableForLanguage";

function LanguagePage() {
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
              text="Languages"
              NotificationsIcon={true}
              MailIcon={false}
              AccountCircle={false}
            />
          </Box>
        </Box>
      </div>
      lsjdlaj
      <TableForLanguage />
    </>
  );
}

export default LanguagePage;

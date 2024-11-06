import React from 'react';
import { Box, CssBaseline } from "@mui/material";
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Deshboard';

function AdminDeshboard() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar/>
        <Dashboard/>
      </Box>
    </div>
  );
}

export default AdminDeshboard

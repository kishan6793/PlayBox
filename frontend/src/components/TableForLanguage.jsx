import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Typography
} from "@mui/material";

const TableForLanguage = () => {
  const rows = [
    { id: 1, menu: "English" },
    { id: 2, menu: "Hindi" },
    { id: 3, menu: "Gujarati" },
    { id: 4, menu: "Spanish" },
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "80%",
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        marginRight:"25px",
        marginTop:"20px"
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#333" }}>
            <TableCell align="center" sx={{ color: "#fff", fontWeight: "bold" }}>No.</TableCell>
            <TableCell align="center" sx={{ color: "#fff", fontWeight: "bold" }}>Languages</TableCell>
            <TableCell align="center" sx={{ color: "#fff", fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">
                <Typography>{row.id}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{ fontWeight: "bold" }}>{row.menu}</Typography>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#1E90FF",
                    fontWeight: "bold",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1C86EE",
                    },
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableForLanguage;

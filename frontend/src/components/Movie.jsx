import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const StyledTableCell = styled(TableCell)({
  fontWeight: "bold",
  backgroundColor: "#333",
  color: "white",
  textAlign: "center",
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f5f5",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#e0e0e0",
  },
});

const MoviePage = () => {
  const movies = [
    {
      name: "Singhm return",
      releaseDate: "12-12-2023",
      price: "₹79999",
      genre: "Action",
    },
    {
      name: "nun 2",
      releaseDate: "12-01-2024",
      price: "₹89999",
      genre: "Thrill",
    },
    {
      name: "hero",
      releaseDate: "01-01-2025",
      price: "₹99999",
      genre: "Comedy",
    },
    {
      name: "dexter",
      releaseDate: "05-05-2026",
      price: "₹109999",
      genre: "Action",
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <Box sx={{ padding: 3, color: "#333" }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          Movies
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{ marginBottom: 3 }}
          onClick={handleClickOpen}
        >
          Add Movie
        </Button>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Movies</StyledTableCell>
                <StyledTableCell>Release Date</StyledTableCell>
                <StyledTableCell>Platform Price</StyledTableCell>
                <StyledTableCell>Genres</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie, index) => (
                <StyledTableRow key={index}>
                  <TableCell align="center">{movie.name}</TableCell>
                  <TableCell align="center">{movie.releaseDate}</TableCell>
                  <TableCell align="center">{movie.price}</TableCell>
                  <TableCell align="center">{movie.genre}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default MoviePage;

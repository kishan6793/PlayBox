// import React from 'react';
// import {
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Button,
//   Typography,
//   Paper,
// } from '@mui/material';
// import { styled } from '@mui/system';

// const StyledTableContainer = styled(TableContainer)({
//   borderRadius: '10px',
//   overflow: 'hidden',
//   marginTop: '20px',
// });

// const StyledTableCell = styled(TableCell)({
//   fontWeight: 'bold',
//   backgroundColor: '#333',
//   color: 'white',
//   textAlign: 'center',
// });

// const StyledBodyCell = styled(TableCell)({
//   textAlign: 'center',
// });

// const StyledButton = styled(Button)({
//   backgroundColor: '#007bff',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#0056b3',
//   },
//   borderRadius: '8px',
// });
// const MenuTable = () => {
//     const menuItems = [
//         { id: 1, name: 'Home' },
//         { id: 2, name: 'Movies' },
//         { id: 3, name: 'Web series' },
//         { id: 4, name: 'Platform' },
//       ];

//   return (
//     // <TableContainer component={Paper} sx={{ width: "90%", margin: "auto", boxShadow: 3, alignItems:"center",alignContent:"center"  }}>
//     //   <Table>
//     //     <TableHead>
//     //       <TableRow sx={{ backgroundColor: "#333" }}>
//     //         <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>No.</TableCell>
//     //         <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Menu</TableCell>
//     //         <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Action</TableCell>
//     //       </TableRow>
//     //     </TableHead>
//     //     <TableBody>
//     //       {rows.map((row) => (
//     //         <TableRow key={row.id}>
//     //           <TableCell>{row.id}</TableCell>
//     //           <TableCell>{row.menu}</TableCell>
//     //           <TableCell>
//     //             <Button variant="contained" color="primary" sx={{ color: "#fff", fontWeight: "bold" }}>
//     //               Edit
//     //             </Button>
//     //           </TableCell>
//     //         </TableRow>
//     //       ))}
//     //     </TableBody>
//     //   </Table>
//     // </TableContainer>

//     <StyledTableContainer component={Paper} sx={{width:"50%"}}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>No.</StyledTableCell>
//               <StyledTableCell>Menu</StyledTableCell>
//               <StyledTableCell>Action</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {menuItems.map((item) => (
//               <TableRow key={item.id}>
//                 <StyledBodyCell>{item.id}</StyledBodyCell>
//                 <StyledBodyCell>{item.name}</StyledBodyCell>
//                 <StyledBodyCell>
//                   <StyledButton variant="contained">Edit</StyledButton>
//                 </StyledBodyCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </StyledTableContainer>
//   );
// };

// export default MenuTable;


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

const MenuTable = () => {
  const rows = [
    { id: 1, menu: "Home" },
    { id: 2, menu: "Movies" },
    { id: 3, menu: "Web series" },
    { id: 4, menu: "Platform" },
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
            <TableCell align="center" sx={{ color: "#fff", fontWeight: "bold" }}>Menu</TableCell>
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

export default MenuTable;

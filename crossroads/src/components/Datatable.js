import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("John Doe", "437 955 159", "North Bay", 24, 4.0),
  createData("Jane Doe", "444 526 237", "Toronto", 37, 4.3),
  createData("Janet Osborne", "444 754 262", "Burlington", 24, 6.0),
  createData("Brain Adams", "123 456 305", "Brantford", 67, 4.3),
  createData("Evans Rush", "778 455 356", "Toronto", 49, 3.9),
];

const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Subscribed</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

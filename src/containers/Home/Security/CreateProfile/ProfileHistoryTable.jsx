import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { historyProfile } from '../../../../config/securityConfig';

const ExampleTable = () => {
  // Sample data
  

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#0076A3", color: "#fff" }}>
            <TableCell style={{ color: "#fff" }}>#</TableCell>
            <TableCell style={{ color: "#fff" }}>Profile Name</TableCell>
            <TableCell style={{ color: "#fff" }}>Date</TableCell>
            <TableCell style={{ color: "#fff" }}>Time</TableCell>
            <TableCell style={{ color: "#fff" }}>Login name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historyProfile.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.profileName}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.loginName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExampleTable;

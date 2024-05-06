import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { historyProfile } from '../../../../config/securityConfig';

const cellStyle = {
  padding: "0px",
                        paddingLeft: "4px",
                        border: " 1px solid #ddd",
                        fontWeight: "600",
                        font: "14px",
                        
                        color: "white",
                        paddingTop: "3px",
                        paddingBottom: "3px",
}
const headerCellStyle = {
  ...cellStyle,
  backgroundColor: "#0076A3",
  color: "#fff",
};
const bodyCell={
  padding: "0px",
  paddingLeft: "4px",
  border: " 1px solid #ddd",
  minWidth: "100px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}
const ProfileHistoryTable = () => {
  // Sample data
  

  return (
    <TableContainer component={Paper} sx={{maxHeight:"40vh"}}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#0076A3", color: "#fff" }}>
            <TableCell sx={headerCellStyle }></TableCell>
            <TableCell sx={headerCellStyle }>Profile Name</TableCell>
            <TableCell sx={headerCellStyle }>Date</TableCell>
            <TableCell sx={headerCellStyle }>Time</TableCell>
            <TableCell sx={headerCellStyle }>Login name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historyProfile.map((row) => (
             <TableRow key={row.id || index}>
              <TableCell sx={bodyCell}>{row.id}</TableCell>
              <TableCell sx={bodyCell}>{row.profileName}</TableCell>
              <TableCell sx={bodyCell}>{row.date}</TableCell>
              <TableCell sx={bodyCell}>{row.time}</TableCell>
              <TableCell sx={bodyCell}>{row.loginName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileHistoryTable;

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { thirdColor } from '../../../../config';

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
  backgroundColor: thirdColor,
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

const ProfileHistoryTable2 = ({ selectedRow }) => {
 
  return (
    <TableContainer component={Paper} sx={{maxHeight:"40vh",scrollbarWidth:"thin"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={headerCellStyle }>Menu</TableCell>
            <TableCell sx={headerCellStyle }>Action</TableCell>
            <TableCell sx={headerCellStyle }>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedRow.map((action, index) => (
            <TableRow key={index}>
              <TableCell sx={bodyCell}>{action.menu}</TableCell>
              <TableCell sx={bodyCell}>{action.action}</TableCell>
              <TableCell sx={bodyCell}>{action.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileHistoryTable2;

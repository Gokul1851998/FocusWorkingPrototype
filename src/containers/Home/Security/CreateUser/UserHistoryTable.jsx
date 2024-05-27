import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { historyProfile, historyRole, historyUser } from '../../../../config/securityConfig';
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
const UserHistoryTable = ({onRowClick}) => {
  // Sample data

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    onRowClick(row)
  };
  

  return (
    <TableContainer component={Paper} sx={{maxHeight:"40vh",width: 'fit-content'}}>
      <Table stickyHeader>
        <TableHead>
          <TableRow style={{ backgroundColor: "#0076A3", color: "#fff" }}>
            <TableCell sx={headerCellStyle }></TableCell>
            <TableCell sx={headerCellStyle }>User Name</TableCell>
            <TableCell sx={headerCellStyle }>Date</TableCell>
            <TableCell sx={headerCellStyle }>Time</TableCell>
            <TableCell sx={headerCellStyle }>Created by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historyUser.map((row) => (
             <TableRow key={row.id || index} onClick={() => handleRowClick(row)}>
              <TableCell sx={bodyCell}>{row.id}</TableCell>
              <TableCell sx={bodyCell}>{row.userName}</TableCell>
              <TableCell sx={bodyCell}>{row.date}</TableCell>
              <TableCell sx={bodyCell}>{row.time}</TableCell>
              <TableCell sx={bodyCell}>{row.createdBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserHistoryTable;

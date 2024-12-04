
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Select, MenuItem, Button, Paper, Typography } from '@mui/material';
import { useTheme } from '../../config/themeContext';

export default function MassUpdateTableInput({ label, type }) {

    const { currentTheme,switchTheme } = useTheme();
  const cellStyle = {
    padding: "0px",
                          paddingLeft: "4px",
                          border: " 1px solid #ddd",
                          fontWeight: "600",
                          font: "14px",
                          
                          color: currentTheme.sideBarTextColor1,
                          paddingTop: "3px",
                          paddingBottom: "3px",
  }
  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: currentTheme.thirdColor,
    color: currentTheme.sideBarTextColor1,
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
  return (
    <>
    <TableContainer component={Paper}>
      <Table>
        {/* <TableHead>
          <TableRow>
            <TableCell sx={headerCellStyle}>Field</TableCell>
            <TableCell sx={headerCellStyle }>Value</TableCell>
            <TableCell sx={headerCellStyle }>Action</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          <TableRow>
            <TableCell sx={{ ...bodyCell, paddingLeft: "0px", }}>
              <Typography sx={{paddingLeft:'10px'}}>{label}</Typography>
            </TableCell>
            <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
              <Select
                size="small"
                value=""
                onChange={() => {}}
                displayEmpty
                sx={{
                  width: "100%",
                  "& .MuiSelect-select": {
                    fontSize: "0.75rem",
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                  },
                  margin: 0,
                  padding: 0
                }}
              >
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
              </Select>
            </TableCell>
            <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
            <Select
                size="small"
                value=""
                onChange={() => {}}
                displayEmpty
                sx={{
                  width: "100%",
                  "& .MuiSelect-select": {
                    fontSize: "0.75rem",
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                  },
                  margin: 0,
                  padding: 0
                }}
              >
                <MenuItem value={10}>Option 1</MenuItem>
                <MenuItem value={20}>Option 2</MenuItem>
                <MenuItem value={30}>Option 3</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer></>
  )
}

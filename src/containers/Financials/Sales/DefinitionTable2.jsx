import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, IconButton, Tooltip, Box } from '@mui/material';
import { TablecellStyle, dependentData, usedData,TablebodyCell, salesData } from '../../../config/masterSettings';
import { thirdColor } from '../../../config';
import { useTheme } from '../../../config/themeContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function DefinitionTable2() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Dummy data arrays for each tab
 
  const {currentTheme} = useTheme()

  // Determine which data to display based on selected tab
  const data = selectedTab === 0 ? salesData : salesData;

  const [rows,setRows] = useState(salesData)

  const handleAddRow = () => {
    // Get the No of the last row and increment it for the new row
    const newRowNo = rows.length > 0 ? parseInt(rows[rows.length - 1].No) + 1 : 1;

    // Add the new row with the calculated No
    setRows([
      ...rows,
      { No: newRowNo.toString(), Quantity: '', Rate: '', Gross: '', Discount:'' },
    ]);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {/* <Tabs value={selectedTab}   sx={{ minHeight: '35px', height: '35px',padding:"0px" }}   onChange={handleChange} aria-label="basic tabs example">
        <Tab sx={{padding:"0px"}}  label="Dependent" />
        <Tab sx={{padding:"0px"}}  label="Used" />
      </Tabs> */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <Tooltip title="Add">
            <IconButton onClick={handleAddRow} >
              <AddCircleIcon sx={{color:currentTheme.primaryColor}} />
            </IconButton>
            </Tooltip>
            <Tooltip title="Remove">
            <IconButton >
              <RemoveCircleIcon sx={{color:currentTheme.primaryColor}} />
            </IconButton>
            </Tooltip>
          </Box>
      <TableContainer component={Paper}  sx={{ maxHeight: "40vh", scrollbarWidth: "thin" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
              {Object.keys(data[0] || {}).map((key, index) => (
                <TableCell sx={{...TablecellStyle,backgroundColor: currentTheme.thirdColor, color: currentTheme.tableHeaderColor}} key={index}>{key.replace(/([A-Z])/g, ' $1').trim()}</TableCell> // Capitalize and format the key
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows.map((row, index) => (
              <TableRow key={index}>
                {Object.keys(row).map((key, cellIndex) => (
                  <TableCell sx={TablebodyCell} key={cellIndex}>
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default DefinitionTable2;

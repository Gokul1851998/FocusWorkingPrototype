import { Box, Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import AdvancedSearchSelect from '../../../components/Select/AdvanceSearchSelect'
import AdvanceSearchInput from '../../../components/Inputs/AdvanceSearchInput'
import { useTheme } from '../../../config/themeContext';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


export default function DocumentNumberTale() {

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

    
    const [rows, setRows] = useState([
        { Type: '', field: '', sCharacter: '', NoCharacter: '' }
      ]);

      const handleAddRow = () => {
        setRows([...rows, { Type: '', field: '', sCharacter: '', NoCharacter: ''}]);
      };
    
      const handleRemoveSelectedRows = () => {
        setRows(rows.filter(row => !row.selected));
      };
    
      const handleRowChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
      };
    
      const handleRowSelect = (index, selected) => {
        const updatedRows = [...rows];
        updatedRows[index].selected = selected;
        setRows(updatedRows);
      };
  return (
    <>
        <Box sx={{ padding: "10px" }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Tooltip title="Add">
            <IconButton onClick={handleAddRow}>
              <AddCircleIcon sx={{color:currentTheme.primaryColor}} />
            </IconButton>
            </Tooltip>
            <Tooltip title="Remove">
            <IconButton onClick={handleRemoveSelectedRows}>
              <RemoveCircleIcon sx={{color:currentTheme.primaryColor}} />
            </IconButton>
            </Tooltip>
          </Box>
          <TableContainer component={Paper} sx={{ maxHeight: "40vh", minHeight: "40vh", scrollbarWidth: "thin" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={headerCellStyle}></TableCell>
                  <TableCell sx={headerCellStyle}></TableCell>
                  <TableCell sx={headerCellStyle}>Type</TableCell>
                  <TableCell sx={headerCellStyle}>FieldValue</TableCell>
                  <TableCell sx={headerCellStyle}>Staring Character</TableCell>
                  <TableCell sx={headerCellStyle}>No of Character</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index} sx={{ height: "30px", padding: "0px" }}>
                    <TableCell sx={{ ...bodyCell, minWidth: "null" }}>
                      <Checkbox
                        checked={row.selected || false}
                        onChange={(e) => handleRowSelect(index, e.target.checked)}
                        sx={{ padding: "0px", height: "30px" }}
                      />
                    </TableCell>
                    <TableCell sx={{ ...bodyCell, minWidth: "null" }}>
                        {index+1}
                    </TableCell>
                    <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                      <AdvancedSearchSelect
                        value={row.Type}
                        onChange={(e) => handleRowChange(index, 'Type', e.target.value)}
                        options={[
                          { value: 'Type1', label: 'Type1' },
                          { value: 'Type2', label: 'Type2' },
                          { value: 'Type3', label: 'Type3' }
                        ]}
                        width={"100%"}
                      />
                    </TableCell>
                    <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                      <AdvancedSearchSelect
                        value={row.field}
                        onChange={(e) => handleRowChange(index, 'field', e.target.value)}
                        options={[
                          { value: 'Field1', label: 'Field1' },
                          { value: 'Field2', label: 'Field2' },
                          { value: 'Field3', label: 'Field3' }
                        ]}
                        width={"100%"}
                      />
                    </TableCell>
                    <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                    <AdvanceSearchInput
                        value={row.sCharacter}
                        onChange={(e) => handleRowChange(index, 'sCharacter', e.target.value)}
                        width={"100%"}
                      />
                    </TableCell>
                    <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                    <AdvanceSearchInput
                        value={row.NoCharacter}
                        onChange={(e) => handleRowChange(index, 'NoCharacter', e.target.value)}
                        width={"100%"}
                      />
                    </TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </>
  )
}

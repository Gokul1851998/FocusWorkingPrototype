

import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControlLabel, Checkbox,Button, Typography } from '@mui/material';
import { useTheme } from '../../config/themeContext';
import AdvancedSearchSelect from '../Select/AdvanceSearchSelect';
import CheckBox1 from '../CheckBox/CheckBox1';



export const TableSort = () => {

    const [rows, setRows] = useState([
        {  SelectedField: '', SortingOrder: '' },
      ]);



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




      const handleRowChange = (index, field, value) => {
        const newRows = [...rows];
        newRows[index][field] = value;
        setRows(newRows);
    
        if (field === 'SelectedField' && value !== '') {
          handleAddRow();
        }
    
       
      };

      const handleAddRow = () => {
        setRows([...rows, { id: '', field: '', caption: '' }]);
      };

  return (
    <>

<Box sx={{ maxHeight: "300px", minHeight: "300px", overflow: 'auto' }}>
<CheckBox1 label='Sort Subgroup'/>
      <TableContainer component={Paper} sx={{ maxHeight: "40vh", minHeight: "40vh", scrollbarWidth: "thin" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={headerCellStyle}> </TableCell>
              <TableCell sx={headerCellStyle}>Select Field</TableCell>
              <TableCell sx={headerCellStyle}>Sorting Order</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id} sx={{ height: "30px", padding: "0px" }}>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>{index + 1}</TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                <AdvancedSearchSelect
                        value={row.SelectedField}
                        onChange={(e) => handleRowChange(index, 'SelectedField', e.target.value)}
                        options={[
                          { value: 'Field1', label: 'Field1' },
                          { value: 'Field2', label: 'Field2' },
                          { value: 'Field3', label: 'Field3' },
                        ]}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                        value={row.SortingOrder}
                        onChange={(e) => handleRowChange(index, 'SortingOrder', e.target.value)}
                        options={[
                          { value: 'Ascending', label: 'Ascending' },
                          { value: 'Descending', label: 'Descending' },
                        ]}
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
    
  );
};

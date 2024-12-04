import React, { useState } from 'react';
import { Box, Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { useTheme } from '../../../config/themeContext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AdvanceSearchInput from '../../../components/Inputs/AdvanceSearchInput';
import AdvancedSearchSelect from '../../../components/Select/AdvanceSearchSelect';
import AdvanceSearchAutocomplete from '../../../components/AutoComplete/AdvanceSearchAutocomplete';

function ReceiptTable() {
  const { currentTheme, switchTheme } = useTheme();
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
  const bodyCell = {
    padding: "0px",
    paddingLeft: "4px",
    border: " 1px solid #ddd",
    minWidth: "100px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

  }


  const [rows, setRows] = useState([
    { Tags: '', position: '', Dependance: '', Group: '', Filter: '', Mandatory: '' }
  ]);

  const handleAddRow = () => {
    setRows([...rows, { Tags: '', position: '', Dependance: '', Group: '', Filter: '', Mandatory: '' }]);
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
    <Box sx={{ padding: "10px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Tooltip title="Add">
          <IconButton onClick={handleAddRow}>
            <AddCircleIcon sx={{ color: currentTheme.primaryColor }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove">
          <IconButton onClick={handleRemoveSelectedRows}>
            <RemoveCircleIcon sx={{ color: currentTheme.primaryColor }} />
          </IconButton>
        </Tooltip>
      </Box>
      <TableContainer component={Paper} sx={{ maxHeight: "40vh", minHeight: "40vh", scrollbarWidth: "thin" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={headerCellStyle}></TableCell>
              <TableCell sx={headerCellStyle}>No</TableCell>
              <TableCell sx={headerCellStyle}>Tags</TableCell>
              <TableCell sx={headerCellStyle}>Position</TableCell>
              <TableCell sx={headerCellStyle}>Show Dependance</TableCell>
              <TableCell sx={headerCellStyle}>Group</TableCell>
              <TableCell sx={headerCellStyle}>Filter</TableCell>
              <TableCell sx={headerCellStyle}>Mandatory</TableCell>
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
                  {index + 1}
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                    value={row.Tags}
                    onChange={(e) => handleRowChange(index, 'Tags', e.target.value)}
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
                    value={row.position}
                    onChange={(e) => handleRowChange(index, 'position', e.target.value)}
                    options={[
                      { value: 'Field1', label: 'Field1' },
                      { value: 'Field2', label: 'Field2' },
                      { value: 'Field3', label: 'Field3' }
                    ]}
                    width={"100%"}
                  />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvanceSearchAutocomplete
                    width='100%'
                    value={row.Dependance}
                    onChange={(e) => handleRowChange(index, 'Dependance', e.target.value)}
                  // You can adjust the width as needed
                  />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                <AdvancedSearchSelect
                    value={row.Group}
                    onChange={(e) => handleRowChange(index, 'Group', e.target.value)}
                    options={[
                      { value: 'Field1', label: 'Field1' },
                      { value: 'Field2', label: 'Field2' },
                      { value: 'Field3', label: 'Field3' }
                    ]}
                    width={"100%"}
                  />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                <AdvancedSearchSelect
                    value={row.Filter}
                    onChange={(e) => handleRowChange(index, 'Filter', e.target.value)}
                    options={[
                      { value: 'Field1', label: 'Field1' },
                      { value: 'Field2', label: 'Field2' },
                      { value: 'Field3', label: 'Field3' }
                    ]}
                    width={"100%"}
                  />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                <AdvancedSearchSelect
                    value={row.Mandatory}
                    onChange={(e) => handleRowChange(index, 'Mandatory', e.target.value)}
                    options={[
                      { value: 'Field1', label: 'Field1' },
                      { value: 'Field2', label: 'Field2' },
                      { value: 'Field3', label: 'Field3' }
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
  );
}

export default ReceiptTable;

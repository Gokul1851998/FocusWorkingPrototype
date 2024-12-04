

import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControlLabel, Checkbox,Button } from '@mui/material';
import { useTheme } from '../../config/themeContext';
import AdvancedSearchSelect from '../Select/AdvanceSearchSelect';
import AdvanceSearchInput from '../Inputs/AdvanceSearchInput';
import { AutoComplete4 } from '../AutoComplete/AutoComplete4';
import AccountInput1 from '../Inputs/AccountInput1'
import { MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import CheckBox1 from '../CheckBox/CheckBox1';
import RoleSelect1 from '../Select/RoleSelect1';



export const TablePopup = ({ state, save }) => {

  console.log('state',state);
  console.log('save',save);
  const [rows, setRows] = useState([
    { id: '', field: '', caption: '' },
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

  const [accountName, setAccountName] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [condition, setCondition] = React.useState("");
    const [checked, setChecked] = React.useState(false);

    
    const handleChange1 = (event) => {
      setChecked(event.target.checked);
    };
    const handleAccountNameChange = (event) => {
   
        setAccountName(event.target.value);
      };

    const handleLanguageChange = (event) => {
   
        setLanguage(event.target.value);
      };

    const handleConditionChange = (event) => {
   
        setCondition(event.target.value);
      };

  const handleRowChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    if(field === 'field' && value !== ''){
      newRows[index].caption = value;
    }
    setRows(newRows);

    if (field === 'field' && value !== '') {
      handleAddRow();
    }

   
  };

  const handleAddRow = () => {
    setRows([...rows, { id: '', field: '', caption: '' }]);
  };

 

  useEffect(() => {
    if (state === true) {
      const filteredRows = rows.filter(row => row.field !== '' || row.caption !== '');
      save({
        name: accountName,
        language: language,
        checked: checked,
        data: filteredRows,
      });
    }
  }, [state]);
  

  return (
    <>
    <div>
    <MDBCardBody>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput1
                    label='Name'
                    value={accountName}
                    onChange={ handleAccountNameChange}
                    />
                  
                      <RoleSelect1
                                    label="Language"
                                    value={language}
                                    onChange={handleLanguageChange}
                                    options={[
                                      { value: 'ENGLISH', label: 'ENGLISH' },
                                      { value: 'HINDI', label: 'HINDI' },
                                      { value: 'MALAYALAM', label: 'MALAYALAM' },
                                    ]}
                                    mandatory={1}
                                />
                      <RoleSelect1
                                    label="Condition"
                                    value={condition}
                                    onChange={handleConditionChange}
                                    options={[
                                      { value: 'Contains', label: 'Contains' },
                                      { value: 'Like', label: 'Like' }
                                    ]}
                                    mandatory={1}
                                />
                  </MDBCol>
                  
                 <CheckBox1  label="Available in Mobile"/>
                  </MDBCardBody>
    
   
     
    </div>
    

    <Box sx={{ maxHeight: "300px", minHeight: "300px", overflow: 'auto' }}>
      <TableContainer component={Paper} sx={{ maxHeight: "40vh", minHeight: "40vh", scrollbarWidth: "thin" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={headerCellStyle}>Field</TableCell>
              <TableCell sx={headerCellStyle}>Caption</TableCell>
              <TableCell sx={headerCellStyle}>Alignment</TableCell>
              <TableCell sx={headerCellStyle}>Width</TableCell>
              <TableCell sx={headerCellStyle}>Order</TableCell>
              <TableCell sx={headerCellStyle}>Visible</TableCell>
              <TableCell sx={headerCellStyle}>Sortable</TableCell>
              <TableCell sx={headerCellStyle}>Filterable</TableCell>
              <TableCell sx={headerCellStyle}>Resizable</TableCell>
              <TableCell sx={headerCellStyle}>Format</TableCell>
              <TableCell sx={headerCellStyle}>ToolTip</TableCell>
              <TableCell sx={headerCellStyle}>CustomClass</TableCell>
              <TableCell sx={headerCellStyle}>DefaultValue</TableCell>
              <TableCell sx={headerCellStyle}>Default</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id} sx={{ height: "30px", padding: "0px" }}>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                <AdvancedSearchSelect
                        value={row.field}
                        onChange={(e) => handleRowChange(index, 'field', e.target.value)}
                        options={[
                          { value: 'NAME', label: 'NAME' },
                          { value: 'CODE', label: 'CODE' },
                          { value: 'EMAIL', label: 'EMAIL' },
                          { value: 'PHONE', label: 'PHONE' },
                          { value: 'AMOUNT', label: 'AMOUNT' },
                          { value: 'DATE', label: 'DATE' },
                        ]}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvanceSearchInput
                        value={row.caption}
                        onChange={(e) => handleRowChange(index, 'caption', e.target.value)}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                        value={row.alignment}
                        onChange={(e) => handleRowChange(index, 'alignment', e.target.value)}
                        options={[
                          { value: 'LEFT', label: 'LEFT' },
                          { value: 'RIGHT', label: 'RIGHT' },
                        ]}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvanceSearchInput
                        value={row.width}
                        onChange={(e) => handleRowChange(index, 'width', e.target.value)}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvanceSearchInput
                        value={index+1}
                        onChange={(e) => handleRowChange(index, 'order', e.target.value)}
                        width={"100%"}
                        disabled={true}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                        value={row.visible}
                        onChange={(e) => handleRowChange(index, 'visible', e.target.value)}
                        options={[
                          { value: 'true', label: 'T' },
                          { value: 'false', label: 'F' },
                        ]}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                        value={row.sortable}
                        onChange={(e) => handleRowChange(index, 'sortable', e.target.value)}
                        options={[
                          { value: 'true', label: 'T' },
                          { value: 'false', label: 'F' },
                        ]}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                        value={row.filterable}
                        onChange={(e) => handleRowChange(index, 'filterable', e.target.value)}
                        options={[
                          { value: 'true', label: 'T' },
                          { value: 'false', label: 'F' },
                        ]}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                        value={row.resizable}
                        onChange={(e) => handleRowChange(index, 'resizable', e.target.value)}
                        options={[
                          { value: 'Yes', label: 'Y' },
                          { value: 'No', label: 'N' },
                        ]}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvanceSearchInput
                        value={row.format}
                        onChange={(e) => handleRowChange(index, 'format', e.target.value)}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvanceSearchInput
                        value={row.toolTip}
                        onChange={(e) => handleRowChange(index, 'toolTip', e.target.value)}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                        value={row.customClass}
                        onChange={(e) => handleRowChange(index, 'customClass', e.target.value)}
                        options={[
                          { value: 'Yes', label: 'Y' },
                          { value: 'No', label: 'N' },
                        ]}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvanceSearchInput
                        value={row.defaultValue}
                        onChange={(e) => handleRowChange(index, 'defaultValue', e.target.value)}
                        width={"100%"}
                      />
                </TableCell>
                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                  <AdvancedSearchSelect
                        value={row.default}
                        onChange={(e) => handleRowChange(index, 'default', e.target.value)}
                        options={[
                          { value: 'Yes', label: 'Y' },
                          { value: 'No', label: 'N' },
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







import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControlLabel, Checkbox,Button, Typography } from '@mui/material';
import { useTheme } from '../../config/themeContext';
import AdvancedSearchSelect from '../Select/AdvanceSearchSelect';
import AdvanceSearchInput from '../Inputs/AdvanceSearchInput';
import { AutoComplete4 } from '../AutoComplete/AutoComplete4';
import AccountInput1 from '../Inputs/AccountInput1'
import { MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import TableAccountMaster from './TableAccountMaster';
import RoleSelect1 from '../Select/RoleSelect1';



export const TableBackTrack = () => {

    let Columns = [
        {
          "Name": " ",
          "Caption": " ",
          "Alignment": "Left",
          "ColumnWidth": "50",
          "Visible": true,
          "Sortable": true,
          "Filterable": true,
          "DefaultValue": null,
          "Resizable": true,
          "Format": null,
          "Tooltip": "",
          "CustomClass": ""
        },
        {
          "Name": "Month",
          "Caption": "Month",
          "Alignment": "Left",
          "ColumnWidth": "100",
          "Visible": true,
          "Sortable": true,
          "Filterable": true,
          "DefaultValue": null,
          "Resizable": true,
          "Format": null,
          "Tooltip": "",
          "CustomClass": ""
        },
        {
          "Name": "Year",
          "Caption": "Year",
          "Alignment": "Left",
          "ColumnWidth": "100",
          "Visible": true,
          "Sortable": true,
          "Filterable": true,
          "DefaultValue": null,
          "Resizable": true,
          "Format": null,
          "Tooltip": "",
          "CustomClass": ""
        },
        {
          "Name": "Opening Balance",
          "Caption": "Opening Balance",
          "Alignment": "Right",
          "ColumnWidth": "100",
          "Visible": true,
          "Sortable": true,
          "Filterable": true,
          "DefaultValue": null,
          "Resizable": true,
          "Format": null,
          "Tooltip": "",
          "CustomClass": ""
        },
        {
          "Name": "Debit",
          "Caption": "Debit",
          "Alignment": "Right",
          "ColumnWidth": "100",
          "Visible": true,
          "Sortable": true,
          "Filterable": true,
          "DefaultValue": null,
          "Resizable": true,
          "Format": null,
          "Tooltip": "",
          "CustomClass": ""
        },
        {
          "Name": "Credit",
          "Caption": "Credit",
          "Alignment": "Right",
          "ColumnWidth": "100",
          "Visible": true,
          "Sortable": true,
          "Filterable": true,
          "DefaultValue": null,
          "Resizable": true,
          "Format": null,
          "Tooltip": "",
          "CustomClass": ""
        },
        {
          "Name": "Closing Balance",
          "Caption": "Closing Balance",
          "Alignment": "Right",
          "ColumnWidth": "100",
          "Visible": true,
          "Sortable": true,
          "Filterable": true,
          "DefaultValue": null,
          "Resizable": true,
          "Format": null,
          "Tooltip": "",
          "CustomClass": ""
        },
    
      ];
      const  Data = [
        {
          " ": '1',
          "Month": '2024April',
          "Year": "2024",
          "Opening Balance": '0.0000000000',
          "Debit": '0.0000000000',
          "Credit":"0.0000000000",
          "Closing Balance":"0.0000000000"
        },   
        {
          " ": '2',
          "Month": '2024April',
          "Year": "2024",
          "Opening Balance": '0.0000000000',
          "Debit": '0.0000000000',
          "Credit":"0.0000000000",
          "Closing Balance":"0.0000000000"
        },   
        {
          " ": '3',
          "Month": '2024April',
          "Year": "2024",
          "Opening Balance": '0.0000000000',
          "Debit": '0.0000000000',
          "Credit":"0.0000000000",
          "Closing Balance":"0.0000000000"
        },   
        {
          " ": '4',
          "Month": '2024April',
          "Year": "2024",
          "Opening Balance": '0.0000000000',
          "Debit": '0.0000000000',
          "Credit":"0.0000000000",
          "Closing Balance":"0.0000000000"
        },   
         
    ];



  const { currentTheme,switchTheme } = useTheme();

  

//   const [accountName, setAccountName] = React.useState("");
  const [year, setYear] = React.useState("");
    // const [checked, setChecked] = React.useState(false);

    
    

    const handleYearChange = (event) => {
   
        setYear(event.target.value);
      };

//   const handleRowChange = (index, field, value) => {
//     const newRows = [...rows];
//     newRows[index][field] = value;
//     if(field === 'field' && value !== ''){
//       newRows[index].caption = value;
//     }
//     setRows(newRows);

//     if (field === 'field' && value !== '') {
//       handleAddRow();
//     }

   
//   };

//   const handleAddRow = () => {
//     setRows([...rows, { id: '', field: '', caption: '' }]);
//   };

 

//   useEffect(() => {
//     if (state === true) {
//       const filteredRows = rows.filter(row => row.field !== '' || row.caption !== '');
//       save({
//         name: accountName,
//         language: language,
//         checked: checked,
//         data: filteredRows,
//       });
//     }
//   }, [state]);
  
const config = {
    Columns:Columns,
    Data: Data
  }

  return (
    <>
    <div>
    <MDBCardBody>  
        <Typography>Backtrack of Account : ASSETS</Typography>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <RoleSelect1
                  label='Filter by Year'
                        value={year}
                        onChange={handleYearChange}
                        options={[
                          { value: '2024', label: '2024' },
                          { value: '2023', label: '2023' },
                          { value: '2022', label: '2022' },
                        ]}
                        width={250}
                      />
                  </MDBCol>
                  
                  
                  </MDBCardBody>
    
   
     
    </div>
    <Box sx={{ maxHeight: "300px", minHeight: "300px", overflow: 'auto' }}>
                <TableAccountMaster config={config}/>
    </Box >

    
    </>
    
  );
};

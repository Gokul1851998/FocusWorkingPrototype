import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { AddCircleOutline as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from '@mui/icons-material';
import TableSecurity from '../../../components/Tables/TableSecurity';

const initialRows = new Array(10).fill(null).map((_, index) => ({
  iId: index + 1,
  profileName: '',
  createdOn: '',
  modifiedOn: '',
  
}));

const CreateProfile = () => {
  const [rows, setRows] = React.useState(initialRows);
  const [displayLength, setdisplayLength] = React.useState(10);
  const [pageNumber, setpageNumber] = React.useState(1);
  const [changesTriggered, setchangesTriggered] = React.useState(false);
  const [selectedDatas, setselectedDatas] = React.useState([]);
  const [totalRows, settotalRows] = useState(10)
  const [refreshFlag, setrefreshFlag] = React.useState(true)
  const [searchKey, setsearchKey] = useState("");

  const handleRowDoubleClick = (rowiId) => {
  
    // if (rowiId === null) {
    //   setAlertMessage("Please Select Row");
    //   setShowAlert(true);
    //   setalertcolor("#ffcc00");
    //   setTimeout(() => {
    //     setShowAlert(false);
    //   }, 2000);
    // } else {
    //   setdoubleClickediId(rowiId);
    //   setnewOpen(true);
    // }
  };
  const handleSearchKeyChange = (newSearchKey) => {
    setsearchKey(newSearchKey);
  };
  
  const handleSelectedRowsChange = (selectedRowsData) => {
   
    setselectedDatas(selectedRowsData);
  };
  const resetChangesTrigger = () => {
    setchangesTriggered(false);
  };
  const handleDisplayLengthChange = (newDisplayLength) => {
    setdisplayLength(newDisplayLength);
  };

  const handlepageNumberChange = (newpageNumber) => {
    
    setpageNumber(newpageNumber);
  }
  const handleCloseModal = () => {
    setEdit(0)
    setIsModalOpen(false);
  };

  const  handleclose=()=>{
    window.history.back();
  }
  const handleOpen = () => {
    setOpen(true);
  };


  // Handlers for your icons
  const handleAdd = () => {
    // Your logic to add a new profile
  };

  const handleEdit = (id) => {
    // Your logic to edit profile
  };

  const handleDelete = (id) => {
    // Your logic to delete profile
  };

  const handleClose = () => {
    // Your logic to close the component or dialog
  };
  console.log("create profile");

  return (
    <TableSecurity
             
    rows={rows}
    //onExportData={handleExportData}
    onDisplayLengthChange={handleDisplayLengthChange}
    onpageNumberChange={handlepageNumberChange}
   //  onSortChange={handleSortChange}
   onSearchKeyChange={handleSearchKeyChange}
    changesTriggered={changesTriggered}
    setchangesTriggered={resetChangesTrigger}
    onSelectedRowsChange={handleSelectedRowsChange}
    onRowDoubleClick={handleRowDoubleClick}
    totalRows={totalRows}
    
    
  />
  );
}

export default CreateProfile;

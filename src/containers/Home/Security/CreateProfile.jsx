import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack } from '@mui/material';
import { AddCircleOutline as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from '@mui/icons-material';
import TableSecurity from '../../../components/Tables/TableSecurity';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { primaryButtonColor, secondryColor, thirdColor } from '../../../config';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const initialRows = new Array(10).fill(null).map((_, index) => ({
  iId: index + 1,
  profileName: '',
  createdOn: '',
  modifiedOn: '',
  
}));

function BasicBreadcrumbs() {
  return (
    <div role="presentation" style={{display:"flex",flexDirection:"row",gap:"15px",backgroundColor:secondryColor,maxWidth:"fit-content",alignItems:"center"}} onClick={handleClick}>
      <Typography sx={{color:primaryButtonColor,fontWeight:"bold"}}>Home</Typography>
      <Stack spacing={1}>
      <Breadcrumbs  sx={{
            "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
            "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
          }} separator={<NavigateNextIcon fontSize="medium" sx={{color:primaryButtonColor}} />}
        aria-label="breadcrumb">
        
        <Typography sx={{color:primaryButtonColor}}
        
          
        >
          Security
        </Typography>
        <Typography sx={{color:primaryButtonColor}} >Create Profile</Typography>
      </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <IconButton>
        <AddIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <EditIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <DeleteIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <CloseIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
    </Box>
  );
};
const AdditionalIcons = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <IconButton>
        <AddIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <EditIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <DeleteIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <CloseIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
    </Box>
  );
};


const CreateProfile = () => {
  const [rows, setRows] = React.useState(initialRows);
  const [displayLength, setdisplayLength] = React.useState(10);
  const [pageNumber, setpageNumber] = React.useState(1);
  const [changesTriggered, setchangesTriggered] = React.useState(false);
  const [selectedDatas, setselectedDatas] = React.useState([]);
  const [totalRows, settotalRows] = useState(10)
  const [refreshFlag, setrefreshFlag] = React.useState(true)
  const [searchKey, setsearchKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const toggleOpen = () => {
    setIsOpen(true);
    setHide(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(false);
    }, 400);
  };


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

  return (<Box sx={{ display: "flex",flexDirection:"column" }}>
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:secondryColor}}>   
       <BasicBreadcrumbs/>
       <DefaultIcons/>
    </Box>

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
  </Box>
  );
}

export default CreateProfile;

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack } from '@mui/material';
import { AddCircleOutline as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon  } from '@mui/icons-material';
import TableSecurity from '../../../components/Tables/TableSecurity';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { primaryButtonColor, secondryColor, thirdColor } from '../../../config';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import Popover from '@mui/material/Popover';
import PrintIcon from "@mui/icons-material/Print";



function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const initialRows =[{
  iId: 1,
  profileName: 'Abc',
  createdOn: '2020-01-01',
  modifiedOn: '2020-01-01',
  test1:123,
  test2:"1231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231abc" 
  
  
},{
  iId: 1,
  profileName: 'ghi',
  createdOn: '2020-01-01',
  modifiedOn: '2020-01-01',
  test1:"1231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231231abc" ,
  test2:123
  
},{
  iId: 1,
  profileName: 'xyz',
  createdOn: '2020-01-01',
  modifiedOn: '2020-01-01',
  test1:789,
  test2:123
  
}];

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
      <Example/>
    </Box>
  );
};
const AdditionalIcons = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
    </Box>
  );
};
// function Example(args) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hide, setHide] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(true);
//     setHide(true);
//   };
//   const toggleClose = () => {
//     setIsOpen(false);
//     setTimeout(() => {
//       setHide(false);
//     }, 400);
//   };

//   return (
//     <React.StrictMode>
//       {!hide ? (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
            
//           }}
//         >
//           <Button
//             color="primary"
//             onClick={toggleOpen}
//             style={{
//               marginBottom: "1rem",
//               padding: "0.1rem",
//               fontSize: "0.6rem",
//               height: "3rem",
//               borderRadius: "0.5rem 0 0 0.5rem",
//             }}
//           >
//             <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
//           </Button>
//         </div>
//       ) : null}

//       <Collapse horizontal isOpen={isOpen} {...args}>
       
//       <Alert
//         style={{
          
//           boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
//           backgroundColor: secondryColor,
//           display: 'flex',
//           alignItems: 'center',
      
//         }}
//       >
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
//         < AdditionalIcons/>
//         <Button
//         color="primary"
//         onClick={toggleClose}
       
//           style={{
//             marginBottom: "1rem",
//             padding: "0.1rem",
//             fontSize: "0.6rem",
//             height: "3rem",
//             borderRadius: "0 0.5rem 0.5rem 0",
//           }}
//       >
//              <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
//       </Button>
//     </div>
//       </Alert>
      
//       </Collapse>
//     </React.StrictMode>
//   );
// }

function Example() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
      <Button
            color="primary"
           
            style={{
              marginBottom: "0rem",
              padding: "0.1rem",
              fontSize: "0.6rem",
              height: "2rem",
              borderRadius: "0.5rem 0 0 0.5rem",
            }}
          >
            <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
          </Button>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'left',
          horizontal: 'bottom',
        }}
        PaperProps={{
          style: {
            backgroundColor: secondryColor, // Customize the background color here
            padding: '0px', // You can also add other styles like padding, etc.
          },
        }}
        
      >
        <AdditionalIcons />
      </Popover>
    </div>
  );
}



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
 

  return (<Box sx={{ display: "flex",flexDirection:"column",maxWidth:"100%" }}>
    <Box sx={{display:"flex",maxWidth:"100%",flexDirection:"row",justifyContent:"space-between",backgroundColor:secondryColor}}>   
       <BasicBreadcrumbs/>
       <DefaultIcons/>
       
    </Box>
    <Box sx={{ maxWidth:"100%",overflowX: 'auto'}}>
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
    totalRows={rows.length}
    
    
  />
  </Box>
  </Box>
  );
}

export default CreateProfile;
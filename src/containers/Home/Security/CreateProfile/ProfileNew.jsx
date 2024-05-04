import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack, TextField, FormControlLabel, Checkbox, Divider, FormGroup } from '@mui/material';
import { AddCircleOutline , Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon  } from '@mui/icons-material';
import TableSecurity from '../../../../components/Tables/TableSecurity';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { primaryButtonColor, primaryColor, secondryColor, thirdColor } from '../../../../config';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import Popover from '@mui/material/Popover';
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from '@mui/icons-material/History';
import SaveIcon from "@mui/icons-material/Save";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutocompleteSecurity from '../../../../components/AutoComplete/AutocompleteSecurity';
import { createProfileTree, restrictionItems } from '../../../../config/securityConfig';
import Tree1 from '../../../../components/Tree/Tree1';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import DeselectIcon from '@mui/icons-material/Deselect';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const SelectAllIconStyle ={//style for selectAll and unselectAll
  fontSize: "0.8rem",
  padding: "0.5rem",
  "&:hover": {
    backgroundColor: 'transparent',  // Removes hover background color
    "& .MuiTouchRipple-root": {
      color: 'transparent' // Removes ripple effect color change if needed
    }
  },
  "&:active": {
    backgroundColor: 'transparent', // Removes active background color
  }
}

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BasicBreadcrumbs() {
  return (
    <div role="presentation" style={{display:"flex",flexDirection:"row",maxWidth:"fit-content",alignItems:"center"}} onClick={handleClick}>
      
      <Stack spacing={2} sx={{ flex: 1 }}>
      <Breadcrumbs  
      // sx={{
      //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
      //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
      //     }} 
          separator={<NavigateNextIcon fontSize="small" sx={{color:primaryButtonColor}} />}
        aria-label="breadcrumb">
      
      <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "0.8rem" }} // Reduce font size
      key="1"
      color="white"
      onClick={handleClick}
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Home
    </Link>
    <Link
      underline="hover"
      key="2"
      color="white"
      sx={{ fontSize: "0.8rem" }}
      onClick={handleClick}
    >
      Security
    </Link>,
   
    <Typography key="3" color="white" sx={{ fontSize: "0.8rem" }}>
    Create Profile
    </Typography>,
      </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({iconsClick}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      
      
      <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <HistoryIcon sx={{ color:primaryButtonColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                >
                  History
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <SaveIcon sx={{ color:primaryButtonColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                >
                  Save
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <DeleteIcon sx={{ color:primaryButtonColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                >
                  Delete
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("GetRolesInProfile ")}
            >
              <Stack direction="column" alignItems="center">
        <AssignmentIndIcon sx={{ color:primaryButtonColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                >
                  Get Roles In Profile 
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <ContentCopyIcon sx={{ color:primaryButtonColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                >
                  Load From
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <CloseIcon sx={{ color:primaryButtonColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton>
      {/* <Example/> */}
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

function Example() {//AdditionalIcons
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseExtra = () => {
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
        onClose={handleCloseExtra}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'left',
          horizontal: 'bottom',
        }}
        slotProps={{
          paper: {
            style: {
              border:`1px solid ${primaryColor}`,
              backgroundColor: secondryColor, // Customize the background color here
              padding: '0px', // You can also add other styles like padding, etc.
            },
          }
        }}
        
      >
        <AdditionalIcons />
      </Popover>
    </div>
  );
}



const ProfileNew = ({setPage}) => {
 

  const [profileName, setprofileName] = useState(null)
  const [checkedState, setCheckedState] = useState(
    new Array(restrictionItems.length).fill(false)
  );
  const [openRoleInProfile, setOpenRoleInProfile] = useState(false);
 
  const handleIconsClick =(value) => {console.log(value);
        switch (value.trim()) {
          case "new":
            handleAdd()
            break;
          case "close":
            handleclose()
            break;
          case "GetRolesInProfile":
            handleGetRolesInProfile()  
            break;
          default:
            break;
        }
  }
  // Handlers for your icons
  const handleAdd = () => {
    setPage("new")
  };
  const  handleclose=()=>{
    setPage("summary")
  }
  const handleGetRolesInProfile = ()=>{
    console.log("hi");
      setOpenRoleInProfile(true)
  } 
  const handleCloseGetRolesInProfile = ()=>{
    setOpenRoleInProfile(false)
}

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleSelectAll = () => {
    setCheckedState(new Array(restrictionItems.length).fill(true));
  };

  const handleUnselectAll = () => {
    setCheckedState(new Array(restrictionItems.length).fill(false));
  };

  


 

  return (<Box sx={{ display: "flex",flexDirection:"column",width:"100%" }}>
    <Box sx={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",backgroundColor:secondryColor,paddingLeft: 1.5,
            paddingRight: 1.5,}}>   
       <BasicBreadcrumbs/>
       <DefaultIcons iconsClick={handleIconsClick}/>
       
    </Box>
    <Box sx={{ width:"100%",overflowX: 'auto',display:"flex",flexDirection:"column",height:"83vh",overflowY:"auto",scrollbarWidth:"thin"}}>
      <Box sx={{ width:"95%",margin: 'auto',display:"flex",flexDirection:"column",paddingTop:"10px"}}>
        <Typography sx={{fontSize:"20px",color:secondryColor}}>
          Create Profile
        </Typography>
        <Box sx={{display:"flex",flexDirection:"row",mt:2,gap:4,alignItems:"center"}}>
          <Typography sx={{color:"#00000" ,opacity:"0.5"}}>Profile Name</Typography>
          <div style={{minWidth:"200px"}}>
          <AutocompleteSecurity

            key="profile"
            value={profileName?.sName??""}
            onChangeName={setprofileName}
            label={""}
           

          />
          </div>
         
          
        </Box>
        <Box sx={{ display: 'flex',border: '1px solid #c4c4c4', borderRadius: 1, overflow: 'hidden',mt:1 }}>
         
      <Box sx={{ width: '50%'}}>
      <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor:thirdColor}}>
          Menu
        </Typography>
      <Tree1 items={createProfileTree} />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ width: '50%',  height: 550}} >
      <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor:thirdColor}}>
      Restrictions
        </Typography>
        <Box sx={{height: 410,overflowY:"auto", scrollbarWidth:"thin"}}>
      <FormGroup>
        {restrictionItems.map((name, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 15},padding:"0" }}
              />
            }
            label={name}
            sx={{ fontSize: '0.75rem', marginY: 0.1, marginLeft: 0.5, marginRight: 0.5 }} 
          />
        ))}
      </FormGroup>
      </Box>
      <Stack direction="row" spacing={2} mt={2}>
      <IconButton
              aria-label="New"
              sx={SelectAllIconStyle}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <HistoryIcon sx={{ color:primaryButtonColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                >
                  History
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={SelectAllIconStyle}
              onClick={handleSelectAll}
            >
              <Stack direction="column" alignItems="center">
        <SelectAllIcon sx={{ color:primaryColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryColor, fontSize: "0.8rem" }}
                >
                  Select All
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={SelectAllIconStyle}
              onClick={handleUnselectAll}
            >
              <Stack direction="column" alignItems="center">
        <DeselectIcon sx={{ color:primaryColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryColor, fontSize: "0.8rem" }}
                >
                  Unselect All
                </Typography>
              </Stack>
            </IconButton>
      </Stack>
     
    </Box>
    </Box>
        
      </Box>
    
  </Box>
  <Dialog open={openRoleInProfile} onClose={handleCloseGetRolesInProfile} aria-labelledby="form-dialog-title">
  <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor:thirdColor,textAlign:"center"}}>
       Roles in Profile
        </Typography>
        <Box sx={{minHeight:"200px",ml:2}}>
          <Typography>
            Role1
          </Typography>

        </Box>
  <DialogContent>
  <AutocompleteSecurity

    key="profile"
    value={""}
    // onChangeName={}
    label={"Search"}


/>
    {/* You can add more content here such as a list of items */}
  </DialogContent>
  <DialogActions>
    {/* <Button onClick={handleCloseGetRolesInProfile} sx={{backgroundColor:secondryColor,color:"#fff"}}>
      Cancel
    </Button> */}
    <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={handleCloseGetRolesInProfile}
            >
              <Stack direction="column" alignItems="center">
        <CloseIcon sx={{ color:primaryColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryColor, fontSize: "0.6rem" }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton>
    
  </DialogActions>
</Dialog>
  </Box>
  );
}

export default ProfileNew;

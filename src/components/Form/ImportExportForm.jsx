import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack, TextField, FormControlLabel, Checkbox, Divider, FormGroup, Button as ButtonM, FormControl, FormLabel, RadioGroup, Radio } from '@mui/material';
import { AddCircleOutline, Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { primaryButtonColor, primaryColor, secondryColor, thirdColor } from '../../config';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Collapse, CardBody, Button, Card, Alert } from "reactstrap";
import Popover from '@mui/material/Popover';
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from '@mui/icons-material/History';
import SaveIcon from "@mui/icons-material/Save";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import AutocompleteSecurity from '../../../../components/AutoComplete/AutocompleteSecurity';
import { createProfileTree, entityList, restrictionItems,profileRestriction,userRestriction, accountTagRestriction } from '../../config/securityConfig';
// import Tree1 from '../../../../components/Tree/Tree1';
// import SelectAllIcon from '@mui/icons-material/SelectAll';
// import DeselectIcon from '@mui/icons-material/Deselect';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import AutoComplete1 from '../../../../components/AutoComplete/AutoComplete1';
// import ProfileHistoryTable from './ProfileHistoryTable';
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import SettingsIcon from '@mui/icons-material/Settings';
// import DraggableColumnsDialog from './ProfileNameField';
// import AccountInput from '../../../../components/Inputs/AccountInput';
import FileCopyIcon from "@mui/icons-material/FileCopy";
// import ProfileHistoryTable2 from './ProfileHistoryTable2';
// import Autocomplete1 from '../../../../components/AutoComplete/AutoComplete1';
import { MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
// import AutoComplete2 from '../../../../components/AutoComplete/AutoComplete2';
// import { CustomScroll } from 'react-custom-scroll';
// import SearchBox from '../../../../components/SearchBox/SearchBox';
import RoleSelect1 from '../../components/Select/RoleSelect1';
import SecurityInput from '../../components/Inputs/SecurityInput';
import { useTheme } from '../../config/themeContext';
import { templateList } from '../../config/securityConfig';
import AccountInput1 from '../Inputs/AccountInput1';

import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MapIcon from '@mui/icons-material/Map';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AdvanceSearchInput from '../Inputs/AdvanceSearchInput';
import ExportForm from './ExportForm';

const SelectAllIconStyle = {//style for selectAll and unselectAll
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

const DefaultIcons = ({ iconsClick, detailPageId, currentTheme }) => {

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>

<IconButton
      aria-label="Bulk"
      sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons }}
      onClick={() => iconsClick("Bulk")}
    >
      <Stack direction="column" alignItems="center">
        <DynamicFeedIcon sx={{ color: currentTheme.actionIcons }} />
        <Typography
          variant="caption"
          align="center"
          style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
        >
          Bulk
        </Typography>
      </Stack>
    </IconButton>
    <IconButton
      aria-label="Saving Mapping"
      sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons }}
      onClick={() => iconsClick("SavingMapping")}
    >
      <Stack direction="column" alignItems="center">
        <MapIcon sx={{ color: currentTheme.actionIcons }} />
        <Typography
          variant="caption"
          align="center"
          style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
        >
          Saving Mapping
        </Typography>
      </Stack>
    </IconButton>
    <IconButton
      aria-label="Export"
      sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons }}
      onClick={() => iconsClick("Export")}
    >
      <Stack direction="column" alignItems="center">
        <FileDownloadIcon sx={{ color: currentTheme.actionIcons }} />
        <Typography
          variant="caption"
          align="center"
          style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
        >
          Export
        </Typography>
      </Stack>
    </IconButton>
    <IconButton
      aria-label="Import Data"
      sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons }}
      onClick={() => iconsClick("ImportData")}
    >
      <Stack direction="column" alignItems="center">
        <FileUploadIcon sx={{ color: currentTheme.actionIcons }} />
        <Typography
          variant="caption"
          align="center"
          style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
        >
          Import Data
        </Typography>
      </Stack>
    </IconButton>
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons, }}
        onClick={() => iconsClick("close")}
      >
        <Stack direction="column" alignItems="center">
          <CloseIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
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
        <PrintIcon sx={{ color: primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color: primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color: primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color: primaryButtonColor }} />
      </IconButton>
    </Box>
  );
};


function Example() {//AdditionalIcons
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentTheme, switchTheme } = useTheme();
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
              border: `1px solid ${currentTheme.primaryColor}`,
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




const BusinessUnit = [
  { title: "Unit1", iId: 1 },
  { title: "Unit3", iId: 2 },
  { title: "Unit3", iId: 3 },
];

const ImportExportForm = ({ setPage, detailPageId, onClose }) => {


  const [profileName, setprofileName] = useState({ sName: "null", iId: null, profileType: "Profile" })
  const [checkedState, setCheckedState] = useState(
    new Array(restrictionItems.length).fill(false)
  );
  const [openRoleInProfile, setOpenRoleInProfile] = useState(false);
  const [openLoadFrom, setOpenLoadFrom] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [openCustomize, setOpenCustomize] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [select, setSelect] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [openExport, setopenExport] = React.useState(false);

  const { currentTheme } = useTheme();
  const buttonStyle = {
    backgroundColor: currentTheme.secondaryColor,
    color: currentTheme.sideBarTextColor1,
    textTransform: 'none',
    padding: "1px",
    '&:hover': {
      backgroundColor: currentTheme.secondaryColor, // Change as needed
      color: currentTheme.sideBarTextColor1 // Example hover color change
    },

  }

  const handleChild = (data) => {
    console.log(data);
  };

  const handleRowClick = (row) => {

    const data = [{ menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }, { menu: "Create profile", action: "Access", status: "Added" }]
    setSelectedRow(data);

  };

  const handleIconsClick = (value) => {
    switch (value.trim()) {
      case "new":
        handleAdd()
        break;
      case "close":
        onClose()
        break;
      case "GetRolesInProfile":
        handleGetRolesInProfile()
        break;
        case "Export":
        handleOpenExport();
        break;
      case "GetLoadFrom":
        handleLoadFrom()
        break;
      case "GetHistory":
        handleLoadHistory()
        break;
      case "customize":
        handleOpenCustomize()
        break;
      default:
        break;
    }
  }
  // Handlers for your icons
  const handleAdd = () => {
    setPage("new")
  };
  const handleclose = () => {
    
    setPage("summary")
  }
  const handleGetRolesInProfile = () => {

    setOpenRoleInProfile(true)
  }
  const handleCloseGetRolesInProfile = () => {
    setOpenRoleInProfile(false)
  }
  const handleLoadFrom = () => {

    setOpenLoadFrom(true)
  }
  const handleCloseLoadFrom = () => {

    setOpenLoadFrom(false)
  }
  const handleLoadHistory = () => {

    setOpenHistory(true)
  }
  const handleCloseLoadHistory = () => {

    setOpenHistory(false)
  }
  const handleOpenCustomize = () => {

    setOpenCustomize(true)
  }
  const handleCloseCustomize = () => {

    setOpenCustomize(false)
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const handleSelectAll = () => {
    // if(select === '18')
    // {
    //   setCheckedState(new Array(userRestriction.length).fill(true));
    // }
    // if(select === '17' || select === '16')
    // {
    //   setCheckedState(new Array(profileRestriction.length).fill(true));
    // }
    setCheckedState(new Array(restrictionItems.length).fill(true));
  };

  const handleUnselectAll = () => {
    setCheckedState(new Array(restrictionItems.length).fill(false));
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRadioChange = (event) => {
    setprofileName({
      ...profileName,
      profileType: event.target.value,
    });
  };

  const handleOpenExport = () => {
    setopenExport(true);
  };
  const handleCloseExport = () => {
    setopenExport(false);
  };

  return (<Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Box sx={{
      display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingLeft: 1.5,
      paddingRight: 1.5,
    }}>
        <Typography sx={{ fontSize: "20px",color:'#85B3D1' }}>
          Account Tag Import/Export---- Account
        </Typography>
      <DefaultIcons detailPageId={detailPageId} iconsClick={handleIconsClick} currentTheme={currentTheme} />

    </Box>
    <Box sx={{ width: "100%", overflowX: 'auto', display: "flex", flexDirection: "column", height: "83vh", overflowY: "hidden", scrollbarWidth: "thin", paddingBottom: "30px" }}>
      <Box sx={{ width: "95%", margin: 'auto', display: "flex", flexDirection: "column", paddingTop: "10px",  }}>
        

        <MDBCardBody >
          <MDBRow style={{gap:'50px'}}>
            <MDBCol lg="3" md="4" sm="6" xs="12">
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput1  label="Field Name" mandatory="1" /> 
                </MDBCol>
               
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
                label="Template Name"
                value={selectedOption}
                onChange={handleSelectChange}
                options={templateList}
                mandatory={1}
              />    
            </MDBCol>
          </MDBRow>
          <MDBRow style={{gap:'50px'}}>
            <MDBCol lg="3" md="4" sm="6" xs="12">
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <RoleSelect1
                label="Header Field"
                value={selectedOption}
                onChange={handleSelectChange}
                options={templateList}
                mandatory={1}
              />
                </MDBCol>
               
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
                label="Body Field"
                value={selectedOption}
                onChange={handleSelectChange}
                options={templateList}
                mandatory={1}
              />
               
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
                label="Bulk Import"
                value={selectedOption}
                onChange={handleSelectChange}
                options={templateList}
                mandatory={1}
              />
               
            </MDBCol>
            

            
          </MDBRow>
          
        </MDBCardBody>
        
        <Box sx={{ display: 'flex', border: '1px solid #c4c4c4', borderRadius: 1, overflow: 'hidden', mt: 1,}}>

          <Box sx={{ width: '50%' }}>
            <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: currentTheme.thirdColor, color: primaryButtonColor, pl: 1 }}>
              Header Field
            </Typography>   
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderWidth: 1, borderColor: thirdColor }} />
          <Box sx={{ width: '50%', height: 550 }} >
            <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: currentTheme.thirdColor, color: primaryButtonColor, pl: 1 }}>
              Body Field
            </Typography>
            

          </Box>
        </Box>

      </Box>

    </Box>
 
    <Dialog
        sx={{width:'100%'}}
        open={openExport}
        onClose={handleCloseExport}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <ExportForm onClose={handleCloseExport}/>
        </DialogContent>
        {/* <DialogActions>
          <ButtonM onClick={handleCloseExport} sx={buttonStyle}>
            Move
          </ButtonM>
          <ButtonM onClick={handleCloseExport} sx={buttonStyle}>
            Cancel
          </ButtonM>
          
        </DialogActions> */}
      </Dialog>

    

  </Box>
  );
}

export default ImportExportForm;


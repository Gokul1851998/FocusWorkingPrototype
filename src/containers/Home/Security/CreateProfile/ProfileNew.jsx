import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack, TextField, FormControlLabel, Checkbox, Divider, FormGroup, Button as ButtonM, FormControl, FormLabel, RadioGroup, Radio } from '@mui/material';
import { AddCircleOutline, Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { primaryButtonColor, primaryColor, secondryColor, thirdColor } from '../../../../config';
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
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutocompleteSecurity from '../../../../components/AutoComplete/AutocompleteSecurity';
import { createProfileTree, entityList, restrictionItems,profileRestriction,userRestriction, accountTagRestriction, groupList, tagSettingsRestriction } from '../../../../config/securityConfig';
import Tree1 from '../../../../components/Tree/Tree1';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import DeselectIcon from '@mui/icons-material/Deselect';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AutoComplete1 from '../../../../components/AutoComplete/AutoComplete1';
import ProfileHistoryTable from './ProfileHistoryTable';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SettingsIcon from '@mui/icons-material/Settings';
import DraggableColumnsDialog from './ProfileNameField';
import AccountInput from '../../../../components/Inputs/AccountInput';
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ProfileHistoryTable2 from './ProfileHistoryTable2';
import Autocomplete1 from '../../../../components/AutoComplete/AutoComplete1';
import { MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import AutoComplete2 from '../../../../components/AutoComplete/AutoComplete2';
import { CustomScroll } from 'react-custom-scroll';
import SearchBox from '../../../../components/SearchBox/SearchBox';
import RoleSelect1 from '../../../../components/Select/RoleSelect1';
import SecurityInput from '../../../../components/Inputs/SecurityInput';
import { useTheme } from '../../../../config/themeContext';

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

function BasicBreadcrumbs({ currentTheme }) {
  return (
    <div role="presentation" style={{ display: "flex", flexDirection: "row", maxWidth: "fit-content", alignItems: "center" }} onClick={handleClick}>

      <Stack spacing={2} sx={{ flex: 1 }}>
        <Breadcrumbs
          // sx={{
          //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
          //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
          //     }} 
          separator={<NavigateNextIcon fontSize="small" sx={{ color: currentTheme.actionIcons, }} />}
          aria-label="breadcrumb">

          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center", fontSize: "1rem", color: currentTheme.actionIcons, }} // Reduce font size
            key="1"

            onClick={handleClick}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            key="2"

            sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}
            onClick={handleClick}
          >
            Security
          </Link>,

          <Typography key="3" sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}>
            Create Profile
          </Typography>,
        </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({ iconsClick, detailPageId, currentTheme }) => {

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>

      {/* {detailPageId !=0 ?
      <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons, }}
              onClick={()=>iconsClick("GetHistory")}
            >
              <Stack direction="column" alignItems="center">
        <HistoryIcon sx={{ color: currentTheme.actionIcons, }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  History
                </Typography>
              </Stack>
            </IconButton>
            :null
      }       */}
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons, }}
      //onClick={()=>iconsClick("close")}
      >
        <Stack direction="column" alignItems="center">
          <SaveIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            Save
          </Typography>
        </Stack>
      </IconButton>
      {detailPageId != 0 ?
        <IconButton
          aria-label="New"
          sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons, }}
        //onClick={()=>iconsClick("close")}
        >
          <Stack direction="column" alignItems="center">
            <DeleteIcon sx={{ color: currentTheme.actionIcons, }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
            >
              Delete
            </Typography>
          </Stack>
        </IconButton>
        : null
      }
      {/* {detailPageId !=0 ?
            <IconButton
                aria-label="Clone"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <FileCopyIcon sx={{ color: currentTheme.actionIcons, }}  />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Clone
                  </Typography>
                </Stack>
              </IconButton> 
              :null
            }   */}
      {detailPageId != 0 ? (
        <IconButton
          aria-label="New"
          sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          onClick={() => iconsClick("Moveprofile")}
        >
          <Stack direction="column" alignItems="center">
            <PersonIcon sx={{ color: currentTheme.actionIcons, }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
            >
              Move Profile
            </Typography>
          </Stack>
        </IconButton>
      ) : null}
      {detailPageId != 0 ?
        <IconButton
          aria-label="New"
          sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons, }}
          onClick={() => iconsClick("GetRolesInProfile ")}
        >
          <Stack direction="column" alignItems="center">
            <AssignmentIndIcon sx={{ color: currentTheme.actionIcons, }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
            >
              Get Roles In Profile
            </Typography>
          </Stack>
        </IconButton>
        : null
      }
      {detailPageId !=1?
          <IconButton
          aria-label="New"
          sx={{ fontSize: "0.8rem", padding: "0.5rem", color: currentTheme.actionIcons, }}
          onClick={() => iconsClick("GetLoadFrom")}
        >
          <Stack direction="column" alignItems="center">
            <FileCopyIcon sx={{ color: currentTheme.actionIcons, }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
            >
              Load From
            </Typography>
          </Stack>
        </IconButton>
      :null}
      
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

const ProfileNew = ({ setPage, detailPageId }) => {


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
  const [selectedOption, setSelectedOption] = React.useState({ entity:'',group:''});
  const [openMoveProfile, setOpenMoveProfile] = React.useState(false);

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
        handleclose()
        break;
      case "GetRolesInProfile":
        handleGetRolesInProfile()
        break;
        case "Moveprofile":
        handleMoveProfile();
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

  const handleSelectChange = (event, type) => {
    setSelectedOption({
      ...selectedOption,
      [type]: event.target.value,
    });
  };

  const handleRadioChange = (event) => {
    setprofileName({
      ...profileName,
      profileType: event.target.value,
    });
  };

  const handleMoveProfile = () => {
    setOpenMoveProfile(true);
  };
  const handleCloseMoveProfile = () => {
    setOpenMoveProfile(false);
  };

  return (<Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Box sx={{
      display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingLeft: 1.5,
      paddingRight: 1.5,
    }}>
      <BasicBreadcrumbs currentTheme={currentTheme} />
      <DefaultIcons detailPageId={detailPageId} iconsClick={handleIconsClick} currentTheme={currentTheme} />

    </Box>
    <Box sx={{ width: "100%", overflowX: 'auto', display: "flex", flexDirection: "column", height: "83vh", overflowY: "auto", scrollbarWidth: "thin", paddingBottom: "30px" }}>
      <Box sx={{ width: "95%", margin: 'auto', display: "flex", flexDirection: "column", paddingTop: "10px" }}>
        <Typography sx={{ fontSize: "20px" }}>
          Create Profile
        </Typography>
        <Box
          sx={{
            pl: 3,
            pb: 2,
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          <FormControl>
            <FormLabel sx={{ mb: 2 }} id="demo-row-radio-buttons-group-label">
              Profile/Group
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={profileName.profileType}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                sx={{ padding: 0, mr: 5, ml: 1 }}
                value="Profile"
                control={<Radio sx={{ padding: 0 }} />}
                label="Profile"
              />
              <FormControlLabel
                value="Group"
                control={<Radio sx={{ padding: 0 }} />}
                label="Group"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              {/* <AccountInput label="Profile Name" mandatory="1" /> */}
              {profileName.profileType === "Profile" ? (
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Profile Name" mandatory="1" />
                </MDBCol>
              ) : (
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Group Name" mandatory="1" />
                </MDBCol>
              )}
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
  <RoleSelect1
    label="Group"
    value={selectedOption.group}
    onChange={(event) => handleSelectChange(event, 'group')}
    options={groupList}
    mandatory={1}
  />
</MDBCol>
<MDBCol lg="3" md="4" sm="6" xs="12">
  <RoleSelect1
    label="Business Entity"
    value={selectedOption.entity}
    onChange={(event) => handleSelectChange(event, 'entity')}
    options={entityList}
    mandatory={1}
  />
</MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <SecurityInput label="Remarks" multiline={true} />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2, gap: 4, alignItems: "center" }}>
          {/* <Typography sx={{color:"#00000" ,opacity:"0.8"}}>Profile Name</Typography> */}
          {/* <div style={{minWidth:"200px",display:"flex",alignItems:"center"}}>
          <AutoComplete1

            autoId="profile"
            
            
            autoLabel={""}
            formData={profileName.sName}
            setFormData={setprofileName}
           

          />
          <IconButton
              aria-label="New"
              sx={SelectAllIconStyle}
              onClick={()=>handleIconsClick("customize")}
            >
              <Stack direction="column" alignItems="center">
        <SettingsIcon />
       
              </Stack>
            </IconButton>
          </div> */}






        </Box>
        <Box sx={{ display: 'flex', border: '1px solid #c4c4c4', borderRadius: 1, overflow: 'hidden', mt: 1 }}>

          <Box sx={{ width: '50%' }}>
            <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: currentTheme.thirdColor, color: primaryButtonColor, pl: 1 }}>
              Menu
            </Typography>
            <Tree1 items={createProfileTree} setSelect={setSelect} />
          </Box>
          <Divider orientation="vertical" flexItem sx={{ borderWidth: 1, borderColor: thirdColor }} />
          <Box sx={{ width: '50%', height: 550 }} >
            <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: currentTheme.thirdColor, color: primaryButtonColor, pl: 1 }}>
              Restrictions
            </Typography>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Box sx={{ height: 410, overflowY: "auto", scrollbarWidth: "thin" }}>
              <FormGroup>
                {/* {restrictionItems.map((name, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 15 }, padding: "0" }}
                      />
                    }
                    label={name}
                    sx={{ fontSize: '0.75rem', marginY: 0.1, marginLeft: 0.5, marginRight: 0.5 }}
                  />
                ))} */}

{(select === '16' || select === '17') && profileRestriction.map((name, index) => (
  <FormControlLabel
    key={index}
    control={
      <Checkbox
        checked={checkedState[index]}
        onChange={() => handleOnChange(index)}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 15 }, padding: "0" }}
      />
    }
    label={name}
    sx={{ fontSize: '0.75rem', marginY: 0.1, marginLeft: 0.5, marginRight: 0.5 }}
  />
))}
{(select === '18') && userRestriction.map((name, index) => (
  <FormControlLabel
    key={index}
    control={
      <Checkbox
        checked={checkedState[index]}
        onChange={() => handleOnChange(index)}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 15 }, padding: "0" }}
      />
    }
    label={name}
    sx={{ fontSize: '0.75rem', marginY: 0.1, marginLeft: 0.5, marginRight: 0.5 }}
  />
))}
{(select === '21') && accountTagRestriction.map((name, index) => (
  <FormControlLabel
    key={index}
    control={
      <Checkbox
        checked={checkedState[index]}
        onChange={() => handleOnChange(index)}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 15 }, padding: "0" }}
      />
    }
    label={name}
    sx={{ fontSize: '0.75rem', marginY: 0.1, marginLeft: 0.5, marginRight: 0.5 }}
  />
))}
{(select === '33') && tagSettingsRestriction.map((name, index) => (
  <FormControlLabel
    key={index}
    control={
      <Checkbox
        checked={checkedState[index]}
        onChange={() => handleOnChange(index)}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 15 }, padding: "0" }}
      />
    }
    label={name}
    sx={{ fontSize: '0.75rem', marginY: 0.1, marginLeft: 0.5, marginRight: 0.5 }}
  />
))}
              </FormGroup>
            </Box>
            <Box>
            <Stack  direction="row" spacing={2} mt={2}>

<IconButton
  aria-label="New"
  sx={SelectAllIconStyle}
  onClick={handleSelectAll}
>
  <Stack direction="column" alignItems="center">
    <SelectAllIcon sx={{ color: currentTheme.primaryColor }} />
    <Typography
      variant="caption"
      align="center"
      style={{ color: currentTheme.primaryColor, fontSize: "0.8rem" }}
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
    <DeselectIcon sx={{ color: currentTheme.primaryColor }} />
    <Typography
      variant="caption"
      align="center"
      style={{ color: currentTheme.primaryColor, fontSize: "0.8rem" }}
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

      </Box>

    </Box>
    <Dialog open={openRoleInProfile} onClose={handleCloseGetRolesInProfile} aria-labelledby="form-dialog-title">
      <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: currentTheme.thirdColor, color: currentTheme.sideBarTextColor1, textAlign: "center" }}>
        Roles in Profile
      </Typography>
      <Box sx={{ minHeight: "200px", ml: 2 }}>
        <Typography>
          Role1
        </Typography>

      </Box>
      <DialogContent>
        <input placeholder='Search' style={{ borderRadius: "5px", border: "1px solid #ddd" }} />
        {/* You can add more content here such as a list of items */}
      </DialogContent>
      <DialogActions>
        <ButtonM onClick={handleCloseGetRolesInProfile}
          sx={buttonStyle}

        >
          Cancel
        </ButtonM>
        {/* <IconButton
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
            </IconButton> */}

      </DialogActions>
    </Dialog>
    <Dialog open={openLoadFrom} onClose={handleCloseLoadFrom} aria-labelledby="form-dialog-title">
      <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: currentTheme.thirdColor, color: currentTheme.sideBarTextColor1, textAlign: "center" }}>
        Load From
      </Typography>
      <Box sx={{ minHeight: "200px", ml: 2 }}>
        <Typography>
          Profile1
        </Typography>

      </Box>
      <DialogContent>
        <input placeholder='Search' style={{ borderRadius: "5px", border: "1px solid #ddd" }} />
        {/* You can add more content here such as a list of items */}
      </DialogContent>
      <DialogActions>
        <ButtonM onClick={handleCloseLoadFrom}
          sx={buttonStyle}


        >
          Ok
        </ButtonM>
        <ButtonM onClick={handleCloseLoadFrom}
          sx={buttonStyle}


        >
          Cancel
        </ButtonM>
        {/* <IconButton
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
            </IconButton> */}

      </DialogActions>
    </Dialog>
    <Dialog open={openHistory} onClose={handleCloseLoadHistory}>
      <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: currentTheme.thirdColor, textAlign: "center", color: currentTheme.sideBarTextColor1 }}>
        History
      </Typography>
      <Box sx={{ minHeight: "200px", padding: "30px", maxHeight: "80vh", overflowY: "scroll", scrollbarWidth: "thin" }}>
        <ProfileHistoryTable onRowClick={handleRowClick} />
        {selectedRow && (
          <Box sx={{ marginTop: 2 }}>
            {/* <Typography>Selected Row Details:</Typography> */}
            {/* Render additional table based on selected row */}
            <ProfileHistoryTable2 selectedRow={selectedRow} />
          </Box>
        )}

      </Box>
      <DialogContent>

        {/* You can add more content here such as a list of items */}
      </DialogContent>
      <DialogActions>
        {/* <ButtonM onClick={handleCloseLoadHistory} 
     sx={buttonStyle}

    
    >
      Ok
    </ButtonM> */}
        <ButtonM onClick={handleCloseLoadHistory}
          sx={buttonStyle}


        >
          Close
        </ButtonM>


      </DialogActions>
    </Dialog>
    <Dialog
        open={openMoveProfile}
        onClose={handleCloseMoveProfile}
        aria-labelledby="form-dialog-title"
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: currentTheme.thirdColor, textAlign: "center",color:currentTheme.sideBarTextColor1 }}
        >
          Move Profile
        </Typography>
        <Box sx={{ minHeight: "200px", ml: 2 }}>
          <Typography >Profile1</Typography>
          <Typography>Profile2</Typography>
        </Box>
        <DialogContent>
          <input
            placeholder="Search"
            style={{ borderRadius: "5px", border: "1px solid #ddd" }}
          />
          {/* You can add more content here such as a list of items */}
        </DialogContent>
        <DialogActions>
          <ButtonM onClick={handleCloseMoveProfile} sx={buttonStyle}>
            Move
          </ButtonM>
          <ButtonM onClick={handleCloseMoveProfile} sx={buttonStyle}>
            Cancel
          </ButtonM>
          {/* <IconButton
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
            </IconButton> */}
        </DialogActions>
      </Dialog>

    <DraggableColumnsDialog open={openCustomize} onClose={handleCloseCustomize} />

  </Box>
  );
}

export default ProfileNew;

import React, { useState } from "react";
import { Box, CssBaseline, Dialog, DialogActions, DialogContent, IconButton, TextField, styled } from "@mui/material";
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../../../components/Tree/Tree1";
import {
  primaryButtonColor,
  primaryColor,
  secondryColor,
  thirdColor,
} from "../../../../../config";
import { accountTree, searchadvanceTreeItemsAccount, massUpdateItem } from "../../../../../config/masterConfig";
import TableAccounts from "../../../../../components/Tables/TableAccounts";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import WidgetsIcon from "@mui/icons-material/Widgets";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ReorderIcon from "@mui/icons-material/Reorder";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import AccountDetails from "./AccountDetails";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import VerifiedIcon from "@mui/icons-material/Verified";
import StopIcon from "@mui/icons-material/Stop";
import BlockIcon from "@mui/icons-material/Block";
import { useTheme } from "../../../../../config/themeContext";
import AutoCompleteMasterSummeries from "../../../../../components/AutoComplete/AutoCompleteMasterSummeries";
import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
import BackTrackPopup from "./BackTrackPopup";
import MassUpdatePopup from "./MassUpdatePopup";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Sortpopup from "./Sortpopup";
import TagCreationDetailed from "../../../../Settings/TagCreation/TagCreationDetailed";
import TransferPopup from "./TransferPopup";
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ImportExportPopup from "./ImportExportPopup";
import PropertiesPage from "./PropertiesPage";


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const actions = [
  { icon: <GroupAddIcon />, name: "Group" },
  { icon: <DeleteSweepIcon />, name: "Delete All" },
  // { icon: <EventBusyIcon />, name: "Close Account" },
  // { icon: <FolderOpenIcon />, name: "Open Close Account" },
  { icon: <SystemUpdateAltIcon />, name: "Mass Update" },
  { icon: <HomeRepairServiceIcon />, name: "Tag Settings" },
  { icon: <SettingsApplicationsIcon />, name: "Customize View" },
  // { icon: <AccountTreeIcon />, name: "Customize Tree" },
  { icon: <ReorderIcon />, name: "Backtrack" },
  { icon: <TransferWithinAStationIcon />, name: "Transfer" },
  { icon: <ImportExportIcon />, name: "Import/Export" },
  { icon: <ArrowUpwardIcon />, name: "Move Up" },
  { icon: <ArrowDownwardIcon />, name: "Move Down" },
  { icon: <SortIcon />, name: "Sort" },
  { icon: <AccountBalanceIcon />, name: "Ledger" }
];

export default function AccountMaster(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [propertiesPage, setpropertiesPage] = useState(false);
  const [showTablePopup, setShowTablePopup] = useState(false);
  const [massUpdatePopup, setmassUpdatePopup] = useState(false);
  const [import1, setImport1] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [sortPopup, setSortPopup] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [first, setfirst] = useState(false)
  const [selectedId, setSelectedId] = useState(null);

  const Navigate = useNavigate();



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

  const infoPanelOpen = () => {
    setIsInfo(true);
    setInfoHide(true);
  };

  const infoPanelClose = () => {
    setIsInfo(false);
    setTimeout(() => {
      setInfoHide(false);
    }, 400);
  };

  const handleProfileSelect = (id) => {
    setSelectedId(id);
  };

  const handleDetailPageOpen = () => {
    // if(id === 1)
    // {
    //   setDetailPage(true);
    // }
    // setfirst(false) 
    setDetailPage(true);
  };

  const handlePropertiesPageOpen = () => {
    
    setpropertiesPage(true);
  };

  const handlePopup = () => {
    setfirst(true);
  };
  const handleClosePopup = () => {
    setfirst(false);
  };

  const handleDetailPageClose = () => {
    setDetailPage(false);
  };
  const handlePropertiesPageClose = () => {
    setpropertiesPage(false);
  };

  // const handleSubmit = (item) =>{
  //   if(item === 'Backtrack')
  //   {
  //     setShowTablePopup(true);
  //   }
  // }
  const handleSubmit = (item) => {
    switch (item) {
      case "Backtrack":
        setShowTablePopup(true);
        break;
      case "Mass Update":
        setmassUpdatePopup(true);
        break;
      case "Sort":
        setSortPopup(true);
        break;
      case "Tag Settings":
        Navigate("/NavigateTag");
        break;
      case "Transfer":
        setTransfer(true);
        break;
        case "Group":
          // handleDetailPageOpen();
        break;
        case "Customize View":
          Navigate("/NavigateView");
          break;
        case "Import/Export":
          setImport1(true)
          break;
    }
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem", color: currentTheme.actionIcons, }} // Reduce font size
      key="1"
      color="white"
      onClick={handleClick}
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="white"
      sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}
      onClick={handleClick}
    >
      Tag
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="white"
      sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}
      onClick={handleClick}
    >
      Account
    </Link>,
    <Typography key="4" color="white" sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}>
      Account Tag
    </Typography>,
  ];

  const handleClose = () => {
    window.history.back();
  };
  const getBackgroundColor = () => {
    return localStorage.getItem('color') === 'true' ? '#000' : '#fff';
  };
  return (
    <>
      <CssBaseline />

      <React.StrictMode>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingLeft: 1.5,
            paddingRight: 1.5,
            zIndex: 1,
            // backgroundColor: secondryColor,
          }}
        >
          <Stack spacing={2} sx={{ flex: 1 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" sx={{ color: currentTheme.actionIcons, }} />}
              aria-label="breadcrumb"
              style={{ color: primaryButtonColor }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          

          { propertiesPage ?(<Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ flex: "0 0 auto" }}
            >
              <IconButton
                aria-label="Save"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <SaveIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Save
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                onClick={handlePropertiesPageClose}
                aria-label="Close"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <CloseIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Close
                  </Typography>
                </Stack>
              </IconButton>
              </Stack>):!detailPage  ? (
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ flex: "0 0 auto" }}
            >
              <IconButton
                onClick={handleDetailPageOpen}
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <AddIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    New
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                aria-label="Add group"
                sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
                onClick={handleDetailPageOpen}
              >
                <Stack direction="column" alignItems="center">
                  <GroupAddIcon style={{ color: currentTheme.actionIcons, }} />

                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Add Group
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
              onClick={handleDetailPageOpen}
                aria-label="Edit"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <EditIcon style={{ color: currentTheme.actionIcons, }} />

                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Edit
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                aria-label="Clone"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <FileCopyIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Clone
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
              onClick={handlePropertiesPageOpen}
                aria-label="Property"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <RoomPreferencesIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Property
                  </Typography>
                </Stack>
              </IconButton>

              <IconButton
                aria-label="Authorize"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <VerifiedIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Authorize
                  </Typography>
                </Stack>
              </IconButton>

              <IconButton
                aria-label="Reject"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <BlockIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Reject
                  </Typography>
                </Stack>
              </IconButton>

              <IconButton
                aria-label="Stop"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <StopIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Stop
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                aria-label="Delete"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <DeleteIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Delete
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                onClick={handleClose}
                aria-label="Close"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <CloseIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Close
                  </Typography>
                </Stack>
              </IconButton>
            </Stack>
          ) : (
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ flex: "0 0 auto" }}
            >
              <IconButton
                aria-label="Save"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <SaveIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Save
                  </Typography>
                </Stack>
              </IconButton>


              <IconButton
                aria-label="Clone"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <ContentCopyIcon style={{ color: currentTheme.actionIcons }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Clone
                  </Typography>
                </Stack>
              </IconButton>


              <IconButton
                aria-label="Copy"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <FileCopyIcon style={{ color: currentTheme.actionIcons }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Copy
                  </Typography>
                </Stack>
              </IconButton>

              <IconButton
                aria-label="Paste"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <ContentPasteIcon style={{ color: currentTheme.actionIcons }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Paste
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                onClick={handleDetailPageClose}
                aria-label="Close"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <CloseIcon style={{ color: currentTheme.actionIcons, }} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Close
                  </Typography>
                </Stack>
              </IconButton>
            </Stack>
          )}
        </Box>
        {propertiesPage ? (
          <PropertiesPage />
        ) :detailPage ? (
          <AccountDetails />
        ) : (
          <>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{
                position: "absolute",
                bottom: 25,
                right: 16,

                '& .MuiSpeedDial-fab': {
                  backgroundColor: currentTheme.secondaryColor, // Ensure the SpeedDial button has the custom background color
                },
              }}
              icon={<SpeedDialIcon />}
              direction="left"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => { handleSubmit(action.name) }}
                />
              ))}
            </SpeedDial>
            <div style={{ display: "flex" }}>
              {!hide ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: isOpen ? null : 590,
                  }}
                >
                  <Button
                    sx={{ backgroundColor: currentTheme.primaryColor }}
                    onClick={toggleOpen}
                    style={{
                      marginBottom: "1rem",
                      padding: "0.3rem",
                      fontSize: "0.6rem",
                      height: "5rem",
                      borderRadius: "0 0.5rem 0.5rem 0",
                      backgroundColor: currentTheme.secondaryColor,
                      color: currentTheme.sideBarTextColor1
                    }}
                  >
                    <KeyboardDoubleArrowRightIcon
                      style={{ fontSize: "1rem" }}
                    />
                  </Button>
                </div>
              ) : null}

              <Collapse horizontal isOpen={isOpen} {...args}>
                <Alert
                  style={{
                    width: 350,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                    backgroundColor: getBackgroundColor(),
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <AutocompleteSecurity label='' />
                      <IconButton aria-label="tree">
                        <WidgetsIcon sx={{ color: currentTheme.thirdColor }} />
                      </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Tree1 items={accountTree} />

                      <Button
                        color="primary"
                        onClick={toggleClose}
                        style={{

                          padding: "0.3rem",
                          fontSize: "0.6rem",
                          height: "5rem",
                          borderRadius: "0.5rem 0 0 0.5rem",
                          backgroundColor: currentTheme.secondaryColor,
                          color: currentTheme.sideBarTextColor1
                        }}
                      >
                        <KeyboardDoubleArrowLeftIcon
                          style={{ fontSize: "1rem" }}
                        />
                      </Button>
                    </Box>
                  </div>
                </Alert>
              </Collapse>

              <TableAccounts items={searchadvanceTreeItemsAccount} />
            </div>
            <div
              style={{ position: "fixed", bottom: 20, right: 20, zIndex: 100 }}
            >
              <Collapse
                style={{ marginBottom: "0.3rem" }}
                isOpen={isInfo}
                {...args}
              >
                <Alert
                  style={{
                    width: 350,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                    backgroundColor: primaryButtonColor,
                    flexDirection: "column", // Arrange children vertically
                    alignItems: "center",
                    marginBottom: "0.3rem",
                    position: "relative", // Add position relative to the Alert
                  }}
                >
                  <Button

                    variant="contained"
                    onClick={infoPanelClose}
                    style={{
                      borderRadius: "0 0 0.5rem 0.5rem",
                      height: "1.2rem",
                      width: "8rem",
                      marginBottom: "0.3rem",
                      marginLeft: "5rem",
                      top: 0, // Align to the top
                      right: 0, // Align to the end
                      transform: "translateY(-100%)", // Move the button to the top of the container
                      display: "flex",
                      justifyContent: "center", // Center horizontally
                      alignItems: "center", // Center vertically
                      backgroundColor: currentTheme.secondaryColor,
                      color: currentTheme.sideBarTextColor1
                    }}
                  >
                    <KeyboardDoubleArrowDownIcon style={{ fontSize: "1rem" }} />
                  </Button>
                  <Box
                    sx={{
                      overflowX: "hidden",
                      height: 550,
                      flexGrow: 1,
                      minWidth: 300,
                      scrollbarWidth: "thin",
                      zIndex: 100,
                    }}
                  >
                    <Typography
                      sx={{ flex: "1 1 100%" }}
                      variant="h6"
                      id="tableTitle"
                      component="div"
                    >
                      Info Panel
                    </Typography>
                  </Box>
                </Alert>
              </Collapse>

              {!infoHide ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={infoPanelOpen}
                  style={{
                    borderRadius: "0.5rem 0.5rem 0 0",
                    height: "1.2rem",
                    width: "8rem",
                    marginBottom: "0.3rem",
                    marginRight: "5rem",
                    display: "flex",
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                    backgroundColor: currentTheme.secondaryColor,
                    color: currentTheme.sideBarTextColor1
                  }}
                >
                  <KeyboardDoubleArrowUpIcon style={{ fontSize: "1rem" }} />
                </Button>
              ) : null}
              {showTablePopup && <BackTrackPopup onClose={() => setShowTablePopup(false)} />}
              {massUpdatePopup && <MassUpdatePopup onClose={() => setmassUpdatePopup(false)} items={massUpdateItem} />}
              {sortPopup && <Sortpopup onClose={() => setSortPopup(false)}/>}
                {import1 && <ImportExportPopup onClose={() => setImport1(false)} />}
                {transfer && <TransferPopup onClose={() => setTransfer(false)}/>}
              {/* <Dialog
        open={first}
        onClose={handleClosePopup}
        aria-labelledby="form-dialog-title"
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: currentTheme.thirdColor, textAlign: "center",color:currentTheme.sideBarTextColor1 }}
        >
          Select View
        </Typography>
        <Box sx={{ minHeight: "200px", ml: 2, minWidth:'500px' }}>
        <Typography 
          onClick={() => handleProfileSelect(1)} 
          sx={{ 
            cursor: 'pointer', 
            backgroundColor: selectedId === 1 ? 'lightgray' : 'transparent',
            padding: '8px',
            borderRadius: '4px',
            marginBottom: '4px',
            marginRight:'15px'
          }}
        >
          Account
        </Typography>
        <Typography 
          onClick={() => handleProfileSelect(2)} 
          sx={{ 
            cursor: 'pointer', 
            backgroundColor: selectedId === 2 ? 'lightgray' : 'transparent',
            padding: '8px',
            borderRadius: '4px',
            marginRight:'15px'
          }}
        >
          View
        </Typography>
        </Box>
        <DialogActions>
          <Button variant="contained" onClick={() => handleDetailPageOpen(selectedId)} sx={buttonStyle}>
            Ok
          </Button>
        </DialogActions>
      </Dialog> */}
            </div>
          </>
        )}
      </React.StrictMode>
    </>
  );
}

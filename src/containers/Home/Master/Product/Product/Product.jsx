import React, { useState } from "react";
import { Box, CssBaseline, IconButton, TextField, styled } from "@mui/material";
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
import { accountTree, massUpdateItem, productData, productTree, searchadvanceTreeItemsProduct } from "../../../../../config/masterConfig";
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
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import VerifiedIcon from '@mui/icons-material/Verified';
import StopIcon from '@mui/icons-material/Stop';
import BlockIcon from '@mui/icons-material/Block';
import TableProduct from "../../../../../components/Tables/TableProduct";
import ProductDetails from "./ProductDetails";
import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
import { useTheme } from "../../../../../config/themeContext";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NewSet from "./NewSet";
import CategoryIcon from '@mui/icons-material/Category';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SetTypePage from "./SetTypePage";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import Sortpopup from "../../Account/AccountMaster/Sortpopup";
import BackTrackPopup from "../../Account/AccountMaster/BackTrackPopup";
import MassUpdatePopup from "../../Account/AccountMaster/MassUpdatePopup";
import ImportExportPopup from "../../Account/AccountMaster/ImportExportPopup";
import TransferPopup from "../../Account/AccountMaster/TransferPopup";
import { useNavigate } from "react-router-dom";

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
  { icon: <CategoryIcon />, name: "Set Type",id:1 },
  { icon: <SwapHorizIcon />, name: "Unit Conversion" },
  { icon: <ImportExportIcon />, name: "Import/Export" },
  { icon: <ArrowUpwardIcon />, name: "Move Up" },
  { icon: <ArrowDownwardIcon />, name: "Move Down" },
  { icon: <SortIcon />, name: "Sort" },
  { icon: <Inventory2OutlinedIcon />, name: "Stock Ledger" },
];

export default function Product(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [newPage, setNewPage] = useState(false);
  const [pageId, setPageId] = useState(0);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [pageId1, setpageId1] = useState(null);

  const { currentTheme } = useTheme();

  const Navigate = useNavigate();

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

  const handleDetailPageOpen = () => {
    setDetailPage(true);
  };
  const handleNewPageOpen = () => {
    setNewPage(true);
  };

  const handleDetailPageClose = () => {
    setDetailPage(false);
    setPageId(0)
  };

  const handleSubmit = (item) => {
    switch (item) {
      case "Ledger":
        setpageId1(1)
        break;
      case "Sort":
        setpageId1(2)
        break;
      case "Move Down":
        setpageId1(3)
        break;
      case "Move Up":
        setpageId1(4)
        break;
        case "Import/Export":
          setpageId1(5)
          break;
          case "Transfer":
            setpageId1(6)
        break;
      case "Backtrack":
        setpageId1(7)
        break;
      case "Customize Tree":
        setpageId1(8)
        break;
      case "Customize View":
          Navigate("/NavigateView");
          break;
      case "Tag Settings":
            Navigate("/NavigateTag");
            break;
      case "Mass Update":
        setpageId1(9)
        break;
      case "Delete All":
        setpageId1(10)
        break;
        case "Group":
          // handleDetailPageOpen();
        break; 
    }
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem", color: currentTheme.actionIcons }} // Reduce font size
      key="1"

      onClick={handleClick}
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"

      sx={{ fontSize: "1rem", color: currentTheme.actionIcons }}
      onClick={handleClick}
    >
      Tag
    </Link>,
    <Link
      underline="hover"
      key="3"

      sx={{ fontSize: "1rem", color: currentTheme.actionIcons }}
      onClick={handleClick}
    >
      Product
    </Link>,
    <Typography key="4" color="white" sx={{ fontSize: "1rem", color: currentTheme.actionIcons }}>
      Product
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

          {!detailPage && !pageId ? (
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
                  <AddIcon style={{ color: currentTheme.actionIcons }} />
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
              >
                <Stack direction="column" alignItems="center">
                  <GroupAddIcon style={{ color: currentTheme.actionIcons }} />

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
                aria-label="Edit"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <EditIcon style={{ color: currentTheme.actionIcons }} />

                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Edit
                  </Typography>
                </Stack>
              </IconButton>
              {/* <IconButton
                onClick={handleNewPageOpen}
                aria-label="Edit"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <AddCircleOutlineIcon style={{ color: currentTheme.actionIcons }} />

                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    New Set
                  </Typography>
                </Stack>
              </IconButton> */}
              <IconButton
                aria-label="Clone"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <FileCopyIcon style={{ color: currentTheme.actionIcons }} />
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
                aria-label="Property"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <RoomPreferencesIcon style={{ color: currentTheme.actionIcons }} />
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
                  <VerifiedIcon style={{ color: currentTheme.actionIcons }} />
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
                  <BlockIcon style={{ color: currentTheme.actionIcons }} />
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
                  <StopIcon style={{ color: currentTheme.actionIcons }} />
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
                  <DeleteIcon style={{ color: currentTheme.actionIcons }} />
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
                  <CloseIcon style={{ color: currentTheme.actionIcons }} />
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
          ) :  (
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
                  <SaveIcon style={{ color: currentTheme.actionIcons }} />
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
                  <FileCopyIcon style={{ color: currentTheme.actionIcons }} />
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
                onClick={handleDetailPageClose}
                aria-label="Close"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <CloseIcon style={{ color: currentTheme.actionIcons }} />
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
      { pageId === 1 ? (
  <SetTypePage />
)  : detailPage ? (
          <ProductDetails />
        ): (
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
                      <AutocompleteSecurity label="" />
                      <IconButton aria-label="tree">
                        <WidgetsIcon sx={{ color: currentTheme.thirdColor }} />
                      </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Tree1 items={productTree} />

                      <Button

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

              <TableProduct masterData={productData} items={searchadvanceTreeItemsProduct} />
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
              {pageId1 === 2 && <Sortpopup onClose={() => setpageId1(null)}/>}
          {pageId1 === 7 && <BackTrackPopup onClose={() => setpageId1(null)} />}
          { pageId1 === 9 && <MassUpdatePopup onClose={() => setpageId1(null)} items={massUpdateItem} />}
          {pageId1 === 5 && <ImportExportPopup onClose={() => setpageId1(null)} />}
          {pageId1 === 6 && <TransferPopup onClose={() => setpageId1(null)}/>}

            </div>
          </>
        )}
        
      </React.StrictMode>
    </>
  );
}

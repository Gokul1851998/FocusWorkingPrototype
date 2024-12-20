// import React, { useState } from "react";
// import { Box, CssBaseline, IconButton, TextField, styled } from "@mui/material";
// import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// import Tree1 from "../../../../../components/Tree/Tree1";
// import {
//   primaryButtonColor,
//   primaryColor,
//   secondryColor,
//   thirdColor,
// } from "../../../../../config";
// import { accountTree } from "../../../../../config/masterConfig";
// import TableAccounts from "../../../../../components/Tables/TableAccounts";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import Stack from "@mui/material/Stack";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import HomeIcon from "@mui/icons-material/Home";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import EditIcon from "@mui/icons-material/Edit";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CloseIcon from "@mui/icons-material/Close";
// import AddIcon from "@mui/icons-material/Add";
// import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Backdrop from "@mui/material/Backdrop";
// import SpeedDial from "@mui/material/SpeedDial";
// import SpeedDialIcon from "@mui/material/SpeedDialIcon";
// import SpeedDialAction from "@mui/material/SpeedDialAction";
// import SaveIcon from "@mui/icons-material/Save";
// import PrintIcon from "@mui/icons-material/Print";
// import ShareIcon from "@mui/icons-material/Share";
// import GroupsIcon from "@mui/icons-material/Groups";
// import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
// import EventBusyIcon from "@mui/icons-material/EventBusy";
// import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
// import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import ReorderIcon from "@mui/icons-material/Reorder";
// import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import { Checkbox, FormControlLabel } from "@mui/material";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBInput,
//   MDBRow,
// } from "mdb-react-ui-kit";
// import AccountInput from "../../../../../components/Inputs/AccountInput";
// import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
// import GetAppIcon from "@mui/icons-material/GetApp";
// import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
// import ClearAllIcon from "@mui/icons-material/ClearAll";
// import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
// import UnitConversionTable from "./UnitConversionTable";
// import { useTheme } from "../../../../../config/themeContext";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

// const actions = [
//   { icon: <GroupAddIcon />, name: "Group" },
//   { icon: <DeleteSweepIcon />, name: "Delete All" },
//   // { icon: <EventBusyIcon />, name: "Close Account" },
//   // { icon: <FolderOpenIcon />, name: "Open Close Account" },
//   { icon: <SystemUpdateAltIcon />, name: "Mass Update" },
//   { icon: <HomeRepairServiceIcon />, name: "Tag Settings" },
//   { icon: <SettingsApplicationsIcon />, name: "Customize View" },
//   // { icon: <AccountTreeIcon />, name: "Customize Tree" },
//   { icon: <ReorderIcon />, name: "Backtrack" },
//   { icon: <TransferWithinAStationIcon />, name: "Transfer" },
// ];

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&::before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={
//       props.expanded ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />
//     }
//     {...props}
//   />
// ))(({ theme,currentTheme  }) => ({
//   color: currentTheme.sideBarTextColor1,
//   backgroundColor: currentTheme.secondaryColor,
//   flexDirection: "row",
//   justifyContent: "space-between",
//   "& .MuiAccordionSummary-content": {
//     flexGrow: 1,
//   },
//   "& .MuiSvgIcon-root": {
//     fontSize: "1.5rem",
//     color: currentTheme.sideBarTextColor1,
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   paddingLeft: theme.spacing(3),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
//   gap: 100,
// }));

// export default function UnitConversion(args) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hide, setHide] = useState(false);
//   const [isInfo, setIsInfo] = useState(false);
//   const [infoHide, setInfoHide] = useState(false);
//   const [detailPage, setDetailPage] = useState(false);
//   const [more, setMore] = React.useState(false);
//   const handleMoreOpen = () => setMore(true);
//   const handleMoreClose = () => setMore(false);
//   const [expanded, setExpanded] = React.useState("panel1");

//   const { currentTheme } = useTheme();

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

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

//   const infoPanelOpen = () => {
//     setIsInfo(true);
//     setInfoHide(true);
//   };

//   const infoPanelClose = () => {
//     setIsInfo(false);
//     setTimeout(() => {
//       setInfoHide(false);
//     }, 400);
//   };

//   const handleDetailPageOpen = () => {
//     setDetailPage(true);
//   };

//   const handleDetailPageClose = () => {
//     setDetailPage(false);
//   };

//   const handleClose = () => {
//     window.history.back();
//   };

//   const breadcrumbs = [
//     <Link
//       underline="hover"
//       sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons }} // Reduce font size
//       key="1"

//       onClick={handleClick}
//     >
//       <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//       Home
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"

//       sx={{ fontSize: "1rem" ,color: currentTheme.actionIcons}}
//       onClick={handleClick}
//     >
//       Tag
//     </Link>,
//     <Link
//       underline="hover"
//       key="3"

//       sx={{ fontSize: "1rem",color: currentTheme.actionIcons }}
//       onClick={handleClick}
//     >
//       Product
//     </Link>,
//     <Typography key="4" color="white" sx={{ fontSize: "1rem" ,color: currentTheme.actionIcons}}>
//       Unit Conversion
//     </Typography>,
//   ];

//   return (
//     <>
//       <CssBaseline />

//       <React.StrictMode>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//             paddingLeft: 1.5,
//             paddingRight: 1.5,
//             zIndex: 1,
//             // backgroundColor: secondryColor,
//           }}
//         >
//           <Stack spacing={2} sx={{ flex: 1 }}>
//             <Breadcrumbs
//               separator={<NavigateNextIcon fontSize="small" sx={{color: currentTheme.actionIcons,}} />}
//               aria-label="breadcrumb"
//               style={{ color: primaryButtonColor }}
//             >
//               {breadcrumbs}
//             </Breadcrumbs>
//           </Stack>

//           <Stack
//             direction="row"
//             alignItems="center"
//             spacing={1}
//             sx={{ flex: "0 0 auto" }}
//           >
//             <IconButton
//               aria-label="New"
//               sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons }}
//             >
//               <Stack direction="column" alignItems="center">
//                 <GetAppIcon style={{ color: currentTheme.actionIcons }} />
//                 <Typography
//                   variant="caption"
//                   align="center"
//                   style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
//                 >
//                   Import
//                 </Typography>
//               </Stack>
//             </IconButton>


//             <IconButton
//               aria-label="Clone"
//               sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//             >
//               <Stack direction="column" alignItems="center">
//                 <SaveIcon style={{ color: currentTheme.actionIcons }} />
//                 <Typography
//                   variant="caption"
//                   align="center"
//                   style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
//                 >
//                   Save
//                 </Typography>
//               </Stack>
//             </IconButton>
//             <IconButton
//               aria-label="Delete"
//               sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//             >
//               <Stack direction="column" alignItems="center">
//                 <DeleteIcon style={{ color: currentTheme.actionIcons }} />

//                 <Typography
//                   variant="caption"
//                   align="center"
//                   style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
//                 >
//                   Delete
//                 </Typography>
//               </Stack>
//             </IconButton>
//             <IconButton
//               onClick={handleClose}
//               aria-label="Close"
//               sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
//             >
//               <Stack direction="column" alignItems="center">
//                 <CloseIcon style={{ color: currentTheme.actionIcons }} />
//                 <Typography
//                   variant="caption"
//                   align="center"
//                   style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
//                 >
//                   Close
//                 </Typography>
//               </Stack>
//             </IconButton>
//           </Stack>
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "20px",
//             padding: 2,
//           }}
//         >
//           <AutoComplete2 autoLabel="Base Unit" />
//           <AccountInput label="Base Unit Category" />
//           {/* <AutoComplete2 autoLabel="Load Form" /> */}
//           <AutoComplete2 autoLabel="Entity" />
//         </Box>

//        <UnitConversionTable />

//       </React.StrictMode>
//     </>
//   );
// }
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
import { accountTree, productData, searchadvanceTreeItemsProduct } from "../../../../../config/masterConfig";
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
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import GroupsIcon from "@mui/icons-material/Groups";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ReorderIcon from "@mui/icons-material/Reorder";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import AccountInput from "../../../../../components/Inputs/AccountInput";
import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
import GetAppIcon from "@mui/icons-material/GetApp";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
import UnitConversionTable from "./UnitConversionTable";
import { useTheme } from "../../../../../config/themeContext";
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import VerifiedIcon from '@mui/icons-material/Verified';
import StopIcon from '@mui/icons-material/Stop';
import BlockIcon from '@mui/icons-material/Block';
import TableProduct from "../../../../../components/Tables/TableProduct";
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
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      props.expanded ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />
    }
    {...props}
  />
))(({ theme, currentTheme }) => ({
  color: currentTheme.sideBarTextColor1,
  backgroundColor: currentTheme.secondaryColor,
  flexDirection: "row",
  justifyContent: "space-between",
  "& .MuiAccordionSummary-content": {
    flexGrow: 1,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
    color: currentTheme.sideBarTextColor1,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  gap: 100,
}));

export default function UnitConversion(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [expanded, setExpanded] = React.useState("panel1");

  const { currentTheme } = useTheme();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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

  const handleDetailPageClose = () => {
    setDetailPage(false);
  };

  const handleClose = () => {
    window.history.back();
  };

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
      Unit Conversion
    </Typography>,
  ];

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

          {!detailPage ?   (
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

              
              <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons }}
            >
              <Stack direction="column" alignItems="center">
                <GetAppIcon style={{ color: currentTheme.actionIcons }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Import
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
          ) : (
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ flex: "0 0 auto" }}
            >
              <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons }}
            >
              <Stack direction="column" alignItems="center">
                <GetAppIcon style={{ color: currentTheme.actionIcons }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Import
                </Typography>
              </Stack>
            </IconButton>
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
        { detailPage ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: 2,
              }}
            >
              <AutoComplete2 autoLabel="Base Unit" />
              <AccountInput label="Unit Category" />
              {/* <AutoComplete2 autoLabel="Load Form" /> */}
              <AutoComplete2 autoLabel="Entity" />
            </Box>

            <UnitConversionTable />
          </>
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



              {/* <Collapse horizontal isOpen={isOpen} {...args}>
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
              </Collapse> */}

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
              {/* {pageId1 === 2 && <Sortpopup onClose={() => setpageId1(null)} />}
              {pageId1 === 7 && <BackTrackPopup onClose={() => setpageId1(null)} />}
              {pageId1 === 9 && <MassUpdatePopup onClose={() => setpageId1(null)} items={massUpdateItem} />}
              {pageId1 === 5 && <ImportExportPopup onClose={() => setpageId1(null)} />}
              {pageId1 === 6 && <TransferPopup onClose={() => setpageId1(null)} />} */}

            </div>
          </>
        )}

      </React.StrictMode>
    </>
  );
}

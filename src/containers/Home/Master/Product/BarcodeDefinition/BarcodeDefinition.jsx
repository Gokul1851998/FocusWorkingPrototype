


import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  styled,
} from "@mui/material";

// import Tree1 from "/../../components/Tree/Tree1";


import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import GroupAddIcon from "@mui/icons-material/GroupAdd";

import CloseIcon from "@mui/icons-material/Close";

import SaveIcon from "@mui/icons-material/Save";

import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

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
import HandymanIcon from '@mui/icons-material/Handyman';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";

import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "../../../../../config/themeContext";
import { primaryButtonColor } from "../../../../../config";
import BarcodeTable from "./BarcodeTable";
import CheckBox2 from "../../../../../components/CheckBox/CheckBox2";
import RoleSelect1 from "../../../../../components/Select/RoleSelect1";
import AccountInput from "../../../../../components/Inputs/AccountInput";
import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
import RefreshIcon from '@mui/icons-material/Refresh';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';


// import MasterDefinition from "../MasterSettings/MasterDefinition";
// import MasterCustomization from "../MasterSettings/MasterCustomization";


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
))(({ theme,currentTheme }) => ({
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
}));

const BarcodeDefinition = ({setPage,detailPageId,direction}) => {
    const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [expanded, setExpanded] = React.useState("panel3");
  const [selectedOption, setSelectedOption] = React.useState('');
  const [formData, setFormData] = React.useState('');
  const [data, setData] = useState('');


  const {currentTheme} = useTheme()

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

  //To choose profile or Group
  const handleToggleChange = (event) => {
    setFormData({ ...formData, isRole: event.target.checked});
};

  const breadcrumbs = [
    <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }} // Reduce font size
      key="1"
      color="white"
      onClick={handleClick}
    >
      <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Product
    </Link>,
    
    

    <Typography key="4" color="white" sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
       Barcode Definition
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
            separator={<NavigateNextIcon fontSize="small"  sx={{color: currentTheme.actionIcons,}}/>}
            aria-label="breadcrumb"
            style={{ color: primaryButtonColor }}
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ flex: "0 0 auto" }}
        >
         
          <IconButton
            aria-label="Clone"
            sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons, }}
          >
            <Stack direction="column" alignItems="center">
              <SaveIcon style={{ color: currentTheme.actionIcons, }} />
              <Typography
                variant="caption"
                align="center"
                style={{fontSize: "0.6rem",color: currentTheme.actionIcons, }}
              >
                Save
              </Typography>
            </Stack>
          </IconButton>

          <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        //onClick={()=>iconsClick("unlock")}
      >
        <Stack direction="column" alignItems="center">
          <RefreshIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            Reset
          </Typography>
        </Stack>
      </IconButton>

          <IconButton
            onClick={handleClose}
            aria-label="Close"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <CloseIcon style={{ color: currentTheme.actionIcons}} />
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
      </Box>
      <div>
      
        
        
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          className
          expanded={expanded === "panel3"}
          sx={{ alignItems: "center" }}
          currentTheme={currentTheme}
        >
          <IconButton
            sx={{ fontSize: "0.8rem", padding: "0rem" }}
            // onClick={()=>iconsClick("close")}
          >
            <Stack direction="column" alignItems="center">
              <QrCodeScannerOutlinedIcon sx={{ color: currentTheme.actionIcons }} />
            </Stack>
          </IconButton>
          <Typography style={{ fontSize: "14px" }}>
            Barcode Definition
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
          <MDBRow style={{padding:"20px"}}>
             
                                <MDBCol>
                                
                                <AccountInput label ="Template Name"/>
                                </MDBCol>
                                <AutoComplete2 autoLabel="Item" />
                                <MDBCol>
                                <AccountInput label ="Initial String Value"/>
                                </MDBCol>
                               
                                <MDBCol>
                                <CheckBox2 label="Packdata" />
                                </MDBCol>
                                <MDBCol>
                                <CheckBox2 label="Set as Default" />
                                </MDBCol>                               
                               
                              </MDBRow>
          <BarcodeTable/>
          </>
        </AccordionDetails>
      </Accordion>
       
      
      </div>
    </React.StrictMode>
  </>
    
  )
}

export default BarcodeDefinition
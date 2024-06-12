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
import { accountTree } from "../../../../../config/masterConfig";
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
import ExchangeRateHistoryTable from "./ExchangeRateHistoryTable";
import ExchangeRateHistTab from "./ExchangeRateHistTab";
import { useTheme } from "../../../../../config/themeContext";
import SettingsIcon from "@mui/icons-material/Settings";
import RoleSelect1 from "../../../../../components/Select/RoleSelect1";
import { entityList } from "../../../../../config/securityConfig";



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
  { icon: <HomeRepairServiceIcon />, name: "Customize Master" },
  { icon: <SettingsApplicationsIcon />, name: "Customize View" },
  { icon: <AccountTreeIcon />, name: "Customize Tree" },
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
))(({ theme }) => ({
  color: primaryButtonColor,
  backgroundColor: thirdColor,
  flexDirection: "row",
  justifyContent: "space-between",
  "& .MuiAccordionSummary-content": {
    flexGrow: 1,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
    color: primaryButtonColor,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  gap: 100,
}));

export default function ExchangeRateHistory(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedOption, setSelectedOption] = React.useState('');
  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState('');
  const [selectedCurrencies, setSelectedCurrencies] = useState([
    
  ]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    
  };
  const handleSelectChange1 = (event) => {
    setSelectedBaseCurrency(event.target.value);
    const data =[{ id: 1, selectCurrency: 'USD', definedAs: event.target.value ,rate:2.346},
      { id: 2, selectCurrency: 'CNY', definedAs: event.target.value,rate:1.146 },
    ]
    setSelectedCurrencies(data);

  };

  const handleCurrencyChange = (index, key, value) => {
    const updatedCurrencies = [...selectedCurrencies];
    updatedCurrencies[index][key] = value;
    setSelectedCurrencies(updatedCurrencies);

  };

  const handleAddCurrency = () => {
    setSelectedCurrencies([...selectedCurrencies, { id: selectedCurrencies.length + 1, selectCurrency: '', definedAs: '', rate: 0  }]);
  };

  const handleRemoveCurrency = (index) => {
    const updatedCurrencies = selectedCurrencies.filter((_, i) => i !== index);
    setSelectedCurrencies(updatedCurrencies);
  };

  const { currentTheme } = useTheme();

  const buttonStyle = {
    textTransform: "none", // Set text transform to none for normal case
    color: `${currentTheme.sideBarTextColor1}`, // Set text color
    backgroundColor: `${currentTheme.thirdColor}`, // Set background color
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    margin: 3,
    fontSize: "12px",
    padding: "6px 10px",
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

  const breadcrumbs = [
    <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }} // Reduce font size
      key="1"
      
      onClick={handleClick}
    >
      <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Settings
    </Link>,
    <Link
      underline="hover"
      key="2"
     
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }}
      onClick={handleClick}
    >
      Entity Settings
    </Link>,
    <Link
      underline="hover"
      key="3"
      
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }}
      onClick={handleClick}
    >
      Currency
    </Link>,
    <Typography key="4" color="white" sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
      Exchange Rate History
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
              separator={<NavigateNextIcon fontSize="small" sx={{color: currentTheme.actionIcons,}}  />}
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
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
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
              aria-label="Add group"
              sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <SwapHorizIcon style={{ color: currentTheme.actionIcons }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Exchange Rate
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="Edit"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <ClearAllIcon style={{ color: currentTheme.actionIcons }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Clear
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="Clone"
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
        </Box>

        <MDBCard
          className="text-center"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            zIndex: 1,
            margin: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              padding: 2,
            }}
          >
            <RoleSelect1
                    label="Business Entity"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={entityList}
                  />
            <RoleSelect1
              label="Base Currency"
              value={selectedBaseCurrency}
              onChange={handleSelectChange1}
              options={[
                { value: 'AED', label: 'AED' },
                { value: 'USD', label: 'USD' },
                { value: 'CNY', label: 'CNY' },
              ]}
            />
            <AccountInput label="Date Range" type="date" />
            <AccountInput label="From Date" type="date" />
            <AccountInput label="To Date" type="date" />
            
          </Box>
          <Stack
              direction="row"
              spacing={1}
              padding={1}
              justifyContent="flex-end"
            >
              <Button variant="contained" style={buttonStyle}>
                Load
              </Button>
              <Button variant="contained" style={buttonStyle}>
                Clear
              </Button>
            </Stack>
            <ExchangeRateHistoryTable
            baseCurrency={selectedBaseCurrency}
            currencies={selectedCurrencies}
            onCurrencyChange={handleCurrencyChange}
            onAddCurrency={handleAddCurrency}
            onRemoveCurrency={handleRemoveCurrency} />
        </MDBCard>
        
        <MDBCard
          className="text-center"
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            zIndex: 1,
            margin: 10,
          }}
        >
             <ExchangeRateHistTab  selectedCurrencies={selectedCurrencies}/>
        </MDBCard>
      </React.StrictMode>
    </>
  );
}

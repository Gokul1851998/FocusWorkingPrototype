import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  styled,
} from "@mui/material";
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../../components/Tree/Tree1";
import {
  primaryButtonColor,
  primaryColor,
  secondryColor,
  thirdColor,
} from "../../../../config";
import { accountTree } from "../../../../config/masterConfig";
import TableAccounts from "../../../../components/Tables/TableAccounts";
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
import AccountInput from "../../../../components/Inputs/AccountInput";
import AutocompleteSecurity from "../../../../components/AutoComplete/AutocompleteSecurity";
import GetAppIcon from "@mui/icons-material/GetApp";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import AutoComplete2 from "../../../../components/AutoComplete/AutoComplete2";
import CheckBox1 from "../../../../components/CheckBox/CheckBox1";
import AccountSettingsTable from "./AccountSettingsTable";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const actions = [
  { icon: <GroupAddIcon />, name: "Group" },
  { icon: <DeleteSweepIcon />, name: "Delete All" },
  { icon: <EventBusyIcon />, name: "Close Account" },
  { icon: <FolderOpenIcon />, name: "Open Close Account" },
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
}));

export default function AccountSettings(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [expanded, setExpanded] = React.useState("panel1");

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
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem" }} // Reduce font size
      key="1"
      color="white"
      onClick={handleClick}
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Settings
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="white"
      sx={{ fontSize: "1rem" }}
      onClick={handleClick}
    >
      Main Settings
    </Link>,

    <Typography key="4" color="white" sx={{ fontSize: "1rem" }}>
      Account Settings
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
            backgroundColor: secondryColor,
          }}
        >
          <Stack spacing={2} sx={{ flex: 1 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
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
                <GetAppIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
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
                <SwapHorizIcon style={{ color: "white" }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
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
                <ClearAllIcon style={{ color: "white" }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
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
                <SaveIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
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
                <CloseIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton>
          </Stack>
        </Box>
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className
              expanded={expanded === "panel1"}
            >
              <Typography style={{ fontSize: "14px" }}>
                Accounting Tags
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Accounting Tag" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Accounting Tag1" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Accounting Tag2" />
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </div>
              </>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              expanded={expanded === "panel2"}
            >
              <Typography style={{ fontSize: "14px" }}>
                Account Mapping
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Asset Groups" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Cash and Group" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Control A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Depreciation and Amortization" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Expenses Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Foregin Exchange Gain A/C" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Foregin Exchange Loss A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="General and Administration Expenses" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Income Taxes A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Incomes Group" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Liabilities Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Other Expenses A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Petty-Cash Expenses Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Profit / loss A/C" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Purchases Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Sales Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="TDS Account" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Margin Account" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Round off for Exchange gain/loss" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12"></MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="Check Negative Cash Balance"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Warn and Allow"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Stop"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="Check Negative Cash by Tag"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Warn and Allow"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Stop"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="General Info"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Do not balance stock transfers when posting to FA"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Restrict account based on Department"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </div>
              </>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              expanded={expanded === "panel3"}
            >
              <Typography style={{ fontSize: "14px" }}>AR/AP</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <MDBRow>
                  <MDBCol lg="6" md="6" sm="12" xs="12">
                    {/* Left side */}
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography variant="p" color="gray" gutterBottom>
                        Maintain AR by
                      </Typography>

                      <MDBCardBody style={{ paddingLeft: 40 }}>
                        <MDBCol>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {/* Checkbox */}
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    transform: "scale(0.75)",
                                    paddingTop: 1,
                                  }}
                                />
                              }
                              label="Tag"
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem",
                                  color: "gray",
                                },
                              }}
                            />
                            {/* AutoComplete2 component */}
                            <AutoComplete2 autoLabel="" />
                          </div>
                        </MDBCol>

                        {/* <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{ transform: "scale(0.75)", paddingTop: 1 }}
                              />
                            } // Reduce the size of the checkbox
                            label="Sales Account"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.8rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                            }}
                          />
                        </MDBCol> */}
                        {/* <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{ transform: "scale(0.75)", paddingTop: 1 }}
                              />
                            } // Reduce the size of the checkbox
                            label="Item"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.8rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                            }}
                          />
                        </MDBCol> */}
                      </MDBCardBody>
                      <MDBCardBody>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Enable Credit Limit check"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                          <div style={{ paddingLeft: 40 }}>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                } // Reduce the size of the checkbox
                                label="Include ‘Pending sales orders’ value in credit limit check"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem", // Adjust the label font size
                                    color: "gray", // Change the label color to gray
                                  },
                                }}
                              />
                            </MDBCol>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                } // Reduce the size of the checkbox
                                label="Check Credit limit in orders"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem", // Adjust the label font size
                                    color: "gray", // Change the label color to gray
                                  },
                                }}
                              />
                            </MDBCol>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                } // Reduce the size of the checkbox
                                label="Define Credit Limit by Department"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem", // Adjust the label font size
                                    color: "gray", // Change the label color to gray
                                  },
                                }}
                              />
                            </MDBCol>
                            {/* <div style={{ paddingLeft: 40 }}>
                              <MDBCol>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      sx={{
                                        transform: "scale(0.75)",
                                        paddingTop: 1,
                                      }}
                                    />
                                  } // Reduce the size of the checkbox
                                  label="Define Credit Days by Department"
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.8rem", // Adjust the label font size
                                      color: "gray", // Change the label color to gray
                                    },
                                  }}
                                />
                              </MDBCol>
                            </div> */}
                            {/* <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                } // Reduce the size of the checkbox
                                label="Allow credit limit Authorization mapping to customer group"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem", // Adjust the label font size
                                    color: "gray", // Change the label color to gray
                                  },
                                }}
                              />
                            </MDBCol> */}
                            <MDBCol>
                              <Typography
                                style={{ fontSize: "0.8rem", color: "gray" }}
                              >
                                {" "}
                                When Credit limit exceeded
                              </Typography>
                              <div style={{ paddingLeft: 40 }}>
                                <MDBCol>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    sx={{
                                      "& .MuiSvgIcon-root": { fontSize: 14 },
                                    }} // Adjust the size of the radio button icon
                                  >
                                    <FormControlLabel
                                      value="Warn and Allow"
                                      control={<Radio />} // Adjust the size of the radio button itself
                                      label="Warn and Allow"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem", // Adjust the label font size
                                          color: "gray", // Change the label color to gray
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />

                                    <FormControlLabel
                                      value="Stop"
                                      control={<Radio />} // Adjust the size of the radio button itself
                                      label="Stop"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem", // Adjust the label font size
                                          color: "gray", // Change the label color to gray
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                    <FormControlLabel
                                      value="Req"
                                      control={<Radio />} // Adjust the size of the radio button itself
                                      label="Request credit limit increase"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem", // Adjust the label font size
                                          color: "gray", // Change the label color to gray
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                  </RadioGroup>
                                </MDBCol>
                              </div>
                            </MDBCol>
                          </div>
                        </MDBCol>
                      </MDBCardBody>
                      <MDBCardBody>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Pick Credit day from"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                          <div style={{ paddingLeft: 40 }}>
                            <MDBCol>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                              >
                                <FormControlLabel
                                  value="Warn and Allow"
                                  control={<Radio />} // Adjust the size of the radio button itself
                                  label="Customer/Vendor A/C "
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.8rem", // Adjust the label font size
                                      color: "gray", // Change the label color to gray
                                    },
                                    margin: 0,
                                    padding: 0,
                                  }}
                                />

                                {/* <FormControlLabel
                                  value="Stop"
                                  control={<Radio />} // Adjust the size of the radio button itself
                                  label="Payment Terms"
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.8rem", // Adjust the label font size
                                      color: "gray", // Change the label color to gray
                                    },
                                    margin: 0,
                                    padding: 0,
                                  }}
                                /> */}
                                {/* <FormControlLabel
                                  value="Req"
                                  control={<Radio />} // Adjust the size of the radio button itself
                                  label="Sales A/C"
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.8rem", // Adjust the label font size
                                      color: "gray", // Change the label color to gray
                                    },
                                    margin: 0,
                                    padding: 0,
                                  }}
                                /> */}
                              </RadioGroup>
                            </MDBCol>
                          </div>
                        </MDBCol>

                        {/* <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{ transform: "scale(0.9)", paddingTop: 1 }}
                              />
                            } // Reduce the size of the checkbox
                            label="Apply Payment Discount on Partial Payment"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                            }}
                          />
                        </MDBCol>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{ transform: "scale(0.9)", paddingTop: 1 }}
                              />
                            } // Reduce the size of the checkbox
                            label="User direct conversion for adjustment"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                            }}
                          />
                        </MDBCol> */}
                      </MDBCardBody>
                      <MDBCardBody>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Enable Credit days check"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                          <div style={{ paddingLeft: 40 }}>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                } // Reduce the size of the checkbox
                                label="Include pending sales orders value in credit days"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem", // Adjust the label font size
                                    color: "gray", // Change the label color to gray
                                  },
                                }}
                              />
                            </MDBCol>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                } // Reduce the size of the checkbox
                                label="Check credit days in orders"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem", // Adjust the label font size
                                    color: "gray", // Change the label color to gray
                                  },
                                }}
                              />
                            </MDBCol>
                           
                            {/* <div style={{ paddingLeft: 40 }}>
                              <MDBCol>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      sx={{
                                        transform: "scale(0.75)",
                                        paddingTop: 1,
                                      }}
                                    />
                                  } // Reduce the size of the checkbox
                                  label="Define Credit Days by Department"
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.8rem", // Adjust the label font size
                                      color: "gray", // Change the label color to gray
                                    },
                                  }}
                                />
                              </MDBCol>
                            </div> */}
                            {/* <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                } // Reduce the size of the checkbox
                                label="Allow credit limit Authorization mapping to customer group"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem", // Adjust the label font size
                                    color: "gray", // Change the label color to gray
                                  },
                                }}
                              />
                            </MDBCol> */}
                            <MDBCol>
                              <Typography
                                style={{ fontSize: "0.8rem", color: "gray" }}
                              >
                                {" "}
                                When Credit limit exceeded
                              </Typography>
                              <div style={{ paddingLeft: 40 }}>
                                <MDBCol>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    sx={{
                                      "& .MuiSvgIcon-root": { fontSize: 14 },
                                    }} // Adjust the size of the radio button icon
                                  >
                                    <FormControlLabel
                                      value="Warn and Allow"
                                      control={<Radio />} // Adjust the size of the radio button itself
                                      label="Warn and Allow"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem", // Adjust the label font size
                                          color: "gray", // Change the label color to gray
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />

                                    <FormControlLabel
                                      value="Stop"
                                      control={<Radio />} // Adjust the size of the radio button itself
                                      label="Stop"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem", // Adjust the label font size
                                          color: "gray", // Change the label color to gray
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                    <FormControlLabel
                                      value="Req"
                                      control={<Radio />} // Adjust the size of the radio button itself
                                      label="Request credit limit increase"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem", // Adjust the label font size
                                          color: "gray", // Change the label color to gray
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                  </RadioGroup>
                                </MDBCol>
                              </div>
                            </MDBCol>
                          </div>
                        </MDBCol>
                      </MDBCardBody>
                    </Box>
                  </MDBCol>

                  <MDBCol lg="6" md="6" sm="12" xs="12">
                    {/* Right side */}
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography variant="p" color="gray" gutterBottom>
                        Maintain AP by
                      </Typography>

                      <MDBCardBody style={{ paddingLeft: 40 }}>
                        <MDBCol>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {/* Checkbox */}
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    transform: "scale(0.75)",
                                    paddingTop: 1,
                                  }}
                                />
                              }
                              label="Tag"
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem",
                                  color: "gray",
                                },
                              }}
                            />

                            <AutoComplete2 autoLabel="" />
                          </div>
                        </MDBCol>

                        {/* <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{ transform: "scale(0.75)", paddingTop: 1 }}
                              />
                            } // Reduce the size of the checkbox
                            label="Purchase Account"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.8rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                            }}
                          />
                        </MDBCol>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{ transform: "scale(0.75)", paddingTop: 1 }}
                              />
                            } // Reduce the size of the checkbox
                            label="Item"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.8rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                            }}
                          />
                        </MDBCol> */}
                      </MDBCardBody>
                      {/* <MDBCardBody>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Depend on maintain bill wise for AR/AP"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                        </MDBCol>
                        <div style={{ paddingLeft: 40 }}>
                          <MDBCol>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    transform: "scale(0.75)",
                                    paddingTop: 1,
                                  }}
                                />
                              } // Reduce the size of the checkbox
                              label="Maintain AR Transaction Currencies"
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem", // Adjust the label font size
                                  color: "gray", // Change the label color to gray
                                },
                              }}
                            />
                          </MDBCol>
                          <MDBCol>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    transform: "scale(0.75)",
                                    paddingTop: 1,
                                  }}
                                />
                              } // Reduce the size of the checkbox
                              label="Maintain AP Transaction Currencies"
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem", // Adjust the label font size
                                  color: "gray", // Change the label color to gray
                                },
                              }}
                            />
                          </MDBCol>
                          <MDBCol>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    transform: "scale(0.75)",
                                    paddingTop: 1,
                                  }}
                                />
                              } // Reduce the size of the checkbox
                              label="Input Narration in references"
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem", // Adjust the label font size
                                  color: "gray", // Change the label color to gray
                                },
                              }}
                            />
                          </MDBCol>
                        </div>
                      </MDBCardBody> */}
                      <MDBCardBody>
                        {/* <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Enable Overdue Check"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                        </MDBCol> */}
                        <div style={{ paddingLeft: 40 }}>
                          {/* <MDBCol>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    transform: "scale(0.75)",
                                    paddingTop: 1,
                                  }}
                                />
                              } // Reduce the size of the checkbox
                              label="User Credit days instead of Due date for limit check"
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem", // Adjust the label font size
                                  color: "gray", // Change the label color to gray
                                },
                              }}
                            />
                          </MDBCol> */}
                          <MDBCol>
                            <Typography
                              style={{ fontSize: "0.8rem", color: "gray" }}
                            >
                              When credit days limit exceeded
                            </Typography>
                            <div style={{ paddingLeft: 40 }}>
                              <MDBCol>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  name="radio-buttons-group"
                                  sx={{
                                    "& .MuiSvgIcon-root": { fontSize: 14 },
                                  }} // Adjust the size of the radio button icon
                                >
                                  <FormControlLabel
                                    value="Warn and Allow"
                                    control={<Radio />} // Adjust the size of the radio button itself
                                    label="Warn and Allow"
                                    sx={{
                                      "& .MuiFormControlLabel-label": {
                                        fontSize: "0.8rem", // Adjust the label font size
                                        color: "gray", // Change the label color to gray
                                      },
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  />

                                  <FormControlLabel
                                    value="Stop"
                                    control={<Radio />} // Adjust the size of the radio button itself
                                    label="Stop"
                                    sx={{
                                      "& .MuiFormControlLabel-label": {
                                        fontSize: "0.8rem", // Adjust the label font size
                                        color: "gray", // Change the label color to gray
                                      },
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  />
                                  <FormControlLabel
                                    value="Req"
                                    control={<Radio />} // Adjust the size of the radio button itself
                                    label="Request credit days increase"
                                    sx={{
                                      "& .MuiFormControlLabel-label": {
                                        fontSize: "0.8rem", // Adjust the label font size
                                        color: "gray", // Change the label color to gray
                                      },
                                      margin: 0,
                                      padding: 0,
                                    }}
                                  />
                                </RadioGroup>
                              </MDBCol>
                            </div>
                          </MDBCol>
                        </div>
                      </MDBCardBody>
                    </Box>
                  </MDBCol>
                </MDBRow>
              </>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
              expanded={expanded === "panel4"}
            >
              <Typography style={{ fontSize: "14px" }}>
                Miscellaneous
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <MDBRow>
                  <MDBCol lg="6" md="6" sm="12" xs="12">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <MDBCardBody>
                        <MDBCol>
                          <CheckBox1 label="Add free items on a new line" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Calculate due-date from LR-date" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Create Customer Profile Fields" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Dialog based entry in vouchers" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Do not refresh description with Account/Item in document" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Include un-committed transactions in reports" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Maintain links for only one side of stock transfer" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Show status message in popup also" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Use Non-Profit Organization’s Terminology" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Prefix location code while importing from different location" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Show Transaction data in FIFO order" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Enable local currency" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Local currency" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Do not show opening balance in nominal ledgers" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Do not store date of entries" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Show exchange rate difference in ledger" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Enable hijri date" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Enable profitability check by Item" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Do not Load document in exclusive mode" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Create master in transaction entry" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Stay on same voucher number after deleting" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Open search if master not found" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Do not save document in background" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Load date based on the last saved voucher" />
                        </MDBCol>
                      </MDBCardBody>
                    </Box>
                  </MDBCol>

                  <MDBCol lg="6" md="6" sm="12" xs="12">
                    {/* Right side */}
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <MDBCardBody>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Default calendar" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Default Currency" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Image format" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Numeric separator" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Transaction body column heading alignment" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Allow difference of upto" />
                        </MDBCol>
                      </MDBCardBody>
                      <MDBCardBody style={{ marginTop: 20 }}>
                        <MDBCol>
                          <Typography variant="h6" color="gray" gutterBottom>
                            Exclude voucher during Repost
                          </Typography>

                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <FormControlLabel
                                value="Warn and Allow"
                                control={<Radio />}
                                label="Document Type"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.9rem",
                                    color: "gray",
                                  },
                                  margin: 0,
                                  padding: 0,
                                }}
                              />

                              <FormControlLabel
                                value="Stop"
                                control={<Radio />}
                                label="DocClass"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.9rem",
                                    color: "gray",
                                  },
                                  margin: 0,
                                  padding: 0,
                                }}
                              />
                            
                            </div>
                            <AccountSettingsTable />
                          </RadioGroup>
                        </MDBCol>
                      </MDBCardBody>
                      <MDBCardBody style={{ marginTop: 20 }}>
                        <MDBCol>
                          <Typography variant="h6" color="gray" gutterBottom>
                          Invoice Email Settings
                          </Typography>

                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <FormControlLabel
                                value="Send as attachment"
                                control={<Radio />}
                                label="Document Type"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.9rem",
                                    color: "gray",
                                  },
                                  margin: 0,
                                  padding: 0,
                                }}
                              />

                              <FormControlLabel
                                value="Stop"
                                control={<Radio />}
                                label="Send as body"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.9rem",
                                    color: "gray",
                                  },
                                  margin: 0,
                                  padding: 0,
                                }}
                              />
                            
                            </div>
                       
                          </RadioGroup>
                        </MDBCol>
                      </MDBCardBody>
                    </Box>
                  </MDBCol>
                </MDBRow>
              </>
            </AccordionDetails>
          </Accordion>
        </div>
      </React.StrictMode>
    </>
  );
}

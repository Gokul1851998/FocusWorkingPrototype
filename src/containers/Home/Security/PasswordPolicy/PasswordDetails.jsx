import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
    primaryButtonColor,
    secondryColor,
    thirdColor,
} from "../../../../config";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";
import SecurityInput from "../../../../components/Inputs/SecurityInput";
import Autocomplete2 from "../../../../components/AutoComplete/AutoComplete2";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Stack,
    TextField,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import SaveIcon from "@mui/icons-material/Save";
import {
    AddCircleOutline,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Close as CloseIcon,
    InfoOutlined,
    Language,
    FormatListBulleted,
    CheckBox,
} from "@mui/icons-material";
import {
    CRMRoles,
    UserType,
    createProfileTree,
    erpRoles,
    languages,
    masterItems,
    passwordPolicy,
    restrictionItems,
    securityQuestions,
    timeZone,
    userTabData,
    workingDays,
    complexity,
    units
} from "../../../../config/securityConfig";
import PersonIcon from "@mui/icons-material/Person";
import ChecklistIcon from "@mui/icons-material/Checklist";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import RoleTransactionRights from "../CreateRole/RoleTransactionRights";
import LockIcon from "@mui/icons-material/Lock";
import RoleRestriction from "../CreateRole/RoleRestrictionForEntry";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import RoleSelect1 from "../../../../components/Select/RoleSelect1";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Autocomplete1 from "../../../../components/AutoComplete/AutoComplete1";
import { useEffect } from "react";
// import UserDomainComponent from "./UserRestrictionDomain";
// import UserDeviceTable from "./UserDeviceTable";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RefreshIcon from '@mui/icons-material/Refresh';
import BasicDateTimePicker from "../../../../components/DateAndTimePicker/DateAndTimePicker";
// import UserHistoryTable from "./UserHistoryTable";
// import UserTabDetails from "./UserHistoryTab";
import HistoryIcon from '@mui/icons-material/History';
import { useTheme } from "../../../../config/themeContext";
import { differenceInDays } from "date-fns"; // Import the differenceInDays function
import AssignmentIcon from '@mui/icons-material/Assignment';

const textFieldStyle = {
    width: 60,
    mx: 1,
    height: 30, // Reducing the height
    '& .MuiInputBase-root': {
        height: '30px',
        padding: '0 0px', // Reduces padding inside the input area
    },
    '& .MuiOutlinedInput-input': {
        padding: '4px', // Adjust top and bottom padding
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid', // Adjust border if needed
    }
}

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
        display: "flex",
        alignItems: "center",
    },
    "& .MuiSvgIcon-root": {
        fontSize: "1.5rem",
        color: currentTheme.sideBarTextColor1,
        marginRight: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    paddingLeft: theme.spacing(3),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function BasicBreadcrumbs({ currentTheme }) {
    return (
        <div role="presentation" style={{ display: "flex", flexDirection: "row", maxWidth: "fit-content", alignItems: "center" }} >

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


                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        key="2"

                        sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}

                    >
                        Security
                    </Link>,

                    <Typography key="3" sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}>
                        Password Policy
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
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
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
      } */}
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
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
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
            {detailPageId != 0 ? (
                <IconButton
                    aria-label="New"
                    sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
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
            ) : null}
            {detailPageId != 0 ? (
                <IconButton
                    aria-label="New"
                    sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                    onClick={() => iconsClick("Loadfrom")}
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
            ) : null}

            <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
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



const uploadIconstyle = {
    color: thirdColor, // Set the icon color
    backgroundColor: "#fff", // Set a background color
    borderRadius: "50%", // Make the button round
    padding: "5px", // Padding to make the icon look bigger and floating
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", // Add shadow to make it look floating
};

export default function PasswordDetails({ detailPageId, setPage }) {

    const [expanded, setExpanded] = React.useState("panel1");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [openLoadFrom, setOpenLoadFrom] = React.useState(false);
  const [openMoveUser, setOpenMoveUser] = React.useState(false);
  const [formData, setformData] = useState({
    policyName: '',
    minPasswordLength: '',
    complexity: '',
    noOfPreviousPasswords: '',
    passwordExpiryDays: '',
    otpExpiryMinutes: '',
    invalidAttempts: '',
    lockoutPeriod: '',
    lockoutUnit: '',
    sendEmail: false,
    emailOnSuccess: false,
    emailOnFailure: false,
    changePasswordAfterFirstLogin: false,
  });
  const [image, setImage] = useState(null);
  const [checkedDays, setCheckedDays] = useState([])
  const [openHistory, setOpenHistory] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const { currentTheme } = useTheme();

  const buttonStyle = {
    backgroundColor: currentTheme.secondaryColor,
    color: currentTheme.sideBarTextColor1,
    textTransform: "none",
    padding: "1px",
    "&:hover": {
      backgroundColor: currentTheme.secondaryColor, // Change as needed
      color: currentTheme.sideBarTextColor1, // Example hover color change
    },
  };
  
    const handleRowClick = (row) => {

      
      setSelectedRow(userTabData);
      
    };

  const handleLoadHistory = ()=>{
   
    setOpenHistory(true)
  }
  const handleCloseLoadHistory = ()=>{
    setSelectedRow(null)
    setOpenHistory(false)
  }
  const handleDateChange = (date) => {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    const daysDifference = differenceInDays(selectedDate, currentDate);

    setformData({ ...formData, LockedTill: date, Days: daysDifference });
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleSelectChange = (event, key) => {
    setformData({ ...formData, [key]: event.target.value });
  };

  const handleIconsClick = (value) => {
    switch (value.trim()) {
      case "new":
        handleAdd();
        break;
      case "close":
        handleclose();
        break;
      case "Loadfrom":
        handleLoadFrom();
        break;
      case "Moveuser":
        handleMoveUser();
        break;
      case "GetHistory":
        handleLoadHistory();
        break;
      default:
        break;
    }
  };
  const handleclose = () => {
    setPage("summary");
  };
  const handleLoadFrom = () => {
    setOpenLoadFrom(true);
  };
  const handleCloseLoadFrom = () => {
    setOpenLoadFrom(false);
  };
  const handleMoveUser = () => {
    setOpenMoveUser(true);
  };
  const handleCloseMoveUser = () => {
    setOpenMoveUser(false);
  };
  const handleUploadClick = (field) => () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setformData((prev) => ({ ...prev, [field]: e.target.result }));
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleDeleteClick = (field) => () => {
    setformData((prev) => ({ ...prev, [field]: null }));
  };
  const handleRadioChange = (event) => {
    setformData({
      ...formData,
      userType: event.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setformData({
      ...formData,
      [name]: checked,
    });
  };
  const handleDayChange = (position) => {
    // const updatedCheckedDays = checkedDays.includes(position)
    //   ? checkedDays.filter(day => day !== position) // Uncheck day
    //   : [...checkedDays, position]; // Check day

    // setCheckedDays(updatedCheckedDays);
  };
  // useEffect(() => {
  //   const daysString = checkedDays.sort().join(',');
  //   setformData({
  //     ...formData,
  //     workingDays: daysString
  //   });
  // }, [checkedDays]);
  const getBorderColor = () => {
    return localStorage.getItem('color') === 'true' ? '#fff' : '#000';
  };
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: 1.5,
                    paddingRight: 1.5,
                }}
            >
                <BasicBreadcrumbs currentTheme={currentTheme} />
                <DefaultIcons
                    detailPageId={detailPageId}
                    iconsClick={handleIconsClick}
                    currentTheme={currentTheme}
                />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    overflowX: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "83vh",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    paddingBottom: "30px",
                }}
            >
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        className
                        expanded={expanded === "panel1"}
                        sx={{ alignItems: "center" }}
                        currentTheme={currentTheme}
                    >
                        <IconButton
                            sx={{ fontSize: "0.8rem", padding: "0rem" }}
                        //onClick={()=>iconsClick("close")}
                        >
                            <Stack direction="column" alignItems="center">
                                <AssignmentIcon sx={{ color: primaryButtonColor }} />
                            </Stack>
                        </IconButton>
                        <Typography style={{ fontSize: "14px" }}>
                        Policy Form
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <>
                            <div>
                                <MDBCardBody>
                                    <MDBRow>
                                        
                                            <MDBCol lg="3" md="4" sm="6" xs="12">
                                                <SecurityInput label="Policy Name" mandatory={1} />
                                            </MDBCol>
                                        
                                            <MDBCol lg="3" md="4" sm="6" xs="12">
                                                <SecurityInput label="Minimum password length" mandatory={1} />
                                            </MDBCol>

                                        <MDBCol lg="3" md="4" sm="6" xs="12">
                                            <RoleSelect1
                                                label="Complexity"
                                                value={formData?.complexity ?? ""}
                                                onChange={(e) => handleSelectChange(e, "complexity")}
                                                options={complexity}
                                                mandatory={1}
                                            />
                                        </MDBCol>
                                        <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <SecurityInput label="Do not allow previous"  />
                                        </MDBCol>
                                        <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <SecurityInput label="Password expiry days"  />
                                        </MDBCol>
                                        <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <SecurityInput label="OTP expiry in minutes"  />
                                        </MDBCol>
                                        <Typography variant="subtitle1" sx={{ mt: 2 }}>Locking Permissions</Typography>
                                        <MDBCol lg="3" md="4" sm="6" xs="12">
                                            <SecurityInput
                                                label="No of invalid attempt"
                                            />
                                        </MDBCol>
                                        <MDBCol lg="3" md="4" sm="6" xs="12">
                                            <Box sx={{display:'flex', gap:'10px'}}>
                                            <SecurityInput
                                                label="Lockout Period"
                                            />
                                            <RoleSelect1
                                                label="Unit"
                                                value={formData?.lockoutUnit ?? ""}
                                                onChange={(e) => handleSelectChange(e, "lockoutUnit")}
                                                options={units}
                                            />
                                            </Box>
                                            
                                        </MDBCol>
                                        <Typography variant="subtitle1" sx={{ mt: 2 }}>Emailing</Typography>
                                        <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <FormControlLabel
        control={
          <Checkbox
            checked={formData.sendEmail}
            onChange={handleCheckboxChange}
            name="sendEmail"
          />
        }
        label="Send E-Mail"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.emailOnSuccess}
            onChange={handleCheckboxChange}
            name="emailOnSuccess"
          />
        }
        label="Send E-Mail on login success"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.emailOnFailure}
            onChange={handleCheckboxChange}
            name="emailOnFailure"
          />
        }
        label="Send E-Mail on login failure"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.changePasswordAfterFirstLogin}
            onChange={handleCheckboxChange}
            name="changePasswordAfterFirstLogin"
          />
        }
        label="Change password after first login"
      />
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </div>
                        </>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}

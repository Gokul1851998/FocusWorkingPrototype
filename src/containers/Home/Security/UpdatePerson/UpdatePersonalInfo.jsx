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
} from "../../../../config/securityConfig";
// import PersonIcon from "@mui/icons-material/Person";
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate'
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
// import Autocomplete1 from "../../../../components/AutoComplete/AutoComplete1";
// import { useEffect } from "react";
// import UserDomainComponent from "./UserRestrictionDomain";
// import UserDeviceTable from "./UserDeviceTable";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import BasicDateTimePicker from "../../../../components/DateAndTimePicker/DateAndTimePicker";
// import UserHistoryTable from "./UserHistoryTable";
// import UserTabDetails from "./UserHistoryTab";
// import HistoryIcon from '@mui/icons-material/History';
import { useTheme } from "../../../../config/themeContext";
import { differenceInDays } from "date-fns"; // Import the differenceInDays function

const textFieldStyle= {
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
))(({ theme,currentTheme }) => ({
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

function BasicBreadcrumbs({currentTheme}) {
  return (
    <div role="presentation" style={{display:"flex",flexDirection:"row",maxWidth:"fit-content",alignItems:"center"}} >
      
      <Stack spacing={2} sx={{ flex: 1 }}>
      <Breadcrumbs  
      // sx={{
      //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
      //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
      //     }} 
          separator={<NavigateNextIcon fontSize="small" sx={{color: currentTheme.actionIcons,}} />}
        aria-label="breadcrumb">
      
      <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }} // Reduce font size
      key="1"
      
      
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Home
    </Link>
    <Link
      underline="hover"
      key="2"
      
      sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}
      
    >
      Security
    </Link>,
   
    <Typography key="3"  sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
   Update Personal Info
    </Typography>,
      </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({ iconsClick,currentTheme }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        //onClick={()=>iconsClick("close")}
      >
        <Stack direction="column" alignItems="center">
          <SaveIcon sx={{color: currentTheme.actionIcons, }} />
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



export default function UpdatePersonalInfo() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [openLoadFrom, setOpenLoadFrom] = React.useState(false);
  const [openMoveUser, setOpenMoveUser] = React.useState(false);
  const [formData, setformData] = useState({
    photo: null,
    Name: null,
    Email: "",
    EmailPassword:"",
    Phone:"",
    Mobile:"",
    SecurityQuestion: "",
    SecurityAnswer: "", 
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
  

  const securityQuestions = [
    { label: "What was the name of your first pet?", value: "first_pet" },
    { label: "What is your mothers maiden name?", value: "mothers_maiden_name" },
    { label: "What was the name of your elementary school?", value: "elementary_school" },
    { label: "What was your childhood nickname?", value: "childhood_nickname" },
    { label: "What was the make and model of your first car?", value: "first_car" },
    { label: "What was the name of the town where you were born?", value: "birth_town" },
  ]
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
    window.history.back();
    // setPage("summary");
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
        <BasicBreadcrumbs currentTheme={currentTheme}/>
        <DefaultIcons
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
                <SystemUpdateIcon sx={{ color: primaryButtonColor }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>
              Update Information Form
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <MDBRow>
                    
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <SecurityInput value={formData?.Name} label=" Name" mandatory={1}/>
                      </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        value={formData.Email}
                        label="Email"
                        type={"email"}
                        mandatory={1}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                      value={formData.EmailPassword}
                        label="Email Password"
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Phone"   
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Mobile"   
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Security Question"
                        value={formData?.SecurityQuestion ?? ""}
                        onChange={(e) => handleSelectChange(e, "SecurityQuestion")}
                        options={securityQuestions}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Security Answer" 
                        value={formData.SecurityAnswer}  
                      />
                    </MDBCol>
                    
                    
                    
                    {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                      <div
                        style={{
                          marginLeft: "60px",
                          width: "120px",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        {formData.signature ? (
                          <div style={{ position: "relative" }}>
                            <img
                              src={formData.signature}
                              alt="Uploaded"
                              style={{ width: "60px", height: "60px" }}
                            />
                            <IconButton
                              onClick={handleDeleteClick("signature")}
                              style={{
                                position: "absolute",
                                right: -5,
                                top: -10,
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        ) : (
                          <IconButton
                            onClick={handleUploadClick("signature")}
                            style={uploadIconstyle}
                          >
                            <AddCircleIcon style={{ fontSize: "3rem" }} />
                          </IconButton>
                        )}
                        <Typography
                          sx={{ fontSize: "12px" }}
                          variant="subtitle1"
                        >
                          Signature
                        </Typography>
                      </div>
                    </MDBCol> */}
                    <div
                        style={{
                          marginLeft: "60px",
                          width: "120px",
                          alignItems: "center",
                          textAlign: "center",
                          padding:10
                        }}
                      >
                        {/* <IconButton
                    onClick={handleUploadClick}
                    style={uploadIconstyle}
                    sx={{ml:1,mb:1}}
                  >
                    <AddCircleIcon style={{ fontSize: '3rem'}} /> 
                  </IconButton> */}
                        {formData.photo ? (
                          <div style={{ position: "relative" }}>
                            <img
                              src={formData.photo}
                              alt="Uploaded"
                              style={{ width: "60px", height: "60px" }}
                            />
                            <IconButton
                              onClick={handleDeleteClick("photo")}
                              style={{
                                position: "absolute",
                                right: -5,
                                top: -10,
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        ) : (
                          <IconButton
                            onClick={handleUploadClick("photo")}
                            style={{...uploadIconstyle,color:currentTheme.thirdColor}}
                          >
                            <AddCircleIcon style={{ fontSize: "3rem" }} />
                          </IconButton>
                        )}
                        <Typography
                          sx={{ fontSize: "12px" }}
                          variant="subtitle1"
                        >
                          Add/Edit Photo
                        </Typography>
                      </div>
                  </MDBRow>
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
      
      </Box>
      
      
      
    </Box>
  );
}


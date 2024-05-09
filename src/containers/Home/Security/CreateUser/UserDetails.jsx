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
  workingDays,
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
import UserDomainComponent from "./UserRestrictionDomain";
import UserDeviceTable from "./UserDeviceTable";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RefreshIcon from '@mui/icons-material/Refresh';
import BasicDateTimePicker from "../../../../components/DateAndTimePicker/DateAndTimePicker";

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
    display: "flex",
    alignItems: "center",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
    color: primaryButtonColor,
    marginRight: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function BasicBreadcrumbs() {
  return (
    <div
      role="presentation"
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "fit-content",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Breadcrumbs
          // sx={{
          //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
          //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
          //     }}
          separator={
            <NavigateNextIcon
              fontSize="small"
              sx={{ color: primaryButtonColor }}
            />
          }
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center", fontSize: "0.8rem" }} // Reduce font size
            key="1"
            color="white"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            key="2"
            color="white"
            sx={{ fontSize: "0.8rem" }}
          >
            Security
          </Link>
          ,
          <Typography key="3" color="white" sx={{ fontSize: "0.8rem" }}>
            Create User
          </Typography>
          ,
        </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({ iconsClick, detailPageId }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      {detailPageId != 0 ? (
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        //onClick={()=>iconsClick("unlock")}
      >
        <Stack direction="column" alignItems="center">
          <LockOpenIcon sx={{ color: primaryButtonColor }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
          >
            Unlock User
          </Typography>
        </Stack>
      </IconButton>
      ) : null}
      {detailPageId != 0 ? (
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        //onClick={()=>iconsClick("unlock")}
      >
        <Stack direction="column" alignItems="center">
          <PersonIcon sx={{ color: primaryButtonColor }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
          >
            Move User
          </Typography>
        </Stack>
      </IconButton>
      ) : null}
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        //onClick={()=>iconsClick("unlock")}
      >
        <Stack direction="column" alignItems="center">
          <RefreshIcon sx={{ color: primaryButtonColor }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
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
          <SaveIcon sx={{ color: primaryButtonColor }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
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
            <DeleteIcon sx={{ color: primaryButtonColor }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
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
            <FileCopyIcon sx={{ color: primaryButtonColor }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
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
          <CloseIcon sx={{ color: primaryButtonColor }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
          >
            Close
          </Typography>
        </Stack>
      </IconButton>
      {/* <Example/> */}
    </Box>
  );
};

const buttonStyle = {
  backgroundColor: secondryColor,
  color: primaryButtonColor,
  textTransform: "none",
  padding: "1px",
  "&:hover": {
    backgroundColor: secondryColor, // Change as needed
    color: primaryButtonColor, // Example hover color change
  },
};

const uploadIconstyle = {
  color: thirdColor, // Set the icon color
  backgroundColor: "#fff", // Set a background color
  borderRadius: "50%", // Make the button round
  padding: "5px", // Padding to make the icon look bigger and floating
  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", // Add shadow to make it look floating
};

export default function UserDetails({ detailPageId, setPage }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [openLoadFrom, setOpenLoadFrom] = React.useState(false);
  const [formData, setformData] = useState({
    photo: null,
    signature: null,
    userType: "User",
    PUserType:"",
    PUserType1:"",
    FromDate:" "
  });
  const [image, setImage] = useState(null);
  const [checkedDays, setCheckedDays] = useState([])

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

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: secondryColor,
          paddingLeft: 1.5,
          paddingRight: 1.5,
        }}
      >
        <BasicBreadcrumbs />
        <DefaultIcons
          detailPageId={detailPageId}
          iconsClick={handleIconsClick}
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
              User/Group
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={formData.userType}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                sx={{ padding: 0, mr: 5, ml: 1 }}
                value="User"
                control={<Radio sx={{ padding: 0 }} />}
                label="User"
              />
              <FormControlLabel
                value="Group"
                control={<Radio sx={{ padding: 0 }} />}
                label="Group"
              />
            </RadioGroup>
          </FormControl>
        </Box>
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
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <PersonIcon sx={{ color: primaryButtonColor }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>
              User Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <MDBRow>
                    {formData.userType === "User" ? (
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <SecurityInput label="Login Name" />
                      </MDBCol>
                    ) : (
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <SecurityInput label="Group Name" />
                      </MDBCol>
                    )}

                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="ERP Roles"
                        value={formData?.ERPRoles ?? ""}
                        onChange={(e) => handleSelectChange(e, "ERPRoles")}
                        options={erpRoles}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Password Policy"
                        disabled={formData.userType === "Group"}
                        value={formData?.PasswordPolicy ?? ""}
                        onChange={(e) =>
                          handleSelectChange(e, "PasswordPolicy")
                        }
                        options={passwordPolicy}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        disabled={formData.userType === "Group"}
                        label="Password"
                        type={"password"}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        disabled={formData.userType === "Group"}
                        label="Confirm Password"
                        type={"password"}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Name"
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Login abbreviation"
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Security Question"
                        disabled={formData.userType === "Group"}
                        value={formData?.SecurityQuestion ?? ""}
                        onChange={(e) =>
                          handleSelectChange(e, "SecurityQuestion")
                        }
                        options={securityQuestions}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Security Answer"
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Language"
                        value={formData?.Language ?? ""}
                        onChange={(e) => handleSelectChange(e, "Language")}
                        options={languages}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Alt-Language"
                        value={formData?.AltLanguage ?? ""}
                        onChange={(e) => handleSelectChange(e, "AltLanguage")}
                        options={languages}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Select Time-Zone"
                        value={formData?.TimeZone ?? ""}
                        onChange={(e) => handleSelectChange(e, "TimeZone")}
                        options={timeZone}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <div
                        style={{
                          marginLeft: "60px",
                          width: "120px",
                          alignItems: "center",
                          textAlign: "center",
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
                            style={uploadIconstyle}
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
            className
            expanded={expanded === "panel2"}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <InfoOutlined sx={{ color: primaryButtonColor }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>
              Additional Info
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography variant="body1">
                      Personal Information
                    </Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                  <MDBRow>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Email"
                        type={"email"}
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol>

                    {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Email Password"
                        type={"password"}
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol> */}
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Phone"
                        type={"number"}
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Mobile"
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol>

                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="User Type"
                        value={formData?.PUserType ?? ""}
                        onChange={(e) => handleSelectChange(e, "PUserType")}
                        options={UserType}
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <Autocomplete2
                        // autoLabel={"User"}
                        formData={{
                          sName: formData?.PUserType1 ?? "",
                          iId: null,
                        }}
                        setFormData={(data) => {
                          setformData({ ...formData, PUserType1: data.sName });
                        }}
                        disabled={!formData.PUserType}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="CRM Roles"
                        value={formData?.CRMRoles ?? ""}
                        onChange={(e) => handleSelectChange(e, "CRMRoles")}
                        options={CRMRoles}
                        disabled={formData.userType === "Group"}
                      />
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Enable email authorization
                        </Typography>
                      </Box>
                    </MDBCol>
                  </MDBRow>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    <Typography variant="body1">User Type</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                  <MDBRow>
                    <MDBCol
                      lg="1"
                      md="2"
                      sm="4"
                      xs="6"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Mobile
                        </Typography>
                      </Box>
                    </MDBCol>
                    <MDBCol
                      lg="1"
                      md="2"
                      sm="4"
                      xs="6"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Web
                        </Typography>
                      </Box>
                    </MDBCol>
                  </MDBRow>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                      mt: 3,
                      mb: 3,
                    }}
                  >
                    <Typography variant="body1">Credentials</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                  <MDBRow>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{ marginBottom: "20px" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Account disabled
                        </Typography>
                      </Box>
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{ marginBottom: "20px" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Do not lock account
                        </Typography>
                      </Box>
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{ marginBottom: "20px" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Allow multi login
                        </Typography>
                      </Box>
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{ marginBottom: "20px" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Send email notification
                        </Typography>
                      </Box>
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{ marginBottom: "20px" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Email user on login success
                        </Typography>
                      </Box>
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{ marginBottom: "20px" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          // checked={checked}
                          // onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          Email on login failure
                        </Typography>
                      </Box>
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
            className
            expanded={expanded === "panel3"}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <LockIcon sx={{ color: primaryButtonColor }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>Restrictions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="body1">Block User</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                  <MDBRow>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        value={formData.FromDate ?? " "}
                        label="From Date"
                        type={"date"}
                        setValue={(data) => {
                          setformData({ ...formData, FromDate: data });
                        }}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        value={formData.ToDate ?? " "}
                        label="To Date"
                        type={"date"}
                        setValue={(data) => {
                          setformData({ ...formData, ToDate: data });
                        }}
                      />
                    </MDBCol>
                  </MDBRow>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="body1">Working Hours</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                  <MDBRow>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{ marginBottom: "20px" }}
                    >
                      <BasicDateTimePicker
                        formData={formData}
                        setFormData={setformData}
                        formDataName1={"sCheckInDate"}
                        formDataName2={"sCheckInTime"}
                        label={"From"}
                        disableFuture={true}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <BasicDateTimePicker
                        formData={formData}
                        setFormData={setformData}
                        formDataName1={"sCheckOutDate"}
                        formDataName2={"sCheckOutTime"}
                        label={"To"}
                        disableFuture={false}
                      />
                    </MDBCol>
                  </MDBRow>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    <Typography variant="body1">Working Days</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                  <MDBRow>
                    {workingDays.map((day, index) => (
                      <MDBCol
                      lg="2"
                      md="3"
                      sm="4"
                      xs="5"
                      style={{ marginBottom: "20px" }}
                    >
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Checkbox
                          // checked={checkedDays.includes(index + 1)}
                          // onChange={() => handleDayChange(index + 1)}
                          inputProps={{
                            "aria-label": `controlled-${day.toLowerCase()}`,
                          }}
                          sx={{ padding: 0 }}
                        />
                        <Typography
                          sx={{ fontSize: "14px", padding: 0 }}
                          variant="body1"
                        >
                          {day}
                        </Typography>
                      </Box>
                      </MDBCol>
                    ))}
                    
                  </MDBRow>
                  <UserDomainComponent/>

                </MDBCardBody>
              </div>
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
            className
            expanded={expanded === "panel4"}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <Language sx={{ color: primaryButtonColor }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>Device</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <UserDeviceTable/>
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
            className
            expanded={expanded === "panel5"}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <ChecklistIcon sx={{ color: primaryButtonColor }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>
              Restrictions For Entry
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <RoleRestriction
                    masterItems={masterItems}
                    restrictionItems={restrictionItems}
                  />
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Dialog
        open={openLoadFrom}
        onClose={handleCloseLoadFrom}
        aria-labelledby="form-dialog-title"
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: thirdColor, textAlign: "center" }}
        >
          Users
        </Typography>
        <Box sx={{ minHeight: "200px", ml: 2 }}>
          <Typography>User1</Typography>
        </Box>
        <DialogContent>
          <input
            placeholder="Search"
            style={{ borderRadius: "5px", border: "1px solid #ddd" }}
          />
          {/* You can add more content here such as a list of items */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLoadFrom} sx={buttonStyle}>
            Ok
          </Button>
          <Button onClick={handleCloseLoadFrom} sx={buttonStyle}>
            Cancel
          </Button>
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
    </Box>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import { primaryButtonColor, thirdColor } from "../../../../../config";
import { Box, Checkbox, FormControlLabel, Radio, TextField } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
// import AccountInput from "../../../../../components/Inputs/AccountInput";
// import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
// import SearchBox2 from "../../../../../components/SearchBox/SearchBox2";
// import { CustomScroll } from "react-custom-scroll";
// import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
// import MasterLanguage from "./MasterLanguage";
// import AccountInput1 from "../../../../../components/Inputs/AccountInput1";
import { useTheme } from "../../../../config/themeContext";
// import MasterOtherNames from "./MasterOtherNames";
import RoleSelect1 from "../../../../components/Select/RoleSelect1";
// import { details } from "../../../../../config/masterConfig";
// import { CheckBox } from "@mui/icons-material";
// import AdvancedSearchSelect from "../../../../../components/Select/AdvanceSearchSelect";

const weeks = [
  { title: "ABC", iId: 1 },
  { title: "DEF", iId: 2 },
  { title: "GHI", iId: 3 },
];

const language = [
  { title: "English", iId: 1 },
  { title: "Arabic", iId: 2 },
  { title: "Spanish", iId: 3 },
];

const BusinessUnit = [
  { title: "Unit1", iId: 1 },
  { title: "Unit2", iId: 2 },
  { title: "Unit3", iId: 3 },
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

export default function PropertiesPage1() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedEntity, setSelectedEntity] = React.useState([]);
  const [select, setSelect] = React.useState("");
  const [formData1, setformData1] = React.useState({})


  const [checkboxState, setCheckboxState] = React.useState({
    dateCanot: false,
});

const handleChange1 = (event) => {
    setCheckboxState({
        ...checkboxState,
        [event.target.name]: event.target.checked,
    });
};

const handleSelectChange = (event) => {
   
    setSelect(event.target.value);
  };

const handleRadioChange = (event) => {
    setformData1({ ...formData1, searchBy: event.target.value });
};


  const { currentTheme } = useTheme();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  

  

  const getBorderColor = () => {
    return localStorage.getItem('color') === 'true' ? '#fff' : '#000';
  };

  // const details = [
  //   {label:'Account', value:'Account'},
  //   {label:'View', value:'View'}
  // ]


  return (
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
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Properties</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody style={{margin:3, display:'flex'}}>
                
                <Box sx={{mt:2}}>
                    {/* <Typography sx={{border: true, fontWeight: 'bold'}}> Miscellaneous</Typography> */}
                    
                    <RoleSelect1
                         label="Status"
                         value={select}
                         onChange={handleSelectChange}
                         options={[
                            { value: 'Active', label: 'Active' },
                            { value: 'Inactive', label: 'Inactive' },
                            
                          ]}
                        />
                        <Box
                            sx={{ display: "flex", flexDirection: 'column' }}
                        >
                            
                            <FormControlLabel
                                control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange1} name="dateCanot" />}
                                label="Do not restrict the selection even if rights are not allotted "
                            />
                            {/* <FormControlLabel
                                control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange1} name="dateCanot" />}
                                label="Allow Other Companies To View Record "
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange1} name="dateCanot" />}
                                label="Display ledger by currency "
                            />
                            <FormControlLabel
                                control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange1} name="dateCanot" />}
                                label="Send Sms Email Wherever Account Debited/Credited "
                            /> */}
                            {/* <FormControlLabel
                                control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange1} name="dateCanot" />}
                                label="Hide the items under the group from displaying in the final reports "
                            /> */}
                            {/* <FormControlLabel
                                control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange1} name="dateCanot" />}
                                label="Do not allow entries if budget is not defined "
                            /> */}
                            
                            </Box>
                        
                </Box>
                
                
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

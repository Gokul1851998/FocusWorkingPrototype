import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../../../config";
import { Box, Checkbox, FormControlLabel, TextField } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import AccountInput from "../../../../../components/Inputs/AccountInput";
import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
import SearchBox2 from "../../../../../components/SearchBox/SearchBox2";
import { CustomScroll } from "react-custom-scroll";
import AccountInput1 from "../../../../../components/Inputs/AccountInput1";
import MasterLanguage from "../AccountMaster/MasterLanguage";
import MasterOtherNames from "../AccountMaster/MasterOtherNames";

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

export default function CustomerVendorDetails() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedEntity, setSelectedEntity] = React.useState([]);
  const [accountName, setAccountName] = React.useState("");

  const handleAccountNameChange = (event) => {
   
    setAccountName(event.target.value);
  };

  const language = [
    { title: "English", iId: 1 },
    { title: "Arabic", iId: 2 },
    { title: "Spanish", iId: 3 },
  ];

  const BusinessUnit = [
    { title: "Unit1", iId: 1 },
    { title: "Unit3", iId: 2 },
    { title: "Unit3", iId: 3 },
  ];
  const handleChild = (data) => {
    
    setSelectedEntity(data)
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
        >
          <Typography style={{ fontSize: "14px" }}>General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AccountInput1 label="Name"  value={accountName} onChange={handleAccountNameChange} mandatory={1}/>
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Code" mandatory={1} />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Type"  isMandatory={1}/>
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Credit Limit" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Credit Days" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Salesman" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Exchange Adjustment Gain A/C" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Exchange Adjustment Loss A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Default Currency" />
                  </MDBCol>
                   {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Reminder Terms" />
                  </MDBCol> */}
                  
                </MDBRow>
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expanded={expanded === "panel2"}
        >
          <Typography style={{ fontSize: "14px" }}>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Default Currency" />
                  </MDBCol>
                   <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Reminder Terms" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Exchange Adjustment Gain A/C" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Exchange Adjustment Loss A/C" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion> */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expanded={expanded === "panel3"}
        >
          <Typography style={{ fontSize: "14px" }}>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
              {/* <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                      mt: 3,
                      mb: 3,
                    }}
                  >
                    <Typography variant="body1">Address</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box> */}
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Address" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="City" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Country" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="PIN" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Email" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Contact Person" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Mobile Number" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Send Email to Customer"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Telephone Number" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Fax Number" />
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
                    <Typography variant="body1">Shipping Details</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                <MDBRow>
                
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Shipping Address" />
                  </MDBCol>  
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Allow customer/vendor portal-checkbox"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol> */}
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="City" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Country" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="PIN" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Email" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Contact Person" />
                  </MDBCol>
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Mobile Number" />
                  </MDBCol> */}
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Send Email to Customer"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Telephone Number" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Fax Number" />
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
                    <Typography variant="body1">Bank Details</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted #000",
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Bank Account Name" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Bank Account Number" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="IFSC Code" />
                  </MDBCol> 
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Payment Type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Finance Email" />
                  </MDBCol> 

                </MDBRow>
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
          expanded={expanded === "panel"}
        >
          <Typography style={{ fontSize: "14px" }}>VAT Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                  
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Place of supply" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Reverse charge" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          expanded={expanded === "panel5"}
        >
          <Typography style={{ fontSize: "14px" }}>INFO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Telephone Number" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Fax Number" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Pin" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Allow customer/vendor portal-checkbox"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="bank Account Name" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="bank Account Number" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="IFSC Code" />
                  </MDBCol> 
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Payment Type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Finance Email" />
                  </MDBCol>   

                 
                </MDBRow>
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion> */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          aria-controls="panel6d-content"
          id="panel6d-header"
          expanded={expanded === "panel6"}
        >
          <Typography style={{ fontSize: "14px" }}>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MDBCardBody>
            <MDBRow>
              {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                <div
                  style={{
                    width: "auto",
                    flexDirection: "column",
                    height: "200px",
                    overflowY: "auto",
                    margin: "16px 0",
                    border: "1px solid #969999",
                    padding: "0 10px",
                    boxSizing: "border-box",
                    borderRadius: 5,
                  }}
                >
                  <CustomScroll heightRelativeToParent="100%">
                    <Typography style={{ fontSize: "14px", color: "gray" }}>
                      Language
                    </Typography>
                    <SearchBox
                      initialItems={language }
                      selected={select}
                      params={"projects"}
                      handleChild={handleChild}
                    />
                  </CustomScroll>
                </div>
              </MDBCol> */}
              <MasterLanguage accountName={accountName} />
            </MDBRow>
          </MDBCardBody>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          aria-controls="panel7d-content"
          id="panel7d-header"
          expanded={expanded === "panel7"}
        >
          <Typography style={{ fontSize: "14px" }}>Business Entity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="3" md="4" sm="6" xs="12">
                <div
                  style={{
                    width: "auto",
                    flexDirection: "column",
                    height: "200px",
                    overflowY: "auto",
                    margin: "16px 0",
                    border: "1px solid #969999",
                    padding: "0 10px",
                    boxSizing: "border-box",
                    borderRadius: 5,
                  }}
                >
                  <CustomScroll heightRelativeToParent="100%">
                    <Typography style={{ fontSize: "14px", color: "gray" }}>
                      Business Entity
                    </Typography>
                    <SearchBox2
                      initialItems={BusinessUnit }
                      selected={selectedEntity}
                      handleChild={handleChild}
                    />
                  </CustomScroll>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </AccordionDetails>
      </Accordion>
      

      
    </div>
  );
}

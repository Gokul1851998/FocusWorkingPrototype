import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../../../config";
import { Checkbox, FormControlLabel, TextField,IconButton, Box } from "@mui/material";
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
import SecurityInput from "../../../../../components/Inputs/SecurityInput";
import { useState } from "react";
import {
 Delete as DeleteIcon,
} from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ProductClassificationTable from "./ProductClassificationTable";
import MasterLanguage from "../../Account/AccountMaster/MasterLanguage";
import AccountInput1 from "../../../../../components/Inputs/AccountInput1";


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

const uploadIconstyle = {
  color: thirdColor, // Set the icon color
  backgroundColor: "#fff", // Set a background color
  borderRadius: "50%", // Make the button round
  padding: "5px", // Padding to make the icon look bigger and floating
  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", // Add shadow to make it look floating
};

const textFieldStyle= {
  width: 70,
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
export default function ProductDetails() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [formData, setformData] = useState({
    photo: null,
    signature: null,
    userType: "User",
    PUserType: "",
    PUserType1: "",
    FromDate: " ",
    accountingDate:" "
  });
  const [accountName, setAccountName] = React.useState("");

  const handleAccountNameChange = (event) => {
   
    setAccountName(event.target.value);
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
                <AccountInput1 label="Name"  value={accountName} onChange={handleAccountNameChange}/>
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Code" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Item Description" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Item Type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Reorder Level" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Bin capacity" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Valuation Method" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Group" />
                  </MDBCol>
                  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Category" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Item Make" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Country of Origin" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Sub category" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Hse Code" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Printer" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Alternate category" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="CBM" />
                  </MDBCol>
                  
                    
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Bin" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Description" multiline={true}/>
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                  <Checkbox
                    //checked={checkedBillwise}
                    //onChange={handleChangeBillwise}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:"14px",padding:0}} variant="body1">Perishable Item</Typography>
                </label>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
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
                          Image
                        </Typography>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <Box sx={{ display: 'flex', alignItems: 'center',mt:2   }}>
          <Typography  sx={{ fontSize:"14px" }}>Do not show the Items expire within

</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
            sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}>days</Typography>
        </Box>
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
          <Typography style={{ fontSize: "14px" }}>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Standard Cost" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Overhead Cost" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Tax Code" />
                  </MDBCol>
                </MDBRow>
                <Box sx={{ display: 'flex', alignItems: 'center',mt:2  }}>
          <Typography  sx={{ fontSize:"14px" }}>Don't show products expiring in</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
            sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}>days</Typography>
        </Box>
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
          <Typography style={{ fontSize: "14px" }}>Units</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                     
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Default Base Unit" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Default Sales Unit" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Default Purchase Unit" />
                  </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Heights" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Weights" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Length" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Width" />
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
          expanded={expanded === "panel4"}
        >
          <Typography style={{ fontSize: "14px" }}>Classification</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Barcode definition" />
                  </MDBCol>
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Subunit fields needed" />
                  </MDBCol> */}
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Tax Code" />
                  </MDBCol> */}
                </MDBRow>
                <Box style={{paddingBottom:30,paddingTop:20}}>
                <ProductClassificationTable/>
                </Box>
                
                
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
          expanded={expanded === "panel5"}
        >
          <Typography style={{ fontSize: "14px" }}>Other Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                     
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of issue account" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Stocks account" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Sales account" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="WIP account" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of Shortage Stock A/c" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of Excess Stock A/c" />
                  </MDBCol>
                 
                  <MDBCol lg="3" md="4" sm="6" xs="12" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                  <Checkbox
                    //checked={checkedBillwise}
                    //onChange={handleChangeBillwise}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:"14px",padding:0}} variant="body1">Unbill Supplier</Typography>
                </label>
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                  <Checkbox
                    //checked={checkedBillwise}
                    //onChange={handleChangeBillwise}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:"14px",padding:0}} variant="body1">Unbill Customer</Typography>
                </label>
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of Sale Return A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Purchase Variance A/C" />
                  </MDBCol>


                </MDBRow>
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          aria-controls="panel6d-content"
          id="panel6d-header"
          expanded={expanded === "panel6"}
        >
          <Typography style={{ fontSize: "14px" }}>Replenishment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Default Replenishment" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Packing BOM" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="BOM" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Flushing" />
                  </MDBCol>
                </MDBRow>
              
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
          expanded={expanded === "panel5"}
        >
          <Typography style={{ fontSize: "14px" }}>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MDBCardBody>
            <MDBRow>
              <MDBCol  xs="12">
                {/* <div
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
                </div> */}
                 <MasterLanguage accountName={accountName} />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </AccordionDetails>
      </Accordion>

      
    </div>
  );
}

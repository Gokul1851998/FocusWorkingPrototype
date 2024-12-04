import { Box, Breadcrumbs, Checkbox, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import AccountInput from '../../../../components/Inputs/AccountInput'
import AutoComplete2 from '../../../../components/AutoComplete/AutoComplete2'
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useTheme } from '../../../../config/themeContext';
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountInput1 from '../../../../components/Inputs/AccountInput1';
import { CustomScroll } from 'react-custom-scroll';
import SearchBox2 from "../../../../components/SearchBox/SearchBox2";
import MasterLanguage from '../Account/AccountMaster/MasterLanguage';
import { useState } from 'react';
import AdvancedSearchSelect from '../../../../components/Select/AdvanceSearchSelect';
import RoleSelect1 from '../../../../components/Select/RoleSelect1';
import { details } from '../../../../config/masterConfig';

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


const BusinessUnit = [
  { title: "Unit1", iId: 1 },
  { title: "Unit2", iId: 2 },
  { title: "Unit3", iId: 3 },
];

export default function WarehouseDetails() {

  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedEntity, setSelectedEntity] = React.useState([]);
  const [accountName, setAccountName] = React.useState("");
  const [movingVehicle, setmovingVehicle] = useState('')
  const [formData, setFormData] = React.useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleAccountNameChange = (event) => {
   
    setAccountName(event.target.value);
  };

  const handleChild = (data) => {
    
    setSelectedEntity(data)
  };


  const { currentTheme } = useTheme();
  return (
   <div>
    <Box sx={{paddingLeft:3}}>
      <RoleSelect1
            label="Select"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            options={details}
            mandatory={1}
          />
      </Box>
    <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expanded={expanded === "panel1"}
          currentTheme={currentTheme}
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
                    <AccountInput label="Code"   mandatory={1}/>
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Group"  isMandatory={1}/>
                  </MDBCol>
                  <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                    >
                        <RoleSelect1
                         label="WarehouseType"
                         value={movingVehicle}
                         onChange={(e) => setmovingVehicle(e.target.value)}
                         options={[
                          { value: 'MainWarehouse', label: 'MainWarehouse' },
                          { value: 'VirtualWarehouse', label: 'VirtualWarehouse' },
                          { value: 'MovingWarehouse', label: 'MovingWarehouse' },
                        ]}
                        />
                    </MDBCol>
                    {movingVehicle ==='MovingWarehouse' &&<>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Sales Man" />
                  </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Vehicle Number"  />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="chassis Details"  />
                  </MDBCol>
                  </>}
                    {movingVehicle ==='MainWarehouse' &&<>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Select Virtual" />
                  </MDBCol>
                  </>}
                    
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
          currentTheme={currentTheme}
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
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          expanded={expanded === "panel5"}
          currentTheme={currentTheme}
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
  )
}

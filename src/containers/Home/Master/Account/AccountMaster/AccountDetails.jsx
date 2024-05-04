import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../../../config";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import AccountInput from "../../../../../components/Inputs/AccountInput";

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

export default function AccountDetails() {
  const [expanded, setExpanded] = React.useState("panel1");

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
                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Name" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Code" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Select Tree" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Credit Limit" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Account Type" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Credit Days" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Revision Date" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Cheque Discount Limit" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Rate of Interest" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="PDC Discount A/C" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Back A/C" />
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
          <Typography style={{ fontSize: "14px" }}>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Debit/Credit Proposal" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Debit/Credit Required" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Exchange Adjustment Gain A/C" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Exchange Adjustment Loss A/C" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Primary Account" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Default Currency" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Consolidation Method" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Payment Terms" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Reminder Terms" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Finance Charge Terms" />
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
          <Typography style={{ fontSize: "14px" }}>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    {" "}
                    <AccountInput label="Address" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    {" "}
                    <AccountInput label="Tel No" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    {" "}
                    <AccountInput label="Fax No" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="City" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Pin" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    {" "}
                    <AccountInput label="Delivery Address" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    {" "}
                    <AccountInput label="City" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    {" "}
                    <AccountInput label="Pin" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
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

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Allow Customer/Vendor Portal"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol>
                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Email" />
                  </MDBCol>
                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="Password" />
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
          <Typography style={{ fontSize: "14px" }}>Print Layout</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          expanded={expanded === "panel"}
        >
          <Typography style={{ fontSize: "14px" }}>VAT Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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
          <Typography style={{ fontSize: "14px" }}>Department</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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
          <Typography style={{ fontSize: "14px" }}>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
            amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

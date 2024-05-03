import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../../../config";
import { TextField } from "@mui/material";

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
  padding: theme.spacing(2),
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
        <TextField
          margin="normal"
          size="small"
          id="search"
          label="Search"
          autoComplete="off"
          autoFocus
         
          sx={{
            width: 200, // Adjust the width as needed
            "& .MuiInputBase-root": {
              height: 30, // Adjust the height of the input area
            },
            "& .MuiInputLabel-root": {
              transform: "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
            },
            "& .MuiInputBase-input": {
              fontSize: '0.75rem', // Adjust the font size of the input text
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "currentColor", // Keeps the current border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "currentColor", // Optional: Keeps the border color on hover
            },
            
          }}
        />
           <TextField
          margin="normal"
          size="small"
          id="search"
          label="Search"
          autoComplete="off"
          autoFocus
         
          sx={{
            width: 200, // Adjust the width as needed
            "& .MuiInputBase-root": {
              height: 30, // Adjust the height of the input area
            },
            "& .MuiInputLabel-root": {
              transform: "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
            },
            "& .MuiInputBase-input": {
              fontSize: '0.75rem', // Adjust the font size of the input text
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "currentColor", // Keeps the current border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "currentColor", // Optional: Keeps the border color on hover
            },
            
          }}
        />
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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

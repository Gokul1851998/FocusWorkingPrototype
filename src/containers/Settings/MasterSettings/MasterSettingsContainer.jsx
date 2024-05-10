import React from 'react'
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";

import {
  primaryButtonColor,
  secondryColor,
  thirdColor,
} from "../../../config";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

import {
  Box,

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
import PersonIcon from "@mui/icons-material/Person";
import ChecklistIcon from "@mui/icons-material/Checklist";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LockIcon from "@mui/icons-material/Lock";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect } from "react";

import FileCopyIcon from "@mui/icons-material/FileCopy";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Alert, Collapse,Button } from 'reactstrap';
import AutoComplete2 from '../../../components/AutoComplete/AutoComplete2';
import Tree1 from '../../../components/Tree/Tree1';
import { accountTree } from '../../../config/masterConfig';
import { createProfileTree } from '../../../config/securityConfig';
import MasterDefinition from './MasterDefinition';


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
            sx={{ display: "flex", alignItems: "center", fontSize: "1rem" }} // Reduce font size
            key="1"
            color="white"
          >
            <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Settings
          </Link>
          
          <Typography key="3" color="white" sx={{ fontSize: "1rem" }}>
           Master Settings
          </Typography>
          ,
        </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({ iconsClick }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      
      
      
      
      
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
  
        {/* <IconButton
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
        </IconButton> */}
  
        
    
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


function MasterSettingsContainer() {

    const [expanded, setExpanded] = React.useState("panel1");
    
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
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
              Definition
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <MasterDefinition/>
               
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
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
              Customization
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <MDBRow>
                    
                   
                    
                    
                  </MDBRow>
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
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
              Views
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <MDBRow>
                    
                   
                    
                    
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

export default MasterSettingsContainer
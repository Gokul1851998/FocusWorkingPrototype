import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, secondryColor, thirdColor } from "../../../../config";
import { MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,} from "mdb-react-ui-kit";
import AccountInput from "../../../../components/Inputs/AccountInput";
import AutoComplete2 from "../../../../components/AutoComplete/AutoComplete2";
import { Box, IconButton, Stack } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Popover from '@mui/material/Popover';
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from '@mui/icons-material/History';
import SaveIcon from "@mui/icons-material/Save";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { AddCircleOutline , Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon  } from '@mui/icons-material';
import { passwordPolicy } from "../../../../config/securityConfig";
import RoleSelect11 from "./RoleSelect1";
import PersonIcon from '@mui/icons-material/Person';
import TransferList from "./TransferList";


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

  function BasicBreadcrumbs() {
    return (
      <div role="presentation" style={{display:"flex",flexDirection:"row",maxWidth:"fit-content",alignItems:"center"}} >
        
        <Stack spacing={2} sx={{ flex: 1 }}>
        <Breadcrumbs  
        // sx={{
        //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
        //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
        //     }} 
            separator={<NavigateNextIcon fontSize="small" sx={{color:primaryButtonColor}} />}
          aria-label="breadcrumb">
        
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
      </Link>,
     
      <Typography key="3" color="white" sx={{ fontSize: "0.8rem" }}>
      Create Role
      </Typography>,
        </Breadcrumbs>
        </Stack>
      </div>
    );
  }
  const DefaultIcons = ({iconsClick,detailPageId}) => {
    
    return (
      <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        
        {detailPageId !=0 ?
        <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={()=>iconsClick("GetHistory")}
              >
                <Stack direction="column" alignItems="center">
          <HistoryIcon sx={{ color:primaryButtonColor }} />
          <Typography
                    variant="caption"
                    align="center"
                    style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                  >
                    History
                  </Typography>
                </Stack>
              </IconButton>
              :null
        }      
              <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                //onClick={()=>iconsClick("close")}
              >
                <Stack direction="column" alignItems="center">
          <SaveIcon sx={{ color:primaryButtonColor }} />
          <Typography
                    variant="caption"
                    align="center"
                    style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                  >
                    Save
                  </Typography>
                </Stack>
              </IconButton>
              {detailPageId !=0 ?
              <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                //onClick={()=>iconsClick("close")}
              >
                <Stack direction="column" alignItems="center">
          <DeleteIcon sx={{ color:primaryButtonColor }} />
          <Typography
                    variant="caption"
                    align="center"
                    style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                  >
                    Delete
                  </Typography>
                </Stack>
              </IconButton>
               :null
              }      
              {detailPageId !=0 ?
              <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={()=>iconsClick("GetRolesInProfile ")}
              >
                <Stack direction="column" alignItems="center">
          <AssignmentIndIcon sx={{ color:primaryButtonColor }} />
          <Typography
                    variant="caption"
                    align="center"
                    style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                  >
                    Get Roles In Profile 
                  </Typography>
                </Stack>
              </IconButton>
              :null
              }
              <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={()=>iconsClick("GetLoadFrom")}
              >
                <Stack direction="column" alignItems="center">
          <PersonIcon sx={{ color:primaryButtonColor }} />
          <Typography
                    variant="caption"
                    align="center"
                    style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                  >
                    Get Users On Role
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={()=>iconsClick("close")}
              >
                <Stack direction="column" alignItems="center">
          <CloseIcon sx={{ color:primaryButtonColor }} />
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

  export default function RoleDetails({detailPageId,setPage}) {
    const [expanded, setExpanded] = React.useState("panel1");
    const [formData, setFormData] = React.useState({sName:null,iId:null})
    const [selectedOption, setSelectedOption] = React.useState('');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleIconsClick =(value) => {
      switch (value.trim()) {
        case "new":
          handleAdd()
          break;
        case "close":
          handleclose()
          break;
        case "GetRolesInProfile":
          handleGetRolesInProfile()  
          break;
        case "GetLoadFrom":
          handleLoadFrom()  
          break;  
        case "GetHistory":
          handleLoadHistory()  
          break;  
        case "customize":
          handleOpenCustomize()  
          break;      
        default:
          break;
      }
}
    
    return (
      <Box sx={{ display: "flex",flexDirection:"column",width:"100%" }}>
    <Box sx={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",backgroundColor:secondryColor,paddingLeft: 1.5,
            paddingRight: 1.5,}}>   
       <BasicBreadcrumbs/>
       <DefaultIcons detailPageId={detailPageId} iconsClick={handleIconsClick}/>
       
    </Box>
    <Box sx={{ width:"100%",overflowX: 'auto',display:"flex",flexDirection:"column",maxHeight:"83vh",overflowY:"auto",scrollbarWidth:"thin",paddingBottom:"30px"}}>
    <Box sx={{pl:3,display:"flex",flexDirection:"column",paddingTop:"10px"}}>
        <Typography sx={{fontSize:"20px",color:secondryColor}}>
          Create Role
        </Typography>
        <Box sx={{display:"flex",flexDirection:"row",mt:2,alignItems:"center"}}>
          
          
          
          <MDBCol lg="2" md="4" sm="6" xs="12">
           <AccountInput label="Role Name" />
          </MDBCol>
          <MDBCol lg="2" md="4" sm="6" xs="12">
          <RoleSelect11
          label="Password Policy"
          value={selectedOption}
          onChange={handleSelectChange}
          options={passwordPolicy}
        />
          </MDBCol>
          
         
          
        </Box>
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
          >
            <Typography style={{ fontSize: "14px" }}>Assigned Profiles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <TransferList />
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
            aria-controls="panel1d-content"
            id="panel1d-header"
            className
            expanded={expanded === "panel2"}
          >
            <Typography style={{ fontSize: "14px" }}>Additions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <MDBRow>
                <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AccountInput label="TRP" />
                  </MDBCol>

                  <MDBCol lg="2" md="4" sm="6" xs="12">
                    <AutoComplete2 FormData={formData} setFormData={setFormData} autoLabel="Reverse charge" />
                  </MDBCol>
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
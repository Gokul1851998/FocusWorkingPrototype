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
import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Stack } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from "@mui/icons-material/Home";
import SaveIcon from "@mui/icons-material/Save";
import { AddCircleOutline , Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon, InfoOutlined, Language, FormatListBulleted  } from '@mui/icons-material';
import { createProfileTree, masterItems, passwordPolicy, restrictionItems } from "../../../../config/securityConfig";
import PersonIcon from '@mui/icons-material/Person';
import ChecklistIcon from '@mui/icons-material/Checklist';
import WidgetsIcon from "@mui/icons-material/Widgets";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import RoleTransactionRights from "../CreateRole/RoleTransactionRights";
import LockIcon from '@mui/icons-material/Lock';
import RoleRestriction from "../CreateRole/RoleRestrictionForEntry";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
      display: 'flex',
    alignItems: 'center',
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
      Create User
      </Typography>,
        </Breadcrumbs>
        </Stack>
      </div>
    );
  }
  const DefaultIcons = ({iconsClick,detailPageId}) => {
    
    return (
      <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        
           
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
              onClick={()=>iconsClick("GetUsersOnRole")}
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
              :null
              }
              
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

  const buttonStyle ={
    backgroundColor: secondryColor,
    color: primaryButtonColor,
    textTransform: 'none',
    padding: "1px",
    '&:hover': {
      backgroundColor: secondryColor, // Change as needed
      color: primaryButtonColor // Example hover color change
    },
    
  }

  export default function UserDetails({detailPageId,setPage}) {
    const [expanded, setExpanded] = React.useState("panel1");
    const [formData, setFormData] = React.useState({sName:null,iId:null})
    const [selectedOption, setSelectedOption] = React.useState('');
    const [openUsersOnRole, setOpenUsersOnRole] = React.useState(false)
  
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
        case "GetUsersOnRole":
          handleUsersOnRole()  
          break;     
        default:
          break;
      }
}
const  handleclose=()=>{
  setPage("summary")
}
const handleUsersOnRole = ()=>{
    
  setOpenUsersOnRole(true)
}
const handleCloseUsersOnRole = ()=>{
  
  setOpenUsersOnRole(false)
} 
    
    return (
      <Box sx={{ display: "flex",flexDirection:"column",width:"100%"}}>
    <Box sx={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",backgroundColor:secondryColor,paddingLeft: 1.5,
            paddingRight: 1.5,}}>   
       <BasicBreadcrumbs/>
       <DefaultIcons detailPageId={detailPageId} iconsClick={handleIconsClick}/>
       
    </Box>
    <Box sx={{ width:"100%",overflowX: 'hidden',display:"flex",flexDirection:"column",maxHeight:"83vh",overflowY:"auto",scrollbarWidth:"thin",paddingBottom:"30px"}}>
    <Box sx={{pl:3,pb:2,display:"flex",flexDirection:"column",paddingTop:"10px"}}>
     
    <FormControl>
    <FormLabel sx={{mb:1}} id="demo-row-radio-buttons-group-label">User/Group</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel sx={{padding:0,mr:5}} value="User" control={<Radio  sx={{padding:0}}/>} label="User" />
        <FormControlLabel value="Group" control={<Radio sx={{padding:0}}/>} label="Group" />
        
       
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
            sx={{alignItems:"center"}}
          >
            <IconButton
         
          sx={{ fontSize: "0.8rem", padding: "0rem" }}
          //onClick={()=>iconsClick("close")}
        >
          <Stack direction="column" alignItems="center">
    <PersonIcon sx={{ color:primaryButtonColor }} />
   
          </Stack>
        </IconButton>
            <Typography style={{ fontSize: "14px" }}>User Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
               
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
   <InfoOutlined sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Additional Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                
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
       <LockIcon sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Restrictions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
               
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
       <Language  sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Device</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                
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
       <ChecklistIcon  sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Restrictions For Entry</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <RoleRestriction masterItems={masterItems}  restrictionItems={restrictionItems}/>
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion> 
        
       

        </Box>
        <Dialog open={openUsersOnRole} onClose={handleCloseUsersOnRole} aria-labelledby="form-dialog-title">
  <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor:thirdColor,textAlign:"center"}}>
       Users in role
        </Typography>
        <Box sx={{minHeight:"200px",ml:2}}>
          <Typography>
            User1
          </Typography>

        </Box>
  <DialogContent>
  <input placeholder='Search' style={{borderRadius:"5px", border:"1px solid #ddd"}}/>
    {/* You can add more content here such as a list of items */}
  </DialogContent>
  <DialogActions>
  <Button onClick={handleCloseUsersOnRole} 
     sx={buttonStyle}

    
    >
      Ok
    </Button>
    <Button onClick={handleCloseUsersOnRole} 
     sx={buttonStyle}

    
    >
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
import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Checkbox,
  Typography,
  Stack,
  IconButton,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Tooltip,
  TextField,
} from "@mui/material";
import {
  TablecellStyle,
  dependentData,
  usedData,
  TablebodyCell,
  mainData,
  HeaderData,
  DropdownData,
  editScreenData,
  editLayoutData,
} from "../../../../config/masterSettings";
import { primaryButtonColor, thirdColor } from "../../../../config";
import PreviewIcon from "@mui/icons-material/Preview";

import EditNoteIcon from "@mui/icons-material/EditNote";

import { useTheme } from "../../../../config/themeContext";
import OpenWithIcon from '@mui/icons-material/OpenWith';
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import RoleSelect1 from "../../../../components/Select/RoleSelect1";
import DeleteIcon from '@mui/icons-material/Delete';
import MasterCustomization from "../../MasterSettings/MasterCustomization";
import CustomizationEditModal from "../../MasterSettings/CustomizationEditModal";
import CustomizationPreviewModal from "../../MasterSettings/CustomizationPreviewModal";
// import EditScnAddModal from "./EditScnAddModal";
import AccountInput from "../../../../components/Inputs/AccountInput";
import AutoComplete2 from "../../../../components/AutoComplete/AutoComplete2";
import AccountInputWithDialog from "../../../../components/Inputs/AccountInputWithDialog";
import { MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import HandymanIcon from '@mui/icons-material/Handyman';
import EditLayoutModal from "./EditLayoutModal";

function EditLayoutPage() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [openBox, setOpenBox] = useState(false);
  const [value, setValue] = useState('')

  const [searchTerm, setSearchTerm] = React.useState("");

  const [openLoadFrom, setOpenLoadFrom] = React.useState(false);

  const [openMoveUser,setOpenMoveUser] = useState(false)

  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle the option click
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleMoveUser = () => {
    setOpenMoveUser(true);
  };
  const handleCloseMoveUser = () => {
    setOpenMoveUser(false);
  };

  const handleLoadFrom = () => {
    setOpenLoadFrom(true);
  };
  const handleCloseLoadFrom = () => {
    setOpenLoadFrom(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [formData, setformData] = useState({});
  const handleSelectChange = (event, key) => {
    setformData({ ...formData, [key]: event.target.value });
  };




  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };





  const handleBoxOpen = () => {
    setOpenBox(true)
  }
  const handleBoxClose = () => {
    setOpenBox(false)
  }



  // Dummy data arrays for each tab

  // Determine which data to display based on selected tab
  const data = selectedTab === 0 ? editLayoutData : HeaderData;

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleEditModalOpen = () => {
    setEdit(true);
  };

  const handleEditModalClose = () => {
    setEdit(false);
  };

  const { currentTheme } = useTheme()

  const buttonStyle = {
    backgroundColor: currentTheme.secondaryColor,
    color: currentTheme.sideBarTextColor1,
    textTransform: 'none',
    padding: "1px",
    '&:hover': {
      backgroundColor: currentTheme.secondaryColor, // Change as needed
      color: currentTheme.sideBarTextColor1 // Example hover color change
    },

  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", m: 2, boxShadow: '5px 2px 4px 4px rgba(128, 128, 128, 0.3)', }}>
      <Tabs
        value={selectedTab}
        sx={{ display: "flex", alignItems: "center" }} // Align items horizontally
        aria-label="basic tabs example"
        onChange={handleChange}
      >
        {/* <Tab sx={{ textTransform: "none"}}  label="Body" />
        <Tab sx={{ textTransform: "none" }} label="Footer" /> */}

        {/* <Box>
        <RoleSelect1
            label="Select"
            value={formData?.Module ?? ""}
            onChange={(e) => handleSelectChange(e, "Module")}
            options={DropdownData}
            mandatory={"true"}
          />

        </Box> */}

        <Box sx={{ marginLeft: "auto" }}>

          {/* <IconButton
          
          aria-label="Preview"
          sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        >
          <Stack direction="column" alignItems="center">
            <OpenWithIcon sx={{ color: currentTheme.actionIcons  }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons , fontSize: "0.6rem" }}
            >
              Move field
            </Typography>
          </Stack>
        </IconButton> */}
          {/* <IconButton
        onClick={handleBoxOpen}
      aria-label="Open"
      sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
    >
      <Stack direction="column" alignItems="center">
        <OpenInNewIcon sx={{ color: currentTheme.actionIcons }} />
        <Typography
          variant="caption"
          align="center"
          style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
        >
          Open
        </Typography>
      </Stack>
    </IconButton> */}
          <IconButton
            onClick={handleEditModalOpen}
            aria-label="Preview"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <AddIcon sx={{ color: currentTheme.actionIcons }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
              >
                Add
              </Typography>
            </Stack>
          </IconButton>
          <IconButton
            onClick={handleLoadFrom}
            aria-label="Preview"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <FileCopyIcon sx={{ color: currentTheme.actionIcons }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
              >
                Load
              </Typography>
            </Stack>
          </IconButton>
          <IconButton
            onClick={handleMoveUser}
            aria-label="Preview"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <HandymanIcon sx={{ color: currentTheme.actionIcons }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
              >
                Customize grid
              </Typography>
            </Stack>
          </IconButton>
          {/* <IconButton
            onClick={handleModalOpen}
            aria-label="Preview"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <PreviewIcon sx={{ color: currentTheme.actionIcons }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
              >
                Preview
              </Typography>
            </Stack>
          </IconButton> */}
        </Box>
      </Tabs>

      <TableContainer
        component={Paper}
        sx={{ maxHeight: "40vh", scrollbarWidth: "thin" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  ...TablecellStyle,
                  backgroundColor: currentTheme.thirdColor, color: currentTheme.tableHeaderColor
                }}
              ></TableCell>
              {Object.keys(data[0] || {}).map((key, index) => (
                <TableCell
                  sx={{
                    ...TablecellStyle,
                    backgroundColor: currentTheme.thirdColor, color: currentTheme.tableHeaderColor

                  }}
                  key={index}
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </TableCell> // Capitalize and format the key
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  scope="row"
                  padding="normal"
                  align="center" // Align content to the center
                  sx={{
                    padding: "0px",
                    paddingLeft: "4px",
                    border: "1px solid #ddd",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <IconButton
                    onClick={handleEditModalOpen}
                    aria-label="Preview"
                    sx={{ fontSize: "0.8rem", padding: 0 }}
                  >
                    <Stack direction="column" alignItems="center">
                      <EditNoteIcon sx={{ color: currentTheme.actionIcons }} />
                    </Stack>
                  </IconButton>
                  <IconButton

                    aria-label="Preview"
                    sx={{ fontSize: "0.7rem", padding: 0 }}
                  >
                    <Stack direction="column" alignItems="center">
                      <DeleteIcon sx={{ color: currentTheme.actionIcons }} />
                    </Stack>
                  </IconButton>
                </TableCell>

                {Object.keys(row).map((key, cellIndex) => (
                  <>
                    <TableCell sx={TablebodyCell} key={cellIndex}>
                      {key === "Is Default" ? (
                        <Checkbox
                          color="primary"
                          sx={{
                            transform: "scale(0.75)", // Adjust the scale to reduce the size
                            p: 0,
                          }}
                          inputProps={{
                            "aria-labelledby": row[key],
                          }}
                        />
                      ) : (
                        row[key]
                      )}
                    </TableCell>
                  </>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Box sx={{p:2}}>
      <TextField
          margin="normal"
          size="small"
          id="search"
          label="Search"
          autoComplete="off"
          autoFocus
          value={searchTerm}
          onChange={handleSearch}
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
        <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>Rate Preloaded</Typography>
        <Box>
          <MDBCardBody>
            <MDBRow>

              <MDBCol lg={3}>
                <AutoComplete2 autoLabel=" Behavior" />
              </MDBCol>

              <MDBCol lg={3}>
                <AccountInputWithDialog label="Quantity preloaded" />
              </MDBCol>
              <MDBCol lg={3}>
                <AccountInput label="Formula" disabled={true} />
              </MDBCol>





            </MDBRow>

          </MDBCardBody>
        </Box>
      </Box> */}
      <CustomizationPreviewModal
        isOpen={open}
        handleCloseModal={handleModalClose}
      />
      <EditLayoutModal
        isOpen={edit}
        handleCloseModal={handleEditModalClose}
      />
      <Dialog
        open={openBox}
        onClose={handleBoxClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <MasterCustomization />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleBoxClose} sx={buttonStyle}>
            Ok
          </Button>
          <Button variant="contained" onClick={handleBoxClose} sx={buttonStyle}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openLoadFrom}
        onClose={handleCloseLoadFrom}
        aria-labelledby="form-dialog-title"
      >
        
        <Box >
          <AutoComplete2/>
        </Box>
        <DialogContent>
          <Box border={1} sx={{width:'100%',height:'280px' }}>

          </Box>
          
        </DialogContent>
        <DialogActions sx={{display:'flex', justifyContent:'space-around'}}>
          
          <Button onClick={handleCloseLoadFrom} sx={{...buttonStyle,width:'100px'}}>
            Select All
          </Button>
          <Button onClick={handleCloseLoadFrom} sx={buttonStyle}>
            Ok
          </Button>
          
        </DialogActions>
      </Dialog>

      <Dialog
      open={openMoveUser}
      onClose={handleCloseMoveUser}
      aria-labelledby="form-dialog-title"
    >
      <Box sx={{ minHeight: '200px', width: '200px' }}>
        {/* Render each Typography component with conditional styles */}
        {['Audit Trial', 'Banner text', 'Default Value'].map((option, index) => (
          <Typography
            key={index}
            onClick={() =>{ handleOptionClick(option) ,handleCloseMoveUser()}}
            sx={{
              cursor: 'pointer',
              backgroundColor: selectedOption === option ? '#d0e7ff' : 'transparent',
              color: selectedOption === option ? '#2196f3' : 'inherit',
              padding: '8px',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#f0f4ff',
              },
            }}
          >
            {option}
          </Typography>
        ))}
      </Box>
      <DialogContent>
        {/* You can add more content here such as a list of items */}
      </DialogContent>
      <DialogActions>
        {/* Add buttons or other actions here if needed */}
      </DialogActions>
    </Dialog>
    </Paper>
  );
}

export default EditLayoutPage;

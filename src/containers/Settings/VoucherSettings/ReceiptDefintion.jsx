import React from "react";
import { Alert, Button, Collapse } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../components/Tree/Tree1";
import { createProfileTree, entityList, workingDays } from "../../../config/securityConfig";
import { useState } from "react";
import { primaryButtonColor } from "../../../config";
import {
  Box,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RoleSelect1 from "../../../components/Select/RoleSelect1";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import {
  masterSettingsDefinitionCheck,
  masterSettingsModule,
} from "../../../config/masterSettings";
import SecurityInput from "../../../components/Inputs/SecurityInput";
import { useTheme } from "../../../config/themeContext";

import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import ReceiptTable from "./ReceiptTable";
import LoadIcon from '@mui/icons-material/CloudDownload';
import AdvanceSearchAutocomplete from "../../../components/AutoComplete/AdvanceSearchAutocomplete";

function ReceiptDefintion() {
  const [isOpen, setIsOpen] = useState(true);
  const [hide, setHide] = useState(true);
  const [formData, setformData] = useState({ AccountFilter: '', AccountFilterCode: '', itemFilter: '', menuList: '', select: '' });
  const [selectedOption, setSelectedOption] = React.useState('');
  const [menuName, setMenuName] = useState('');
  const [openLoadFrom, setOpenLoadFrom] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValues1, setSelectedValues1] = useState([]);
  const handleMenuNameChange = (event) => {
    setMenuName(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLoadFrom = () => {

    setOpenLoadFrom(true)
  }
  const handleCloseLoadFrom = () => {

    setOpenLoadFrom(false)
  }


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

  const toggleOpen = () => {
    setIsOpen(true);
    setHide(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(false);
    }, 400);
  };

  const handleSelectChange = (event, key) => {
    setformData({ ...formData, [key]: event.target.value });
  };


  const getBackgroundColor = () => {
    return localStorage.getItem('color') === 'true' ? '#000' : '#fff';
  };



  const handleSelectionChange = (newValue) => {
    setSelectedValues(newValue);
    console.log("Selected values:", newValue);
  };
  const handleSelectionChange1 = (newValue) => {
    setSelectedValues1(newValue);
    console.log("Selected values:", newValue);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <IconButton
          onClick={handleLoadFrom}
          aria-label="Load"
          sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
        >
          <Stack direction="column" alignItems="center">
            <LoadIcon style={{ color: currentTheme.actionIcons }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
            >
              Load Tag
            </Typography>
          </Stack>
        </IconButton>

        <IconButton
          aria-label="Delete Tag"
          sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
        >
          <Stack direction="column" alignItems="center">
            <DeleteIcon style={{ color: currentTheme.actionIcons }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
            >
              Delete Tag
            </Typography>
          </Stack>
        </IconButton>
      </Box>
      <div style={{ display: "flex" }}>
        {!hide ? (
          <div
            style={{
              display: "flex",
              // alignItems: "center",
              height: "auto",
            }}
          >

            <Button

              onClick={toggleOpen}
              style={{
                marginBottom: "1rem",
                padding: "0.1rem",
                fontSize: "0.6rem",
                height: "2rem",
                borderRadius: "0 0.5rem 0.5rem 0",
                backgroundColor: currentTheme.secondaryColor,
                color: currentTheme.sideBarTextColor1
              }}
            >
              <KeyboardDoubleArrowRightIcon style={{ fontSize: "1rem" }} />
            </Button>
          </div>
        ) : null}

        <Collapse horizontal isOpen={isOpen}>
          <Alert
            style={{
              width: 350,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
              backgroundColor: getBackgroundColor(),
              display: "flex",

              flexDirection: "column"
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "left" }}>

              <IconButton
                onClick={handleClickOpen}
                aria-label="Add group"
                sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <MenuIcon style={{ color: currentTheme.actionIcons, }} />

                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Add Menu
                  </Typography>
                </Stack>
              </IconButton>
              <IconButton
                aria-label="Add group"
                sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <DeleteIcon style={{ color: currentTheme.actionIcons, }} />

                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Delete Menu
                  </Typography>
                </Stack>
              </IconButton>
            </Box>
            <div>
              <Box
                sx={{
                  display: "flex",
                  //  alignItems: "center"
                }}
              >

                <Tree1 items={createProfileTree} />

                <Button

                  onClick={toggleClose}
                  style={{
                    padding: "0.1rem",
                    fontSize: "0.6rem",
                    height: "2rem",
                    borderRadius: "0.5rem 0 0 0.5rem",
                    backgroundColor: currentTheme.secondaryColor,
                    color: currentTheme.sideBarTextColor1
                  }}
                >
                  <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
                </Button>
              </Box>
            </div>
          </Alert>
        </Collapse>

        <Box sx={{ ml: 2 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >

            
            <AdvanceSearchAutocomplete
              width='250px'
              label={"Account1 dependency"}
              value={selectedValues}
              onChange={handleSelectionChange}
            // You can adjust the width as needed
            />
            <AdvanceSearchAutocomplete
              width='250px'
              label={"Account2 dependency"}
              value={selectedValues1}
              onChange={handleSelectionChange1}
            // You can adjust the width as needed
            />
            <Box sx={{marginTop:'-14px'}}>
            <SecurityInput label={"Item dependency"} mandatory={"true"} />
            </Box>
            
            
            
            <SecurityInput label={"Base Document"} mandatory={"true"} />
            <RoleSelect1
              label="Account1 Filter"
              value={formData?.AccountFilter ?? ""}
              onChange={(e) => handleSelectChange(e, "AccountFilter")}
              options={masterSettingsModule}
              mandatory={"true"}
            />
            <RoleSelect1
              label="Account2 Filter"
              value={formData?.AccountFilterCode ?? ""}
              onChange={(e) => handleSelectChange(e, "AccountFilterCode")}
              options={masterSettingsModule}
              mandatory={"true"}
            />
            <RoleSelect1
              label="Item Filter"
              value={formData?.itemFilter ?? ""}
              onChange={(e) => handleSelectChange(e, "itemFilter")}
              options={masterSettingsModule}
              mandatory={"true"}
            />
            <RoleSelect1
              label="Menu list"
              value={formData?.menuList ?? ""}
              onChange={(e) => handleSelectChange(e, "menuList")}
              options={masterSettingsModule}
              mandatory={"true"}
            />

          </div>


          <ReceiptTable />

        </Box>
        <Dialog sx={{ width: '100%' }} open={open} onClose={handleClose}>
          <DialogTitle>Add a Menu</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Menu Name"
              type="text"
              value={menuName}
              onChange={handleMenuNameChange}
              sx={{
                width: 200, // Default width
                "@media (max-width: 600px)": {
                  width: 150, // Reduced width for small screens
                },
                "& .MuiOutlinedInput-root": {
                  height: 30, // Adjust the height of the input area
                },
                "& .MuiInputLabel-root": {
                  transform: "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
                },
                "& .MuiInputLabel-shrink": {
                  transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
                },
                "& .MuiInputBase-input": {
                  fontSize: "0.75rem", // Adjust the font size of the input text
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Ok</Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openLoadFrom} onClose={handleCloseLoadFrom} aria-labelledby="form-dialog-title">
          <Typography variant="h6" gutterBottom component="div" sx={{ backgroundColor: currentTheme.thirdColor, color: currentTheme.sideBarTextColor1, textAlign: "center" }}>
            Load Tag
          </Typography>

          <DialogContent>
            <RoleSelect1
              value={formData?.select ?? ""}
              onChange={(e) => handleSelectChange(e, "select")}
              options={masterSettingsModule}
            />
          </DialogContent>
          <Box sx={{ minHeight: "200px", ml: 2 }}>


          </Box>
          <DialogActions>
            <Button onClick={handleCloseLoadFrom}
              sx={buttonStyle}
            >
              Select All
            </Button>
            <Button onClick={handleCloseLoadFrom}
              sx={buttonStyle}
            >
              Ok
            </Button>
            <Button onClick={handleCloseLoadFrom}
              sx={buttonStyle}
            >
              Reset
            </Button>


          </DialogActions>
        </Dialog>

      </div>
    </>
  );
}

export default ReceiptDefintion;


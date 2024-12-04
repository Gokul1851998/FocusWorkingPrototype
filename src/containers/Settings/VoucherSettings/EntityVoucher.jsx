import React from "react";
import { Alert, Button, Collapse } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../components/Tree/Tree1";
import {
  createProfileTree,
  entityList,
  workingDays,
} from "../../../config/securityConfig";
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
  Grid,
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

import MenuIcon from "@mui/icons-material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import ReceiptTable from "./ReceiptTable";
import LoadIcon from "@mui/icons-material/CloudDownload";
import AccountInput from "../../../components/Inputs/AccountInput";

function EntityVoucher() {
  const [isOpen, setIsOpen] = useState(true);
  const [hide, setHide] = useState(true);
  const [formData, setformData] = useState({
    AccountFilter: "",
    AccountFilterCode: "",
    itemFilter: "",
    menuList: "",
    select: "",
  });
  const [selectedOption, setSelectedOption] = React.useState("");
  const [menuName, setMenuName] = useState("");
  const [openLoadFrom, setOpenLoadFrom] = useState(false);
  const [formData1, setformData1] = useState({});

  const [isPostToAccountChecked, setIsPostToAccountChecked] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedVariable, setSelectedVariable] = useState("");

  const [checkboxState, setCheckboxState] = React.useState({
    dateCanot: false,
  });

  const handleChange = (event) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRadioChange = (event) => {
    setformData1({ ...formData1, searchBy: event.target.value });
  };

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
    setOpenLoadFrom(true);
  };
  const handleCloseLoadFrom = () => {
    setOpenLoadFrom(false);
  };

  const { currentTheme } = useTheme();

  const buttonStyle = {
    backgroundColor: currentTheme.secondaryColor,
    color: currentTheme.sideBarTextColor1,
    textTransform: "none",
    padding: "1px",
    "&:hover": {
      backgroundColor: currentTheme.secondaryColor, // Change as needed
      color: currentTheme.sideBarTextColor1, // Example hover color change
    },
  };

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
    return localStorage.getItem("color") === "true" ? "#000" : "#fff";
  };

  const handleCheckboxChange = (event) => {
    setIsPostToAccountChecked(event.target.checked);
    setSelectedAccount("");
    setSelectedVariable("");
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const handleVariableChange = (event) => {
    setSelectedVariable(event.target.value);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Box sx={{ ml: 2, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {/* <SecurityInput label={"Abbreviation"} mandatory={"true"} /> */}
            <RoleSelect1
              label="Account 1 Dependency"
              value={formData?.AccountFilter ?? ""}
              onChange={(e) => handleSelectChange(e, "AccountFilter")}
              options={masterSettingsModule}
            />
            <RoleSelect1
              label="Account 2 Dependency"
              value={formData?.AccountFilterCode ?? ""}
              onChange={(e) => handleSelectChange(e, "AccountFilterCode")}
              options={masterSettingsModule}
            />

            <RoleSelect1
              label="Item Dependency"
              value={formData?.AccountFilterCode ?? ""}
              onChange={(e) => handleSelectChange(e, "AccountFilterCode")}
              options={masterSettingsModule}
            />

            <RoleSelect1
              label="Default Account 1"
              value={formData?.AccountFilterCode ?? ""}
              onChange={(e) => handleSelectChange(e, "AccountFilterCode")}
              options={masterSettingsModule}
            />

            <RoleSelect1
              label="Default Account 2"
              value={formData?.AccountFilterCode ?? ""}
              onChange={(e) => handleSelectChange(e, "AccountFilterCode")}
              options={masterSettingsModule}
            />
          </div>

          {/* <Box
                        sx={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap' }}
                    >

                        <FormControlLabel
                            control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange} name="dateCanot" />}
                            label="Date cannot be prior to prev. Doc Date"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange} name="dateCanot" />}
                            label="Do not allow editing of this document"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange} name="dateCanot" />}
                            label="Do not allow Input Date"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange} name="dateCanot" />}
                            label="Do not restrict account-1 type"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange} name="dateCanot" />}
                            label="Do not restrict account-2 type"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange} name="dateCanot" />}
                            label="Print using default printer and format"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={checkboxState.mobileApp} onChange={handleChange} name="dateCanot" />}
                            label="Don’t Post COGS"
                        />


                    </Box> */}
          <Box sx={{ marginTop: 2 }}>
            <Typography sx={{ border: true, fontWeight: "bold" }}>
              Restriction
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "200px" }}
              >
                <FormControlLabel
                  value="stop"
                  control={
                    <Radio
                      checked={formData1.searchBy === "stop"}
                      onChange={handleRadioChange}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "13px" }}>Stop</Typography>
                  }
                  labelPlacement="end"
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "200px" }}
              >
                <FormControlLabel
                  value="warn"
                  control={
                    <Radio
                      checked={formData1.searchBy === "warn"}
                      onChange={handleRadioChange}
                    />
                  }
                  label={
                    <Typography sx={{ fontSize: "13px" }}>
                      Warn and Allow
                    </Typography>
                  }
                  labelPlacement="end"
                />
              </Box>
            </Box>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <SecurityInput
                type={"number"}
                label={"Entry restrict condition"}
                mandatory={"true"}
              />
              <SecurityInput
                type={"number"}
                label={"Entry restrict message"}
                mandatory={"true"}
              />
            </div>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              alignItems: "center",
              width: "100%",
              paddingTop: 1,
            }}
          >
            <Typography variant="body1">Post to Account</Typography>
            <Box
              sx={{
                borderBottom: "1px dotted",
                // borderBottmColor: getBorderColor(),
                marginLeft: "8px", // Adjust spacing to your preference
              }}
            />
          </Box>
      
            <Grid container>
              {/* Account Inputs */}
              <Grid item>
                <FormControlLabel
                  sx={{ mt: 1 }}
                  control={
                    <Radio
                      checked={selectedAccount === "account-1"}
                      onChange={handleAccountChange}
                      value="account-1"
                      name="account"
                    //   disabled={!isPostToAccountChecked}
                      size="small"
                    />
                  }
                  label="Account"
                />
                {/* <AutoComplete2
                  autoLabel="Accont"
                  disabled={selectedAccount !== "account-1"}

                  // InputProps={{ endAdornment: <span>⚙️</span> }}
                /> */}
              </Grid>
              <Grid item>
                <FormControlLabel
                  sx={{ mt: 1 }}
                  control={
                    <Radio
                      checked={selectedAccount === "account-2"}
                      onChange={handleAccountChange}
                      value="account-2"
                      name="account"
                    //   disabled={!isPostToAccountChecked}
                      size="small"
                    />
                  }
                  label="Account-2"
                />
                {/* <AutoComplete2
                  autoLabel="Account-2"
                  disabled={selectedAccount !== "account-2"}
                  // InputProps={{ endAdornment: <span>⚙️</span> }}
                /> */}
              </Grid>

              {/* Variable Inputs */}
              <Grid item>
                <FormControlLabel
                  sx={{ mt: 1 }}
                  control={
                    <Radio
                      checked={selectedVariable === "variable-1"}
                      onChange={handleVariableChange}
                      value="variable-1"
                      name="variable"
                    //   disabled={!isPostToAccountChecked}
                      size="small"
                    />
                  }
                  label="Allow entry"
                />
                {/* <AccountInput   
                  label="Allow entry"
                  disabled={selectedVariable !== "variable-1"}
                /> */}
              </Grid>
           
            </Grid>
    
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ border: true, fontWeight: "bold" }}>
              Posting Details
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Update FA"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Select Account in every line"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Detailed Posting"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Update Inventory"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Allow changing Update stock"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Post service Tax"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Post TDS"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Post VAT"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Do not check credit limit"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxState.mobileApp}
                    onChange={handleChange}
                    name="dateCanot"
                  />
                }
                label="Do not check Credit Days"
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ border: true, fontWeight: "bold" }}>
                Currency
              </Typography>
              <RoleSelect1
                label="Add currency in"
                value={formData?.AccountFilter ?? ""}
                onChange={(e) => handleSelectChange(e, "AccountFilter")}
                options={masterSettingsModule}
                mandatory={"true"}
              />
              <Box
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxState.mobileApp}
                      onChange={handleChange}
                      name="dateCanot"
                    />
                  }
                  label="Input exchange rate"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxState.mobileApp}
                      onChange={handleChange}
                      name="dateCanot"
                    />
                  }
                  label="Post exchange rate difference"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxState.mobileApp}
                      onChange={handleChange}
                      name="dateCanot"
                    />
                  }
                  label="Post exchange rate difference based on standard Rate"
                />
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ border: true, fontWeight: "bold" }}>
                AR/AP
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <RoleSelect1
                  label="Due Date"
                  value={formData?.AccountFilter ?? ""}
                  onChange={(e) => handleSelectChange(e, "AccountFilter")}
                  options={masterSettingsModule}
                  mandatory={"true"}
                />
                <RoleSelect1
                  label="AR/AP Options"
                  value={formData?.AccountFilterCode ?? ""}
                  onChange={(e) => handleSelectChange(e, "AccountFilterCode")}
                  options={masterSettingsModule}
                  mandatory={"true"}
                />
                <RoleSelect1
                  label="Options"
                  value={formData?.AccountFilterCode ?? ""}
                  onChange={(e) => handleSelectChange(e, "AccountFilterCode")}
                  options={masterSettingsModule}
                  mandatory={"true"}
                />
              </div>
              <Box
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxState.mobileApp}
                      onChange={handleChange}
                      name="dateCanot"
                    />
                  }
                  label=" Select bill before Amount"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxState.mobileApp}
                      onChange={handleChange}
                      name="dateCanot"
                    />
                  }
                  label=" Post discount based on credit days"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxState.mobileApp}
                      onChange={handleChange}
                      name="dateCanot"
                    />
                  }
                  label="Input payment terms"
                />
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ border: true, fontWeight: "bold" }}>
                Rounding of behavior
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "200px" }}
                >
                  <FormControlLabel
                    value="default"
                    control={
                      <Radio
                        checked={formData1.searchBy === "default"}
                        onChange={handleRadioChange}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "13px" }}>Default</Typography>
                    }
                    labelPlacement="end"
                  />
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "200px" }}
                >
                  <FormControlLabel
                    value="final"
                    control={
                      <Radio
                        checked={formData1.searchBy === "final"}
                        onChange={handleRadioChange}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "13px" }}>
                        final stage
                      </Typography>
                    }
                    labelPlacement="end"
                  />
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", width: "200px" }}
                >
                  <FormControlLabel
                    value="level"
                    control={
                      <Radio
                        checked={formData1.searchBy === "level"}
                        onChange={handleRadioChange}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: "13px" }}>
                        At each level
                      </Typography>
                    }
                    labelPlacement="end"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Dialog sx={{ width: '100%' }} open={open} onClose={handleClose}>
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
                </Dialog> */}

        {/* <Dialog open={openLoadFrom} onClose={handleCloseLoadFrom} aria-labelledby="form-dialog-title">
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
                </Dialog> */}
      </div>
    </>
  );
}

export default EntityVoucher;

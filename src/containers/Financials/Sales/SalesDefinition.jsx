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
import { MDBCol, MDBInput } from "mdb-react-ui-kit";

import { useTheme } from "../../../config/themeContext";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import Definitiontable1 from "../../Settings/MasterSettings/DefinitionTable1";
import DefinitionTable2 from "./DefinitionTable2";

function SalesDefinition({ detailPageId }) {
    const [isOpen, setIsOpen] = useState(true);
    const [hide, setHide] = useState(true);
    const [formData, setformData] = useState({ Stock:'', Raise:''});
    const [selectedOption, setSelectedOption] = React.useState('');
    const [menuName, setMenuName] = useState('');

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


    const { currentTheme } = useTheme()


    const handleRadioChange = (event) => {
        setformData({ ...formData, searchBy: event.target.value });
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

    const handleCheckboxChange = (event, item) => {
        const updatedCheckState = { ...formData, [item]: event.target.checked };
        setformData(updatedCheckState);
    };
    const getBackgroundColor = () => {
        return localStorage.getItem('color') === 'true' ? '#000' : '#fff';
    };

    return (
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

            {/* <Collapse horizontal isOpen={isOpen}>
        <Alert
          style={{
            width: 350,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            backgroundColor: getBackgroundColor(),
            display: "flex",
           
            flexDirection:"column"
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
                  backgroundColor:currentTheme.secondaryColor,
                  color:currentTheme.sideBarTextColor1
                }}
              >
                <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
              </Button>
            </Box>
          </div>
        </Alert>
      </Collapse> */}
            <Box sx={{ ml: 2 }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "20px",
                    }}
                >
                    <RoleSelect1
                        label="Document No"
                        value={formData?.Module ?? ""}
                        onChange={(e) => handleSelectChange(e, "Module")}
                        options={masterSettingsModule}
                        mandatory={"true"}
                    />
                    
                    {/* <MDBCol lg="3" md="4" sm="6" xs="12"> */}
                                        <div style={{width:'250px',marginTop:'16px',height:'30px'}} className="mb-3">
                                            <MDBInput
                                                style={{height:'30px'}}
                                                required
                                                id={`form3Example`}
                                                type="date"
                                                size="small"
                                                autoComplete="off"
                                                label="Date *"
                                                // value={date}
                                                // onChange={(e) => setDate(e.target.value)}
                                                labelStyle={{
                                                    fontSize: "15px",
                                                }}
                                                onKeyDown={(e) => e.preventDefault()}
                                                onClick={(e) => e.target.showPicker?.()} // This line is for modern browsers
                                                onFocus={(e) => e.target.showPicker?.()}
                                            />
                                        </div>
                                    {/* </MDBCol> */}
                                    <RoleSelect1
                        label="Sale Account"
                        value={formData?.Module ?? ""}
                        onChange={(e) => handleSelectChange(e, "Module")}
                        options={masterSettingsModule}
                        mandatory={"true"}
                    />

<RoleSelect1
                        label="Customer Account"
                        value={formData?.Module ?? ""}
                        onChange={(e) => handleSelectChange(e, "Module")}
                        options={masterSettingsModule}
                        mandatory={"true"}
                    />
                    <SecurityInput label={"Narration"} mandatory={"true"} />
                    <SecurityInput label={"Net"} mandatory={"true"} />
                    
                    {/* <RoleSelect1
                    label="Business Entity"
                    value={selectedOption}
                    onChange={(e) => handleSelectChange(e, "BusinessEntity")}
                    options={entityList}
                  /> */}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "20px",
                        marginTop: "10px",
                    }}
                >


                    
                        <Box
                            
                            sx={{ display: "flex", alignItems: "center", width: "200px" }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.Stock}
                                        onChange={(e) => handleCheckboxChange(e, "Stock")}
                                       
                                    />
                                }
                                label={
                                    <Typography
                                        sx={{ fontSize: "13px", padding: 0 }}
                                        variant="body1"
                                    >
                                    Update stock
                                    </Typography>
                                }
                                sx={{ flexGrow: 1 }}
                            />
                        </Box>
                        <Box
                            
                            sx={{ display: "flex", alignItems: "center", width: "200px" }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.Raise}
                                        onChange={(e) => handleCheckboxChange(e, "Raise")}
                                        
                                    />
                                }
                                label={
                                    <Typography
                                        sx={{ fontSize: "13px", padding: 0 }}
                                        variant="body1"
                                    >
                                    Raise Reciept
                                    </Typography>
                                }
                                sx={{ flexGrow: 1 }}
                            />
                        </Box>
                   
                </div>

                <DefinitionTable2 />

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
        </div>
    );
}

export default SalesDefinition;
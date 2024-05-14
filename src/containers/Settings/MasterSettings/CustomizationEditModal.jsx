import React, { useEffect, useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
  Zoom,
  styled,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBCardBody,
  MDBCard,
} from "mdb-react-ui-kit";

import { primaryButtonColor, thirdColor } from "../../../config";
import CustomerVendorDetails from "../../Home/Master/Account/CustomerVendor/CustomerVendorDetails";
import DoneIcon from "@mui/icons-material/Done";
import AccountInput from "../../../components/Inputs/AccountInput";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import CheckBox1 from "../../../components/CheckBox/CheckBox1";
import CheckBox2 from "../../../components/CheckBox/CheckBox2";

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

export default function CustomizationEditModal({ isOpen, handleCloseModal }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  const buttonStyle = {
    textTransform: "none",
    color: `${primaryButtonColor}`,
    backgroundColor: `${thirdColor}`,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
    padding: "4px 6px", // Adjust padding to make the buttons smaller
    fontSize: "0.8rem", // Adjust font size to make the buttons smaller
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseModal]);

  return (
    <div>
      <div
        className={`modal-backdrop fade ${isOpen ? "show" : ""}`}
        style={{
          display: isOpen ? "block" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>

      <Zoom in={isOpen} timeout={isOpen ? 400 : 300}>
        <div
          className={`modal ${isOpen ? "modal-open" : ""}`}
          style={modalStyle}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content" ref={modalRef}>
              <Stack
                direction="row"
                spacing={1}
                padding={2}
                justifyContent="flex-end"
                alignItems="center"
              >
                <Typography variant="body1" color="textSecondary" flexGrow={1}>
                  Main / Edit Extra Field
                </Typography>
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  startIcon={<DoneIcon />}
                  style={buttonStyle}
                >
                  Ok
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCloseModal}
                  startIcon={<CloseIcon />}
                  style={buttonStyle}
                >
                  Close
                </Button>
              </Stack>
              <div style={{ margin: 10 }}>
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
                    <Typography style={{ fontSize: "14px" }}>
                      Field Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol>
                              <AccountInput label="Caption" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Name" />
                            </MDBCol>
                            <MDBCol>
                              <AutoComplete2 autoLabel="DataType" />
                            </MDBCol>

                            <MDBCol>
                              <AccountInput label="Default Value" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Max Size" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Banner Text" />
                            </MDBCol>
                            <MDBCol>
                              <AutoComplete2 autoLabel="Control Type" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Tool Tip Text" />
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <Typography
                              sx={{ pt: 2 }}
                              variant="p"
                              color="gray"
                              gutterBottom
                            >
                              Validation
                            </Typography>
                            <MDBCol>
                              <AccountInput label="Regular Expression" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Error Message" />
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
                    className
                    expanded={expanded === "panel2"}
                  >
                    <Typography style={{ fontSize: "14px" }}>
                      Properties
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol>
                              <CheckBox2 label="Part Of Delivery Address" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Part Of Billing Address" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Mandatory" />
                            </MDBCol>

                            <MDBCol>
                              <CheckBox2 label="Allow As Parameter" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Hidden" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Hidden In Group" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Spell Check" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Mandatory In group" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Audit Trail" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Not available for reports" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Merge Field" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Mass Update" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Include in Quick Create" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Cannot Export" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Cannot Import" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Copy from Parent" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Read Only" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Information Field" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Mandatory in Revision" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Available in Customer Portal" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Editable in Customer Portal" />
                            </MDBCol>
                            <MDBCol>
                              <CheckBox2 label="Do not Allow Search" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Behaviour" />
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
                    className
                    expanded={expanded === "panel3"}
                  >
                    <Typography style={{ fontSize: "14px" }}>
                      Formatting
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol>
                              <AccountInput label="Column span" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Row Span" />
                            </MDBCol>
                            <MDBCol>
                              <AutoComplete2 autoLabel="Character Casing" />
                            </MDBCol>

                            <MDBCol>
                              <AutoComplete2 autoLabel="Text Align" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Font" />
                            </MDBCol>
                            <MDBCol>
                              <TextField
                                margin="normal"
                                size="small"
                                id="search1"
                                type="color"
                                label="Back Color"
                                autoComplete="off"
                                autoFocus
                                sx={{
                                  width: 250, // Adjust the width as needed
                                  "& .MuiInputBase-root": {
                                    height: 30, // Adjust the height of the input area
                                  },
                                  "& .MuiInputLabel-root": {
                                    transform:
                                      "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
                                  },
                                  "& .MuiInputLabel-shrink": {
                                    transform:
                                      "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
                                  },
                                  "& .MuiInputBase-input": {
                                    fontSize: "0.75rem", // Adjust the font size of the input text
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor: "currentColor", // Keeps the current border color
                                    },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "currentColor", // Optional: Keeps the border color on hover
                                  },
                                }}
                              />
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
                    className
                    expanded={expanded === "panel4"}
                  >
                    <Typography style={{ fontSize: "14px" }}>Rules</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody>
                          <Box
                            sx={{
                              width: "auto",
                         
                              zIndex: 1,
                            }}
                          >
                            <Stack
                              direction="row"
                              spacing={1}
                          
                              justifyContent="flex-end"
                            >
                              <IconButton
                                aria-label="New"
                                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                              >
                                <Stack direction="column" alignItems="center">
                                  <AddIcon style={{ color: thirdColor }} />
                                  <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                      color: thirdColor,
                                      fontSize: "0.6rem",
                                    }}
                                  >
                                    New
                                  </Typography>
                                </Stack>
                              </IconButton>
                              <IconButton
                                aria-label="Save"
                                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                              >
                                <Stack direction="column" alignItems="center">
                                  <SaveIcon style={{ color: thirdColor }} />
                                  <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                      color: thirdColor,
                                      fontSize: "0.6rem",
                                    }}
                                  >
                                    Save
                                  </Typography>
                                </Stack>
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                              >
                                <Stack direction="column" alignItems="center">
                                  <DeleteIcon style={{ color: thirdColor }} />
                                  <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                      color: thirdColor,
                                      fontSize: "0.6rem",   
                                    }}
                                  >
                                    Delete
                                  </Typography>
                                </Stack>
                              </IconButton>
                            </Stack>
                          </Box>
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
                    <Typography style={{ fontSize: "14px" }}>
                      External Modules
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody></MDBCardBody>
                      </div>
                    </>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

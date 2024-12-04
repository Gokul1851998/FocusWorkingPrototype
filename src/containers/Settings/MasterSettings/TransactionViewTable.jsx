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
    Button,
    Dialog,
    DialogContent,
    DialogActions,
} from "@mui/material";
import {
    TablecellStyle,
    dependentData,
    usedData,
    TablebodyCell,
    mainData,
    HeaderData,
    DropdownData,
} from "../../../config/masterSettings";
import { primaryButtonColor, thirdColor } from "../../../config";
import PreviewIcon from "@mui/icons-material/Preview";
import CustomizationPreviewModal from "./CustomizationPreviewModal";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CustomizationEditModal from "./CustomizationEditModal";
import { useTheme } from "../../../config/themeContext";
import ViewEditModal from "./ViewEditModal";
import RoleSelect1 from "../../../components/Select/RoleSelect1";
import EditScnAddModal from "../VoucherSettings/EditScreen/EditScnAddModal";
import EditLayoutModal from "../VoucherSettings/EditLayout/EditLayoutModal";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function TransactionViewTable({ handleAddField }) {

    const { currentTheme } = useTheme();
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
    const [selectedTab, setSelectedTab] = useState(0);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [edit2, setEdit2] = useState(false);
    const [openLoadFrom, setOpenLoadFrom] = useState(false);

    const handleLoadFrom = () => {

        setOpenLoadFrom(true)
      }
      const handleCloseLoadFrom = () => {
    
        setOpenLoadFrom(false)
      }

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const [formData, setformData] = useState({});
    const handleSelectChange = (event, key) => {
        setformData({ ...formData, [key]: event.target.value });
    };

    // Dummy data arrays for each tab

    // Determine which data to display based on selected tab
    const data = selectedTab === 0 ? mainData : HeaderData;

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const handleEditModalOpen = (id) => {
        console.log('id', id);
        if (id === '1') {
            setEdit(true);
        }
        if (id === '2') {
            setEdit2(true);
        }

    };

    const handleEditModalClose = () => {
        setEdit(false);
        setEdit2(false)
    };

    

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", m: 2 }}>
            <Tabs
                value={selectedTab}
                sx={{ display: "flex", alignItems: "center" }} // Align items horizontally
                onChange={handleChange}
                aria-label="basic tabs example"
            >
                {/* <Tab sx={{ textTransform: "none", }} label="Main" />
        <Tab sx={{ textTransform: "none" }} label="Header Details" /> */}


                <Box sx={{ marginLeft: "auto" }}>
                    <IconButton
            onClick={handleLoadFrom}
            aria-label="edit"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack  direction="column" alignItems="center">
              <EditNoteIcon sx={{ color: currentTheme.actionIcons }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
              >
                Insert Info Feild
              </Typography>
            </Stack>
          </IconButton>
                    <IconButton
                        onClick={handleLoadFrom}
                        aria-label="Preview"
                        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                    >
                        <Stack direction="column" alignItems="center">
                            <InsertDriveFileIcon sx={{ color: currentTheme.actionIcons }} />
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                            >
                                Insert Info Column
                            </Typography>
                        </Stack>
                    </IconButton>
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
                                <>
                                    {key === 'SNo' ? (
                                        <TableCell
                                            sx={{
                                                ...TablecellStyle,
                                                backgroundColor: currentTheme.thirdColor,
                                                color: currentTheme.tableHeaderColor,
                                            }}
                                        >
                                            <Button
                                                onClick={handleAddField}
                                                style={{ backgroundColor: 'transparent', p: 0 }}
                                            >
                                                <Stack direction="column" alignItems="center">
                                                    <AddBoxRoundedIcon />

                                                </Stack>
                                            </Button>
                                        </TableCell>
                                    ) : (
                                        <TableCell
                                            sx={{
                                                ...TablecellStyle,
                                                backgroundColor: currentTheme.thirdColor,
                                                color: currentTheme.tableHeaderColor,
                                            }}
                                        >
                                            {key.replace(/([A-Z])/g, " $1").trim()} {/* Capitalize and format the key */}
                                        </TableCell>
                                    )}
                                </>
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
                                        onClick={() => handleEditModalOpen(row.SNo)}
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
            <CustomizationPreviewModal
                isOpen={open}
                handleCloseModal={handleModalClose}
            />
            <EditScnAddModal
                isOpen={edit}
                handleCloseModal={handleEditModalClose}
            />
            <EditLayoutModal
                isOpen={edit2}
                handleCloseModal={handleEditModalClose}
            />

<Dialog open={openLoadFrom} onClose={handleCloseLoadFrom} aria-labelledby="form-dialog-title">
      
      <Box sx={{ minHeight: "200px", width:'200px',p:1 }}>
        <Typography>
            <ArrowRightIcon/>
          Miscellaneous
        </Typography>
        <Typography>
            <ArrowRightIcon/>
          Account balance
        </Typography>
        <Typography>
            <ArrowRightIcon/>
          Stock
        </Typography>

      </Box>
      <DialogContent>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleCloseLoadFrom}
          sx={buttonStyle}


        >
          Ok
        </Button>
        <Button variant="contained" onClick={handleCloseLoadFrom}
          sx={buttonStyle}


        >
          Close
        </Button>
        

      </DialogActions>
    </Dialog>
        </Paper>
    );
}



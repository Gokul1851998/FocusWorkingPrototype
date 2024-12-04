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
} from "@mui/material";
import {
    TablecellStyle,
    TablebodyCell,
    mainData1,
    HeaderData,
   
} from "../../../../../config/masterSettings";
// import { primaryButtonColor, thirdColor } from "../../../config";
import PreviewIcon from "@mui/icons-material/Preview";
// import CustomizationPreviewModal from "./CustomizationPreviewModal";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useTheme } from "../../../../../config/themeContext";
// import CustomizationEditModal from "./CustomizationEditModal";
// import ViewEditModal from "./ViewEditModal";
// import RoleSelect1 from "../../../components/Select/RoleSelect1";

export default function BarcodeTable() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const [formData, setformData] = useState({});
    const handleSelectChange = (event, key) => {
        setformData({ ...formData, [key]: event.target.value });
    };

    // Dummy data arrays for each tab

    // Determine which data to display based on selected tab
    const data = selectedTab === 0 ? mainData1 : HeaderData;

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

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", m: 0 }}>
            

            <TableContainer
                component={Paper}
                sx={{ maxHeight: "40vh", scrollbarWidth: "thin" }}
            >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            
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
                                

                                {Object.keys(row).map((key, cellIndex) => (
                                    <>
                                        <TableCell sx={TablebodyCell} key={cellIndex}>
                                            
                                               {row[key]}
                                            
                                        </TableCell>
                                    </>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}


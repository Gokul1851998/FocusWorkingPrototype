import React, { useState } from 'react';
import {
    Box, Button, Dialog, DialogContent, FormControl, InputLabel, Select, MenuItem, TextField, ToggleButton, ToggleButtonGroup,
    Typography, IconButton, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip,
    Switch,
    Menu,
    Stack
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LoadIcon from '@mui/icons-material/Download';  // Example icon, replace with appropriate icon for Load
import TreeWithCheckBox from '../../../../../components/Tree/TreeWithCheckBox';
import AccountInput from '../../../../../components/Inputs/AccountInput';
import { primaryButtonColor, primaryColor, thirdColor } from '../../../../../config';
import CurrencyTableInput from '../../../../../components/Inputs/CurrencyTableInput';
import RoleSelect1 from '../../../../../components/Select/RoleSelect1';
import { useEffect } from 'react';
import SecurityInput from '../../../../../components/Inputs/SecurityInput';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AdvancedSearchSelect from '../../../../../components/Select/AdvanceSearchSelect';
import AdvanceSearchInput from '../../../../../components/Inputs/AdvanceSearchInput';
import { searchAdvanceSelect } from '../../../../../config/masterConfig';
import { useTheme } from '../../../../../config/themeContext';
import MasterEntitySelect from '../../../../../components/Select/MasterEntitySelect';
import UpdateIcon from '@mui/icons-material/Update';
import MassUpdateTableInput from '../../../../../components/Inputs/MassUpdateTableInput';




export default function MassUpdatePopup({ onClose, items }) {
    const { currentTheme, switchTheme } = useTheme();
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [selectedNodes, setSelectedNodes] = useState([]);
    const [formData, setformData] = useState({ searchSelect: "Default" })
    const [anchorEl, setAnchorEl] = useState(null);
    const [saveDialogOpen, setSaveDialogOpen] = useState(false);
    const [newSearchSelect, setnewSearchSelect] = useState("")
    const [searchSelect, setsearchSelect] = useState(searchAdvanceSelect)
    const [searchSelectMappings, setSearchSelectMappings] = useState({//already exist

    });
    const [confirmUpdateDialogOpen, setConfirmUpdateDialogOpen] = useState(false);
    const [rows, setRows] = useState([
        { conjunction: '', field: '', operator: '', compareWith: '', value: '' }
    ]);
    const [first, setFirst] = useState([
        { value: '', action: '' }
    ]);


    const cellStyle = {
        padding: "0px",
        paddingLeft: "4px",
        border: " 1px solid #ddd",
        fontWeight: "600",
        font: "14px",

        color: currentTheme.sideBarTextColor1,
        paddingTop: "3px",
        paddingBottom: "3px",
    }
    const headerCellStyle = {
        ...cellStyle,
        backgroundColor: currentTheme.thirdColor,
        color: currentTheme.sideBarTextColor1,
    };
    const bodyCell = {
        padding: "0px",
        paddingLeft: "4px",
        border: " 1px solid #ddd",
        minWidth: "100px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",

    }

    const option = [
        { value: 'Cash', label: 'Cash' }
    ]

    useEffect(() => {
        const selected = searchSelectMappings[formData.searchSelect] || [];
        setSelectedNodes(selected);
    }, [formData.searchSelect, searchSelectMappings, open]);

    const handleSelectChange = (event, key) => {
        const newFormData = { ...formData, [key]: event.target.value };



        setformData(newFormData);
    };

    const handleToggle = (event, newAdvancedSearch) => {
        setAdvancedSearch(newAdvancedSearch);
    };

    const handleNodeSelect = (selectedNodes) => {

        setSelectedNodes(selectedNodes);
    };
    const handleSearchClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleSearchAndSaveClick = (data) => {
        setAnchorEl(null);
        setSaveDialogOpen(true);
        setnewSearchSelect("")

    };

    const handleSaveDialogClose = () => {
        setSaveDialogOpen(false);
    };
    const handleSaveSelect = () => {
        if (newSearchSelect) {
            const existingItemIndex = searchSelect.findIndex(item => item.value === newSearchSelect);
            if (existingItemIndex !== -1) {
                setConfirmUpdateDialogOpen(true);
            } else {
                saveNewSearchSelect();
            }
        } else {
            setSaveDialogOpen(false);
        }
    };

    const handleConfirmUpdateDialogClose = () => {
        setConfirmUpdateDialogOpen(false);
    };
    const saveNewSearchSelect = () => {
        const newSearchItem = { value: newSearchSelect, label: newSearchSelect };
        const existingItemIndex = searchSelect.findIndex(item => item.value === newSearchSelect);

        if (existingItemIndex !== -1) {
            // Replace existing item
            const updatedSearchSelect = [...searchSelect];
            updatedSearchSelect[existingItemIndex] = newSearchItem;
            setsearchSelect(updatedSearchSelect);
        } else {
            // Add new item
            setsearchSelect([...searchSelect, newSearchItem]);
        }

        setSearchSelectMappings({
            ...searchSelectMappings,
            [newSearchSelect]: selectedNodes
        });
        setformData({ ...formData, searchSelect: newSearchSelect });
        setSaveDialogOpen(false);
        setConfirmUpdateDialogOpen(false);
    };

    const handleConfirmUpdate = () => {
        saveNewSearchSelect();
    };

    const handleAddRow = () => {
        setRows([...rows, { conjunction: '', field: '', operator: '', compareWith: '', value: '' }]);
    };

    const handleRemoveSelectedRows = () => {
        setRows(rows.filter(row => !row.selected));
    };

    const handleRowChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };
    const handleFirstChange = (index, field, value) => {
        const updatedRows = [...first];
        updatedRows[index][field] = value;
        setFirst(updatedRows);
    };

    const handleRowSelect = (index, selected) => {
        const updatedRows = [...rows];
        updatedRows[index].selected = selected;
        setRows(updatedRows);
    };
    return (
        <>
            <Dialog open={true} onClose={onClose} fullWidth maxWidth="lg"
                sx={{
                    '& .MuiDialog-paper': {
                        width: '70vw', // Set your desired width here (e.g., '80vw' for 80% of the viewport width or '600px' for a fixed width)
                        maxWidth: 'none',
                        height: "70vh",
                        overflowY: "auto",
                        scrollbarWidth: "thin"
                    },
                }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 2, }}>
                    <Typography sx={{ color: '#85B3D1', fontSize: '1.5rem', }}>
                        Mass Update
                    </Typography>

                </Box>
                    <Box>

                        <IconButton
                            onClick={onClose}
                            aria-label="Close"
                            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                        >
                            <Stack direction="column" alignItems="center">
                                <UpdateIcon style={{ color: currentTheme.actionIcons, }} />
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                                >
                                    Update
                                </Typography>
                            </Stack>
                        </IconButton>
                        <IconButton
                            onClick={onClose}
                            aria-label="Close"
                            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                        >
                            <Stack direction="column" alignItems="center">
                                <CloseIcon style={{ color: currentTheme.actionIcons, }} />
                                <Typography
                                    variant="caption"
                                    align="center"
                                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                                >
                                    Close
                                </Typography>
                            </Stack>
                        </IconButton>
                    </Box>
                </Box>

                
                <Box sx={{ display: 'flex', flexDirection: "row", gap: "10px", border: "1px solid #ddd", width: "98%", margin: "auto" }}>
                    <Box sx={{ padding: 1, border: "1px solid #ddd", margin: 1 }}>
                        <TreeWithCheckBox items={items} setSelect={handleNodeSelect} checkedNodes={selectedNodes} />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={headerCellStyle}>Field</TableCell>
                                    <TableCell sx={headerCellStyle}>Value</TableCell>
                                    <TableCell sx={headerCellStyle}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            {selectedNodes && selectedNodes.map((item) => (
                                <TableBody>
                                    <TableRow sx={{ height: "30px", padding: "0px" }}>
                                        <TableCell sx={{ ...bodyCell, paddingLeft: "0px", }}>
                                            <Typography
                                                sx={{ paddingLeft: '10px' }}
                                            >
                                                {item.label}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                                            <AdvancedSearchSelect
                                                value={first.value}
                                                onChange={(e) => handleFirstChange(index, 'value', e.target.value)}
                                                options={[
                                                    { value: 'Cash', label: 'Cash' },
                                                ]}
                                                width={"100%"}
                                            />
                                        </TableCell>
                                        <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                                            <AdvancedSearchSelect
                                                value={first.action}
                                                onChange={(e) => handleFirstChange(index, 'action', e.target.value)}
                                                options={[
                                                    { value: 'Replace', label: 'Replace' },
                                                ]}
                                                width={"100%"}
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            ))}
                        </Table>

                        <Box sx={{ padding: "10px" }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                                <Tooltip title="Add">
                                    <IconButton onClick={handleAddRow}>
                                        <AddCircleIcon sx={{ color: currentTheme.primaryColor }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Remove">
                                    <IconButton onClick={handleRemoveSelectedRows}>
                                        <RemoveCircleIcon sx={{ color: currentTheme.primaryColor }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <TableContainer component={Paper} sx={{ scrollbarWidth: "thin" }}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={headerCellStyle}></TableCell>
                                            <TableCell sx={headerCellStyle}>Conjunction</TableCell>
                                            <TableCell sx={headerCellStyle}>Field</TableCell>
                                            <TableCell sx={headerCellStyle}>Operator</TableCell>
                                            <TableCell sx={headerCellStyle}>Compare With</TableCell>
                                            <TableCell sx={headerCellStyle}>Value</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={index} sx={{ height: "30px", padding: "0px" }}>
                                                <TableCell sx={{ ...bodyCell, minWidth: "null" }}>
                                                    <Checkbox
                                                        checked={row.selected || false}
                                                        onChange={(e) => handleRowSelect(index, e.target.checked)}
                                                        sx={{ padding: "0px", height: "30px" }}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                                                    <AdvancedSearchSelect
                                                        value={row.conjunction}
                                                        onChange={(e) => handleRowChange(index, 'conjunction', e.target.value)}
                                                        options={[
                                                            { value: 'Where', label: 'Where' },
                                                            { value: 'And', label: 'And' },
                                                            { value: 'Or', label: 'Or' }
                                                        ]}
                                                        width={"100%"}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                                                    {/* <AdvancedSearchSelect
                                                        value={row.field}
                                                        onChange={(e) => handleRowChange(index, 'field', e.target.value)}
                                                        options={[
                                                            { value: 'Field1', label: 'Field1' },
                                                            { value: 'Field2', label: 'Field2' },
                                                            { value: 'Field3', label: 'Field3' }
                                                        ]}
                                                        width={"100%"}
                                                    /> */}
                                                    <AdvanceSearchInput
                                                        value={row.field}
                                                        onChange={(e) => handleRowChange(index, 'field', e.target.value)}
                                                        width={"100%"}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                                                    <AdvancedSearchSelect
                                                        value={row.operator}
                                                        onChange={(e) => handleRowChange(index, 'operator', e.target.value)}
                                                        options={[
                                                            { value: '=', label: '=' },
                                                            { value: '>', label: '>' },
                                                            { value: '<', label: '<' }
                                                        ]}
                                                        width={'100%'}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                                                    <AdvancedSearchSelect
                                                        value={row.compareWith}
                                                        onChange={(e) => handleRowChange(index, 'compareWith', e.target.value)}
                                                        options={[
                                                            { value: 'Value1', label: 'Value1' },
                                                            { value: 'Value2', label: 'Value2' },
                                                            { value: 'Value3', label: 'Value3' }
                                                        ]}
                                                        width={"100%"}
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ ...bodyCell, paddingLeft: "0px" }}>
                                                    <AdvanceSearchInput
                                                        value={row.value}
                                                        onChange={(e) => handleRowChange(index, 'value', e.target.value)}
                                                        width={"100%"}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>

                </Box>



                {/* <Dialog open={saveDialogOpen} onClose={handleSaveDialogClose}>
                    <DialogContent>
                        <Typography variant="h6">Search and Save</Typography>
                        <Box sx={{ mt: 2 }}>
                            <SecurityInput
                                label="Enter a Name"
                                type={"text"}
                                value={newSearchSelect}
                                setValue={(data) => setnewSearchSelect(data)}
                                disabled={newSearchSelect === "Default"}
                            />
                        </Box>
                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                            <Checkbox
                                checked={newSearchSelect === "Default"}
                                onChange={(e) => setnewSearchSelect(e.target.checked ? "Default" : "")}
                            />
                            <Typography variant="body1">Set as default</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: currentTheme.primaryColor, textTransform: "none" }}
                                onClick={handleSaveSelect}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: currentTheme.primaryColor, textTransform: "none" }}
                                onClick={handleSaveDialogClose}
                            >
                                Close
                            </Button>
                        </Box>
                    </DialogContent>
                </Dialog>

                <Dialog open={confirmUpdateDialogOpen} onClose={handleConfirmUpdateDialogClose}>
                    <DialogContent>
                        <Typography variant="h6">Confirm Update</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>The item already exists. Do you want to update it?</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Button variant="contained" sx={{ backgroundColor: currentTheme.primaryColor, textTransform: "none" }} onClick={handleConfirmUpdate}>Yes</Button>
                            <Button variant="contained" sx={{ backgroundColor: currentTheme.primaryColor, textTransform: "none" }} onClick={handleConfirmUpdateDialogClose}>No</Button>
                        </Box>
                    </DialogContent>
                </Dialog> */}
            </Dialog>
        </>
    )
}

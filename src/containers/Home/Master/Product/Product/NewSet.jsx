import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../../../config";
import { Checkbox, FormControlLabel, TextField, IconButton, Box, List, ListItemButton, ListItemText, Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";
import AccountInput from "../../../../../components/Inputs/AccountInput";
import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
import SecurityInput from "../../../../../components/Inputs/SecurityInput";
import { useState } from "react";
import {
    Delete as DeleteIcon,
} from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from '@mui/icons-material/Clear';
import ClearAllIcon from "@mui/icons-material/ClearAll";
import ProductClassificationTable from "./ProductClassificationTable";
import MasterLanguage from "../../Account/AccountMaster/MasterLanguage";
import AccountInput1 from "../../../../../components/Inputs/AccountInput1";
import { useTheme } from "../../../../../config/themeContext";
import RoleSelect1 from "../../../../../components/Select/RoleSelect1";
import EnteredEntityList from "./EnteredEntityList";
import { details } from "../../../../../config/masterConfig";


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
))(({ theme, currentTheme }) => ({
    color: currentTheme.sideBarTextColor1,
    backgroundColor: currentTheme.secondaryColor,
    flexDirection: "row",
    justifyContent: "space-between",
    "& .MuiAccordionSummary-content": {
        flexGrow: 1,
    },
    "& .MuiSvgIcon-root": {
        fontSize: "1.5rem",
        color: currentTheme.sideBarTextColor1,
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    paddingLeft: theme.spacing(3),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const uploadIconstyle = {
    color: thirdColor, // Set the icon color
    backgroundColor: "#fff", // Set a background color
    borderRadius: "50%", // Make the button round
    padding: "5px", // Padding to make the icon look bigger and floating
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", // Add shadow to make it look floating
};

const textFieldStyle = {
    width: 70,
    mx: 1,
    height: 30, // Reducing the height
    '& .MuiInputBase-root': {
        height: '30px',
        padding: '0 0px', // Reduces padding inside the input area
    },
    '& .MuiOutlinedInput-input': {
        padding: '4px', // Adjust top and bottom padding
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid', // Adjust border if needed
    }
}


const valuationOptions = [
    { label: "Entity 1 Valuation", value: "Entity 1 Valuation" },
    { label: "Entity 2 Valuation", value: "Entity 2 Valuation" },
    // Add more options as needed based on your entities
];
const vendorOptions = [
    { label: "Entity 1 vendor", value: "Entity 1 vendor" },
    { label: "Entity 2 vendor", value: "Entity 2 vendor" },
    // Add more options as needed based on your entities
];
const warehouseOptions = [
    { label: "Entity 1 Warehouse", value: "Entity 1 Warehouse" },
    { label: "Entity 2 Warehouse", value: "Entity 2 Warehouse" },
    // Add more options as needed based on your entities
];
const baseUnitOptions = [
    { label: "Unit 1", value: "Unit 1" },
    { label: "Unit 2", value: "Unit 2" },
    // Add more options as needed based on your entities
];
const salesUnitOptions = [
    { label: "Unit 1", value: "Unit 1" },
    { label: "Unit 2", value: "Unit 2" },
    // Add more options as needed based on your entities
];
const purchaseUnitOptions = [
    { label: "Unit 1", value: "Unit 1" },
    { label: "Unit 2", value: "Unit 2" },
    // Add more options as needed based on your entities
];
const countryOfOriginOptions = [
    { label: "Country 1", value: "Country 1" },
    { label: "Country 2", value: "Country 2" },
    // Add more options as needed based on your entities
];
const taxableOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
    // Add more options as needed based on your entities
];


export default function NewSet() {
    const [expanded, setExpanded] = React.useState("panel1");
    const [formData, setformData] = useState({
        photo: null,
        signature: null,
        userType: "User",
        PUserType: "",
        PUserType1: "",
        FromDate: " ",
        accountingDate: " "
    });
    const [accountName, setAccountName] = React.useState("");
    const [selectedOption, setSelectedOption] = React.useState(0);
    const [entitiesData, setEntitiesData] = useState({
        entity1: {
            General: {
                Description: "Entity 1 Description",
                Valuation: "Entity 1 Valuation",
                Warehouse: "Entity 1 Warehouse",
                StandardCost: "100",
                Vendor: ""
            },
            Units: {
                BaseUnit: "Unit 1",
                SalesUnit: "Unit 1",
                PurchaseUnit: "Unit 1",
            },
            Reorder: {
                EntityWiseQuantity: "50",
                WarehouseQuantity: "20",
                LeadTimeInDays: "5",
            },
            Specification: {
                Hscode: "123456",
                CountryOfOrigin: "Country 1",
                Height: "10",
                Width: "5",
                CBM: "0.5",
                Weight: "1",
            },
            Settings: {
                Taxable: "Yes",
            },
        },
        entity2: {
            General: {
                Description: "Entity 2 Description",
                Valuation: "Entity 2 Valuation",
                Warehouse: "Entity 2 Warehouse",
                StandardCost: "200",
                Vendor: ""
            },
            Units: {
                BaseUnit: "Unit 2",
                SalesUnit: "Unit 2",
                PurchaseUnit: "Unit 2",
            },
            Reorder: {
                EntityWiseQuantity: "100",
                WarehouseQuantity: "50",
                LeadTimeInDays: "10",
            },
            Specification: {
                Hscode: "654321",
                CountryOfOrigin: "Country 2",
                Height: "20",
                Width: "10",
                CBM: "1",
                Weight: "2",
            },
            Settings: {
                Taxable: "No",
            },
        },
    }
    )
    const [selectedEntity, setSelectedEntity] = React.useState("entity1");
    const [entityDetails, setEntityDetails] = React.useState(
        entitiesData[selectedEntity]
    );
    const [formData1, setFormData1] = React.useState('')

    const [type, setType] = useState({ sName: "null", iId: null, RateType: "Pick Rate", DiscountType: 'Percentage', ApplyTo: 'To Set' })

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        setType((prevType) => ({
            ...prevType,
            [name]: value,
        }));
    };


    const { currentTheme } = useTheme();



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

    const rows = [
        { no: 1, item: "Item 1", code: "C001", unit: "pcs", quantity: 10, rate: 50 },
        { no: 2, item: "Item 2", code: "C002", unit: "kg", quantity: 5, rate: 100 },
        // Add more rows as needed
    ];



    const handleAccountNameChange = (event) => {

        setAccountName(event.target.value);
    };


    const handleUploadClick = (field) => () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setformData((prev) => ({ ...prev, [field]: e.target.result }));
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    };

    const handleDeleteClick = (field) => () => {
        setformData((prev) => ({ ...prev, [field]: null }));
    };

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleEntityChange = (value) => {
        setSelectedEntity(value);
        setEntityDetails(entitiesData[value]);
    };

    const handleDetailChange = (category, field, value) => {

        setEntityDetails((prevDetails) => ({
            ...prevDetails,
            [category]: {
                ...prevDetails[category],
                [field]: value,
            },
        }));
        setEntitiesData((prevData) => ({
            ...prevData,
            [selectedEntity]: {
                ...prevData[selectedEntity],
                [category]: {
                    ...prevData[selectedEntity][category],
                    [field]: value,
                },
            },
        }));
    };
    const handleDetailChangeSelect = (category, field, value) => {

        setEntityDetails((prevDetails) => ({
            ...prevDetails,
            [category]: {
                ...prevDetails[category],
                [field]: value.target.value,
            },
        }));
        setEntitiesData((prevData) => ({
            ...prevData,
            [selectedEntity]: {
                ...prevData[selectedEntity],
                [category]: {
                    ...prevData[selectedEntity][category],
                    [field]: value.target.value,
                },
            },
        }));
    };

    const options = [
        {
            label: "General",
            component: (
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Description"
                                value={entityDetails.General.Description}
                                onChange={(e) => handleDetailChange("General", "Description", e.target.value)}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <RoleSelect1
                                label="Vendor"
                                value={entityDetails.General.Vendor}
                                onChange={(value) => handleDetailChangeSelect("General", "Vendor", value)}
                                options={vendorOptions}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <RoleSelect1
                                label="Valuation"
                                value={entityDetails.General.Valuation}
                                onChange={(value) => handleDetailChangeSelect("General", "Valuation", value)}
                                options={valuationOptions}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <RoleSelect1
                                label="Warehouse"
                                value={entityDetails.General.Warehouse}
                                onChange={(value) => handleDetailChangeSelect("General", "Warehouse", value)}
                                options={warehouseOptions}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Standard Cost"
                                value={entityDetails.General.StandardCost}
                                onChange={(e) => handleDetailChange("General", "StandardCost", e.target.value)}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            )
        },
        {
            label: 'Units',
            component: (
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <RoleSelect1
                                label="Base Unit"
                                value={entityDetails.Units.BaseUnit}
                                onChange={(value) => handleDetailChangeSelect("Units", "BaseUnit", value)}
                                options={baseUnitOptions}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <RoleSelect1
                                label="Sales Unit"
                                value={entityDetails.Units.SalesUnit}
                                onChange={(value) => handleDetailChangeSelect("Units", "SalesUnit", value)}
                                options={salesUnitOptions}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <RoleSelect1
                                label="Purchase Unit"
                                value={entityDetails.Units.PurchaseUnit}
                                onChange={(value) => handleDetailChangeSelect("Units", "PurchaseUnit", value)}
                                options={purchaseUnitOptions}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            )
        },
        {
            label: 'Reorder',
            component: (
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Entity wise Quantity"
                                value={entityDetails.Reorder.EntityWiseQuantity}
                                onChange={(e) => handleDetailChange("Reorder", "EntityWiseQuantity", e.target.value)}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Warehouse Quantity"
                                value={entityDetails.Reorder.WarehouseQuantity}
                                onChange={(e) => handleDetailChange("Reorder", "WarehouseQuantity", e.target.value)}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Lead time in Days"
                                value={entityDetails.Reorder.LeadTimeInDays}
                                onChange={(e) => handleDetailChange("Reorder", "LeadTimeInDays", e.target.value)}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            )
        },
        {
            label: 'Specification',
            component: (
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Hscode"
                                value={entityDetails.Specification.Hscode}
                                onChange={(e) => handleDetailChange("Specification", "Hscode", e.target.value)}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <RoleSelect1
                                label="Country of origin"
                                value={entityDetails.Specification.CountryOfOrigin}
                                onChange={(value) => handleDetailChangeSelect("Specification", "CountryOfOrigin", value)}
                                options={countryOfOriginOptions}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Height"
                                value={entityDetails.Specification.Height}
                                onChange={(e) => handleDetailChange("Specification", "Height", e.target.value)}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Width"
                                value={entityDetails.Specification.Width}
                                onChange={(e) => handleDetailChange("Specification", "Width", e.target.value)}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="CBM"
                                value={entityDetails.Specification.CBM}
                                onChange={(e) => handleDetailChange("Specification", "CBM", e.target.value)}
                            />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <AccountInput1
                                label="Weight"
                                value={entityDetails.Specification.Weight}
                                onChange={(e) => handleDetailChange("Specification", "Weight", e.target.value)}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            )
        },
        {
            label: 'Settings',
            component: (
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                            <RoleSelect1
                                label="Taxable"
                                value={entityDetails.Settings.Taxable}
                                onChange={(value) => handleDetailChangeSelect("Settings", "Taxable", value)}
                                options={taxableOptions}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            )
        },
    ];
    const getBorderColor = () => {
        return localStorage.getItem('color') === 'true' ? '#fff' : '#000';
    };
    return (
        <div>

            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    className
                    expanded={expanded === "panel1"}
                    currentTheme={currentTheme}
                >
                    <Typography style={{ fontSize: "14px" }}>Item Sets</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <>
                        <div>
                            <MDBCardBody>
                                <MDBRow>

                                    <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <AutoComplete2 autoLabel="Name" isMandatory={1} />
                                    </MDBCol>
                                    <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <AccountInput1 label="Code" value={accountName} onChange={handleAccountNameChange} />
                                    </MDBCol>
                                    <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <AccountInput label="Alias" />
                                    </MDBCol>
                                    <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <AutoComplete2 autoLabel="Tax Category" />
                                    </MDBCol>
                                    <MDBRow>
                                        <MDBCol lg="3" md="4" sm="6" xs="12">
                                            <div
                                                style={{
                                                    marginLeft: "60px",
                                                    width: "120px",
                                                    alignItems: "center",
                                                    textAlign: "center",
                                                    marginTop: "10px"
                                                }}
                                            >
                                                {/* <IconButton
                    onClick={handleUploadClick}
                    style={uploadIconstyle}
                    sx={{ml:1,mb:1}}
                  >
                    <AddCircleIcon style={{ fontSize: '3rem'}} /> 
                  </IconButton> */}
                                                {formData.photo ? (
                                                    <div style={{ position: "relative" }}>
                                                        <img
                                                            src={formData.photo}
                                                            alt="Uploaded"
                                                            style={{ width: "60px", height: "60px" }}
                                                        />
                                                        <IconButton
                                                            onClick={handleDeleteClick("photo")}
                                                            style={{
                                                                position: "absolute",
                                                                right: -5,
                                                                top: -10,
                                                            }}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </div>
                                                ) : (
                                                    <IconButton
                                                        onClick={handleUploadClick("photo")}
                                                        style={uploadIconstyle}


                                                    >
                                                        <AddCircleIcon style={{ fontSize: "3rem", color: currentTheme.thirdColor }} />
                                                    </IconButton>
                                                )}
                                                <Typography
                                                    sx={{ fontSize: "12px" }}
                                                    variant="subtitle1"
                                                >
                                                    Choose File
                                                </Typography>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>




                                </MDBRow>


                                <TableContainer sx={{ padding: '20px' }} component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={headerCellStyle}></TableCell>
                                                <TableCell sx={headerCellStyle}>Item</TableCell>
                                                <TableCell sx={headerCellStyle}>Code</TableCell>
                                                <TableCell sx={headerCellStyle}>Unit</TableCell>
                                                <TableCell sx={headerCellStyle}>Quantity</TableCell>
                                                <TableCell sx={headerCellStyle}>Rate</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.no}>
                                                    <TableCell sx={{ ...bodyCell }}>{row.no}</TableCell>
                                                    <TableCell sx={{ ...bodyCell }}>{row.item}</TableCell>
                                                    <TableCell sx={{ ...bodyCell }}>{row.code}</TableCell>
                                                    <TableCell sx={{ ...bodyCell }}>{row.unit}</TableCell>
                                                    <TableCell sx={{ ...bodyCell }}>{row.quantity}</TableCell>
                                                    <TableCell sx={{ ...bodyCell }}>{row.rate}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </MDBCardBody>
                        </div>
                    </>
                    <Box sx={{ width: '100%', margin:3 , display:'flex', justifyContent:'space-between',padding:3 }}>
                        <Box sx={{display:'flex',flexDirection:'column', gap:2}}>
                            <FormControl >
                                <FormLabel sx={{ mb: 2  }} id="demo-row-radio-buttons-group-label">
                                    Rate Type
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="RateType"
                                    value={type.RateType}
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel
                                        sx={{ padding: 0, mr: 5, ml: 1 }}
                                        value="Pick Rate"
                                        control={<Radio sx={{ padding: 0 }} />}
                                        label="Pick Rate"
                                    />
                                    <FormControlLabel
                                        sx={{ padding: 0, mr: 5, ml: 1 }}
                                        value="Fixed Rate"
                                        control={<Radio sx={{ padding: 0 }} />}
                                        label="Fixed Rate"
                                    />
                                </RadioGroup>
                            </FormControl>

                            <MDBCol lg="3" md="4" sm="6" xs="12">
                                        <AccountInput label="Discount" type='number' />
                                    </MDBCol>
                                    <FormControl >
                                <FormLabel sx={{ mb: 2  }} id="demo-row-radio-buttons-group-label">
                                    Discount Type
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="DiscountType"
                                    value={type.DiscountType}
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel
                                        sx={{ padding: 0, mr: 5, ml: 1 }}
                                        value="Percentage"
                                        control={<Radio sx={{ padding: 0 }} />}
                                        label="Percentage"
                                    />
                                    <FormControlLabel
                                        sx={{ padding: 0, mr: 5, ml: 1 }}
                                        value="Value"
                                        control={<Radio sx={{ padding: 0 }} />}
                                        label="Value"
                                    />
                                </RadioGroup>
                            </FormControl>

                            <FormControl >
                                <FormLabel sx={{ mb: 2  }} id="demo-row-radio-buttons-group-label">
                                    Apply To
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="ApplyTo"
                                    value={type.ApplyTo}
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel
                                        sx={{ padding: 0, mr: 5, ml: 1 }}
                                        value="To Set"
                                        control={<Radio sx={{ padding: 0 }} />}
                                        label="To Set"
                                    />
                                    <FormControlLabel
                                        sx={{ padding: 0, mr: 5, ml: 1 }}
                                        value="Individually"
                                        control={<Radio sx={{ padding: 0 }} />}
                                        label="Individually"
                                    />
                                </RadioGroup>
                            </FormControl>

                        </Box>
                        <Box sx={{ width:'20%',display:'flex ', justifyContent:'space-between'}}>
                            
                            <Typography>
                                Quantity:  
                            </Typography>
                            <Typography>
                            0.0000  
                            </Typography>
                            
                        </Box>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

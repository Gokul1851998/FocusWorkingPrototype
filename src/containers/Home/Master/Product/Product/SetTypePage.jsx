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
import CheckBox1 from "../../../../../components/CheckBox/CheckBox1";


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


export default function SetTypePage() {
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
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState(null);


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

  const setItem = ['Service','Raw material','Inermediate product','Finished goods','Non stock item']

   const setValue = ['Weighted Avg','FIFO','LIFO','FIFO(Consider transaction time)']
    

   
    
    return (
        <div>
        <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
        >
            <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expanded={expanded === "panel1"}
                currentTheme={currentTheme}
            >
                <Typography style={{ fontSize: "14px" }}>Item Set Type</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <>
                    <Box sx={{ margin: 2}}>
                        <CheckBox1 label="Set Type" />
                        <Box sx={{border:'1px solid'}}>
                            <Typography sx={{ ...headerCellStyle, color: 'white',height:'40px',padding:0.5 }}>
                                Select Item Type
                            </Typography>
                            {setItem.map((value, index) => (
                                <Typography
                                    key={index}
                                    onClick={() => setSelectedItem(value)}
                                    sx={{
                                        cursor: 'pointer',
                                        padding: '1px',
                                        backgroundColor: selectedItem === value ? 'lightblue' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'lightgray',
                                        },
                                    }}
                                >
                                    {value}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ margin: 2}}>
                        <CheckBox1 label="Set Valuation method" />
                        <Box sx={{border:'1px solid'}}>
                            <Typography sx={{ ...headerCellStyle, color: 'white',height:'40px',padding:0.5 }}>
                                Select Valuation method
                            </Typography>
                            {setValue.map((value, index) => (
                                <Typography
                                    key={index}
                                    onClick={() => setSelectedItem1(value)}
                                    sx={{
                                        cursor: 'pointer',
                                        padding: '1px',
                                        backgroundColor: selectedItem1 === value ? 'lightblue' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'lightgray',
                                        },
                                    }}
                                >
                                    {value}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </>
            </AccordionDetails>
        </Accordion>
    </div>
    );
}

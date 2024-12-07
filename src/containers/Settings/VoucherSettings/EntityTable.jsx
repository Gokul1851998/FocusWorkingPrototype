import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  IconButton,
  Paper,
  Radio,
  Stack,
  styled,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "../../../config/themeContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AdvanceSearchInput from "../../../components/Inputs/AdvanceSearchInput";
import AdvancedSearchSelect from "../../../components/Select/AdvanceSearchSelect";
import AdvanceSearchAutocomplete from "../../../components/AutoComplete/AdvanceSearchAutocomplete";
import AccountInputWithDialog from "../../../components/Inputs/AccountInputWithDialog";
import TrasctionTableInput from "../../../components/Inputs/TrasactionTableInput";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { MDBCardBody } from "mdb-react-ui-kit";
import ReceiptDefintion from "./ReceiptDefintion";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PropTypes from "prop-types";
import { EntityFieldData } from "../../../config";
import TableSecurity from "../../../components/Tables/TableSecurity";
import TableNormal from "../../../components/Tables/TableNormal";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import EntityGeneral from "./EntityGeneral";
import EntityAccountPost from "./EntityAccountPost";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
  paddingLeft: theme.spacing(0),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function EntityTable() {
  const { currentTheme } = useTheme();
  const [expanded, setExpanded] = React.useState("panel1");
  const [value, setValue] = React.useState(0);
  const [row, setRow] = useState(EntityFieldData);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleTab = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleTab}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ textTransform: "none" }}
            label="Summary"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textTransform: "none" }}
            label="Add/Edit"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ overflowX: "auto" }}>
          <TableNormal rows={row} currentTheme={currentTheme} handleTab={handleTab} />
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
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
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <InsertDriveFileIcon sx={{ color: currentTheme.actionIcons }} />
              </Stack>
            </IconButton>

            <Typography style={{ fontSize: "14px" }}>General</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <MDBCardBody><EntityGeneral /></MDBCardBody>
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
            expanded={expanded === "panel2"}
            currentTheme={currentTheme}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <AssignmentIndIcon sx={{ color: currentTheme.actionIcons }} />
              </Stack>
            </IconButton>

            <Typography style={{ fontSize: "14px" }}>Account Post</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <MDBCardBody><EntityAccountPost /></MDBCardBody>
            </>
          </AccordionDetails>
        </Accordion>
      </CustomTabPanel>
    </Box>
  );
}

export default EntityTable;

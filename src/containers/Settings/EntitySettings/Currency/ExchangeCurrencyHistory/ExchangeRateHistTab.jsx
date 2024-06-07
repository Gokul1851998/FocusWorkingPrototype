import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { thirdColor } from "../../../../../config";
import TableViewIcon from '@mui/icons-material/TableView';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ExchangeRateHistoryResultTable from "./ExchangeRateHistoryResultTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ExchangeRateHistTab({ selectedCurrencies }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", height: 224, borderRadius: 2 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", textTransform: "none" }}
      >
        <Tab icon={<TableViewIcon />} sx={{ textTransform: "none" }} label="Table" {...a11yProps(0)} />
        {/* <Tab icon={<EqualizerIcon/>} sx={{ textTransform: "none" }} label="Graph" {...a11yProps(1)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        {selectedCurrencies.length>1 &&
      <ExchangeRateHistoryResultTable currencies={selectedCurrencies}/>
      }
      </TabPanel>
      <TabPanel value={value} index={1}>
        Graph
      </TabPanel>
    </Box>
  );
}
ExchangeRateHistTab.propTypes = {
  selectedCurrencies: PropTypes.array.isRequired,
};

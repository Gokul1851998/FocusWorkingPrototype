import React from 'react';
import { Box, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function RoleHistoryTableAP({ data }) {

    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

  return (
    <div>RoleHistoryTableAP</div>
  )
}

export default RoleHistoryTableAP
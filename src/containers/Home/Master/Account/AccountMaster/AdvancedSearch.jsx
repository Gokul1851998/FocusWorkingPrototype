import React, { useState } from 'react';
import {
  Box, Button, Dialog, DialogContent, FormControl, InputLabel, Select, MenuItem, TextField, ToggleButton, ToggleButtonGroup,
  Typography, IconButton, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip,
  Switch
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
import { searchAdvanceSelect } from '../../../../../config/securityConfig';


const cellStyle = {
    padding: "0px",
                          paddingLeft: "4px",
                          border: " 1px solid #ddd",
                          fontWeight: "600",
                          font: "14px",
                          
                          color: "white",
                          paddingTop: "3px",
                          paddingBottom: "3px",
  }
  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: thirdColor,
    color: "#fff",
  };
  const bodyCell={
    padding: "0px",
    paddingLeft: "4px",
    border: " 1px solid #ddd",
    minWidth: "100px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }

const AdvancedSearchDialog = ({ open, onClose,items }) => {
  
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [formData, setformData] = useState({})

  const handleSelectChange = (event, key) => {
    const newFormData = { ...formData, [key]: event.target.value };

    

    setformData(newFormData);
  };

  const handleToggle = (event, newAdvancedSearch) => {
    setAdvancedSearch(newAdvancedSearch);
  };

  const handleNodeSelect = (selectedNodes) => {
    console.log(selectedNodes);
    setSelectedNodes(selectedNodes);
  };

  
 

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg"
    sx={{
        '& .MuiDialog-paper': {
          width: '70vw', // Set your desired width here (e.g., '80vw' for 80% of the viewport width or '600px' for a fixed width)
          maxWidth: 'none',
          height:"90vh",
          overflowY:"auto",
          scrollbarWidth:"thin"
        },
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'right', p: 2 }}>
        
        <Box>
          <Button
            variant="contained"
            
            startIcon={<LoadIcon />}
            sx={{ mr: 2,backgroundColor:primaryColor,textTransform:"none" }}
          >
            Load
          </Button>
          <Button
            variant="contained"
            
            endIcon={<CloseIcon />}
            onClick={onClose}
            sx={{ backgroundColor:primaryColor ,textTransform:"none"}}
          >
            Close
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <Typography variant="body1" sx={{ mr: 2 }}>Advanced Search</Typography>
        <Switch
          checked={advancedSearch}
          onChange={handleToggle}
          inputProps={{ 'aria-label': 'advanced search' }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2,justifyContent:"space-between" }}>
        <Box sx={{display:"flex",alignItems:"center"}}>
        
                    <CurrencyTableInput label="Name" />
                    <IconButton
                
                aria-label="Close"
                sx={{ fontSize: "0.8rem", padding: "0.5rem",color:thirdColor, }}
              >
              
                  <SearchIcon style={{ color: thirdColor }} />
                  
               
              </IconButton>
                 
        </Box>
        <RoleSelect1
                        label=""
                        value={formData?.CompanyEdit ?? ""}
                        onChange={(e) => handleSelectChange(e, "CompanyEdit")}
                        options={searchAdvanceSelect}
                      />
      </Box>
      <Box sx={{ display: 'flex',flexDirection:"row" ,gap:"10px",border:"1px solid #ddd",width:"98%",margin:"auto"}}>
        <Box >
        <TreeWithCheckBox items={items} setSelect={handleNodeSelect} />
        </Box>
        <Box sx={{display:"flex",flexWrap:"wrap",gap:"10px",height: 200,overflowY:"auto",scrollbarWidth:"thin",padding:1}}>
          {selectedNodes && selectedNodes.map((item) => (
            <div style={{width:"200px"}}>
            <CurrencyTableInput key={item.id} label={item.label} />
            </div>
          ))}
        </Box>
      </Box>
      <Box sx={{padding:"10px"}}>
      <TableContainer component={Paper} sx={{maxHeight:"40vh",minHeight:"40vh",width: 'fit-content',scrollbarWidth:"thin"}}>
      <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={headerCellStyle }>Select</TableCell>
                <TableCell sx={headerCellStyle }>Master</TableCell>
                <TableCell sx={headerCellStyle }>Name</TableCell>
                <TableCell sx={headerCellStyle }>Code</TableCell>
                <TableCell sx={headerCellStyle }>Account Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(10).keys()].map((_, index) => (
                <TableRow key={index}>
                  <TableCell sx={bodyCell}>
                    <Checkbox size="small" />
                  </TableCell>
                  <TableCell sx={bodyCell}>{index + 1}</TableCell>
                  <TableCell sx={bodyCell}>{`Name ${index + 1}`}</TableCell>
                  <TableCell sx={bodyCell}>{`Code ${index + 1}`}</TableCell>
                  <TableCell sx={bodyCell}>{`Type ${index + 1}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Dialog>
  );
};

export default AdvancedSearchDialog;

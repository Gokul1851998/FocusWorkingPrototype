import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  TextField,
  Button,
  Select,
  MenuItem,
  IconButton,
  List,
  ListItem,
  Typography,
  ListItemButton,
  FormControl,
  InputLabel,
  FormControlLabel,
  Stack
} from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { primaryButtonColor, thirdColor } from '../../../config';

const TreeCustomization = () => {
  const [columns, setColumns] = useState([
    { name: 'MasterId', selected: true, width: 70, textAlign: 'Left' },
    { name: 'Name', selected: true, width: 70, textAlign: 'Left' },
    { name: 'Code', selected: true, width: 70, textAlign: 'Left' },
    { name: 'CreatedBy', selected: true, width: 70, textAlign: 'Left' },
    { name: 'ModifiedBy', selected: true, width: 70, textAlign: 'Left' },
    { name: 'CreatedDate', selected: true, width: 70, textAlign: 'Left' },
    { name: 'ModifiedDate', selected: false, width: 70, textAlign: 'Left' },
    { name: 'AllowOtherCompaniesToViewRecord', selected: false, width: 70, textAlign: 'Left' },
    { name: 'SyncReceivedDate', selected: false, width: 70, textAlign: 'Left' },
    { name: 'EditingLocation', selected: false, width: 70, textAlign: 'Left' }
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCheckboxChange = (event, index) => {
    const updatedColumns = columns.map((column, i) =>
      i === index ? { ...column, selected: event.target.checked } : column
    );
    setColumns(updatedColumns);
  };

  const moveColumn = (direction) => {
    if (selectedIndex !== null) {
      const newColumns = [...columns];
      const [removedColumn] = newColumns.splice(selectedIndex, 1);
      newColumns.splice(selectedIndex + direction, 0, removedColumn);
      setColumns(newColumns);
      setSelectedIndex(selectedIndex + direction);
    }
  };

  const handlePropertyChange = (index, property, value) => {
    const newColumns = [...columns];
    newColumns[index] = { ...newColumns[index], [property]: value };
    setColumns(newColumns);
  };

  const handleSubmit = () => {
    const selectedColumns = columns.filter(column => column.selected);
    console.log('Selected Columns:', selectedColumns);
  };

  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      
      <Box sx={{ display:"flex",justifyContent:"space-between" }}>
      <Typography>Select the columns you want to display for the master in the Grid</Typography>
          <IconButton
            
            aria-label="done"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <CheckCircleOutlineIcon sx={{ color: thirdColor }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: thirdColor, fontSize: "0.6rem" }}
              >
                Ok
              </Typography>
            </Stack>
          </IconButton>
        </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '0px',paddingBottom:"20px" }}>
        <Box sx={{ width: '80%', marginRight: '16px',border: '1px solid #ccc', borderRadius: '4px' }}>
        <ListItem gutterBottom sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px', backgroundColor: thirdColor,color:primaryButtonColor}}>
              <Typography sx={{ width: '50%' }}>Column</Typography>
              <div style={{display:"flex",marginRight:"30px" }}>
              <Typography sx={{ width: '100px' }}>Width (Pixel)</Typography>
              <Typography sx={{ width: '100px' }}>Text Align</Typography>
              </div>
            </ListItem>
          <List sx={{ padding:"8px",margin:"auto", height: '45vh', overflowY: 'scroll', scrollbarWidth: 'thin' }}>
          
            {columns.map((column, index) => (
              <ListItemButton
                key={column.name}
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px' }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={column.selected}
                      onChange={(e) => handleCheckboxChange(e, index)}
                      sx={{ marginRight: '8px' ,padding:"0px"}}
                    />
                  }
                  label={column.name.replace(/([A-Z])/g, ' $1').trim()}
                  sx={{ marginRight: '0px'}}
                />
                <div>
                <TextField
                //   label="Width (Pixel)"
                  type="number"
                  value={column.width}
                  onChange={(e) => handlePropertyChange(index, 'width', e.target.value)}
                  sx={{ width: '100px', marginRight: '8px' }}
                  InputProps={{ sx: { height: '28px' } }}
                />
                <FormControl sx={{ width: '100px', marginRight: '8px' }}>
                  {/* <InputLabel>Text Align</InputLabel> */}
                  <Select
                    value={column.textAlign}
                    onChange={(e) => handlePropertyChange(index, 'textAlign', e.target.value)}
                    // label="Text Align"
                    sx={{ height: '28px' }}
                    MenuProps={{ PaperProps: { sx: { maxHeight: '200px' } } }}
                  >
                    <MenuItem value="Left">Left</MenuItem>
                    <MenuItem value="Center">Center</MenuItem>
                    <MenuItem value="Right">Right</MenuItem>
                  </Select>
                </FormControl>
                </div>
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <IconButton
            onClick={() => moveColumn(-1)}
            disabled={selectedIndex === null || selectedIndex === 0}
          >
            <ArrowUpward />
          </IconButton>
          <IconButton
            onClick={() => moveColumn(1)}
            disabled={selectedIndex === null || selectedIndex === columns.length - 1}
          >
            <ArrowDownward />
          </IconButton>
        </Box>
      </Box>

     
    </Box>
  );
};

export default TreeCustomization;

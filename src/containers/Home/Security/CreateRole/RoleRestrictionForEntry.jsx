import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import HistoryIcon from '@mui/icons-material/History';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import Tree1 from '../../../../components/Tree/Tree1';
import { primaryButtonColor, primaryColor, thirdColor } from '../../../../config';
import DeselectIcon from '@mui/icons-material/Deselect';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import RoleRestrictionsTable from './RoleRestrictionTable';




const SelectAllIconStyle ={//style for selectAll and unselectAll
    fontSize: "0.8rem",
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: 'transparent',  // Removes hover background color
      "& .MuiTouchRipple-root": {
        color: 'transparent' // Removes ripple effect color change if needed
      }
    },
    "&:active": {
      backgroundColor: 'transparent', // Removes active background color
    }
  }
const RoleRestriction = ({
  
  masterItems,
  restrictionItems
  
  
}) => {
  
    const [exclusionCheck, setExclusionChecked] = useState(false);
      const [selectedItem, setSelectedItem] = useState('');

      const handleClick = (item) => {
        setSelectedItem(item);
        
      };
    

      const handleOnChange = () => {
        setExclusionChecked(!exclusionCheck);  // Toggle the state directly
      };
  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid #c4c4c4',
        borderRadius: 1,
        overflow: 'hidden',
        mt: 1,
      }}
    >
      {/* Left Panel: Profile Tree */}
      <Box sx={{ width: '50%' }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: thirdColor,color:primaryButtonColor,pl:1    }}
        >
          Masters
        </Typography>
        <List component="nav" aria-label="main mailbox folders" sx={{height: 410, overflowY: 'auto', scrollbarWidth: 'thin',padding:0,pl:1  }}>
        {masterItems.map((item, index) => (
          <ListItem button key={index} onClick={() => handleClick(item)} sx={{padding:0}}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      </Box>
      {/* Divider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderWidth: 1, borderColor: thirdColor }}
      />
      {/* Right Panel: Restrictions */}
      <Box sx={{ width: '50%', height: 550 }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: thirdColor,color:primaryButtonColor,pl:1   }}
        >
          Restrictions
        </Typography>
        <Box
          
        >
          <div style={{display:"flex",flexDirection:"row",marginBottom:"10px"}}>
          <Checkbox
                  checked={exclusionCheck}
                  onChange={handleOnChange}
                  color="primary"
                  sx={{padding:0}}
                />
                <Typography>Exclusions</Typography>

          </div>
          <RoleRestrictionsTable/>
        </Box>
        {/* Action Buttons */}
        
      </Box>
    </Box>
  );
};

export default RoleRestriction;

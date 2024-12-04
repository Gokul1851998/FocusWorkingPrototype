import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TablePopup } from '../../../../../components/Tables/TablePopup';



export const Popup = ({ onClose, onSave, access }) => {
  const [state, setState] = React.useState(false);
  
  

  const handleSave = (value) => {
    console.log('v1',value);
    access(value);
    // setState(value.status)
    // onSave(); // Call the onSave function passed from the parent component
    onClose(); 
  };

  const onSubmit = () =>{
    setState(true);
    // onClose();
  }

  return (
    <Dialog 
      open={true} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth
    >
      <Box sx={{ minWidth: 600,}}>
        <DialogTitle>ACCOUNT</DialogTitle>
        <DialogContent>
          <TablePopup state={state} save={handleSave}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit} variant="contained" color="primary">
            Save
          </Button>
          <Button onClick={ onClose }>Close</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};


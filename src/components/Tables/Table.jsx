import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TablePopup } from './TablePopup';
import { Account } from '../../containers/Home/Master/Account/AccountMaster/Account';



export const Table = ({ onClose, onSave }) => {

  const handleSave = () => {
    onSave(); // Call the onSave function passed from the parent component
    onClose(); // Close the dialog after saving (if needed)
  };

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
          <Account />
          <TablePopup />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};


import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const languages = [
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' },
    { label: 'Malayalam', value: 'Malayalam' },
    
  ];

export const AutoComplete4 = () => {
    return (
        <Autocomplete
        sx={{width:250}}
         size="small"
          id="language-autocomplete"
          options={languages}
          renderInput={(params) => (
            <TextField {...params} label='Language'  variant="outlined" />
          )}
        />
      );
}

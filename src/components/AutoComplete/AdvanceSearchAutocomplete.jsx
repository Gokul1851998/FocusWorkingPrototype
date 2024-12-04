import React, { useState } from 'react';
import { TextField, Checkbox, Autocomplete, FormControl } from '@mui/material';

const options = [
  { label: 'iAcceptanceac' },
  { label: 'iBankAc' },
  { label: 'iPDCDiscountedAC' },
  { label: 'PurchaseType' },
  { label: 'iExchangeAdjustmentGainAC' },
  { label: 'iExchangeAdjustmentLossAC' },
];

export default function AdvanceSearchAutocomplete({ value, onChange, width, label }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectionChange = (event, newValue) => {
    setSelectedOptions(newValue);
    onChange(newValue); // Pass selected values to parent
  };

  return (
    <FormControl
      margin="normal"
      size="small"
      sx={{
        width: width,
        margin: 0,
        padding: 0,
        "& .MuiInputBase-root": {
          height: 'auto',
        },
        "& .MuiInputBase-input": {
          fontSize: "0.55rem",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor",
        },
      }}
    >
      <Autocomplete
        multiple
        style={{minWidth:'200px'}}
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label}
        value={value || selectedOptions}
        onChange={handleSelectionChange}
        renderOption={(props, option, { selected }) => (
          <li style={{ padding:0,margin:0 }} {...props}>
            <Checkbox
              checked={selected}
              style={{ padding:0,margin:0 }}
            />
            {option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            sx={{padding:0}}
            size="small"
            value={selectedOptions.map(option => option.label).join(', ')}  // Display selected options as comma-separated string
            InputProps={{
              ...params.InputProps,
              sx: {
                "& .MuiInputBase-input": {
                  height: '15px',
                  margin: 0,
                  padding: 0,
                  fontSize: "0.50rem",
                  overflow: 'hidden',    // Prevent overflow
                  textOverflow: 'ellipsis',  // Add ellipsis for long text
                  whiteSpace: 'nowrap',   // Keep text in one line
                },
              }
            }}
          />
        )}
      />
    </FormControl>
  );
}




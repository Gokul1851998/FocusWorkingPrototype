import React from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';

export default function AdvancedSearchSelect({ value, onChange, options, disabled, width }) {
  return (
    <FormControl
      margin="normal"
      size="small"
      sx={{
        width: width,
        margin: 0,
        padding: 0,
        "& .MuiInputBase-root": {
          height: 30,
        },
        "& .MuiInputBase-input": {
          fontSize: "0.75rem",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor",
        },
      }}
    >
      <Select
        value={value}
        onChange={onChange}
        size="small"
        disabled={disabled}
        autoWidth={false}
        sx={{
          height: 30,
          fontSize: "0.75rem",
          padding: 0,
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,
              scrollbarWidth: "thin",
            },
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

import { TextField } from '@mui/material'
import React from 'react'

export default function SecurityInput({label,type,disabled,value,setValue}) {
  
  const handleChange = (event) => {
    const value = event.target.value
    if(value)
    setValue(event.target.value);  
  else{
    if(type=="date")
    setValue(" ")
    else{
      setValue(null)
    }
  }
  };
  return (
    <TextField
            margin="normal"
            size="small"
            id="search1"
            value={value}
            type={type}
            label={label}
            autoComplete="nope"
            autoFocus
            disabled={disabled}
            onChange={handleChange}
            InputProps={{
              inputProps: {
                
                autoComplete: `new-${label}`,
                ...(type === "date" ? {
                  onKeyDown: (e) => e.preventDefault(),
                  onClick: (e) => e.target.showPicker?.(),
                  onFocus: (e) => e.target.showPicker?.()
                } : {})
                
              },
            }}
            sx={{
              width: 250, // Adjust the width as needed
              "& .MuiInputBase-root": {
                height: 30, // Adjust the height of the input area
              },
              "& .MuiInputLabel-root": {
                transform: "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
              },
              "& .MuiInputLabel-shrink": {
                transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
              },
              "& .MuiInputBase-input": {
                fontSize: "0.75rem", // Adjust the font size of the input text
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor", // Keeps the current border color
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor", // Optional: Keeps the border color on hover
              },
            }}
          />
  )
}

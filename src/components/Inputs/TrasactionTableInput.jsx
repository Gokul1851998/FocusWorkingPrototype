import React, { useState } from 'react';
import { Popover, Button, TextField, Table, TableHead, TableBody, TableCell, TableRow, Box, Typography } from '@mui/material';
import { TablebodyCell, TablecellStyle, TablecellStyle1 } from '../../config/masterSettings';

export default function TrasctionTableInput({ type, mandatory, onChange, label }) {
    const symbols = ['+', '-', '/', '*', '(', ')', '~', '&', '%', ']', '|', '<', '>', '!', '=', '?', ':', '^', 'DateDiff()', 'Cond()', 'Min()', 'Max()'];
    const [anchorEl, setAnchorEl] = useState(null); // State for the Popover anchor
    const [formula, setFormula] = useState(""); // State for the formula input

    // Function to open the popover
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to close the popover
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Function to handle operator click and append it to the formula
    const handleOperatorClick = (operator) => {
        setFormula((prevFormula) => prevFormula + operator);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <TextField
            
                size="small"
                id="search1"
                value={formula}
                type={type}
              label={label}
                autoComplete="off"
                autoFocus
                required={mandatory}
                sx={{
                    marginTop:1.8,
                    width: 230, // Adjust the width as needed
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
                onClick={handleClick} // Opens the popover when clicked
                onChange={onChange}
            />

            {/* Popover Implementation */}
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{width:'60%',height:'40%'}}
            >
                <Box sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <TextField
                            label="Formula"
                            variant="outlined"
                        
                            value={formula} // Bind the formula to the input
                            onChange={(e) => setFormula(e.target.value)} // Allow manual input
                            sx={{
                                width: 250,
                                "& .MuiInputBase-root": {
                                    height: 30,
                                },
                                "& .MuiInputLabel-root": {
                                    transform: "translate(10px, 5px) scale(0.9)",
                                },
                                "& .MuiInputLabel-shrink": {
                                    transform: "translate(14px, -9px) scale(0.75)",
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
                        />

                        <TextField
                            label="Search"
                            variant="outlined"
                            margin="normal"
                            sx={{
                                width: 250,
                                "& .MuiInputBase-root": {
                                    height: 30,
                                },
                                "& .MuiInputLabel-root": {
                                    transform: "translate(10px, 5px) scale(0.9)",
                                },
                                "& .MuiInputLabel-shrink": {
                                    transform: "translate(14px, -9px) scale(0.75)",
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
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Box
                            sx={{
                                width: '40%',
                                height: '80px',
                                border: '0.5px solid GrayText',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box sx={{ width: '100%', height: '30px', backgroundColor: 'blue' }}>
                                <Typography sx={{ color: 'white', textAlign: 'center' }}>Expanded Formula</Typography>
                            </Box>
                            <Typography>{formula}</Typography>
                        </Box>
                        <Box sx={{ width: '60%' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={TablecellStyle1}>Name</TableCell>
                                        <TableCell sx={TablecellStyle1}>Variable</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={TablebodyCell}>Rate</TableCell>
                                        <TableCell sx={TablebodyCell}>rt</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell sx={TablebodyCell}>Exchange Rate</TableCell>
                                        <TableCell sx={TablebodyCell}>exrt</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                        {symbols.map((operator) => (
                            <Button key={operator} onClick={() => handleOperatorClick(operator)}>
                                {operator}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'end',gap:2}}>
                    <Button variant='contained' onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant='contained' onClick={handleClose} color="primary">
                        Ok
                    </Button>
                    </Box>
                </Box>
            </Popover>
        </>
    );
}




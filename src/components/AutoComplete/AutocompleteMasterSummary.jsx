import { Autocomplete, ListSubheader, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Popup } from "../../containers/Home/Master/Account/AccountMaster/Popup";




export default function AutocompleteMasterSummary({
    value,
    onChangeName,
    key,
    label
})
 {
    const CustomListBox = React.forwardRef((props, ref) => {
        const { children, ...other } = props;
        const buttonColor1 = "#1976D2"; // This is an example color value
        return (
          <ul style={{paddingTop:0}} ref={ref} {...other}>
            <ListSubheader
              style={{ backgroundColor: buttonColor1, padding: "0px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography style={{ marginRight: "auto" }}>Name</Typography>
                <Typography style={{ marginLeft: "auto" }}>Code</Typography>
              </div>
            </ListSubheader>
            {children}
          </ul>
        );
      });


    const [suggestion, setSuggestion] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [searchkey, setSearchKey] = useState({})
    const [iTypeF2, setiTypeF2] = useState(1);

    const [anchorEl, setAnchorEl] = useState(null);
    const [showTablePopup, setShowTablePopup] = useState(false);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose1 = () => {
      setAnchorEl(null);
    };
  
    const handleCreate = () => {
      setShowTablePopup(true);
      handleClose();
    };
    useEffect(() => {
        setSearchKey(value || "");
       
      }, [value]);



    useEffect(() => {
        const fetchData = async () => {
            handleOpen();
            const encodedSearchkey = encodeURIComponent(searchkey);
           
         
            //  const response =await  fetch(`http://103.120.178.195/Sang.Ray.Web.Api/Ray/GetProject?iStatus=1&sSearch=${encodedSearchkey}`)
             
            //   const data = await response.json();
             
            //   if(data.Status ==="Success"){
                
              
            //     setSuggestion(JSON.parse(data.ResultData));
            //   }
              
            // if (response?.status === "Success") {
            //     const myObject = JSON.parse(response?.result);
            //     setSuggestion(myObject);
            // } else if (response?.status === "Failure") {
            //     setSuggestion([]);
            // }
            handleClose();
            
           
        };
        fetchData();
    }, [ searchkey,iTypeF2]);


    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Autocomplete
    freeSolo  // Enable free solo mode
    id={key}
    size="small"
    value={suggestion.find(option => option.sName === value) || null}
    onChange={(event, newValue) => {
      if (newValue) {
        onChangeName({
          sName: newValue.sName || "",
          iId: newValue.iId || 0,
         
        });
      } else {
        onChangeName({
          sName: "",
          iId: 0
        });
      }
    }}
    onInputChange={(event, newInputValue) => {
      
      setSearchKey(newInputValue);
      onChangeName({
        sName: newInputValue,
        iId: 0 // Assuming default or reset ID
      });
    }}
    isOptionEqualToValue={(option, value) => option.sName === value.sName}
    options={suggestion}
    filterOptions={(options, { inputValue }) => {
        return options.filter((option) =>
            option.sName.toLowerCase().includes(inputValue.toLowerCase()) ||
            option.sCode.toLowerCase().includes(inputValue.toLowerCase())
        );
    }}
    autoHighlight
    getOptionLabel={(option) => option.sName || ""}
    renderOption={(props, option) => (
        <li {...props}>
            <div
                className=""
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Typography
                    style={{
                        marginRight: "auto",
                        fontSize: "12px",
                        fontWeight: "normal",
                    }}
                >
                    {option.sName}
                </Typography>
                <Typography style={{ marginLeft: "auto", fontSize: "12px" }}>
                    {option.sCode}
                </Typography>
            </div>
        </li>
    )}
    renderInput={(params) => (
        <TextField
            {...params}
            label={label}
            variant="standard"
            InputProps={{
                ...params.InputProps,
                disableUnderline: true, // Disables the underline on the standard variant
                endAdornment: (
                  <React.Fragment>
                      {params.InputProps.endAdornment || <ArrowDropDownIcon />} 
                      <div>
      <i onClick={handleClick} style={{ marginRight: "8px" }} className="fa-solid fa-ellipsis-vertical"></i>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleCreate}>Create</MenuItem>
        <MenuItem onClick={() => { /* Handle Edit */ handleClose1(); }}>Edit</MenuItem>
      </Menu>

      {/* Render TablePopup if showTablePopup is true */}
      {showTablePopup && <Popup onClose={() => setShowTablePopup(false)} />}
    </div>
                       
                  </React.Fragment>
                  ),
                style: {
                    // Overrides default styles
                    borderWidth: "1px",
                    borderColor: "#ddd",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    fontSize: "12px",
                    height: "30px",
                    paddingLeft: "6px",
                },
                inputProps: {
                    ...params.inputProps,
                    onKeyDown: (event) => {
                        if (event.key === "F2") {
                            // Clear selected option and search key before handling F2 press
                            onChangeName({
                                sName: "",
                                iId: 0
                            });
                            setSearchKey("");

                            setiTypeF2((prevType) => (prevType === 1 ? 2 : 1));

                            // Prevent default F2 key action
                            event.preventDefault();
                        }
                    },
                },
            }}
            InputLabelProps={{
              style: {
                zIndex:1,
                // backgroundColor: '#fff', // Set the background color you want here
                padding: '0 7px', // Optional: Padding to prevent background clipping text
                borderRadius: '0px', // Optional: To make the background look nicer with rounded corners
                fontSize:"12px",
              }
            }}
            sx={{
              width: 250, // Adjust the width as needed
              "& .MuiInputBase-root": {
                height: 30, // Adjust the height of the input area
              },
              "& .MuiInputLabel-root": {
                transform: "translate(8px, 6.5px) scale(0.9)", // Adjust label position when not focused
             
              },
              // "& .MuiInputLabel-shrink": {
              //   transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
              // },
              "& .MuiInputBase-input": {
                zIndex:2,
                fontSize: '0.75rem', // Adjust the font size of the input text
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor", // Keeps the current border color
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor", // Optional: Keeps the border color on hover
              },
              
            }}
        />
    )}
    ListboxComponent={CustomListBox}

    style={{ width: `auto` }}
/>
            {/* <Loader open={open} handleClose={handleClose} /> */}
        </>
    );
}

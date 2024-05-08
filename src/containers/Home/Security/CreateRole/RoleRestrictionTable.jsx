import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Popover,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {primaryColor, thirdColor } from "../../../../config";
import Autocomplete1 from "../../../../components/AutoComplete/AutoComplete1";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AddCircleOutline , Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon  } from '@mui/icons-material';

const cellStyle = {
  padding: "0px",
  paddingLeft: "4px",
  border: " 1px solid #ddd",
  fontWeight: "600",
  font: "14px",

  color: "white",
  paddingTop: "3px",
  paddingBottom: "3px",
};
const headerCellStyle = {
  ...cellStyle,
  backgroundColor: thirdColor,
  color: "#fff",
};
const bodyCell = {
  padding: "0px",
  paddingLeft: "4px",
  border: " 1px solid #ddd",
  
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

// Creates initial data without an ID field
const createData = (master, entry, report, view) => ({
  master,
  entry,
  report,
  view,
  isSelected: false,
});

const initialRows = Array.from({ length: 10 }, () =>
  createData("", false, false, false)
);

const RestrictionsTable = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
  const [rows, setRows] = useState(initialRows);
  const [exclusionCheck, setExclusionChecked] = useState(false);
  const [popoverInfo, setPopoverInfo] = useState({
    open: false,
    anchorEl: null,
    rowIndex: null,
  });

  const handleOnChange = () => {
    setExclusionChecked(!exclusionCheck);  // Toggle the state directly
  };
  const handlePopoverOpen = (event, index) => {
    setPopoverInfo({
      open: true,
      anchorEl: event.currentTarget,
      rowIndex: index,
    });
  };

  const handlePopoverClose = () => {
    setPopoverInfo({ ...popoverInfo, open: false });
  };

  const handleCheckboxChange = (index, field) => {
    const newRows = [...rows];
    newRows[index][field] = !newRows[index][field];
    setRows(newRows);
  };

  const handleAddRow = () => {
    const newRow = createData("", false, false, false);
    const newRows = [
      ...rows.slice(0, selectedRowIndex + 1),
      newRow,
      ...rows.slice(selectedRowIndex + 1),
    ];
    setRows(newRows);
  };

  const handleDeleteRow = () => {
    if (rows.length > 1 && selectedRowIndex >= 0) {
      const newRows = [...rows.slice(0, selectedRowIndex), ...rows.slice(selectedRowIndex + 1)];
      setRows(newRows);
    }
  };
  const handleRowSelect = (index) => {
    const updatedRows = rows.map((row, idx) => ({
      ...row,
      isSelected: idx === index ? !row.isSelected : row.isSelected,
    }));
    setRows(updatedRows);
    setSelectedRowIndex(index);
  };

  return (<>
  <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"10px"}}>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
          <Checkbox
                  checked={exclusionCheck}
                  onChange={handleOnChange}
                  color="primary"
                  sx={{padding:0}}
                />
                <Typography>Exclusions</Typography>
                </div>
                <div>
                <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={handleAddRow}
              >
                
          <AddCircleOutlineIcon sx={{ color:primaryColor }} />
          
              
              </IconButton>
                <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={handleDeleteRow}
              >
                
          <DeleteIcon sx={{ color:primaryColor }} />
          
              
              </IconButton>

                </div>

          </div>
  
    <TableContainer
      component={Paper}
      sx={{ maxHeight: 440, scrollbarWidth: "thin" }}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell sx={headerCellStyle}>#</TableCell>
            <TableCell sx={headerCellStyle}>Masters</TableCell>
            <TableCell align="center" sx={headerCellStyle}>
              Entry
            </TableCell>
            <TableCell align="center" sx={headerCellStyle}>
              Report
            </TableCell>
            <TableCell align="center" sx={headerCellStyle}>
              View
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow 
            key={index} hover onClick={() => handleRowSelect(index)}
            selected={row.isSelected}
            >
              <TableCell component="th" scope="row" sx={bodyCell}>
                <IconButton
                  aria-describedby={`popover-${index}`}
                  size="small"
                  //onMouseEnter={(e) => handlePopoverOpen(e, index)}
                  sx={{padding:0}}
                >
                  {index + 1} {/* Display the index + 1 as ID */}
                  {/* <MoreVertIcon /> */}
                </IconButton>
                {/* <Popover
                  id={`popover-${index}`}
                  open={popoverInfo.open && popoverInfo.rowIndex === index}
                  anchorEl={popoverInfo.anchorEl}
                  onClose={handlePopoverClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={() => handleAddRow(index)}>
                    Add Row
                  </MenuItem>
                  <MenuItem onClick={() => handleDeleteRow(index)}>
                    Delete Row
                  </MenuItem>
                </Popover> */}
              </TableCell>
              <TableCell sx={{...bodyCell, paddingLeft: "0px"}}>
  {row.isSelected ? (
    <div  onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
      <Autocomplete1
        formData={{ sName: row.master, iId: null }}
        setFormData={(data) => {
         
          const newRows = [...rows];
          newRows[index] = { ...newRows[index], master: data.sName };
         
          setRows(newRows);
        }}
        
      />
    </div>
  ) : (
    row.master || ""  // Placeholder when not selected
  )}
</TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox
                  disabled={row.master===""}
                  checked={row.entry}
                  onChange={() => handleCheckboxChange(index, "entry")}
                  color="primary"
                  sx={{padding:0}}
                />
              </TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox
                disabled={row.master===""}
                  checked={row.report}
                  onChange={() => handleCheckboxChange(index, "report")}
                  color="primary"
                  sx={{padding:0}}
                />
              </TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox sx={{padding:0}}
                disabled={row.master===""}
                  checked={row.view}
                  onChange={() => handleCheckboxChange(index, "view")}
                  color="primary"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default RestrictionsTable;

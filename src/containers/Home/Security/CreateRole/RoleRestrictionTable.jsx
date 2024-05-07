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
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { secondryColor, thirdColor } from "../../../../config";
import AutoComplete2 from "../../../../components/AutoComplete/AutoComplete2";

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
  const [rows, setRows] = useState(initialRows);
  const [popoverInfo, setPopoverInfo] = useState({
    open: false,
    anchorEl: null,
    rowIndex: null,
  });

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

  const handleAddRow = (index) => {
    const newRow = createData("", false, false, false);
    const newRows = [
      ...rows.slice(0, index + 1),
      newRow,
      ...rows.slice(index + 1),
    ];
    setRows(newRows);
    handlePopoverClose();
  };

  const handleDeleteRow = (index) => {
    if (rows.length > 1) {
      const newRows = [...rows.slice(0, index), ...rows.slice(index + 1)];
      setRows(newRows);
    }
    handlePopoverClose();
  };
  const handleRowSelect = (index) => {
    const updatedRows = rows.map((row, idx) => ({
      ...row,
      isSelected: idx === index ? true : row.isSelected,
    }));
    setRows(updatedRows);
  };
  
  return (
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
            <TableRow key={index} hover onClick={() => handleRowSelect(index)}>
              <TableCell component="th" scope="row" sx={bodyCell}>
                <IconButton
                  aria-describedby={`popover-${index}`}
                  size="small"
                  onMouseEnter={(e) => handlePopoverOpen(e, index)}
                  sx={{padding:0}}
                >
                  {index + 1} {/* Display the index + 1 as ID */}
                  {/* <MoreVertIcon /> */}
                </IconButton>
                <Popover
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
                </Popover>
              </TableCell>
              <TableCell sx={bodyCell}>{row.isSelected ? (
                  <AutoComplete2
                    formData={{ sName: row.master, iId: null }}
                    setFormData={(data) => {console.log(data);
                      const newRows = [...rows];
                      newRows[index] = {...newRows[index], master: data.sName};
                      console.log(newRows);
                      setRows(newRows);
                    }}
                    
                  />
                ) : (
                  row.master || "Select a Master"  // Placeholder when not selected
                )}</TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox
                  checked={row.entry}
                  onChange={() => handleCheckboxChange(index, "entry")}
                  color="primary"
                  sx={{padding:0}}
                />
              </TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox
                  checked={row.report}
                  onChange={() => handleCheckboxChange(index, "report")}
                  color="primary"
                  sx={{padding:0}}
                />
              </TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox sx={{padding:0}}
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
  );
};

export default RestrictionsTable;

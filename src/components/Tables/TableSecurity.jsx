import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Checkbox,
  Typography,
  Tooltip,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { thirdColor } from "../../config";




function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


function EnhancedTableHead(props) {
   const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
    columnOrder
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
      
          {/* <TableCell
            sx={{
              padding: "0px",
              backgroundColor: thirdColor,
              color: "white",
              textAlign:"center"
            }}
          >
           
          </TableCell> */}
        
       {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            //sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              padding: "0px",
              paddingLeft:"4px",
              border: " 1px solid #ddd",
              fontWeight: "600",
              font: "14px",
              backgroundColor: thirdColor,
              color: "white",paddingTop:"3px",paddingBottom:"3px"
            }}
          >
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            > */}
            {headCell.label}
            {/* {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const initialColumns = [
  { id: 'profileName', label: 'Profile Name', minWidth: 200 },
  { id: 'createdOn', label: 'Created On', minWidth: 100 },
  { id: 'modifiedOn', label: 'Modified On', minWidth: 100 },
  { id: 'test1', label: 'test1', minWidth: 200 },
  { id: 'test2', label: 'test2', minWidth: 150 }
];
export default function TableSecurity(props) {
  const { rows,totalRows} = props;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [doubleclickedState, setdoubleclickedState] = React.useState([]);
  const [columns, setColumns] = React.useState(initialColumns);

  const handleResize = (index, event) => {
    const startWidth = columns[index].minWidth;
    const startX = event.clientX;

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const newWidth = Math.max(50, startWidth + (currentX - startX));
      setColumns((cols) =>
        cols.map((col, i) =>
          i === index ? { ...col, minWidth: newWidth } : col
        )
      );
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const excludedFields = ["iId"];

  const transformData = (rows) => {
    return rows.map((row) => {
      const transformedRow = { ...row };
      Object.keys(row).forEach((key) => {
        if (!isNaN(row[key]) && key !== "id") {
          // assuming 'id' should not be converted
          transformedRow[key] = Number(row[key]);
        }
      });
      return transformedRow;
    });
  };

  const headCells =
    rows.length > 0
      ? Object.keys(rows[0])
          .filter((key) => !excludedFields.includes(key))
          .map((key) => ({
            id: key,
            numeric: !isNaN(rows[0][key]), // Set numeric based on the type of the first row's value
            disablePadding: false,
            label: key, // Use key as the label
          }))
      : [];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
    props.onpageNumberChange(1);
    props.onSearchKeyChange(event.target.value);
  };

  const handleRequestSort = (event, property) => {
    //     const isAsc = orderBy === property && order === "asc";
    //     const newSortDir = isAsc ? "desc" : "asc";
    //   // Call the parent callback to handle the sorting change
    //   props.onSortChange(property, newSortDir);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = visibleRows.map((row) => ({
        iId: row.iId,
      }));
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  //use if iId only needed
  // const handleClick = (event, row) => {
  //   const selectedIndex = selected.findIndex((item) => item.iId === row.iId);
  //   let newSelected = [];

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, {
  //       iId: row.iId,
  //     });
  //   } else {
  //     newSelected = [
  //       ...selected.slice(0, selectedIndex),
  //       ...selected.slice(selectedIndex + 1),
  //     ];
  //   }

  //   setSelected(newSelected);
  // };

  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row.iId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.iId); // Add the entire row object
    } else {
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelected);
  };

  //remove event if Nan comes in pagination
  const handleChangePage = (newPage) => {
    setPage(newPage); // Set the new page number
    props.onpageNumberChange(newPage + 1); 
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    props.onpageNumberChange(1);
    props.onDisplayLengthChange(parseInt(event.target.value, 10));
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.

  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, filteredRows]
  );

//   const handleRowDoubleClick = (event, row) => {
//     if (pageTitle === 11) {
//       // If it matches, return early to disable double-click functionality
//       return;
//     }
//     // Create a new array with just the double-clicked row
//     const doubleClickedRow = row;

//     // Now call the onRowDoubleClick prop with the new array
//     props.onRowDoubleClick(doubleClickedRow);
//   };

  React.useEffect(() => {
    if (searchTerm) {
      const filteredData = rows.filter((row) =>
        Object.values(row).some((val) =>
          typeof val === "string" || typeof val === "number"
            ? val.toString().toLowerCase().includes(searchTerm.toLowerCase())
            : false
        )
      );
      //const transformedRows = transformData(filteredData);
      setFilteredRows(filteredData);
    } else {
      //const transformedRows = transformData(rows);
      setFilteredRows(rows);
    }
  }, [searchTerm, rows]);

  // React.useEffect(() => {

  //   // Assuming filteredRows is updated based on filtering
  //   props.onExportData(filteredRows);
  // }, [filteredRows]);
  React.useEffect(() => {
    setPage(0); // Reset page to 0
    props.onpageNumberChange(1); // Call the callback function with 0 if needed
    props.setchangesTriggered(false);
    setSelected([]);
  }, [props.changesTriggered]);

  React.useEffect(() => {
    props.onSelectedRowsChange(selected);
  }, [selected]);

  const isTextOverflow = (text, maxWidth) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "12px Arial"; // Set the same font styles as your TableCell
    return context.measureText(text).width > maxWidth;
  };
  return (
    <Box sx={{ width: "95%", margin: "auto", marginTop: "30px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ m: 1 }} className="CLTFormControl">
        <InputLabel htmlFor="rows-per-page" sx={{
                '&.Mui-focused': {
                color: 'currentColor', // Keeps the current color
                
                }
            }}>Show Entries</InputLabel>
          <Select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            label="Rows per page"
            inputProps={{
              name: "rows-per-page",
              id: "rows-per-page",
            }}
            sx={{ width: "120px", height: "35px",'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'currentColor', // Keeps the current border color
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'currentColor', // Optional: Keeps the border color on hover
            } }}
            

          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <input
          placeholder="Search"
          value={searchTerm}
          id="FXsearchField"
          onChange={handleSearch}
          variant="outlined"
          style={{height:"20px",border:"1px solid #ddd"}}
        />
      </div>
      {filteredRows && filteredRows.length > 0 ? (
      <Paper sx={{ width: "100%", mb: 2 }}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        {/* <TableContainer sx={{maxHeight:"60vh",overflow:"scroll" }}> */}
        <TableContainer sx={{ maxHeight: "55vh", overflow: "scroll" }}>
          <Table
            stickyHeader
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            {/* <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length > 0 ? totalRows : 0}
              headCells={headCells}
              
            /> */}
             <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, position: 'relative' }}
                  sx={{padding: "0px",
                  paddingLeft:"4px",
                  border: " 1px solid #ddd",
                  fontWeight: "600",
                  font: "14px",
                  backgroundColor: thirdColor,
                  color: "white",paddingTop:"3px",paddingBottom:"3px"}}
                >
                  {column.label}
                  <span
                    style={{
                      position: 'absolute',
                      height: '100%',
                      right: 0,
                      top: 0,
                      width: '5px',
                      cursor: 'col-resize',
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      
                    }}
                    onMouseDown={e => handleResize(index, e)}
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => {
                const isItemSelected = isSelected(row.iId);
                const labelId = `enhanced-table-checkbox-${index}`;

                const isEvenRow = index % 2 === 0;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    onDoubleClick={() => props.onRowDoubleClick(row.iId)}
                    tabIndex={-1}
                    key={row.iId}
                    sx={{ cursor: "default" }}
                    className={isEvenRow ? "FXTeven-row" : "FXTodd-row"}
                  >
                    
                      
                      {/* <TableCell sx={{ padding: "0px",textAlign:"center" }}>
                        <Checkbox
                          sx={{ padding: "0px" }}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell> */}
                    
                    {columns.map((column) => (
                  <TableCell sx={{
                    padding: "0px",
                    paddingLeft:"4px",
                    border: " 1px solid #ddd",
                    minWidth: "100px",
                    // maxWidth: 400,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }} key={column.id} style={{ minWidth: column.minWidth }}>
                    {row[column.id]}
                  </TableCell>
                ))}
                      </TableRow>
                  
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
        ) : (
        <Box sx={{ width: "100%", textAlign: "center", my: 4 }}>
          <Typography>No Data</Typography>
        </Box>
      )}
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length > 0 ? totalRows : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
          sx={{
            display: "flex", // Use flexbox for the container
            justifyContent: "space-between", // Space between the elements
            alignItems: "center", // Center the elements vertically
            ".MuiTablePagination-toolbar": {
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%", // Ensure the toolbar takes the full width
            },
            ".MuiTablePagination-spacer": {
              flex: "1 1 100%", // Force the spacer to take up all available space
            },
            ".MuiTablePagination-selectLabel": {
              margin: 0, // Adjust or remove margin as needed
              display:"none"
            },
            ".MuiTablePagination-select": {
              textAlign: "center", // Center the text inside the select input
              display:"none"
            },
            ".MuiTablePagination-selectIcon": {
              display:"none" // Adjust the position of the icon as needed
            },
            ".MuiTablePagination-displayedRows": {
              textAlign: "left", // Align the "1-4 of 4" text to the left
              flexShrink: 0, // Prevent the text from shrinking
              order: -1, // Place it at the beginning
              
            },
            ".MuiTablePagination-actions": {
              flexShrink: 0, // Prevent the actions from shrinking
            },
            // Add other styles as needed
          }}
        />
      
    </Box>
  );
}
const TablePaginationActions = (props) => {
  const { count, page, rowsPerPage, onPageChange } = props;

  // Calculate the last page index
  const lastPage = Math.ceil(count / rowsPerPage) - 1;

  // Generate page numbers: we want to show 2 pages on each side if possible
  const startPage = Math.max(0, page - 2); // Current page - 2, but not less than 0
  const endPage = Math.min(lastPage, page + 2); // Current page + 2, but not more than last page

  // Create an array of page numbers to be shown
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, idx) => startPage + idx
  );

  const handlePageButtonClick = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div style={{ flexShrink: 0, marginLeft: 20 }}>
      {page > 0 && (
        <IconButton onClick={() => handlePageButtonClick(0)}>
          <FirstPageIcon />
        </IconButton>
      )}
      {pages.map((pageNum) => (
        <IconButton
        sx={{
          minWidth:"30px",
          minHeight:"30px",
          padding: '2px',
          margin: '1px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%', // Make the background round
          color: 'inherit',
          backgroundColor: pageNum === page ? 'grey' : 'white',
          '&:hover': {
            backgroundColor: pageNum === page ? 'grey' : 'lightgrey', // Change hover color
          },
          '&.Mui-disabled': {
            backgroundColor: 'white',
          },
          fontSize:"14px"
        }}
          
          key={pageNum}
          color={pageNum === page ? "primary" : "default"}
          onClick={() => handlePageButtonClick(pageNum)}
          disabled={pageNum > lastPage}
        >
          {pageNum + 1}
        </IconButton>
      ))}
      {page < lastPage && (
        <IconButton onClick={() => handlePageButtonClick(lastPage)}>
          <LastPageIcon />
        </IconButton>
      )}
    </div>
  );
};

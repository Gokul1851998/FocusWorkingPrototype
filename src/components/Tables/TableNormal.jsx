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
  TextField,
  Stack,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { MDBIcon } from "mdb-react-ui-kit";





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
              backgroundColor: currentTheme.thirdColor,
              color: currentTheme.tableHeaderColor,paddingTop:"3px",paddingBottom:"3px"
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

const iconsExtraSx = {
    fontSize: "0.5rem",
    padding: "0.2rem",
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginRight: 1,
  };

// const initialColumns = [
//   { id: 'profileName', label: 'Profile Name', minWidth: 200 },
//   { id: 'createdOn', label: 'Created On', minWidth: 100 },
//   { id: 'modifiedOn', label: 'Modified On', minWidth: 100 },
//   { id: 'test1', label: 'test1', minWidth: 200 },
//   { id: 'test2', label: 'test2', minWidth: 150 }
// ];
export default function TableNormal(props) {
  const { rows,currentTheme, handleTab} = props;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [doubleclickedState, setdoubleclickedState] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  const excludedFields = ["iId"];

  const initialColumns = rows && rows.length > 0 ? Object.keys(rows[0]).filter((key) => !excludedFields.includes(key)).map(key => ({
    id: key,
    label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim(),  // Format label as readable text
    minWidth: 100,  // Set default minWidth for all columns
    maxWidth: 200
  })) : [];
  React.useEffect(() => {
    setColumns(initialColumns)
  }, [rows])
  
  const handleResize = (index, event) => {
    const startWidth = columns[index].minWidth;
    const startX = event.clientX;

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const newWidth = Math.max(50, startWidth + (currentX - startX));
      setColumns((cols) =>
        cols.map((col, i) =>
          i === index ? { ...col, minWidth: newWidth,maxWidth:newWidth } : col
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

  const handleDoubleClick = (index) => {
    setColumns((cols) =>
      cols.map((col, i) =>
        i === index ? { ...col, maxWidth: col.maxWidth ? null : 200 } : col
      )
    );
  };

  

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

  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);


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





  return (
    <Box sx={{ width: "95%", }}>
  
      {filteredRows && filteredRows.length > 0 ? (
        <Paper sx={{ width: "97%", }}>
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          {/* <TableContainer sx={{maxHeight:"60vh",overflow:"scroll" }}> */}
          <TableContainer sx={{ maxHeight: "55vh", overflow: "scroll" }}>
            <Table
              stickyHeader
              sx={{ minWidth: 600 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              {/* <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
        
              headCells={headCells}
              
            /> */}
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={column.id}
                      style={{
                        minWidth: column.minWidth,
                        position: "relative",
                      }}
                      sx={{
                        padding: "0px",
                        paddingLeft: "4px",
                        border: " 1px solid #ddd",
                        fontWeight: "600",
                        font: "14px",
                        backgroundColor: currentTheme.thirdColor,
                        color: currentTheme.tableHeaderColor,
                        paddingTop: "3px",
                        paddingBottom: "3px",
                      }}
                      onDoubleClick={() => handleDoubleClick(index)}
                    >
                      {column.label === "Icon" ? "" : column.label}
                      <span
                        style={{
                          position: "absolute",
                          height: "100%",
                          right: 0,
                          top: 0,
                          width: "5px",
                          cursor: "col-resize",
                          backgroundColor: "rgba(0,0,0,0.1)",
                        }}
                        onMouseDown={(e) => handleResize(index, e)}
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
                        <TableCell
                          sx={{
                            padding: "0px",
                            paddingLeft: "4px",
                            border: " 1px solid #ddd",
                            minWidth: "100px",
                            maxWidth: column.maxWidth,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          key={column.id}
                          style={{ minWidth: column.minWidth }}
                        >
                            {column?.id === "icon" ? (
                                <>
                                 <IconButton
                        onClick={(e)=>handleTab(e,1)}
                          aria-label="New"
                          sx={iconsExtraSx}
                        >
                          <Stack direction="column" alignItems="center">
                            <MDBIcon
                              fas
                              icon="edit"
                       
                              className="responsiveAction-icon"
                            />
                          </Stack>
                        </IconButton>
                        <IconButton
                         
                          aria-label="delete"
                          sx={iconsExtraSx}
                        >
                          <Stack direction="column" alignItems="center">
                            <MDBIcon
                              fas
                              icon="trash"
                            
                              className="responsiveAction-icon"
                            />
                          </Stack>
                          </IconButton>
                                </>
                            ) : row[column?.id]}
                        
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
    
    </Box>
  );
}


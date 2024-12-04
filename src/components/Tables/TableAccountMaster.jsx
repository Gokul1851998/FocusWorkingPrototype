import React, { useEffect, useState } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TablePagination, Tooltip, IconButton, Typography,
  TableSortLabel
} from '@mui/material';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useTheme } from '../../config/themeContext';

const columnsConfig = [
  // Assuming this is provided somewhere in your component or comes from props
];


export default function TableAccountMaster({ config }) {
    const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const { currentTheme,switchTheme } = useTheme();

  useEffect(() => {
    // Assuming config contains Columns and Data
    setColumns(config.Columns.filter(col => col.Visible).map(col => ({
      ...col,
      label: col.Caption,
      id: col.Name,
      width:parseInt(col.ColumnWidth, 10),
      minWidth: parseInt(col.ColumnWidth, 10),
      maxWidth: 400,
      align: col.Alignment,
      format: col.Format,
      dataType: col.DataType,
      sortable: col.Sortable,
      resizable: col.Resizable,
      tooltip:col.Tooltip,
      DefaultValue:col.DefaultValue
    })));
    setData(config.Data)
    setSortedData(sortData(config.Data, orderBy, order));
  }, [config]);

  function sortData(data, orderBy, order) {
    return data.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  useEffect(() => {
    if(data.length>0){
        const data1 = sortData(data, orderBy, order)
       
        setSortedData(data1);
    }
    
  }, [orderBy,order])
  
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    const newOrder = isAsc ? "desc" : "asc";
  
    const newData = sortData(data, property, newOrder); // Call sort function here directly
    setOrderBy(property);
    setOrder(newOrder);
    setSortedData(newData);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

   // Function to handle column resizing
//    const handleResize = (columnIndex, event) => {
//     const startWidth = columns[columnIndex].minWidth;
//     const startX = event.clientX;
//     const handleMouseMove = (e) => {
//       const currentX = e.clientX;
//       const newWidth = Math.max(50, startWidth + (currentX - startX));
//       setColumns((cols) =>
//         cols.map((col, i) =>
//           i === columnIndex ? { ...col, minWidth: newWidth } : col
//         )
//       );
//     };
//     const handleMouseUp = () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };

// const handleResize = (index, event) => {
//     const startWidth = columns[index].width;
//     const startX = event.clientX;

//     const handleMouseMove = (e) => {
//       const currentX = e.clientX;
//       const changeInWidth = currentX - startX;
//       const newWidth = Math.max(startWidth, startWidth + changeInWidth); // Ensures minimum width
//       setColumns((cols) =>
//         cols.map((col, i) =>
//           i === index ? { ...col, width:  newWidth } : col
//         )
//       );
//     };

//     const handleMouseUp = () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };
// const handleResize = (index, event) => {
//     const startWidth = columns[index].width; // Start with the current width to allow dynamic resizing
//     const minWidth = columns[index].minWidth; // Minimum width to which the column can be resized
//     const startX = event.clientX;
  
//     const handleMouseMove = (e) => {
//       const currentX = e.clientX;
//       const changeInWidth = currentX - startX;
//       const newWidth = Math.max(minWidth, startWidth + changeInWidth); // Ensure width doesn't go below minWidth
//       setColumns((cols) =>
//         cols.map((col, i) =>
//           i === index ? { ...col, width: newWidth } : col
//         )
//       );
//     };
  
//     const handleMouseUp = () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
  
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//   };
const handleResize = (index, event) => {
    const startWidth = columns[index].width; // Current width for dynamic resizing
    const minWidth = columns[index].minWidth; // Minimum allowed width
    const maxWidth = columns[index].maxWidth; // Maximum allowed width
    const startX = event.clientX;

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const changeInWidth = currentX - startX;
      let newWidth = startWidth + changeInWidth;
      // Ensure width is within the min and max boundaries
      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      setColumns((cols) =>
        cols.map((col, i) =>
          i === index ? { ...col, width: newWidth } : col
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
  const isTextOverflow = (text, maxWidth) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "12px Arial"; // Set the same font styles as your TableCell
    return context.measureText(text).width > maxWidth;
  };

  // const convertToLocaleDateString = (dateString) => {
  //   const date = new Date(dateString);
  //   if (isNaN(date)) return dateString; // If date is invalid, return the original string
  
  //   // Use Intl.DateTimeFormat to convert the date to the user's local time zone and format
  //   return new Intl.DateTimeFormat(undefined, {
  //     day: '2-digit',
  //     month: '2-digit',
  //     year: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
     
  //   }).format(date);
  // };

  // const convertToLocaleDateString = (dateString) => {
  //   const date = new Date(dateString);
  //   if (isNaN(date)) return dateString; // If date is invalid, return the original string
  
  //   const options = {
  //     day: '2-digit',
  //     month: '2-digit',
  //     year: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit'
  //   };

  //   const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
  //   return formattedDate.replace(',', ''); // Remove the comma between date and time
  // };

  const convertToLocaleDateString1 = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // If date is invalid, return the original string
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Format the date to 'dd-MM-yyyy' and time to 'HH:mm:ss'
    // return ${day}-${month}-${year} ${hours}:${minutes}:${seconds};
    return `${day}-${month}-${year}`;
  };
  const convertToLocaleDateString2 = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // If date is invalid, return the original string
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Format the date to 'dd-MM-yyyy' and time to 'HH:mm:ss'
    // return ${day}-${month}-${year} ${hours}:${minutes}:${seconds};
    return `${year}-${month}-${day}`;
  };
  const convertToLocaleDateString3 = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // If date is invalid, return the original string
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Format the date to 'dd-MM-yyyy' and time to 'HH:mm:ss'
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
   
  };
  const convertToLocaleDateString4 = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // If date is invalid, return the original string
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Format the date to 'dd-MM-yyyy' and time to 'HH:mm:ss'
    // return ${day}-${month}-${year} ${hours}:${minutes}:${seconds};
    return `${month}-${day}-${year}`;
  };
  return (
    <Paper sx={{ width: '100%'}}>
      <TableContainer sx={{ maxHeight: "80vh",padding:"5px",margin:"auto",width:"98%",overflowY:"auto",}}>
        <Table stickyHeader aria-label="sticky table" sx={{overflowY:"auto",border:"1px solid #ddd" }} >
          <TableHead >
            <TableRow>
              {columns.map((column,index) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                 
                  style={{
                    minWidth: column.width,
                    position: "relative",
                    width:column.width,
                    
                  }}
                  sx={{
                    padding: "0px",
                    paddingLeft: "4px",
                    paddingRight: "8px",
                    border: " 1px solid #ddd",
                    fontWeight: "600",
                    font: "14px",
                    backgroundColor: currentTheme.thirdColor,
                    color: "#ffff",
                  
                    
                  }}
                  sortDirection={orderBy === column.id ? order : false}
                >
                     <Tooltip title={column.tooltip || ''}>
                  {column.sortable ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleRequestSort(column.id)}
                      sx={{padding:0}}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : column.label}
                  </Tooltip>
                   {column.resizable && (
                     <Tooltip title={"Resize"}>
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
                  </Tooltip>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.iId}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    
                    let displayValue ;
                    switch (column.dataType) {
                      case "bool":
                        typeof value !== "boolean"
                          ? (displayValue = column.DefaultValue?.toString())
                          : (displayValue = value?.toString());
                        break;
                      case "numeric":
                        typeof value !== "number"
                          ? (displayValue = column.DefaultValue)
                          : (displayValue = value);
                          if (column.format) {
                            const userLocale = navigator.language || 'en-US'; // Default to 'en-US' if navigator.language is not available
                            
                            // Extract the number of fractional digits from the format string
                            const fractionalPart = column.format.split('.')[1] || '';
                            const fractionDigits = fractionalPart.length;
                        
                            displayValue = new Intl.NumberFormat(userLocale, {
                              minimumFractionDigits: fractionDigits, // Set minimum fractional digits
                              maximumFractionDigits: fractionDigits  // Set maximum fractional digits
                            }).format(displayValue);
                          }
                        break;
                        case "date":
                          if(column.format =="dd-mm-yyyy")  {
                            displayValue = value ? convertToLocaleDateString1(value) : column.DefaultValue;
                          }
                          else if(column.format =="yyyy-mm-dd"){
                            displayValue = value ? convertToLocaleDateString2(value) : column.DefaultValue;
                          }
                          else if(column.format =="mm-dd-yyyy"){
                            displayValue = value ? convertToLocaleDateString4(value) : column.DefaultValue;
                          }
                          else{
                            displayValue = value ? convertToLocaleDateString3(value) : column.DefaultValue;
                          }

                          break;
                       
                      default:
                        
                      value   ? (displayValue = value)
                              : (displayValue = column.DefaultValue);
                        break;
                    }
                    const overflow = isTextOverflow(displayValue, column.maxWidth);
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        //   style={{
                        //     minWidth: column.width,
                        //     position: "relative",
                        //     width:column.width,

                        //   }}
                        sx={{
                          maxWidth: column.width,
                          padding: "0px",
                          paddingLeft: "4px",
                          border: "1px solid #ddd",
                          whiteSpace: "nowrap", // Prevents text from wrapping
                          overflow: "hidden", // Hides any overflowed text
                          textOverflow: "ellipsis", // Adds an ellipsis if the text overflows
                        }}
                      >
                        {/* {displayValue} */}
                        {/* <Tooltip title={displayValue} placement="bottom" arrow>
                          <Typography sx={{fontSize:"14px"}} noWrap>{displayValue}</Typography>
                        </Tooltip> */}
                        {overflow ? (
                          <Tooltip title={displayValue}>
                           <Typography sx={{fontSize:"14px"}} noWrap>{displayValue}</Typography>
                          </Tooltip>
                        ) : (
                            <Typography sx={{fontSize:"14px"}} noWrap>{displayValue}</Typography>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}



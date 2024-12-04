import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack } from '@mui/material';
import { AddCircleOutline, Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from '@mui/icons-material';
import TableSecurity from '../../../../components/Tables/TableSecurity';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { primaryButtonColor, primaryColor, secondryColor, thirdColor } from '../../../../config';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import Popover from '@mui/material/Popover';
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { UserTable, initialRows, PasswordTable } from '../../../../config/securityConfig';
import { useTheme } from '../../../../config/themeContext';
import FileCopyIcon from "@mui/icons-material/FileCopy";
import VisibilityIcon from '@mui/icons-material/Visibility';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


function BasicBreadcrumbs({ currentTheme }) {
  return (
    <div role="presentation" style={{ display: "flex", flexDirection: "row", maxWidth: "fit-content", alignItems: "center" }} onClick={handleClick}>

      <Stack spacing={2} sx={{ flex: 1 }}>
        <Breadcrumbs
          // sx={{
          //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
          //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
          //     }} 
          separator={<NavigateNextIcon fontSize="small" sx={{ color: currentTheme.actionIcons, }} />}
          aria-label="breadcrumb">

          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center", fontSize: "1rem", color: currentTheme.actionIcons, }} // Reduce font size
            key="1"

            onClick={handleClick}
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            key="2"

            sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}
            onClick={handleClick}
          >
            Security
          </Link>,

          <Typography key="3" sx={{ fontSize: "1rem", color: currentTheme.actionIcons, }}>
            Password Policy
          </Typography>,
        </Breadcrumbs>
      </Stack>
    </div>
  );
}

const DefaultIcons = ({ iconsClick, currentTheme }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px", alignItems: "center" }}>

      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        onClick={() => iconsClick("new")}
      >
        <Stack direction="column" alignItems="center">
          <AddIcon style={{ color: currentTheme.actionIcons, }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            New
          </Typography>
        </Stack>
      </IconButton>
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        onClick={() => iconsClick("edit")}
      >
        <Stack direction="column" alignItems="center">
          <EditIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            Edit
          </Typography>
        </Stack>
      </IconButton>
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        onClick={() => iconsClick("view")}
      >
        <Stack direction="column" alignItems="center">
          <VisibilityIcon sx={{ color: currentTheme.actionIcons }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            View
          </Typography>
        </Stack>
      </IconButton>

      {/* <IconButton
                  aria-label="Clone"
                  sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                >
                  <Stack direction="column" alignItems="center">
                    <FileCopyIcon sx={{ color: currentTheme.actionIcons, }}  />
                    <Typography
                      variant="caption"
                      align="center"
                      style={{color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                    >
                      Clone
                    </Typography>
                  </Stack>
                </IconButton> */}
      <IconButton
        aria-label="Clone"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
      >
        <Stack direction="column" alignItems="center">
          <PrintIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            Excel
          </Typography>
        </Stack>
      </IconButton>
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        onClick={() => iconsClick("delete")}
      >
        <Stack direction="column" alignItems="center">
          <DeleteIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            Delete
          </Typography>
        </Stack>
      </IconButton>
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        onClick={() => iconsClick("close")}
      >
        <Stack direction="column" alignItems="center">
          <CloseIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            Close
          </Typography>
        </Stack>
      </IconButton>
      {/* <Example/> */}
    </Box>
  );
};

export default function PasswordSummery({ setPage, setdetailPageId }) {
  const [rows, setRows] = React.useState([]);
  const [displayLength, setdisplayLength] = React.useState(10);
  const [pageNumber, setpageNumber] = React.useState(1);
  const [changesTriggered, setchangesTriggered] = React.useState(false);
  const [selectedDatas, setselectedDatas] = React.useState([]);
  const [totalRows, settotalRows] = useState(10)
  const [refreshFlag, setrefreshFlag] = React.useState(true)
  const [searchKey, setsearchKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const { currentTheme } = useTheme();

  useEffect(() => {
    setRows(PasswordTable)
  }, [PasswordTable])


  const handleRowDoubleClick = (rowiId) => {

    // if (rowiId === null) {
    //   setAlertMessage("Please Select Row");
    //   setShowAlert(true);
    //   setalertcolor("#ffcc00");
    //   setTimeout(() => {
    //     setShowAlert(false);
    //   }, 2000);
    // } else {
    //   setdoubleClickediId(rowiId);
    //   setnewOpen(true);
    // }
  };
  const handleSearchKeyChange = (newSearchKey) => {
    setsearchKey(newSearchKey);
  };

  const handleSelectedRowsChange = (selectedRowsData) => {

    setselectedDatas(selectedRowsData);
  };
  const resetChangesTrigger = () => {
    setchangesTriggered(false);
  };
  const handleDisplayLengthChange = (newDisplayLength) => {
    setdisplayLength(newDisplayLength);
  };

  const handlepageNumberChange = (newpageNumber) => {

    setpageNumber(newpageNumber);
  }
  const handleIconsClick = (value) => {
    switch (value) {
      case "new":
        handleAdd("new")
        break;
      case "edit":
        handleAdd("edit")
        break;
      case "close":
        handleclose()
      default:
        break;
    }
  }
  const handleCloseModal = () => {
    setEdit(0)
    setIsModalOpen(false);
  };

  const handleclose = () => {
    window.history.back();
  }
  const handleOpen = () => {
    // setOpen(true);
  };


  // Handlers for your icons
  const handleAdd = (value) => {
    if (value === "edit") {
      setdetailPageId(1)
    }
    else {
      setdetailPageId(0)
    }
    setPage("detailed")
  };

  const handleEdit = (id) => {
    // Your logic to edit profile
  };

  const handleDelete = (id) => {
    // Your logic to delete profile
  };

  const handleClose = () => {
    // Your logic to close the component or dialog
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={{
        display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", paddingLeft: 1.5,
        paddingRight: 1.5,
      }}>
        <BasicBreadcrumbs currentTheme={currentTheme} />
        <DefaultIcons iconsClick={handleIconsClick} currentTheme={currentTheme} />

      </Box>
      <Box sx={{ width: "100%", overflowX: 'auto' }}>
        <TableSecurity

          rows={rows}
          //onExportData={handleExportData}
          onDisplayLengthChange={handleDisplayLengthChange}
          onpageNumberChange={handlepageNumberChange}
          //  onSortChange={handleSortChange}
          onSearchKeyChange={handleSearchKeyChange}
          changesTriggered={changesTriggered}
          setchangesTriggered={resetChangesTrigger}
          onSelectedRowsChange={handleSelectedRowsChange}
          onRowDoubleClick={handleRowDoubleClick}
          totalRows={rows.length}
          currentTheme={currentTheme}


        />
      </Box>
    </Box>
  )
}

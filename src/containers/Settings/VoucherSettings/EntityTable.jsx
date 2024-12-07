import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  IconButton,
  Paper,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "../../../config/themeContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AdvanceSearchInput from "../../../components/Inputs/AdvanceSearchInput";
import AdvancedSearchSelect from "../../../components/Select/AdvanceSearchSelect";
import AdvanceSearchAutocomplete from "../../../components/AutoComplete/AdvanceSearchAutocomplete";
import AccountInputWithDialog from "../../../components/Inputs/AccountInputWithDialog";
import TrasctionTableInput from "../../../components/Inputs/TrasactionTableInput";

function EntityTable() {
  const { currentTheme } = useTheme();

  const cellStyle = {
    padding: "0px",
    border: "1px solid #ddd",
    fontWeight: "600",
    fontSize: "14px",
    color: currentTheme.sideBarTextColor1,
  };
  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: currentTheme.thirdColor,
    color: currentTheme.sideBarTextColor1,
    padding:1
  };
  const bodyCell = {
    ...cellStyle,
    fontWeight: "normal",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    minWidth: "100px",
  };

  const [rows, setRows] = useState([
    {
      Entity: "",
      Account1Dependency: "",
      Account2Dependency: "",
      ItemDependency:"",
      DefaultAccount1: "",
      DefaultAccount2: "",
      EntityRestrictCondition: "",
      EntityRestrictMessage: "",
      Account1: "",
      Account2: "",
      AllowEntry: "",
      CostOfIssueAccount: "",
      SalesPurchaseAc: "",
    },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        Entity: "",
        Account1Dependency: "",
        Account2Dependency: "",
        ItemDependency:"",
        DefaultAccount1: "",
        DefaultAccount2: "",
        EntityRestrictCondition: "",
        EntityRestrictMessage: "",
        Account1: "",
        Account2: "",
        AllowEntry: "",
        CostOfIssueAccount: "",
        SalesPurchaseAc: "",
      },
    ]);
  };

  const handleRemoveSelectedRows = () => {
    setRows(rows.filter((row) => !row.selected));
  };

  const handleRowChange = (index, field, value) => {
    console.log(index, field, value);
    
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <Box sx={{ padding: "5px" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Tooltip title="Add">
          <IconButton onClick={handleAddRow}>
            <AddCircleIcon sx={{ color: currentTheme.primaryColor }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove">
          <IconButton onClick={handleRemoveSelectedRows}>
            <RemoveCircleIcon sx={{ color: currentTheme.primaryColor }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1400px",
          overflowX: "auto",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <TableContainer component={Paper} sx={{ maxHeight: "40vh", overflow: "auto", scrollbarWidth: "thin" }}>
          <Table stickyHeader sx={{ minWidth: "1500px" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={headerCellStyle}>Entity</TableCell>
                <TableCell sx={headerCellStyle}>Account 1 Dependency</TableCell>
                <TableCell sx={headerCellStyle}>Account 2 Dependency</TableCell>
                <TableCell sx={headerCellStyle}>Item Dependency</TableCell>
                <TableCell sx={headerCellStyle}>Default Account 1</TableCell>
                <TableCell sx={headerCellStyle}>Default Account 2</TableCell>
                <TableCell sx={headerCellStyle}>
                  Entity Restrict Condition
                </TableCell>
                <TableCell sx={headerCellStyle}>
                  Entity Restrict Message
                </TableCell>
                <TableCell sx={headerCellStyle}>Restriction</TableCell>
                <TableCell sx={headerCellStyle}>Account 1</TableCell>
                <TableCell sx={headerCellStyle}>Account 2</TableCell>
                <TableCell sx={headerCellStyle}>Allow Entry</TableCell>
                <TableCell sx={headerCellStyle}>
                  Cost of Issue Account
                </TableCell>
                <TableCell sx={headerCellStyle}>Sales/Purchase A/c</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ height: "30px" }}>
                  <TableCell sx={bodyCell}>
                    <AdvancedSearchSelect
                      value={row?.Entity}
                      onChange={(e) =>
                        handleRowChange(index,'Entity', e.target.value)
                      }
                      options={[
                        { value: "Field1", label: "Field1" },
                        { value: "Field2", label: "Field2" },
                        { value: "Field3", label: "Field3" },
                      ]}
                      width={"200px"}
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvanceSearchAutocomplete
                      width="100%"
                      value={row.Account1Dependency}
                      onChange={(e) =>
                        handleRowChange(index, 'Account1Dependency', e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvanceSearchAutocomplete
                      width="100%"
                      value={row.Account1Dependency}
                      onChange={(e) =>
                        handleRowChange(index, 'Account2Dependency', e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvanceSearchAutocomplete
                      width="100%"
                      value={row.ItemDependency}
                      onChange={(e) =>
                        handleRowChange(index,'ItemDependency', e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvancedSearchSelect
                      value={row?.DefaultAccount1}
                      onChange={(e) =>
                        handleRowChange(index, 'DefaultAccount1', e.target.value)
                      }
                      options={[
                        { value: "Field1", label: "Field1" },
                        { value: "Field2", label: "Field2" },
                        { value: "Field3", label: "Field3" },
                      ]}
                      width={"200px"}
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvancedSearchSelect
                      value={row?.DefaultAccount2}
                      onChange={(e) =>
                        handleRowChange(index, 'DefaultAccount2', e.target.value)
                      }
                      options={[
                        { value: "Field1", label: "Field1" },
                        { value: "Field2", label: "Field2" },
                        { value: "Field3", label: "Field3" },
                      ]}
                      width={"200px"}
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                  <TrasctionTableInput label="Quantity preloaded" />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                  <AdvanceSearchInput
                        value={row?.EntityRestrictMessage}
                        onChange={(e) => handleRowChange(index, `EntityRestrictMessage`, e.target.value)}
                        width={"230px"}
                      />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                  <Box sx={{ display: "flex", alignItems: "center", width: "200px",p:0,m:0 }}>
                            <FormControlLabel
                               sx={{p:0,margin:0}}
                                value="stop"
                                control={
                                    <Radio
                                    sx={{ fontSize: "10px", p:0,margin:0, pl:1 }}
                                        checked={row.Restriction === 1}
                                        onChange={(e) => handleRowChange(index, 'Restriction', 1)}
                                    />
                                }
                                label={
                                    <Typography sx={{ fontSize: "13px", color:"gray" }}>
                                        Stop
                                    </Typography>
                                }
                                labelPlacement="end"
                            />
                             <FormControlLabel
                             sx={{p:0,margin:0}}
                                value="stop"
                                control={
                                    <Radio
                                    sx={{ fontSize: "10px", p:0,margin:0, pl:1  }}
                                        checked={row.Restriction === 2}
                                        onChange={(e) => handleRowChange(index, 'Restriction', 2)}
                                    />
                                }
                                label={
                                    <Typography sx={{ fontSize: "13px", color:"gray" }}>
                                       Warn and Allow
                                    </Typography>
                                }
                                labelPlacement="end"
                            />
                        </Box>
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvancedSearchSelect
                      value={row?.Account1}
                      onChange={(e) =>
                        handleRowChange(index, 'Account1', e.target.value)
                      }
                      options={[
                        { value: "Field1", label: "Field1" },
                        { value: "Field2", label: "Field2" },
                        { value: "Field3", label: "Field3" },
                      ]}
                      width={"200px"}
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvancedSearchSelect
                      value={row?.Account2}
                      onChange={(e) =>
                        handleRowChange(index, 'Account2', e.target.value)
                      }
                      options={[
                        { value: "Field1", label: "Field1" },
                        { value: "Field2", label: "Field2" },
                        { value: "Field3", label: "Field3" },
                      ]}
                      width={"200px"}
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvancedSearchSelect
                      value={row?.Entity}
                      onChange={(e) =>
                        handleRowChange(index, row?.Entity, e.target.value)
                      }
                      options={[
                        { value: "Field1", label: "Field1" },
                        { value: "Field2", label: "Field2" },
                        { value: "Field3", label: "Field3" },
                      ]}
                      width={"200px"}
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvancedSearchSelect
                      value={row?.Entity}
                      onChange={(e) =>
                        handleRowChange(index, row?.Entity, e.target.value)
                      }
                      options={[
                        { value: "Field1", label: "Field1" },
                        { value: "Field2", label: "Field2" },
                        { value: "Field3", label: "Field3" },
                      ]}
                      width={"200px"}
                    />
                  </TableCell>
                  <TableCell sx={bodyCell}>
                    <AdvancedSearchSelect
                      value={row?.Entity}
                      onChange={(e) =>
                        handleRowChange(index, row?.Entity, e.target.value)
                      }
                      options={[
                        { value: "Field1", label: "Field1" },
                        { value: "Field2", label: "Field2" },
                        { value: "Field3", label: "Field3" },
                      ]}
                      width={"200px"}
                    />
                  </TableCell>
                  {/* Repeat similar cells for other fields */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default EntityTable;

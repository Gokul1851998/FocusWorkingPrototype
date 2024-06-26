import React from "react";
import { Alert, Button, Collapse } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../components/Tree/Tree1";
import { createProfileTree, workingDays } from "../../../config/securityConfig";
import { useState } from "react";
import { primaryButtonColor } from "../../../config";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import RoleSelect1 from "../../../components/Select/RoleSelect1";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import {
  masterSettingsDefinitionCheck,
  masterSettingsModule,
} from "../../../config/masterSettings";
import SecurityInput from "../../../components/Inputs/SecurityInput";
import { MDBCol } from "mdb-react-ui-kit";
import Definitiontable1 from "./DefinitionTable1";
import { CustomizationTree } from "../../../config/masterConfig";
import CustomizationTable from "./CustomizationTable";
import SettingsTable from "./SettingsTable";
import VatSettingsTable from "./VatSettingsTable";
import UniqueConstrains from "./UniqueConstrains";
import InfoPanel from "./InfoPanel";
import CustomizationReports from "./CustomizationReports";

function MasterCustomization() {
  const [isOpen, setIsOpen] = useState(true);
  const [hide, setHide] = useState(true);
  const [formData, setformData] = useState({});
  const [treeSelect, setTreeSelect] = useState(7);

  const handleRadioChange = (event) => {
    setformData({ ...formData, searchBy: event.target.value });
  };

  const toggleOpen = () => {
    setIsOpen(true);
    setHide(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(false);
    }, 400);
  };

  const handleSelectChange = (event, key) => {
    setformData({ ...formData, [key]: event.target.value });
  };

  const handleCheckboxChange = (event, item) => {
    const updatedCheckState = { ...formData, [item]: event.target.checked };
    setformData(updatedCheckState);
  };

  return (
    <div style={{ display: "flex" }}>
      {!hide ? (
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            height: "auto",
          }}
        >
          <Button
            color="primary"
            onClick={toggleOpen}
            style={{
              marginBottom: "1rem",
              padding: "0.1rem",
              fontSize: "0.6rem",
              height: "2rem",
              borderRadius: "0 0.5rem 0.5rem 0",
            }}
          >
            <KeyboardDoubleArrowRightIcon style={{ fontSize: "1rem" }} />
          </Button>
        </div>
      ) : null}

      <Collapse horizontal isOpen={isOpen}>
        <Alert
          style={{
            width: 350,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            backgroundColor: primaryButtonColor,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <Box
              sx={{
                display: "flex",
                //  alignItems: "center"
              }}
            >
              <Tree1 items={CustomizationTree} setSelect={setTreeSelect} />

              <Button
                color="primary"
                onClick={toggleClose}
                style={{
                  padding: "0.1rem",
                  fontSize: "0.6rem",
                  height: "2rem",
                  borderRadius: "0.5rem 0 0 0.5rem",
                }}
              >
                <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
              </Button>
            </Box>
          </div>
        </Alert>
      </Collapse>

      {treeSelect == 7 ? (
        <CustomizationTable />
      ) : treeSelect == 8 ? (
        <SettingsTable />
      ) :treeSelect == 9 ? (
        <VatSettingsTable />
      ) :treeSelect == 10 ? (
        <VatSettingsTable />
      ):treeSelect == 2 ? (
        <UniqueConstrains />
      ):treeSelect == 3 ? (
        <InfoPanel />
      ):treeSelect == 4 ? (
        <CustomizationReports />
      )  : null }
    </div>
  );
}

export default MasterCustomization;

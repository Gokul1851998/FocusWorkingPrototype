import React from 'react'
import { Alert, Button, Collapse } from 'reactstrap';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from '../../../components/Tree/Tree1';
import { createProfileTree, workingDays } from '../../../config/securityConfig';
import { useState } from 'react';
import { primaryButtonColor } from '../../../config';
import { Box, Checkbox, FormControlLabel, Radio, Typography } from '@mui/material';
import RoleSelect1 from '../../../components/Select/RoleSelect1';
import AutoComplete2 from '../../../components/AutoComplete/AutoComplete2';
import { masterSettingsDefinitionCheck, masterSettingsModule } from '../../../config/masterSettings';
import SecurityInput from '../../../components/Inputs/SecurityInput';
import { MDBCol } from 'mdb-react-ui-kit';
import Definitiontable1 from './DefinitionTable1';

function MasterDefinition() {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);
    const [formData, setformData] = useState({})
    

  const handleRadioChange = (event) => {
    setformData({...formData,searchBy:event.target.value});
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
                    height: isOpen ? null : 590,
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
                    <KeyboardDoubleArrowRightIcon
                      style={{ fontSize: "1rem" }}
                    />
                  </Button>
                </div>
              ) : null}

              <Collapse horizontal isOpen={isOpen} >
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
                    
                    <Box sx={{ display: "flex",
                    //  alignItems: "center" 
                     }}>
                      <Tree1 items={createProfileTree} />

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
                        <KeyboardDoubleArrowLeftIcon
                          style={{ fontSize: "1rem" }}
                        />
                      </Button>
                    </Box>
                  </div>
                </Alert>
                
              </Collapse>
              <Box sx={{ml:2}}>
                    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px"}}>
                    <RoleSelect1 
                        label="Module"
                        value={formData?.Module??""}
                        onChange={(e)=>handleSelectChange(e,"Module")}
                        options={masterSettingsModule}
                    /> 
                    <AutoComplete2
                        // autoLabel={"User"}
                        formData={{
                          sName: formData?.Name ?? "",
                          iId: null,
                        }}
                        setFormData={(data) => {
                          setformData({ ...formData, Name: data.sName });
                        }}
                        autoLabel={"Name"}
                        
                      />
                      <SecurityInput label={"Master Caption"}/>
                      
                    </div>
                    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:"20px",marginTop:"10px"}}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "150px" }}>
        <FormControlLabel
          value="name"
          control={<Radio 
            checked={formData.searchBy === 'name'}
            onChange={handleRadioChange}
          />}
          label={<Typography sx={{ fontSize: "13px" }}>Search by Name</Typography>}
          labelPlacement="end"
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "150px" }}>
        <FormControlLabel
          value="code"
          control={<Radio 
            checked={formData.searchBy === 'code'}
            onChange={handleRadioChange}
          />}
          label={<Typography sx={{ fontSize: "13px" }}>Search by Code</Typography>}
          labelPlacement="end"
        />
      </Box>
                    {masterSettingsDefinitionCheck.map((item, index) => (
                      
                      <Box
                        key={index}
                        sx={{ display: "flex", alignItems: "center" ,width:"150px"}}
                      >
                        <FormControlLabel
                                control={<Checkbox
                                    checked={formData[item]}
                                    onChange={(e) => handleCheckboxChange(e, item)}
                                    inputProps={{
                                        "aria-label": `controlled-${item.toLowerCase()}`,
                                    }}
                                />}
                                label={<Typography sx={{ fontSize: "13px", padding: 0 }} variant="body1">
                                    {item}
                                </Typography>}
                                sx={{ flexGrow: 1 }}
                            />
                      </Box>
                     
                    ))}
                    </div>
                    <Definitiontable1/>
                </Box>
             
            </div>
  )
}

export default MasterDefinition
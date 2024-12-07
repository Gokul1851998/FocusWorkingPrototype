import React, { useState } from 'react'
import SecurityInput from '../../../components/Inputs/SecurityInput'
import RoleSelect1 from '../../../components/Select/RoleSelect1'
import { Box } from '@mui/material'
import { masterSettingsModule } from '../../../config/masterSettings'
import AdvanceSearchAutocomplete from '../../../components/AutoComplete/AdvanceSearchAutocomplete'
import TrasctionTableInput from '../../../components/Inputs/TrasactionTableInput'

export default function EntityGeneral() {
    const [formData, setFormData] = useState({})
    const [selectedValues1, setSelectedValues1] = useState([]);
    const handleSelectChange = (event, key) => {
        setFormData({ ...formData, [key]: event.target.value });
    };

    const handleSelectionChange1 = (newValue) => {
        setSelectedValues1(newValue);

      };
  return (
    <div style={{ display: "flex" }}>



    <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "20px",
            }}
        >

           
            <RoleSelect1
                label="Entity"
                value={formData?.Entity ?? ""}
                onChange={(e) => handleSelectChange(e, "Entity")}
                options={masterSettingsModule}
              
            />
         

<AdvanceSearchAutocomplete
              width='250px'
              label={"Account1 dependency"}
              value={selectedValues1}
              onChange={handleSelectionChange1}
            // You can adjust the width as needed
            />
<AdvanceSearchAutocomplete
              width='250px'
              label={"Account2 dependency"}
              value={selectedValues1}
              onChange={handleSelectionChange1}
            // You can adjust the width as needed
            />
            <AdvanceSearchAutocomplete
              width='250px'
              label={"Item Dependency"}
              value={selectedValues1}
              onChange={handleSelectionChange1}
            // You can adjust the width as needed
            />
                 <RoleSelect1
                label="Default Account 1"
                value={formData?.DefaultAccount1 ?? ""}
                onChange={(e) => handleSelectChange(e, "DefaultAccount1")}
                options={masterSettingsModule}
              
            />

<RoleSelect1
                label="Default Account 2"
                value={formData?.DefaultAccount2 ?? ""}
                onChange={(e) => handleSelectChange(e, "DefaultAccount2")}
                options={masterSettingsModule}
              
            />


<TrasctionTableInput label="Entity Restrict Condition" />
<SecurityInput label={"Entity Restrict Message"}  />
<RoleSelect1
                label="Cost of Issue Account "
                value={formData?.CostOfIssueAccount ?? ""}
                onChange={(e) => handleSelectChange(e, "CostOfIssueAccount")}
                options={masterSettingsModule}
              
            />
            <RoleSelect1
                label="Sales/Purchase A/C"
                value={formData?.SalesPurchaseAC ?? ""}
                onChange={(e) => handleSelectChange(e, "SalesPurchaseAC")}
                options={masterSettingsModule}
              
            />
        </div>
        </Box>
        </div>
  )
}

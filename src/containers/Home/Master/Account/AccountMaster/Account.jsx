import React from 'react'
import AccountInput1 from '../../../../../components/Inputs/AccountInput1'
import { Checkbox, FormControlLabel } from "@mui/material";
import { AutoComplete4 } from '../../../../../components/AutoComplete/AutoComplete4';

export const Account = () => {

    const [accountName, setAccountName] = React.useState("");
    const [checked, setChecked] = React.useState(false);

    const handleChange1 = (event) => {
      setChecked(event.target.checked);
    };
    const handleAccountNameChange = (event) => {
   
        setAccountName(event.target.value);
      };
  return (
    <>
    <div>
    <AccountInput1 label="Name"  value={accountName} onChange={handleAccountNameChange} mandatory={1}/>
     <AutoComplete4    />
     <FormControlLabel
         control={<Checkbox checked={checked} onChange={handleChange1} />}
        label="Available in MobileApp"
    />
    </div>
    </>
  )
}

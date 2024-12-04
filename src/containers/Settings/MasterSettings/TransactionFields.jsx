import React, { useState } from 'react';
import { Checkbox, Paper, Typography, List, ListItem, Box, Button } from '@mui/material';
import { useTheme } from '../../../config/themeContext';

function TransactionFields({item,setFields,setTreeSelect,setState}) {
    const [checkedItems, setCheckedItems] = useState({});
    const {currentTheme} = useTheme()

    const users = [
     'Iid', 'Name', 'Code', 'Group',
        'Created', 'Status', 'Parent'
    ];
    const roles = [
        'SU', 'Admin', 'POS User', 'PortalUser'
    ];

    const handleChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    };

    const handleClose = () =>{
        setFields(false)
    }
    const handleAdd = () =>{
        setTreeSelect(true)
        setFields(false)
        setState(false)
    }

    return (
        <Paper style={{  width: 300, overflowX: 'hidden' }}>
            {item?.isRole ? <>
                <Typography  gutterBottom sx={{backgroundColor:currentTheme.thirdColor,color:currentTheme.tableHeaderColor,padding:"2px"}}>
                Role selection
            </Typography> 
            <List style={{ maxHeight: 300, overflowY: 'auto', width: '100%', padding: 0,scrollbarWidth:"thin" }}>
                {roles.map((role, index) => (
                    <ListItem key={index} style={{ width: '100%', padding: 0,fontSize:"12px" }}>
                        <Checkbox
                            checked={checkedItems[role] || false}
                            onChange={handleChange}
                            name={role}
                            sx={{padding:0,fontSize:"12px"}}
                        />
                        {role}
                    </ListItem>
                ))}
            </List>
            </>
            
            :
            <>
            <Typography  gutterBottom sx={{backgroundColor:currentTheme.thirdColor,color:currentTheme.tableHeaderColor,padding:"2px"}}>
                Field selection
            </Typography>
            <List style={{ maxHeight: 300, overflowY: 'auto', width: '100%', padding: 0,scrollbarWidth:"thin" }}>
                {users.map((user, index) => (
                    <ListItem key={index} style={{ width: '100%', padding: 0,fontSize:"12px" }}>
                        <Checkbox
                            checked={checkedItems[user] || false}
                            onChange={handleChange}
                            name={user}
                            sx={{padding:0,fontSize:"12px"}}
                        />
                        {user}
                    </ListItem>
                ))}
            </List>
            <Box sx={{display:'flex', justifyContent:'space-around',p:2}}>
                <Button onClick={handleClose} variant='contained'>Cancel</Button>
                <Button onClick={handleAdd} variant='contained'>Add</Button>
            </Box>
            </>
            }

            
            
            
        </Paper>
    );
}

export default TransactionFields;

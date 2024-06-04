import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem, Box, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { primaryColor,imageIcon } from '../../config';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

function AdminHeader() {

    const appBarRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openup, setOpenup] = useState(false);

    const navigate = useNavigate()

    const handleDrawerOpen = () => {
        console.log('Drawer open');
      };
    
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenup(true);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        setOpenup(false);
        localStorage.removeItem("userName");
        navigate("/")
      };
    
  return (
    <AppBar
        ref={appBarRef}
        position="fixed"
        style={{ backgroundColor: primaryColor, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)" }}
       
      >
        <Toolbar sx={{ justifyContent: "space-between"}}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ marginRight: 1 }}
            >
              <img
                src={imageIcon}
                alt="Icon"
                style={{ width: 32, height: 32 }}
              />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              Sang Solution
            </Typography>
          </div>

          <div>
            <IconButton
              id="basic-button"
              aria-controls={openup ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openup ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar>
                <PersonIcon />
              </Avatar>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openup}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default AdminHeader
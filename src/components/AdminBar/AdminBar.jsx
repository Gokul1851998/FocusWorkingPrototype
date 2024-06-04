import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Container,
  Tooltip,
  Button,
} from "@mui/material";
import { primaryColor, imageIcon, primaryButtonColor, SideBarIcons } from "../../config";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function AdminBar() {
  const appBarRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openup, setOpenup] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeSubMenuId, setActiveSubMenuId] = React.useState(null);
  const [menu, setMenu] = React.useState([]);
  const [menuId, setMenuId] = React.useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
   setMenu(SideBarIcons)
  },[])

  const handleSubMenu = (event, Id) => {
      setAnchorEl(event.currentTarget);
      setMenuId(Id);
  
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setActiveSubMenuId(null);
  };

  const handleMenuList = () => {
    setAnchorEl(null);
    setAnchorElNav(null); // This line will close the menu
    setActiveSubMenuId(null);
  };

  const handleDrawerOpen = () => {
    console.log("Drawer open");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenup(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenup(false);
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setActiveSubMenuId(null);
  };

  let menuItems;

  const handleClickEvent = async(menu)=>{

  }

  return (
    <>
      <AppBar
        ref={appBarRef}
        position="fixed"
        style={{
          backgroundColor: primaryButtonColor,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
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

            <Typography
              variant="h6"
              color={primaryColor}
              noWrap
              component="div"
            >
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

      <AppBar
        style={{
          marginTop: 64,
          zIndex: 1, // Adjust the z-index as needed
          top: 0,
          backgroundColor: `${primaryColor}`,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
          height: 40,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {menuItems}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              {menu &&
                menu
                  .filter((menuList) => menuList.parent === 0)
                  .map((menuList, index) => (
                    <IconButton
                      key={menuList.id}
                      aria-controls="master-menu"
                      aria-haspopup="true"
                      onClick={(e) => handleSubMenu(e, menuList.id)}
                      variant="#00498E" // Note: This is not a valid variant, you might want to use 'contained', 'outlined', or 'text'
                      sx={{
                        mr: 0,
             
                        color: "white",
                      }}
                    >
                      {menuList.iconName}
                    </IconButton>
                  ))}

              <Menu
                id="master-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuList}
              >
                {menu &&
                  menu
                    .filter((menuList) => menuList.id === menuId)
                    .map((menuList, index) => (
                      <MenuItem
                        key={menuList.id}
                        onClick={() => handleClickEvent(menuList)}
                      >
                        {menuList.iconName}
                      </MenuItem>
                    ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
             
              <Tooltip title="Log out">
                <IconButton
                  onClick={handleClose}
                  sx={{
                    p: 0,
                    "&:hover": { backgroundColor: "transparent !important" },
                  }}
                >
                 
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default AdminBar;

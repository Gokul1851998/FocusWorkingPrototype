import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Container,
  Tooltip,
  ListItemText,
} from "@mui/material";
import {
  primaryColor,
  imageIcon,
  primaryButtonColor,
  SideBarIcons,
  thirdColor,
} from "../../config";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const itemsTextStyle = {
  "& .MuiListItemText-primary": {
    fontSize: "14px",
  },
};

const itemsIconStyle = {
  fontSize: "16px",
  color: thirdColor,
  transform: "rotate(0deg)",
  transition: "transform 0.3s",
};

const RecursiveMenu = ({ items, parentId, handleMenuItemClick }) => {
  const navigate = useNavigate();

  const handleSubMenu = (event, menu) => {
    if (menu.child) {
      handleMenuItemClick(event, menu);
    } else {
      if (menu.url) {
        navigate(menu.url);
      }
    }
  };

  return (
    <>
      {items.filter(item => item.parent === parentId).map(menu => (
        <MenuItem key={menu.id} onClick={(e) => handleSubMenu(e, menu)}>
          <Typography textAlign="center">{menu.iconName}</Typography>
          {menu.child ? <PlayArrowIcon sx={{ ...itemsIconStyle, marginLeft: "auto" }} /> : null}
        </MenuItem>
      ))}
    </>
  );
};

function AdminBar() {
  const appBarRef = useRef(null);
  const [anchor, setAnchor] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [submenuStack, setSubmenuStack] = useState([]);
  const [sideBarIcons, setSideBarIcons] = useState([]);
  const [key, setKey] = useState(Date.now());
  const navigate = useNavigate();

  useEffect(() => {
    fetchIconsFromApi().then((data) => {
      setSideBarIcons(data);
    });
  }, []);

  useEffect(() => {
    //Used where pages/containers have multiple/sub containers
    setKey(Date.now())
  }, [submenuStack])


  const fetchIconsFromApi = async () => {
    // Resolve the dynamic imports
    const resolvedIconsData = await Promise.all(
      SideBarIcons.map(async (item) => {
        if (!item.icon) {
          // Handle case where icon is null or undefined
          return { ...item, icon: null };
        }
        try {
          const iconModule = await item.icon;
          return { ...item, icon: iconModule.default || iconModule }; // Extract the default export or use the module directly
        } catch (error) {
          console.error(`Error loading icon for ${item.iconName}:`, error);
          return { ...item, icon: null }; // Handle error during dynamic import
        }
      })
    );
  
    return resolvedIconsData;
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (event, menu) => {
    const currentTarget = event.currentTarget;
    const children = sideBarIcons.filter((subItem) => subItem.parent === menu.id);
    
    if (children.length > 0) {
        setSubmenuStack((prev) => [
            ...prev,
            { index: prev.length + 1, anchorEl: currentTarget, submenuItems: children },
          ]);
    } else {
        const simpleItem = {
            id: menu.id,
            name: menu.iconName,
            key1:key
          };
      navigate(menu?.url ?? "/url", { state: simpleItem });
      setSubmenuStack([]);
    }
  };

  const handleSubMenuClose = () => {
    setSubmenuStack([]);
  };

  const handleAvatarClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleDrawerOpen = () => {
    console.log("Drawer open");
  };
 
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
            <Box
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ display: "flex", alignItems: "center", marginRight: 1, cursor: "pointer" }}
            >
              <img
                src={imageIcon}
                alt="Icon"
                style={{ width: 32, height: 32 }}
              />
            </Box>

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
            <Box
              id="basic-button"
              aria-controls={Boolean(anchor) ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchor) ? "true" : undefined}
              onClick={handleAvatarClick}
              sx={{ cursor: "pointer" }}
            >
              <Avatar>
                <PersonIcon />
              </Avatar>
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchor}
              open={Boolean(anchor)}
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
          
          backgroundColor: primaryColor,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
          height: 40,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Box
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                <MenuIcon />
              </Box>

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
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <RecursiveMenu items={sideBarIcons} parentId={0} handleMenuItemClick={handleMenuItemClick} />
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "start",
                paddingBottom: 3,
              }}
            >
              {sideBarIcons.filter((menuList) => menuList.parent === 0).map((menuList) => (
                <Box
                  key={menuList.id}
                  aria-controls="master-menu"
                  aria-haspopup="true"
                  onClick={(e) => handleMenuItemClick(e, menuList)}
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    margin: 0,
                    fontSize: 14,
                    paddingX: 2,
                  }}
                >
                  <Typography>{menuList.iconName}</Typography>
                </Box>
              ))}

              {submenuStack.map((submenu, index) => (
               <Menu
               key={index}
               anchorEl={submenu.anchorEl}
               open={Boolean(submenu.anchorEl)}
               onClose={handleSubMenuClose}
               anchorOrigin={{
                 vertical: submenu.index === 1 ? "bottom" : "top",
                 horizontal: submenu.index === 1 ? null : "right",
               }}
               transformOrigin={{
                 vertical: "top",
                 horizontal: "left",
               }}
               MenuListProps={{
                 "aria-labelledby": "nested-menu-button",
                 disablePadding: true,
               }}
             >
             
                  {submenu.submenuItems.map((subItem) => (
                    <MenuItem
                      key={subItem.id}
                      onClick={(e) => handleMenuItemClick(e, subItem)}
                      sx={{
                        backgroundColor: primaryColor,
                        color: primaryButtonColor,
                        "&:hover": {
                          backgroundColor: "#073f82",
                        },
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      <ListItemText sx={itemsTextStyle} primary={subItem.iconName} />
                      {subItem.child && (
                        <PlayArrowIcon
                          sx={{
                            ...itemsIconStyle,
                            transform: submenuStack.includes(subItem.id) ? "rotate(90deg)" : "none",
                          }}
                        />
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default AdminBar;

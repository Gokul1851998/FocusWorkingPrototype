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
import { primaryColor, imageIcon, primaryButtonColor, SideBarIcons, thirdColor } from "../../config";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const itemsTextStyle = {
    "& .MuiListItemText-primary": {
      // Ensuring we target the primary text class directly
      fontSize: "14px",
    },
  };

  const itemsIconStyle = {
    fontSize: "16px", // Assuming you meant to adjust the size of the icon here
    color: thirdColor, // Assuming you want to dynamically change the color
    transform: "rotate(0deg)",
    transition: "transform 0.3s",
  };

function AdminBar() {
  const appBarRef = useRef(null);
  const [anchor, setAnchor] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openup, setOpenup] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeSubMenuId, setActiveSubMenuId] = React.useState(null);
  const [menu, setMenu] = React.useState([]);
  const [menuId, setMenuId] = React.useState(0);
  const [submenuStack, setSubmenuStack] = useState([]);
  const [key, setKey] = useState(Date.now());
  const [parentId, setparentId] = useState(null);
  const [sideBarIcons, setSideBarIcons] = useState([]);
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setMenu(SideBarIcons);
  }, []);

  useEffect(() => {
    setKey(Date.now())
  }, [submenuStack])

  const handleSubMenuClose = (level) => {
    // Close the current submenu and all submenus above it
    setSubmenuStack([]); //to close on by one
    // setSubmenuStack([]); //to close entire submenu
    setOpenSubMenuId(null);
  };


  const handleSubMenuOpen = (event, item) => {
    const currentTarget = event.currentTarget;
    // Close all submenus when clicking on a top-level item if already open
    if (item.parent === 0) {
      setSubmenuStack([]);
      setparentId(item.id);
    }
    setOpenSubMenuId((prevId) => (prevId === item.id ? null : item.id));
    // Prepare the next level submenu
 
    const children = sideBarIcons.filter(
      (subItem) => subItem.parent === item.id
    );
    if (children.length > 0) {
      // Set the submenu items and the anchor element for positioning
      setSubmenuStack((prev) => [
        ...prev,
        { anchorEl: currentTarget, submenuItems: children },
      ]);
    } else {
      // If there are no children, you may want to perform a different action
      const simpleItem = {
        id: item.id,
        name: item.iconName,
        key1:key
      };
      navigate(item?.url ?? "/url", { state: simpleItem });
      setSubmenuStack([]); 
      setOpenSubMenuId(null);
    }
  };

  useEffect(() => {
    fetchIconsFromApi().then((data) => {
      setSideBarIcons(data);
    });
  }, []);


  const fetchIconsFromApi = async () => {
    // Resolve the dynamic imports
    const resolvedIconsData = await Promise.all(
      SideBarIcons.map(async (item) => {
        const iconModule = await item.icon;
        return { ...item, icon: iconModule.default }; // Extract the default export
      })
    );

    return resolvedIconsData;
  };

  useEffect(() => {
    if (submenuStack.length == 0) setparentId(null);
  }, [submenuStack]);



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setActiveSubMenuId(null);
  };


  const handleClick = (event) => {
    setAnchor(event.currentTarget);
    setOpenup(true);
  };

  const handleClose = () => {
    setAnchor(null);
    setOpenup(false);
    localStorage.removeItem("userName");
    navigate("/");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setActiveSubMenuId(null);
  };

  const handleMobMenu = (id) => {
    setActiveSubMenuId(id);
  };

  const handleCloseOpen = () => {
    setAnchor(null);
    setOpenup(false);
  };

  let menuItems;
  if (activeSubMenuId == null) {
    menuItems = menu
      .filter((menuList) => menuList.parent === 0)
      .map((menuList) => (
        <MenuItem key={menuList.id} onClick={() => handleMobMenu(menuList.id)}>
          <Typography textAlign="center">{menuList.iconName}</Typography>
        </MenuItem>
      ));
  } else {
    menuItems = [
      <MenuItem key="back" onClick={() => setActiveSubMenuId(null)}>
        <ArrowBackIcon sx={{ color: primaryColor }} />
      </MenuItem>,
      ...menu
        .filter((menuList) => menuList.parent === activeSubMenuId)
        .map((menuList) => (
          <MenuItem key={menuList.id} onClick={() => handleClickEvent(menuList)}>
            <Typography textAlign="center">{menuList.iconName}</Typography>
          </MenuItem>
        )),
    ];
  }

  const handleClickEvent = async (menu) => {
    // Handle click event
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
              aria-controls={openup ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openup ? "true" : undefined}
              onClick={handleClick}
              sx={{ cursor: "pointer" }}
            >
              <Avatar>
                <PersonIcon />
              </Avatar>
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchor}
              open={openup}
              onClose={handleCloseOpen}
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
          zIndex: 1,
          top: 0,
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
                paddingBottom:3
              }}
            >
              {menu &&
                menu
                  .filter((menuList) => menuList.parent === 0)
                  .map((menuList) => (
                    <Box
                      key={menuList.id}
                      aria-controls="master-menu"
                      aria-haspopup="true"
                      onClick={(e) => handleSubMenuOpen(e, menuList)}
                      sx={{
                        cursor: "pointer",
                        color: "white",
                        margin: 0,
                        fontSize: 14,
                   
                        paddingX: 2, // Horizontal padding for better spacing
                      }}
                    >
                      <Typography>{menuList.iconName}</Typography>
                    </Box>
                  ))}

            
            </Box>

            {submenuStack.map((submenu, index) => (
          <Menu
            key={index}
            anchorEl={submenu.anchorEl}
            open={Boolean(submenu.anchorEl)}
            onClose={() => handleSubMenuClose(index)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "bottom",
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
                onClick={(e) => handleSubMenuOpen(e, subItem)}
                sx={{
                  backgroundColor: primaryColor, // Set the background color for each item
                  color: primaryButtonColor, // Set the text color for each item
                  "&:hover": {
                    backgroundColor: "#073f82", // Adjust hover color as needed
                  },
                  borderBottom: "1px solid rgba(255, 255, 255, 0.12)", // Border between items
                }}
              >
                {/* <ListItemIcon>
                  {React.createElement(subItem.icon)}
                </ListItemIcon> */}
                <ListItemText sx={itemsTextStyle} primary={subItem.iconName} />
                {subItem.child && (
                  <PlayArrowIcon
                    sx={{
                      ...itemsIconStyle,
                      transform:
                        openSubMenuId === subItem.id ? "rotate(90deg)" : "none",
                    }}
                  />
                )}
              </MenuItem>
            ))}
          </Menu>
        ))}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Log out">
                <Box
                  onClick={handleClose}
                  sx={{
                    cursor: "pointer",
                    p: 0,
                    "&:hover": { backgroundColor: "transparent !important" },
                  }}
                >
                </Box>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default AdminBar;
 
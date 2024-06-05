import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import SideBarPopup from "./SideBarPopup";
import {
  SideBarIcons,
  activePrimaryColor,
  imageIcon,
  primaryButtonColor,
  primaryColor,
} from "../../config";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import { useTheme } from "../../config/themeContext";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const itemsTextStyle = {
  "& .MuiListItemText-primary": {
    // Ensuring we target the primary text class directly
    fontSize: "14px",
  },
};




export default function SideBar() {
  
  const [open, setOpen] = useState(false);
  const [sideBarIcons, setSideBarIcons] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [submenuStack, setSubmenuStack] = useState([]);
  const [appBarHeight, setAppBarHeight] = useState(0);
  const [sideBarheight, setsideBarheight] = useState("100%");
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [parentId, setparentId] = useState(null);
  const [key, setKey] = useState(Date.now());

  const { currentTheme,switchTheme } = useTheme();
  

  const itemsIconStyle = {
    fontSize: "16px", // Assuming you meant to adjust the size of the icon here
    color: currentTheme.primaryButtonColor, // Assuming you want to dynamically change the color
    transform: "rotate(0deg)",
    transition: "transform 0.3s",
  };

  const navigate = useNavigate();

  const appBarRef = useRef(null); // Ref for the AppBar
  const menusRef = useRef({});

  useEffect(() => {
    //Used where pages/containers have multiple/sub containers
    setKey(Date.now())
  }, [submenuStack])

  useEffect(() => {
    // Function to update the height state
    const updateAppBarHeight = () => {
      if (appBarRef.current) {
        setAppBarHeight(appBarRef.current.clientHeight);
        const height = `calc(100vh - ${appBarHeight}px)`;
        setsideBarheight(height);
      }
    };

    // Call the function after the component mounts
    updateAppBarHeight();

    // Add resize listener to update height on window resize
    window.addEventListener("resize", updateAppBarHeight);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateAppBarHeight);
  }, []);

  const handleSubMenuOpen = (event, item) => {
    const currentTarget = event.currentTarget;
    // Close all submenus when clicking on a top-level item if already open
    if (item.parent === 0) {
      setSubmenuStack([]);
      setparentId(item.id);
    }
    setOpenSubMenuId((prevId) => (prevId === item.id ? null : item.id));
    // Prepare the next level submenu
    const nextLevelIndex = submenuStack.length;
    const nextLevelSubmenu = sideBarIcons.filter(
      (subItem) => subItem.parent === item.id
    );
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
      setSubmenuStack([]); //to close entire submenu
      setOpenSubMenuId(null);
    }
  };
  const handleSubMenuClose = (level) => {
    // Close the current submenu and all submenus above it
    setSubmenuStack((prev) => prev.slice(0, level)); //to close on by one
    // setSubmenuStack([]); //to close entire submenu
    setOpenSubMenuId(null);
  };

  useEffect(() => {
    if (submenuStack.length == 0) setparentId(null);
  }, [submenuStack]);

  const openup = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // navigate("/");
  };
  const handleLogout = () => {
    setAnchorEl(null);
     navigate("/");
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
  

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      {" "}
      <CssBaseline />
      <AppBar
        ref={appBarRef}
        position="fixed"
        style={{ background: currentTheme.sideBarhorizontal,boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)", }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color={currentTheme.primaryButtonColor}
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 1,
              }}
            >
              {/* You can use imageIcon here */}
              <img
                src={imageIcon}
                alt="Icon"
                style={{ width: 32, height: 32 }}
              />
            </IconButton>

            <Typography variant="h6" sx={{color:currentTheme.sideBarTextColor1}} noWrap component="div">
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
              <MenuItem onClick={handleLogout} sx={{borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between' }}>
    
    Logout
    <LogoutIcon style={{ marginLeft: 8 }} />
  </MenuItem>
  <MenuItem sx={{ borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between' }}>
    Language
    <Box sx={{ marginLeft: 2 }}>
      {/* Add language selection dropdown or list here */}
      <select>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
    </Box>
  </MenuItem>
  <MenuItem
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    gap: 1,
    width:"240px",
    paddingBottom: '40px', // Ensure enough space for the ThemeSelector to be displayed
    overflow: 'visible', // Ensure the ThemeSelector is not cut off
  }}
>
  <Typography variant="body1">Choose Theme</Typography>
  <Box sx={{ marginLeft: 2 ,width:"fit-Content"}}>
    <ThemeSelector />
  </Box>
</MenuItem>

            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <Divider />
        <List
          sx={{
            background: currentTheme.sideBarVertical,
            height: sideBarheight,
            overflow: "auto", // only show scrollbar if needed
            // Make sure the combined padding, margin, and borders do not exceed the container's height
            padding: 0,
            margin: 0,
            "& .MuiListItem-root": {
              padding: 0, // Adjust this as necessary
              margin: 0, // Adjust this as necessary
              "& .MuiListItemButton-root": {
                padding: "10px 20px", // Adjust this as necessary
              },
            },
          }}
        >
          {sideBarIcons.map((item) => {
            const isActive = parentId === item.id;

            return (
              item.parent === 0 && (
                // Top-level list items
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{
                    display: "block",
                    backgroundColor: isActive
                      ? `${currentTheme.activePrimaryColor}`
                      : "none", // Appending 'DD' sets the opacity to approximately 87%
                    "&:hover": {
                      backgroundColor: `${currentTheme.activePrimaryColor}`, // Appending '99' sets the opacity to approximately 60%
                    },
                  }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={(e) => handleSubMenuOpen(e, item)}
                  >
                    <Tooltip title={item.iconName} placement="right">
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: currentTheme.primaryButtonColor,
                        }}
                      >
                        {React.createElement(item.icon)}{" "}
                        <Typography sx={{ paddingLeft: open ? 2 : 0 }}>
                          {open ? item.iconName : null}
                        </Typography>
                      </ListItemIcon>
                    </Tooltip>
                  </ListItemButton>
                </ListItem>
              )
            );
          })}
        </List>
        {submenuStack.map((submenu, index) => (
          <Menu
            key={index}
            anchorEl={submenu.anchorEl}
            open={Boolean(submenu.anchorEl)}
            onClose={() => handleSubMenuClose(index)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
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
                  backgroundColor: currentTheme.primaryColor, // Set the background color for each item
                  color: currentTheme.primaryButtonColor, // Set the text color for each item
                  "&:hover": {
                    backgroundColor: currentTheme.primaryColor, // Adjust hover color as needed
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
      </Drawer>
    </>
  );
}

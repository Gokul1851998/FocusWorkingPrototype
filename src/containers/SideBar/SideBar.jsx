import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
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
  imageIcon,
  primaryButtonColor,
  primaryColor,
} from "../../config";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";

const drawerWidth = 240;

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

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [sideBarIcons, setSideBarIcons] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sideBarOpen, setSideBarOpen] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const openup = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = Boolean(sideBarOpen);
  const handleSideBarMenu = (event,id) => {
    setSelectedIcon(id)
    setSideBarOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setSideBarOpen(null);
    setSelectedIcon(null)
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

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: primaryColor }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
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

      <Drawer variant="permanent">
        <DrawerHeader></DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: primaryColor, minHeight: "91%" }}>
          {sideBarIcons.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: selectedIcon === item.id ? '#073f82' : 'transparent', // Highlight selected icon
                }}
                aria-controls={openMenu ? "basic-menuId" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={(e)=>handleSideBarMenu(e,item.id)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: primaryButtonColor,
                  }}
                >
                  <item.icon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Menu
          id="basic-menuId"
          anchorEl={sideBarOpen}
          open={openMenu}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Create Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Create Role</MenuItem>
          <MenuItem onClick={handleMenuClose}>Create User</MenuItem>
        </Menu>
        <Divider />
      </Drawer>

      <SideBarPopup open={open} handleClose={handleDrawerClose} />
    </Box>
  );
}

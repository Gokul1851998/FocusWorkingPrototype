import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import WarningMessage from '../components/Warning/Warnings';

// Define your themes
const themes = {
  default: {
    primaryColor: "#0132BF",
    secondaryColor: "#1E60BF",
    thirdColor: "#85B3D1",
    thirdColorLighter: "#B2D3E1",
    primaryButtonColor: "#ffff",
    activePrimaryColor: "#0132BF",
    sideBarhorizontal: "linear-gradient(180deg, #1F82F0 0%, #0132BF 100%)",
    sideBarVertical: "linear-gradient(90deg, #1F82F0 0%, #0132BF 100%)",
    sideBarTextColor1:"#ffff",
    tableHeaderColor:"#ffff",
    actionIcons:"#B9B9B9"
  },
  theme1: {
    primaryColor: "#00405E",
    secondaryColor: "#005E7E",
    thirdColor: "#0073AA",
    thirdColorLighter: "#339BCC",
    primaryButtonColor: "#ffff",
    activePrimaryColor: "#225B77",
    sideBarhorizontal: "#00405E",
    sideBarVertical: "#00405E",
    sideBarTextColor1:"#ffff",
    tableHeaderColor:"#ffff",
    actionIcons:"#B9B9B9"
  },
  theme2: {
    primaryColor: "#3995C1",
    secondaryColor: "#5DB5D1",
    thirdColor: "#A3D3E9",
    thirdColorLighter: "#C7E5F1",
    primaryButtonColor: "#ffff",
    activePrimaryColor: "#51B3E2",
    sideBarhorizontal: "#3995C1",
    sideBarVertical: "#3995C1",
    sideBarTextColor1:"#ffff",
    tableHeaderColor:"#ffff",
    actionIcons:"#B9B9B9"
  },
  dark: {
    primaryColor: "#333",
    secondaryColor: "#555",
    thirdColor: "#777",
    thirdColorLighter: "#9B9B9B",
    primaryButtonColor: "#fff",
    activePrimaryColor: "#222",
    sideBarhorizontal: "#333",
    sideBarVertical: "#333",
    sideBarTextColor1:"#ffff",
    tableHeaderColor:"#ffff",
    actionIcons:"#B9B9B9"
  },
  light: {
    primaryColor: "#ddd",
    secondaryColor: "#F0F0F0",
    thirdColor: "#d0d0d0",
    thirdColorLighter: "#E3E3E3",
    primaryButtonColor: "#000",
    activePrimaryColor: "#d0d0d0",
    sideBarhorizontal: "#ddd",
    sideBarVertical: "#ddd",
    sideBarTextColor1:"#000",
    tableHeaderColor:"#000",
    actionIcons:"#B9B9B9"
  },
  // monochrome: {
  //   primaryColor: "#000000",
  //   secondaryColor: "#2C2C2C",
  //   thirdColor: "#585858",
  //   primaryButtonColor: "#D6D6D6",
  //   activePrimaryColor: "#101010"
  // }
};

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });


const ThemeContext = createContext();

const getStoredTheme = () => {
  const themeName = localStorage.getItem('theme') || 'default';
  const colorMode = localStorage.getItem('color') === 'true';
  return { themeName, colorMode };
};

export const ThemeProvider = ({ children }) => {
  const { themeName: storedThemeName, colorMode: storedColorMode } = getStoredTheme();
  const [themeName, setThemeName] = useState(storedThemeName);
  const [isDarkMode, setIsDarkMode] = useState(storedColorMode);
  const [openWarning, setOpenWarning] = useState(false); 

  const currentTheme = themes[themeName];

  useEffect(() => {
    localStorage.setItem('theme', themeName);
  }, [themeName]);

  // useEffect(() => {
  //   localStorage.setItem('color', isDarkMode);
  // }, [isDarkMode]);
  useEffect(() => {
    localStorage.setItem('color', isDarkMode);
    if (isDarkMode) {
      setThemeName('dark'); // Set the theme to dark if isDarkMode is true
    }
  }, [isDarkMode]);

  // const switchTheme = (newThemeName) => {
  //   setThemeName(newThemeName);
  // };
  const switchTheme = (newThemeName) => {
    if (isDarkMode) {
      // Show warning if trying to switch theme while in dark mode
      setOpenWarning(true);
    } else {
      setThemeName(newThemeName);
    }
  };

  const switchColorMode = (color) => {
    setIsDarkMode(color);
  };

  const appliedTheme = createTheme({
    ...currentTheme,
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      ...currentTheme.palette,
    },
  });
  const handleWarningClose = () => {
    setOpenWarning(false);
  }
  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme, switchColorMode,isDarkMode }}>
      <MUIThemeProvider theme={appliedTheme}>
        <CssBaseline />
        {children}
        <WarningMessage
          open={openWarning}
          handleClose={handleWarningClose}
          message="Switching themes is disabled in dark mode."
          type="warning"
        />
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
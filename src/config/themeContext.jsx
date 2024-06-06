import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';

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

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = localStorage.getItem('color')
  const [themeName, setThemeName] = useState(localStorage.getItem('theme') || 'default');
  const [isDarkMode, setIsDarkMode] = useState(theme? darkTheme : lightTheme);
  const currentTheme = themes[themeName];

  const switchTheme = (newThemeName) => {
    setThemeName(newThemeName);
    localStorage.setItem('theme', newThemeName); // Save new theme name to localStorage
  };

  const switchColor = (color) => {
    setIsDarkMode(color? darkTheme : lightTheme)
    localStorage.setItem('color', color);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme, switchColor }}>
        <MUIThemeProvider theme={isDarkMode}>
        <CssBaseline />
      {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);
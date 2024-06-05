import React, { createContext, useContext, useState } from 'react';

// Define your themes
const themes = {
  default: {
    primaryColor: "#0132BF",
    secondaryColor: "#1E60BF",
    thirdColor: "#85B3D1",
    primaryButtonColor: "#ffff",
    activePrimaryColor: "#0132BF",
    sideBarhorizontal: "linear-gradient(180deg, #1F82F0 0%, #0132BF 100%)",
    sideBarVertical: "linear-gradient(90deg, #1F82F0 0%, #0132BF 100%)",
    sideBarTextColor1:"#ffff"
  },
  theme1: {
    primaryColor: "#00405E",
    secondaryColor: "#005E7E",
    thirdColor: "#0073AA",
    primaryButtonColor: "#ffff",
    activePrimaryColor: "#225B77",
    sideBarhorizontal: "#00405E",
    sideBarVertical: "#00405E",
    sideBarTextColor1:"#ffff"
  },
  theme2: {
    primaryColor: "#3995C1",
    secondaryColor: "#5DB5D1",
    thirdColor: "#A3D3E9",
    primaryButtonColor: "#ffff",
    activePrimaryColor: "#51B3E2",
    sideBarhorizontal: "#3995C1",
    sideBarVertical: "#3995C1",
    sideBarTextColor1:"#ffff"
  },
  dark: {
    primaryColor: "#333",
    secondaryColor: "#555",
    thirdColor: "#777",
    primaryButtonColor: "#fff",
    activePrimaryColor: "#222",
    sideBarhorizontal: "#333",
    sideBarVertical: "#333",
    sideBarTextColor1:"#ffff"
  },
  light: {
    primaryColor: "#ddd",
    secondaryColor: "#F0F0F0",
    thirdColor: "#E0E0E0",
    primaryButtonColor: "#000",
    activePrimaryColor: "#d0d0d0",
    sideBarhorizontal: "#ddd",
    sideBarVertical: "#ddd",
    sideBarTextColor1:"#000"
  },
  // monochrome: {
  //   primaryColor: "#000000",
  //   secondaryColor: "#2C2C2C",
  //   thirdColor: "#585858",
  //   primaryButtonColor: "#D6D6D6",
  //   activePrimaryColor: "#101010"
  // }
};


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(localStorage.getItem('theme') || 'default');
  const currentTheme = themes[themeName];

  const switchTheme = (newThemeName) => {
    setThemeName(newThemeName);
    localStorage.setItem('theme', newThemeName); // Save new theme name to localStorage
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);
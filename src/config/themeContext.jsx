import React, { createContext, useContext, useState } from 'react';

// Define your themes
const themes = {
  default: {
    primaryColor: "#2460A7",
    secondaryColor: "#1E8FD8",
    thirdColor: "#85B3D1",
    primaryButtonColor: "#ffff",
    activePrimaryColor: "#1D4D86"
  },
  dark: {
    primaryColor: "#333",
    secondaryColor: "#555",
    thirdColor: "#777",
    primaryButtonColor: "#fff",
    activePrimaryColor: "#222"
  },
  light: {
    primaryColor: "#ddd",
    secondaryColor: "#F0F0F0",
    thirdColor: "#E0E0E0",
    primaryButtonColor: "#000",
    activePrimaryColor: "#000"
  },
  monochrome: {
    primaryColor: "#000000",
    secondaryColor: "#2C2C2C",
    thirdColor: "#585858",
    primaryButtonColor: "#D6D6D6",
    activePrimaryColor: "#101010"
  }
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

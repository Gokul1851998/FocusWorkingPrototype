import React from 'react';
import { Box, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '../../config/themeContext';
import DoneIcon from '@mui/icons-material/Done';


export default function ThemeSelector() {
  const { currentTheme, switchTheme } = useTheme();

  // const themes = {
  //   default: '#0132BF',
  //   theme1:"#00405E",
  //   theme2:"#3995C1",
  //   dark: '#333',
  //   light: '#ddd',
  //   // monochrome: '#000000',

  // };
  const themes = window.themes;

  return (
    <Box sx={{ position: 'absolute', left: 0, bottom: 0, margin: '10px', display: 'flex', gap: 1 }}>
      {Object.keys(themes).map((themeName) => (
        <IconButton
          key={themeName}
          onClick={() => switchTheme(themeName)}
          sx={{
            color: themes[themeName].primaryColor,
            bgcolor: themes[themeName].primaryColor,
            border: '2px solid',
            borderColor: currentTheme.primaryColor === themes[themeName].primaryColor ? currentTheme.primaryButtonColor : '#fff',
            width: 30,
            height: 30,
            '&:hover': {
              borderColor: 'black',
              color: themes[themeName].primaryColor,
              bgcolor: themes[themeName].primaryColor,
            },
          }}
        >
          {currentTheme.primaryColor === themes[themeName].primaryColor && <DoneIcon sx={{ color: currentTheme.primaryButtonColor }} />}
        </IconButton>
      ))}
    </Box>
  );
}

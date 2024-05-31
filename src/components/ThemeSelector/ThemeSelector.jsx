import React from 'react';
import { Box, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '../../config/themeContext';
import DoneIcon from '@mui/icons-material/Done';


export default function ThemeSelector() {
  const { currentTheme, switchTheme } = useTheme();

  const themes = {
    default: '#2460A7',
    dark: '#333',
    light: '#FFFFFF',
    monochrome: '#000000',
  };

  return (
    <Box sx={{ position: 'absolute', left: 0, bottom: 0, margin: '10px', display: 'flex', gap: 1 }}>
      {Object.keys(themes).map((themeName) => (
        <IconButton
          key={themeName}
          onClick={() => switchTheme(themeName)}
          sx={{
            color: themes[themeName],
            bgcolor: themes[themeName],
            border: '2px solid',
            borderColor: currentTheme.primaryColor === themes[themeName] ? currentTheme.primaryButtonColor : '#fff',
            width: 30,
            height: 30,
            '&:hover': {
              borderColor: 'black',
              color: themes[themeName],
            bgcolor: themes[themeName],

            },
          }}
        >
          {currentTheme.primaryColor === themes[themeName] && <DoneIcon sx={{color:currentTheme.primaryButtonColor}} />}
        </IconButton>
      ))}
    </Box>
  );
}

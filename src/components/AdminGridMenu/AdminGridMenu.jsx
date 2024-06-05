import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdminHeader from '../AdminHeader/AdminHeader';
import { SideBarIcons, primaryButtonColor, thirdColor } from '../../config';
import { ListItemIcon, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : thirdColor,
  ...theme.typography.body1, // Increase font size
  padding: theme.spacing(4), // Increase padding
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function AdminGridMenu() {
  const [sideBarIcons, setSideBarIcons] = useState([]);
  const [listMenu, setListMenu] = useState([])
  const [value, setValue] = useState(0)

  useEffect(() => {
    fetchIconsFromApi().then((data) => {
      setSideBarIcons(data);
    });
  }, []);

  const handleMenu = (e, menu)=>{
    setValue(menu.id);
  }

  const fetchIconsFromApi = async () => {
    try {
      // Resolve the dynamic imports
      const resolvedIconsData = await Promise.all(
        SideBarIcons.map(async (item) => {
          try {
            const iconModule = await item.icon;
            const icon = iconModule?.default || iconModule; // Check for default export or use module directly
            return { ...item, icon }; // Use the resolved icon
          } catch (error) {
            console.error(`Error loading icon for ${item.iconName}:`, error);
            return { ...item, icon: null }; // Handle missing icon
          }
        })
      );
      return resolvedIconsData;
    } catch (error) {
      console.error('Error fetching icons:', error);
      return [];
    }
  };

  return (
    <>
      <AdminHeader />
      <Box sx={{ flexGrow: 1, mt: 8, display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={1} padding={2}>
          {sideBarIcons.filter((menuList) => menuList.parent === value).map((menuList) => (
            <Grid item xs={12} sm={6} md={4} key={menuList.id} style={{cursor:"pointer"}}>
              <Item onClick={(e)=>handleMenu(e, menuList)}>
                {menuList.icon ? (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mb: 1, // Add margin-bottom to space out the icon and text
                      justifyContent: 'center',
                      color: primaryButtonColor,
                      fontSize: 40, // Increase the icon size
                    }}
                  >
                    {React.createElement(menuList.icon, { fontSize: 'inherit' })} {/* Apply fontSize inheritance */}
                  </ListItemIcon>
                ) : (
                  null
                )}
                <Typography      variant="h6"
                color={primaryButtonColor}
                    noWrap
                    component="div">
                  {menuList.iconName}
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

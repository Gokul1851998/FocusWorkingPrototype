import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Box, styled } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import TagSettings from "../../containers/Settings/MainSettings/TagSettings/TagSettings";
import AccountSettings from "../../containers/Settings/MainSettings/AccountSettings/AccountSettings";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MainSettingsPage() {
  const location = useLocation();
  const id = location.state.id;
  console.log(id);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1,marginBottom:2 }}>
          <DrawerHeader />
           {id === 33? (
            <TagSettings />
           ):id === 34? (
            <AccountSettings />
           ): null}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

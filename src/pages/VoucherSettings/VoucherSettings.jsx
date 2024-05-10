import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Box, styled } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import TagSettings from "../../containers/Home/Settings/MainSettings/TagSettings/TagSettings";
import AccountSettings from "../../containers/Home/Settings/MainSettings/AccountSettings/AccountSettings";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function VoucherSettingsPage() {
  const location = useLocation();
  const id = location.state.id;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1,marginBottom:2 }}>
          <DrawerHeader />
         
        </Box>
        <Footer />
      </Box>
    </>
  );
}

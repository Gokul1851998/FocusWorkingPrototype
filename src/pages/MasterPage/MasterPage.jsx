import React from "react";
import SideBar from "../../components/SideBar/SideBar";

import { Box, styled } from "@mui/material";
import AccountMaster from "../../containers/Home/Master/Account/AccountMaster/AccountMaster";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import CustomerVendor from "../../containers/Home/Master/Account/CustomerVendor/CustomerVendor";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MasterPage() {
   const location = useLocation()
   const id = location.state.id
  return (
    <>
      <Box sx={{ display: "flex", }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          {id === 19? (
        <AccountMaster />
          ): (
           <CustomerVendor />
          )}
  
        </Box>
        <Footer />
      </Box>
    </>
  );
}

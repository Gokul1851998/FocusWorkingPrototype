import React from "react";
import SideBar from "../../components/SideBar/SideBar";

import { Box, styled } from "@mui/material";
import AccountMaster from "../../containers/Home/Master/Account/AccountMaster/AccountMaster";
import Footer from "../../components/Footer/Footer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MasterPage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          <AccountMaster />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

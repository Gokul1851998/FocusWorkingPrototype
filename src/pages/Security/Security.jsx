import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import AccountMaster from "../../containers/Home/Master/Account/AccountMaster/AccountMaster";
import { Box, styled } from "@mui/material";
import CreateProfile from "../../containers/Home/Security/CreateProfile";
import { useLocation } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Security() {

  const location = useLocation();

  const item = location.state;
  console.log(item,"item");
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          {item && (
        item.iScreenId === 16 ? <DailyProjectWiseReport /> :null
      )}
          <CreateProfile/>
        </Box>
      </Box>
    </>
  );
}

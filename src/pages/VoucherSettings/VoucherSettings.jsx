import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Box, styled } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import TagSettings from "../../containers/Settings/MainSettings/TagSettings/TagSettings";
import AccountSettings from "../../containers/Settings/MainSettings/AccountSettings/AccountSettings";
import AdminBar from "../../components/AdminBar/AdminBar";
import Layout from "../Layout/Layout";
import ReceiptPage from "../../containers/Settings/VoucherSettings/ReceiptPage";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function VoucherSettingsPage() {
  const user = localStorage.getItem("userName")
  const location = useLocation();
  const item = location.state;
  return (
    <>
      <Box sx={{ display: "flex" }}>
      <Layout />
        <Box component="main" sx={{ flexGrow: 1,marginBottom:2, marginTop:user === "test2" ?  "35px" : 0 }}>
          <DrawerHeader />
          {item && (
        item.id === 75 ? <ReceiptPage   /> :
        
        null
      )}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

import React from "react";
import SideBar from "../../components/SideBar/SideBar";

import { Box, styled } from "@mui/material";
import AccountMaster from "../../containers/Home/Master/Account/AccountMaster/AccountMaster";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import CustomerVendor from "../../containers/Home/Master/Account/CustomerVendor/CustomerVendor";
import CurrencyMaster from "../../containers/Home/Master/Currency/CurrencyMaster/CurrencyMaster";
import ExchangeRate from "../../containers/Home/Master/Currency/ExchangeRate/ExchangeRate";
import ExchangeRateHistory from "../../containers/Home/Master/Currency/ExchangeCurrencyHistory/ExchangeRateHistoy";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MasterPage() {
  const location = useLocation();
  const id = location.state.id;
  console.log(id);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1,marginBottom:2 }}>
          <DrawerHeader />
          {id === 19 ? (
            <AccountMaster />
          ) : id === 20 ? (
            <CustomerVendor />
          ) : id === 21 ? (
            <CurrencyMaster />
          ) : id === 22 ?(
            <ExchangeRate />
          ) : id === 23 ?(
            <ExchangeRateHistory />
          ) : null}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Box, styled } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import AdminBar from "../../components/AdminBar/AdminBar";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function HomePage() {
  const user = localStorage.getItem("userName")
 
 console.log(user);
 
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {user === "test1" ? (
     <SideBar />
        ) : (
          <AdminBar />
        )}
   
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

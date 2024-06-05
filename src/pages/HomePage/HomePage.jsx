import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Box, styled } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import AdminBar from "../../components/AdminBar/AdminBar";
import AdminGridMenu from "../../components/AdminGridMenu/AdminGridMenu";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function HomePage() {
  const user = localStorage.getItem("userName");

  return (
    <>
      {user === "test3" ? (
     
          <div style={{ minHeight: "50vh" }}>
            <AdminGridMenu />
          </div>
    
      ) : (
        <Box sx={{ display: "flex" }}>
          {user === "test1" ? (
            <SideBar />
          ) : user === "test2" ? (
            <div style={{ minHeight: "50vh" }}>
              <AdminBar />
            </div>
          ) : null}

          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, marginTop: user === "test2" ? "35px" : 0 }}
          >
            <DrawerHeader />
          </Box>
          <Footer />
        </Box>
      )}
    </>
  );
}

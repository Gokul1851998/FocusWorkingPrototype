import React, { useEffect, useRef, useState } from "react";
import { Box, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import CreateUser from "../../containers/Home/Security/CreateUser/CreateUser";
import Footer from "../../components/Footer/Footer";
import Layout from "../Layout/Layout";
import ViewMain from "../../containers/View/ViewMain";
import ViewDetailed from "../../containers/View/ViewDetailed";
import AccountMaster from "../../containers/Home/Master/Account/AccountMaster/AccountMaster";



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function NavigateView() {
  const user = localStorage.getItem("userName")
  const location = useLocation();
  const item = location.state;
  const sidebarRef = useRef(null);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [mainMaxWidth, setMainMaxWidth] = useState(2000);
  const [detailPageId, setdetailPageId] = useState(0)
  const [page, setpage] = useState("detailed")
  const [ direction, setDirection] = useState(true)

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        setSidebarWidth(newWidth);
        setMainMaxWidth(window.innerWidth - newWidth);
      }
    });

    if (sidebarRef.current) {
      resizeObserver.observe(sidebarRef.current);
    }

    // Listen to window resize to adjust main max width accordingly
    const handleResize = () => {
      setMainMaxWidth(window.innerWidth - sidebarWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (sidebarRef.current) {
        resizeObserver.unobserve(sidebarRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarWidth]);
  
  return (
    <>
      <Box sx={{ display: "flex" }}>
      <div ref={sidebarRef}>
      <Layout />
        </div>
        <Box component="main" sx={{ flexGrow: 1, maxWidth: `${mainMaxWidth}px`, marginTop:user === "test2" ?  "35px" : 0 }}>
          <DrawerHeader />
          {
        
        page === "summary"  ? <AccountMaster/> :
        page === "detailed" ? <ViewDetailed setPage={setpage} detailPageId={detailPageId} direction={direction} /> :   
        null
      }
          
        </Box>
        <Footer />
      </Box>
    </>
  );
}

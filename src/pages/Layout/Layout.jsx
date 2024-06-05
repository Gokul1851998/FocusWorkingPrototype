import React from 'react'
import SideBar from '../../components/SideBar/SideBar';
import AdminBar from '../../components/AdminBar/AdminBar';

export default function Layout() {
    const user = localStorage.getItem("userName");
  return (
    <>
    {user === "test1" ? (
        <SideBar />
      ) : user === "test2" ? (
        <div style={{minHeight:"50vh"}}>
        <AdminBar />
        </div>
      ): null}
      </>
  )
}

import React from 'react'

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

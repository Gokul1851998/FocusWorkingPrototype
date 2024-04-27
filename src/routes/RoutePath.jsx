import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SideBar from '../containers/SideBar/SideBar'

export default function RoutePath() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<SideBar />} />
        </Routes>
    </div>
  )
}

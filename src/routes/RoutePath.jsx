import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import MasterPage from '../pages/MasterPage/MasterPage'
import Security from '../pages/Security/Security'

export default function RoutePath() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Master" element={<MasterPage />} />
        <Route path="/security" element={<Security />} />
        </Routes>
    </div>
  )
}

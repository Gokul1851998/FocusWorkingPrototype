import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import MasterPage from '../pages/MasterPage/MasterPage'
import Security from '../pages/Security/Security'
import MainSettingsPage from '../pages/MainSettingsPage/MainSettingsPage'
import VoucherSettingsPage from '../pages/VoucherSettings/VoucherSettings'

export default function RoutePath() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Master" element={<MasterPage />} />
        <Route path="/security" element={<Security />} />
        <Route path="/MainSettings" element={<MainSettingsPage />} />
        <Route path="/VoucherSettings" element={<VoucherSettingsPage />} />
        </Routes>
    </div>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import MasterPage from '../pages/MasterPage/MasterPage'
import Security from '../pages/Security/Security'
import MainSettingsPage from '../pages/MainSettingsPage/MainSettingsPage'
import VoucherSettingsPage from '../pages/VoucherSettings/VoucherSettings'
import MasterSettings from '../pages/MasterSettings/MasterSettings'
import Company from '../pages/Company/Company'
import AdminDashboard from '../containers/AdminDashboard/AdminDashboard'
import GrideMenuPage from '../pages/GrideMenuPage/GrideMenuPage'
import EntityMaster from '../pages/EntityMaster/EntityMaster'
import TagCreationPage from '../pages/TagCreation/TagCreationPage'
import ViewPage from '../pages/ViewPage/ViewPage'
import CompanyLogin from '../containers/Login/CompanyLogin'
import NavigateTagPage from '../pages/TagCreation/NavigateTagPage'
import NavigateView from '../pages/ViewPage/NavigateView'
import SalesPage from '../pages/Sales/SalesPage'

export default function RoutePath() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Master" element={<MasterPage />} />
        <Route path="/GridMenu" element={<GrideMenuPage />} />
        <Route path="/security" element={<Security />} />
        <Route path="/GeneralSettings" element={<MainSettingsPage />} />
        <Route path="/VoucherSettings" element={<VoucherSettingsPage />} />
        <Route path="/MasterSettings" element={<MasterSettings />} />
        <Route path="/View" element={<ViewPage />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/companySettings" element={<AdminDashboard />} />
        <Route path="/EntitySettings" element={<MainSettingsPage />} />
        <Route path="/EntityMaster" element={<EntityMaster />} />
        <Route path="/TagCreation" element={<TagCreationPage />} />
        <Route path="/OpenCompany" element={<CompanyLogin />} />
        <Route path="/NavigateTag" element={<NavigateTagPage/>} />
        <Route path="/NavigateView" element={<NavigateView/>} />
        <Route path="/Sales" element={<SalesPage/>} />
        </Routes>
    </div>
  )
}

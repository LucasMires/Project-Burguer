import { Navigate, Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../components/NotFoundPage'
import { ProtectedRoutes } from '../components/ProtectedRoutes'
import { DashboardPage } from '../pages/Dashboard'
import { LoginPage } from '../pages/Login/LoginMain' 
import { RegisterPage } from '../pages/Register/RegisterMain'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<DashboardPage />}/>
            </Route>

            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
}
import { useContext, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"

export const ProtectedRoutes = () => {
    const Token = localStorage.getItem("@TOKEN")
    const { user, checkUser } = useContext(UserContext)

    if(!checkUser) {
        return null
    }

    return user && Token ? <Outlet /> : <Navigate to="/login"/>
}
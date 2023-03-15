import axios, { AxiosError } from "axios"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../../services"
import { IUserContextValues, IUserProviderProps, IUserStateValue, IResquestLoginData, IRequestError, IRequestRegistrationData } from "./types"

export const UserContext = createContext({} as IUserContextValues)

export const UserProvider = ({ children }: IUserProviderProps) => {

  const [ user, setUser ] = useState({} as IUserStateValue)
  const [ checkUser, setCheckUser ] = useState(false)
  const [ loading, setloading ] = useState(false)

  const navigate = useNavigate()

  const RequestLogin = async (data: IResquestLoginData) => {
    setloading(true)
    try {
      const response = await api.post("/login", data)
      localStorage.clear
      localStorage.setItem("@TOKEN", await response.data.accessToken)
      localStorage.setItem("@USER", JSON.stringify(await response.data.user.id))

      setUser(response.data.user)
      setloading(false)

      toast.success(`Olá ${response.data.user.name}, seja bem-vindo(a)!`)

      setTimeout(() => {
        navigate("/dashboard")
      }, 2000)

    } catch (error) {
      setloading(false)
      toast.error("Email ou senha inválidos")
      
    } finally {
      setloading(false)
    }
  }

  const RequestRegistration = async (data: IRequestRegistrationData) => {
    setloading(true)
    try {
      setloading(false)
      const response = await api.post("/users", data)

      toast.success(`Sucesso, redirecionando ao Login!`)

      setTimeout(() => {
        navigate("/login")
      }, 2000)

    } catch (error) {
      setloading(false)
      toast.error("Email já em uso")
      
    } finally {
      setloading(false)
    }
  }

    const userVerify = async () => {
      const Token = localStorage.getItem("@TOKEN")
      const UserData = localStorage.getItem("@USER")

      if (!Token || !UserData) {
        setCheckUser(true)
        return 
      }

      try {
        const response = await api.get(`/users/${UserData}`, {
          headers: {
            authorization: `Bearer ${Token}`
          }
        })
          delete response.data.password
          setUser(response.data)
          setCheckUser(true)
        
      } catch (error) {
        navigate("/login")
      }
    }
    
    useEffect(() => {
      userVerify()
    }, [])

  return (
    <UserContext.Provider
      value={{
        RequestLogin, RequestRegistration, user, userVerify, checkUser, loading
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

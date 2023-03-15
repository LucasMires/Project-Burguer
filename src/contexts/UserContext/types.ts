export interface IUserProviderProps {
    children: React.ReactNode;
}

export interface IResquestLoginData {
  email: string;
  password: string;
}

export interface IRequestRegistrationData {
  name: string;
  email: string;
  password: string;
}

export interface IUserStateValue {
  email: string;
  name: string;
  id: number
}

export interface IRequestError {
    data: string
}

export interface IUserContextValues {
    RequestLogin: (data: IResquestLoginData) => Promise<void>
    RequestRegistration: (data: IRequestRegistrationData) => Promise<void>
    userVerify: () => Promise<void>
    user: IUserStateValue
    checkUser: boolean
    loading: boolean
}
import { createContext } from 'react'

interface AuthContextProps {
  isLoggedIn: boolean
  login: (email: string, password: string, cb: (obj: any) => any) => Promise<any>
  logOut: () => void
  registerUser: (
    userName: string,
    email: string,
    password: string,
    cb: (obj: any) => any
  ) => Promise<any>
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export default AuthContext

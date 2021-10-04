import React, { useState } from 'react'

import { sessions } from '../../utils'
import AuthContext from '.'

const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [isLoggedIn, setLoggedIn] = useState(sessions.isAuthenticated())

  const login = async (email: string, password: string, cb: (obj: any) => any) => {
    const result = await cb({
      variables: {
        email,
        password,
      },
    })

    if (result.data.loginUser.data) {
      sessions.saveSession(result.data.loginUser.data)
      setLoggedIn(true)
    }

    return result.data
  }

  const registerUser = async (userName: string, email: string, password: string, cb: (obj: any) => any) => {
    const result = await cb({
      variables: {
        userName,
        email,
        password,
      },
    })

    if (result.data.registerUser.data) {
      sessions.saveSession(result.data.registerUser.data)
      setLoggedIn(true)
    }

    return result.data
  }

  const logOut = () => {
    sessions.clearSession()
    setLoggedIn(false)
  }

  const obj = {
    isLoggedIn,
    login,
    logOut,
    registerUser,
  }

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
}

export default AuthProvider

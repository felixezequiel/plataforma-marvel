import { createContext, useEffect, useState } from "react";

export const Auth = createContext()

export const AuthProvider = ({ children }) => {
  const [authorization, setAuthorization] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) return setAuthorization(false)
    setAuthorization(true)
  }, [setAuthorization])

  return (
    <Auth.Provider value={ [authorization, setAuthorization] }>
      { children }
    </Auth.Provider>
  )
}
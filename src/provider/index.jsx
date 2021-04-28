import { createContext, useState } from "react"

export const GlobalState = createContext()

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({})

  return (
    <GlobalState.Provider value={[state, setState]}>
      { children}
    </GlobalState.Provider>
  )
}
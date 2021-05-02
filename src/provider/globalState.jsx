import { createContext, useState } from "react"
import { data } from "../data/data"

export const GlobalState = createContext()

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({ value: data.character })

  return (
    <GlobalState.Provider value={[state, setState]}>
      { children}
    </GlobalState.Provider>
  )
}
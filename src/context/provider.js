import React, { useReducer } from "react"

import { Context, initialState, reducer } from "../store";

const AppContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ store, dispatch }}>
      { children }
    </Context.Provider>
  )
}

export default AppContextProvider

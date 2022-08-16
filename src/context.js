import React, { useState, useEffect, useContext } from "react"

// API URL
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// Create Context
const AppContext = React.createContext()

// Create The Provider Component
const AppProvider = ({ children }) => {
  return <AppContext.Provider value='Context'>
    {children}
  </AppContext.Provider>
}

// Create A Custom Context Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

// Export AppContext and AppProvider
export { AppContext, AppProvider }
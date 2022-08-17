import React, { useState, useEffect, useContext } from "react"

// API URL
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// Create Context
const AppContext = React.createContext()

// Create The Provider Component
const AppProvider = ({ children }) => {

  // Setting State used in the App
  const [cockTailData, setCockTailData] = useState([])
  const [searchTerm, setSearchTerm] = useState('a')
  const [isLoading, setIsLoading] = useState(true)

  // Fetching The Data From URL
  const fetchData = async () => {
    setIsLoading(false)
    try {
      const response = await fetch(`${URL}${searchTerm}`)
      const responseData = await response.json()
      const { drinks } = responseData

      if (drinks) {
        const cockTailItem = drinks.map((drinkItem) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drinkItem

          return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass }
        })
        
        setCockTailData(cockTailItem)

      } else {
        setCockTailData([])
      }
      setIsLoading(false)

    } catch (error) {
      console.log(error.message)
    }
  }

  // Use useEffect Hook to Fetch the Data After Each Rendering
  useEffect(() => {
    fetchData()
  }, [searchTerm])

  return <AppContext.Provider value={{
    isLoading,
    cockTailData,
    setSearchTerm,
  }}>

    {children}

  </AppContext.Provider>
}

// Create A Custom Context Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

// Export AppContext and AppProvider
export { AppContext, AppProvider }
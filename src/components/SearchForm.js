import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  // Getting searchTerm-state from the contextProvider
  const { setSearchTerm } = useGlobalContext()
  
  return (
    <div>SearchForm</div>
  )
}

export default SearchForm
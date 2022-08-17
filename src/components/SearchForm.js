import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  // Getting searchTerm-state from the contextProvider
  const { setSearchTerm } = useGlobalContext()
  // Seeting useRef Hook for the Form Input-Field
  const { searchValue } = useRef('')

  // function to monitor input value
  const searchCockTailHandler = () => {
    setSearchTerm(searchValue)
  }
  
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="">Search Your Favorite Cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={searchCockTailHandler}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
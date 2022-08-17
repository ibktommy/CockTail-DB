import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  // Getting searchTerm-state from the contextProvider
  const { setSearchTerm } = useGlobalContext()
  // Seeting useRef Hook for the Form Input-Field
  const searchValue = useRef('')

  // UseEffect function to focus on the input-field afer each re-render
  useEffect(() => {
    searchValue.current.focus()
  }, []) 

  // function to monitor input value
  const searchCockTailHandler = () => {
    setSearchTerm(searchValue.current.value)
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
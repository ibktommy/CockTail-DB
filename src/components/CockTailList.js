import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import CockTail from '../components/CockTail'

const CockTailList = () => {
  // Getting cockTailData state from contextProvider
  const { cockTailData, isLoading } = useGlobalContext()
  console.log(cockTailData)

  if (isLoading) {
    return <Loading />
  }

  if (cockTailData.length < 1) {
    return (
      <h2 className='section-title'>
        No CockTails found for your search term!
      </h2>
    )
  }

  return (
    <section className="section">
      <h2 className="section-title">
        Cocktails
      </h2>

      <div className="cocktails-center">
        {
          cockTailData.map((cocktail) => {
            return <CockTail key={cocktail.id} {...cocktail}/>
          })
        }
      </div>
    </section>
  )
}

export default CockTailList
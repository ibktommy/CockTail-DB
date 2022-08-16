import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const CockTailList = () => {
  // Getting cockTailData state from contextProvider
  const { cockTailData, isLoading } = useGlobalContext()

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
    <div>CockTailList</div>
  )
}

export default CockTailList
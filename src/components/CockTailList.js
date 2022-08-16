import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const CockTailList = () => {
  // Getting cockTailData state from contextProvider
  const { CockTailData, isLoading } = useGlobalContext()

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>CockTailList</div>
  )
}

export default CockTailList
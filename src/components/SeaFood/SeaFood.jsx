import React from 'react'
import Banner from '../Banner/Banner'
import CateggoryPage from '../CategoryPage/CateggoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'
const SeaFood = () => {
  return (
    <div>
      <CateggoryPage title="Meat & SeaFood" bgImage={BgSeaFood} categories={['Meat', 'SeaFood']}/>
    </div>
  )
}

export default SeaFood

import React from 'react'
import CateggoryPage from '../CategoryPage/CateggoryPage'
import BgFruits from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CateggoryPage title="Fruits & Veggies" bgImage={BgFruits}/>
    </div>
  )
}

export default Fruits

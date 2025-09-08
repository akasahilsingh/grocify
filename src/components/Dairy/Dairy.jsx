import React from 'react'
import CateggoryPage from '../CategoryPage/CateggoryPage'
import BgDairy from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
      <CateggoryPage title="Dairy & Eggs" bgImage={BgDairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy

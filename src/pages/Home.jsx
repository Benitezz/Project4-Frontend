import React from 'react'
import Restaraunts from '../components/Restaraunts'

const Home = ({restaraunts, updateRestaurantState}) => {
  return (
    <div>

        <Restaraunts restaraunts={restaraunts} updateRestaurantState={updateRestaurantState} />

    </div>
  )
}

export default Home
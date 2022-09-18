import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Restaraunt = ({restaurants, deleteRestaurant}) => {
  return (
    <div>


<div class="row hoverable">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title center-align">{restaurants.name}</span>
          <p class="center align">{restaurants.location}</p>
          <p class="center align">Cuisine: {restaurants.cuisine}</p>
        </div>
        <div class="card-action">
          <a href="#"><Link id='link' to={`/view-restaurant/${restaurants._id}`}>Restaurant Details</Link></a>
          <a href="#" onClick={()=>deleteRestaurant(restaurants._id)}>Delete Restaurant</a>
        </div>
      </div>
    </div>
  </div>



    </div>
  )
}

export default Restaraunt
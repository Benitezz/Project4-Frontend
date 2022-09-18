import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Restaraunt from './Restaraunt'


const Restaraunts = ({restaraunts, updateRestaurantState}) => {

const deleteRestaurant = (id)=>{
  axios.delete(`http://localhost:8000/restaraunt/${id}`)
  .then(res=>{
    console.log(res)
    updateRestaurantState(id)
  })
}

  return (

    <>
        {
            (restaraunts.map(restaraunts => {
                return  <div class="container"> <Restaraunt restaurants={restaraunts} deleteRestaurant={deleteRestaurant} /> </div>
            }))
        }

    </>
  )
}

export default Restaraunts
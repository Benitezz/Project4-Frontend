import React, {useState, useEffect} from "react"
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'

const StyleImg = styled.img`
    img{
        width: 40px;
    }
`

const ViewRestaurant =({restaurants}) => {

    let{id} = useParams()
    const [restaurant, setRestaurant] = useState()

    useEffect(()=>{
        fetch(`http://localhost:8000/restaraunt/${id}`)
        .then(res => res.json())
        .then(data => setRestaurant(data))
    }, [])

    return(
        // <div>
        //     {
        //     restaurant && (
        //     <>
        //     <h1>{restaurant.name}</h1>
        //     <div>
            
        //     </div>
        //     <h2>{restaurant.location}</h2>
        //     <h2>{restaurant.cuisine}</h2>

        //     </>
        //     )


        //     }
        // </div>
        restaurant && (
        <div class="col s12 m7">
    <h2 class="header center-align">{restaurant.name}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img class="responsive-img" src={restaurant.image} alt={restaurant.name} style={{width: '60%'}}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <h3>{restaurant.address}</h3>
          <h3>{restaurant.phone}</h3>
          <h3 >Cuisine: {restaurant.cuisine}</h3>
          {/* <p>{restaurant.location}</p>
          <p>{restaurant.location}</p> */}
        </div>
        <div class="card-action">
          <a href="#"></a>
        </div>
      </div>
    </div>
  </div>
        )

    )
}

export default ViewRestaurant
import React from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
  return (

    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Yummr</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a><Link to='/'> Home </Link></a></li>
        <li><a><Link to='/top10'> Top 10 </Link></a></li>
        <li><a><Link to='/favorites'> Favorites </Link></a></li>
        <li><a><Link to='/add-restaurant'> Add Restaurant</Link></a></li>
      </ul>
    </div>
  </nav>


    // <NavbarContainer>
    //     <ul>

    //     <li>  <Link className='link' to='/'> Home </Link> </li>
    //     <li>  <Link className='link' to='/top10'> Top 10 </Link> </li>
    //     <li>  <Link className='link' to='/favorites'> Favorites </Link> </li>
    //     <li>  <Link className='link' to='/add-restaurant'> Add Restaurant</Link> </li>

    //     </ul>

    // </NavbarContainer>
  )
}

export default Navbar
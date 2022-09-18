import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'


const Layout = ({children}) => {
  return (
    <>
    < Navbar />
        {children}
    </>
  )
}

export default Layout
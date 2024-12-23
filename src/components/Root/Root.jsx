import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <Navbar/> 
      <Header/>
      <Outlet/>
    </>
  )
}

export default Root
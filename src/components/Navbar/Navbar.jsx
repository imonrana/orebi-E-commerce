import React from 'react'
import {  NavLink } from 'react-router-dom'
import Container from '../Layouts/Container/Container'
import Flex from '../Layouts/Flex/Flex'
import logo from '../../assets/Logo.png'


const Navbar = () => {
  return (
    <nav className='bg-white shadow-lg'>
        <Container>
        <Flex className='py-8 items-center'>
            <div className='w-[40%]'>
                <img src={logo} alt="logo" />
            </div>
            <div className='w-[60%]'>
                <ul className='flex items-center  gap-x-10 font-dmSans font-normal text-sm text-[#767676]'>
                    <li className='hover:font-bold hover:text-primary transition-all duration-500 ease-in-out'>
                        <NavLink to="/" className={({isActive })=> isActive  ? "font-bold text-primary" : ""}>Home</NavLink>
                        </li>
                    <li className='hover:font-bold hover:text-primary transition-all duration-500 ease-in-out'><NavLink to="/product" className={({isActive })=> isActive  ? "font-bold text-primary" : ""}>Shop</NavLink></li>
                    <li className='hover:font-bold hover:text-primary transition-all duration-500 ease-in-out'>About</li>
                    <li className='hover:font-bold hover:text-primary transition-all duration-500 ease-in-out'>Contacts</li>
                    <li className='hover:font-bold hover:text-primary transition-all duration-500 ease-in-out'>Journal</li>
                </ul>
            </div>
        </Flex>
        </Container>
    </nav>

  )
}

export default Navbar
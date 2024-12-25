import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../Layouts/Container/Container'
import Flex from '../Layouts/Flex/Flex';
// img import
import footerLogo from "../../assets/footer_logo.png"

// icon import
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3] py-14'>
        <Container>
            {/* footer upper part start */}
            <Flex className="gap-x-[256px]">
        {/* footer description start*/}
        <Flex className="gap-x-[145px]">
            {/* menu item */}
            <div> 
                <h4 className='font-dmSans font-bold text-base text-primary'>MENU</h4>
                <ul className='font-dmSans font-normal text-sm text-[#6D6D6D] space-y-2 mt-4'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Shop</Link></li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Journal</li>
                </ul>
            </div>

            {/* shop categori */}
            <div> 
                <h4 className='font-dmSans font-bold text-base text-primary'>SHOP</h4>
                <ul className='font-dmSans font-normal text-sm text-[#6D6D6D] space-y-2 mt-4'>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                </ul>
            </div>
            {/* Help items */}
            <div> 
                <h4 className='font-dmSans font-bold text-base text-primary'>HELP</h4>
                <ul className='font-dmSans font-normal text-sm text-[#6D6D6D] space-y-2 mt-4'>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Special E-shop</li>
                    <li>Shipping</li>
                    <li>Secure Payments</li>
                </ul>
            </div>
            {/* footer info */}
            <div>
                <h2 className='font-dmSans font-bold text-base text-primary'>(052) 611-5711 <br></br>
                company@domain.com</h2>
                <p className='font-dmSans font-normal text-sm text-[#6D6D6D] space-y-2 mt-4'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>

            </Flex>
        {/* footer description end */}
        {/* footer logo */}
        <div>
            <img src={footerLogo} alt="footerLogo" />
        </div>
        
        </Flex>
          {/* footer upper part end */}

          {/* footer lower part start */}
          <Flex className="justify-between mt-16">
            {/* footer icon */}
            <div>
                <ul className='flex gap-x-6 text-xl text-primary font-bold'>
                    <li>
                        <a href="https://facebook.com/imonrana" target='_blank'><FaFacebookF/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/md-imon-rana-4047a4240/" target='_blank'><FaLinkedinIn/></a>
                    </li>
                    <li>
                        <a href="https://instagram.com/imon.raz" target='_blank'><FaInstagram/></a>
                    </li>
                </ul>
            </div>
            {/* footer icon end */}

            {/* copyright part start */}
            <div>
            <p className='font-dmSans font-normal text-sm text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </Flex>
          {/* footer lower part end */}
        </Container>
    </footer>
  )
}

export default Footer
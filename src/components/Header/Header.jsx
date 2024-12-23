import React, { useEffect, useRef, useState } from "react";
import Flex from "../Layouts/Flex/Flex";
import Container from "../Layouts/Container/Container";
import Search from "../Layouts/Search/Search";

// icons
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { ImCart } from "react-icons/im";
import DropDown from "../Layouts/DropDown/DropDown";
import { IoMdClose } from "react-icons/io";

// images
import demoCart from "../../assets/cartDemoImg.png"
import Button from "../Layouts/Button/Button";

const Header = () => {
  const categoryRef = useRef("");
  const profileRef = useRef("");
  const cartRef = useRef("")
  const [showDrop, setShowDrop] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showCart, setShowCart] = useState(false);


  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setShowDrop(true);
      } else {
        setShowDrop(false);
      }

      if (profileRef.current.contains(e.target)) {
        setShowProfile(true);
      } else {
        setShowProfile(false);
      }
      
      if (cartRef.current.contains(e.target)) {
        setShowCart(true);
      } else {
        setShowCart(false);
      }
    });
  }, []);


  return (
    <header className="bg-[#F5F5F3] py-[25px]">
      <Container>
        <Flex className="justify-between">
          <DropDown dropRef={categoryRef} className="relative">
            <div className="flex items-center gap-x-2 font-dmSans text-primary text-sm font-normal">
              <HiOutlineBars3CenterLeft className="text-lg border-black" />
              <p>Shop by Category</p>
            </div>
            {showDrop && (
              <ul className=" z-[1] absolute top-10 left-0 w-[263px] bg-primary   py-4 space-y-4 font-dmSans font-normal text-sm text-[rgba(255,255,255,0.70)]">
                <li className="border-b-[#2D2D2D] border-b-2 pl-5 pb-[15px]  hover:pl-[31px] hover:font-bold hover:text-[#FFFFFF] transition duration-300">
                  Accesories
                </li>
                <li className="border-b-[#2D2D2D] border-b-2 pl-5 pb-[15px] hover:pl-[31px] hover:font-bold hover:text-[#FFFFFF] transition duration-300">
                  Furniture
                </li>
                <li className="border-b-[#2D2D2D] border-b-2 pl-5 pb-[15px] hover:pl-[31px] hover:font-bold hover:text-[#FFFFFF] transition duration-300">
                  Electronics
                </li>
                <li className="border-b-[#2D2D2D] border-b-2 pl-5 pb-[15px] hover:pl-[31px] hover:font-bold hover:text-[#FFFFFF] transition duration-300">
                  Clothes
                </li>
                <li className="border-b-[#2D2D2D] border-b-2 pl-5 pb-[15px] hover:pl-[31px] hover:font-bold hover:text-[#FFFFFF] transition duration-300">
                  Bags
                </li>
                <li className="border-b-[#2D2D2D] border-b-2 pl-5 pb-[15px] hover:pl-[31px] hover:font-bold hover:text-[#FFFFFF] transition duration-300">
                  appliances
                </li>
                <li className=" pl-5 pb-[15px] hover:pl-[31px] hover:font-bold hover:text-[#FFFFFF] transition duration-300">
                  Home appliances
                </li>
              </ul>
            )}
          </DropDown>
          <div>
            <Search type="search" placeholder="Search Products"></Search>
          </div>
          <div className="flex items-center gap-x-10 text-primary ">
            <DropDown dropRef={profileRef} className="relative">
            <div className="flex items-center gap-x-1">
              <MdPerson className="text-2xl" />
              <GoTriangleDown className="text-xl" />
            </div>
            {
                showProfile && 
                <div className="z-[1] flex flex-col shadow-md absolute right-0 top-8 w-[200px]">
                <button className="pt-5 pb-4  bg-[#2B2B2B] text-[#FFFFFF] font-dmSans text-sm font-bold" type="button">My Account</button>
                <button className="pt-5 pb-4  bg-[#FFFFFF] text-[#262626] font-dmSans text-sm font-normol" type="button">Log Out</button>
            </div>
            }
            </DropDown>
            
              <DropDown dropRef={cartRef} >
              <div className="relative">
              <ImCart className="text-2xl" />
            {
                showCart && 
                <div className=" z-[1] absolute top-8 pb-5 right-0 w-[360px] shadow-md bg-[#F5F5F3]" >
                    <figure className="bg-[#F5F5F3] p-5 flex gap-x-5 items-center relative">
                        <img src={demoCart} alt="cartImg" />
                        <figcaption className="font-dmSans font-bold text-sm text-primary ">
                        Black Smart Watch
                        <p>$44.00</p>
                        <IoMdClose onClick={()=> setShowCart(false)} className=" cursor-pointer text-sm  absolute top-[40%] left-[90%] " />
                        </figcaption>
                    </figure>
                    <div className="mt-[14px] ml-[21px] ">
                        <p className="font-dmSans font-normal text-base text-[#767676] pb-[13px]">Subtotal: <span className="font-bold text-primary">$44.00</span></p>
                        <Button className='mr-2 '>View Cart</Button>
                        <Button>Checkout</Button>
                    </div>
                </div>
            }
            </div>
              </DropDown>
            
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;

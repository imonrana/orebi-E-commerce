import React from 'react'
import { useLocation } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";

const PageHeading = (props) => {
    const {title} = props
    const location = useLocation();
  return (
    <div>
        <h2 className='font-dmSans font-bold text-5xl text-primary'>{title}</h2>
        <p className='flex items-center gap-x-2 font-dmSans font-normal text-xs text-[#767676]'>Home <FaAngleRight /> {location.pathname.split("/")}</p>
        
    </div>
  )
}

export default PageHeading
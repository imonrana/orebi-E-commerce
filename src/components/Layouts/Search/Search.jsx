import React from 'react'
import { FaSearch } from "react-icons/fa";
const Search = ({type, placeholder}) => {
  return (
   <form action="" className='relative'>
    <input className='w-[601px] px-[21px] py-4 placeholder:text-[#C4C4C4] font-dmSans font-normal text-sm outline-none' 
    type={type} placeholder={placeholder}  />
    <button className=' p-1 absolute top-1/2 right-[21px] -translate-y-1/2' type="button"><FaSearch/></button>
   </form>
  )
}

export default Search
import React from 'react'
import Badge from '../Badge/Badge'

import { FaHeart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { ImCart } from "react-icons/im";


const ProductCard = ({ badge, src, alt, color }) => {
  return (
    <div>
        <div className='relative group overflow-hidden cursor-pointer'>
            <img src={src} alt={alt} />
            {badge &&
            <Badge title="New"/>
            }
            <div className='bg-white  py-6 absolute bottom-[-153px]  left-0 w-full group-hover:bottom-0 transition-all duration-500 ease-in-out
             '>
                <ul className='font-dmSans font-normal text-base text-[#767676] space-y-5'>
                    <li className='flex gap-x-4 items-center justify-end pr-8 hover:font-bold hover:text-[#262626] transition duration-300 ease-linear cursor-pointer'>
                    Add to Wish List
                    <span><FaHeart className='text-[#262626] text-sm
                    ' /></span>
                    </li>
                    <li className='flex gap-x-4 items-center justify-end pr-8 hover:font-bold hover:text-[#262626] transition duration-300 ease-linear cursor-pointer'>
                    Compare
                    <span><TbReload className='text-[#262626] text-sm
                    ' /></span>
                    </li>
                    <li className='flex gap-x-4 items-center justify-end pr-8 hover:font-bold hover:text-[#262626] transition duration-300 ease-linear cursor-pointer'>
                    Add to Cart
                    <span><ImCart className='text-[#262626] text-sm
                    ' /></span>
                    </li>
                </ul>
            </div>
        </div> 
        {/* card title */}
        <div className='flex gap-x-[113px] pt-6 pb-[15px] bg-white'>
            <h4 className='font-dmSans font-bold text-xl text-primary'>Basic Crew Neck Tee</h4>
            <p className='font-dmSans font-normal text-base text-[#767676]'>$44.00</p>
        </div>
        <p className='font-dmSans font-normal text-base text-[#767676] pb-11'>{color}</p>

        </div>
  )
}

export default ProductCard
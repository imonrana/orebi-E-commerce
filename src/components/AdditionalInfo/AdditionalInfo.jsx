import React from 'react'
import { RiNumber2 } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import Flex from '../Layouts/Flex/Flex';
import Container from '../Layouts/Container/Container'

const AdditionalInfo = () => {
  return (
    <div className="my-5 shadow py-5">
    <Container>
        <Flex className="justify-between">
        <Flex className="items-center  gap-x-4">
        <span><RiNumber2 className='text-lg text-[#262626]' /></span>
        <p className='font-dmSans font-normal text-base text-[#6D6D6D]'>Two years warranty</p>
        </Flex>
        <Flex className="items-center gap-x-4">
        <span><FaCarSide className='text-lg text-[#262626]' /></span>
        <p className='font-dmSans font-normal text-base text-[#6D6D6D]'>Free shipping</p>
        </Flex>
        <Flex className="items-center gap-x-4">
        <span><TbReload className='text-xl text-[#262626] rotate-[180deg] ' /></span>
        <p className='font-dmSans font-normal text-base text-[#6D6D6D]'>Return policy in 30 days</p>
        </Flex>
        </Flex>
    </Container>
    </div>
    
  )
}

export default AdditionalInfo
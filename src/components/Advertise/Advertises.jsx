import React from 'react'

import PromotionOne from "../../assets/PromotionOne.svg"
import PromotionTwo from "../../assets/PromotionTwo.svg"
import PromotionThree from "../../assets/PromotionThree.png"
import Flex from '../Layouts/Flex/Flex'
import Container from '../Layouts/Container/Container'
import Promotion from '../Layouts/Promotion/Promotion'


const Advertises = () => {
  return (
    <section className='mt-[128px] mb-[128px]'>
    <Container>
    <Flex className="flex gap-x-10" >
        <div>
            <Promotion src={PromotionOne} alt="PromotionOne"/>
        </div>
        
        <div>
        <Promotion className='mb-10' src={PromotionTwo} alt="PromotionTwo"/>
        <Promotion src={PromotionThree} alt="PromotionThree"/>
        </div>
    </Flex>
    </Container>
   </section>
  )
}

export default Advertises
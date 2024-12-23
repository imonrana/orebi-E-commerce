import React from 'react'
import PromotionOne from "../../assets/PromotionOne.svg"
import PromotionTwo from "../../assets/PromotionTwo.svg"
import PromotionThree from "../../assets/PromotionThree.png"
import Flex from '../Layouts/Flex/Flex'
import Container from '../Layouts/Container/Container'
const Promotion = () => {
  return (
   <section className='mt-[128px] mb-[128px]'>
    <Container>
    <Flex className="flex gap-x-10" >
        <div>
            <img src={PromotionOne} alt="PromotionOne" />
        </div>
        
        <div>
        <img src={PromotionTwo} alt="PromotionTwo" className='mb-10'/>
            <img src={PromotionThree} alt="PromotionThree" />
        </div>
    </Flex>
    </Container>
   </section>
  )
}

export default Promotion